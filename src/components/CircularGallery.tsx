import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';

import './CircularGallery.css';

type GL = Renderer['gl'];

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
    let timeout: number;
    return function (this: any, ...args: Parameters<T>) {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => func.apply(this, args), wait);
    };
}

function lerp(p1: number, p2: number, t: number): number {
    return p1 + (p2 - p1) * t;
}

function autoBind(instance: any): void {
    const proto = Object.getPrototypeOf(instance);
    Object.getOwnPropertyNames(proto).forEach(key => {
        if (key !== 'constructor' && typeof instance[key] === 'function') {
            instance[key] = instance[key].bind(instance);
        }
    });
}

function getFontSize(font: string): number {
    const match = font.match(/(\d+)px/);
    return match ? parseInt(match[1], 10) : 30;
}

function createTextTexture(
    gl: GL,
    text: string,
    font: string = 'bold 30px monospace',
    color: string = 'black'
): { texture: Texture; width: number; height: number } {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2d context');

    context.font = font;
    const metrics = context.measureText(text);
    const textWidth = Math.ceil(metrics.width);
    const fontSize = getFontSize(font);
    const textHeight = Math.ceil(fontSize * 1.2);

    canvas.width = textWidth + 20;
    canvas.height = textHeight + 20;

    context.font = font;
    context.fillStyle = color;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new Texture(gl, { generateMipmaps: false });
    texture.image = canvas;
    return { texture, width: canvas.width, height: canvas.height };
}

function drawQuoteTexture(quote: string, backgroundImage?: HTMLImageElement): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    const width = 600; // Fixed resolution for texture
    const height = 800;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // Background - Dark elegant card
    ctx.fillStyle = '#0f172a'; // slate-950
    ctx.fillRect(0, 0, width, height);

    // Draw translucent background image if available
    if (backgroundImage) {
        ctx.save();
        ctx.globalAlpha = 0.3; // Low opacity for translucency

        // Calculate dimensions to cover (like object-fit: cover)
        const scale = Math.max(width / backgroundImage.width, height / backgroundImage.height);
        const nw = backgroundImage.width * scale;
        const nh = backgroundImage.height * scale;
        const x = (width - nw) / 2;
        const y = (height - nh) / 2;

        ctx.drawImage(backgroundImage, x, y, nw, nh);
        ctx.restore();
    }

    // Border
    ctx.strokeStyle = '#334155'; // slate-700
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, width, height);

    // Text
    ctx.font = '500 36px "Inter", sans-serif'; // Reduced font size to ensure fit
    ctx.fillStyle = '#f1f5f9'; // slate-100
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Wrapping logic
    const words = quote.split(' ');
    let line = '';
    const lines = [];
    const maxWidth = width * 0.8;
    const lineHeight = 50;

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    // Truncate if too many lines to fit
    const maxLines = Math.floor((height * 0.8) / lineHeight);
    if (lines.length > maxLines) {
        lines.length = maxLines;
        lines[maxLines - 1] = lines[maxLines - 1].replace(/.{3}$/, '...');
    }

    // Draw lines centered vertically
    const startY = (height - (lines.length * lineHeight)) / 2;
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], width / 2, startY + (i * lineHeight));
    }

    return canvas;
}

interface TitleProps {
    gl: GL;
    plane: Mesh;
    renderer: Renderer;
    text: string;
    textColor?: string;
    font?: string;
}

class Title {
    gl: GL;
    plane: Mesh;
    renderer: Renderer;
    text: string;
    textColor: string;
    font: string;
    mesh!: Mesh;

    constructor({ gl, plane, renderer, text, textColor = '#545050', font = '30px sans-serif' }: TitleProps) {
        autoBind(this);
        this.gl = gl;
        this.plane = plane;
        this.renderer = renderer;
        this.text = text;
        this.textColor = textColor;
        this.font = font;
        this.createMesh();
    }

    createMesh() {
        const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
        const geometry = new Plane(this.gl);
        const program = new Program(this.gl, {
            vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
            uniforms: { tMap: { value: texture } },
            transparent: true
        });
        this.mesh = new Mesh(this.gl, { geometry, program });
        const aspect = width / height;
        const textHeightScaled = this.plane.scale.y * 0.15;
        const textWidthScaled = textHeightScaled * aspect;
        this.mesh.scale.set(textWidthScaled, textHeightScaled, 1);
        this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeightScaled * 0.5 - 0.05;
        this.mesh.setParent(this.plane);
    }
}

interface ScreenSize {
    width: number;
    height: number;
}

interface Viewport {
    width: number;
    height: number;
}

interface MediaProps {
    geometry: Plane;
    gl: GL;
    image: string;
    index: number;
    length: number;
    renderer: Renderer;
    scene: Transform;
    screen: ScreenSize;
    text: string;
    viewport: Viewport;
    bend: number;
    textColor: string;
    borderRadius?: number;
    font?: string;
    quote?: string;
}

class Media {
    extra: number = 0;
    geometry: Plane;
    gl: GL;
    image: string;
    index: number;
    length: number;
    renderer: Renderer;
    scene: Transform;
    screen: ScreenSize;
    text: string;
    viewport: Viewport;
    bend: number;
    textColor: string;
    borderRadius: number;
    font?: string;
    quote?: string;
    program!: Program;
    plane!: Mesh;
    title!: Title;
    scale!: number;
    padding!: number;
    width!: number;
    widthTotal!: number;
    x!: number;
    speed: number = 0;
    isBefore: boolean = false;
    isAfter: boolean = false;

    constructor({
        geometry,
        gl,
        image,
        index,
        length,
        renderer,
        scene,
        screen,
        text,
        viewport,
        bend,
        textColor,
        borderRadius = 0,
        font,
        quote
    }: MediaProps) {
        this.geometry = geometry;
        this.gl = gl;
        this.image = image;
        this.index = index;
        this.length = length;
        this.renderer = renderer;
        this.scene = scene;
        this.screen = screen;
        this.text = text;
        this.viewport = viewport;
        this.bend = bend;
        this.textColor = textColor;
        this.borderRadius = borderRadius;
        this.font = font;
        this.quote = quote;
        this.createShader();
        this.createMesh();
        this.createTitle();
        this.onResize();
    }

    createShader() {
        const texture = new Texture(this.gl, {
            generateMipmaps: true
        });
        this.program = new Program(this.gl, {
            depthTest: false,
            depthWrite: false,
            vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
            uniforms: {
                tMap: { value: texture },
                uPlaneSizes: { value: [0, 0] },
                uImageSizes: { value: [0, 0] },
                uSpeed: { value: 0 },
                uTime: { value: 100 * Math.random() },
                uBorderRadius: { value: this.borderRadius }
            },
            transparent: true
        });

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = this.image;
        img.onload = () => {
            if (this.quote) {
                const canvas = drawQuoteTexture(this.quote, img);
                texture.image = canvas;
                this.program.uniforms.uImageSizes.value = [canvas.width, canvas.height];
            } else {
                texture.image = img;
                this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
            }
        };
    }

    createMesh() {
        this.plane = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        });
        this.plane.setParent(this.scene);
    }

    createTitle() {
        this.title = new Title({
            gl: this.gl,
            plane: this.plane,
            renderer: this.renderer,
            text: this.text,
            textColor: this.textColor,
            font: this.font
        });
    }

    update(scroll: { current: number; last: number }, direction: 'right' | 'left') {
        this.plane.position.x = this.x - scroll.current - this.extra;

        const x = this.plane.position.x;
        const H = this.viewport.width / 2;

        if (this.bend === 0) {
            this.plane.position.y = 0;
            this.plane.rotation.z = 0;
        } else {
            const B_abs = Math.abs(this.bend);
            const R = (H * H + B_abs * B_abs) / (2 * B_abs);
            const effectiveX = Math.min(Math.abs(x), H);

            const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
            if (this.bend > 0) {
                this.plane.position.y = -arc;
                this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
            } else {
                this.plane.position.y = arc;
                this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
            }
        }

        this.speed = scroll.current - scroll.last;
        this.program.uniforms.uTime.value += 0.04;
        this.program.uniforms.uSpeed.value = this.speed;

        const planeOffset = this.plane.scale.x / 2;
        const viewportOffset = this.viewport.width / 2;
        this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
        this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
        if (direction === 'right' && this.isBefore) {
            this.extra -= this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
        if (direction === 'left' && this.isAfter) {
            this.extra += this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
    }

    onResize({ screen, viewport }: { screen?: ScreenSize; viewport?: Viewport } = {}) {
        if (screen) this.screen = screen;
        if (viewport) {
            this.viewport = viewport;
            if (this.plane.program.uniforms.uViewportSizes) {
                this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
            }
        }
        this.scale = this.screen.height / 1500;
        this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height;
        this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width;
        this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
        this.padding = 2;
        this.width = this.plane.scale.x + this.padding;
        this.widthTotal = this.width * this.length;
        this.x = this.width * this.index;
    }
}

interface AppConfig {
    items?: { image: string; text: string; quote?: string }[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    font?: string;
    scrollSpeed?: number;
    scrollEase?: number;
    onIndexChange?: (index: number) => void;
}

class App {
    container: HTMLElement;
    scrollSpeed: number;
    scroll: {
        ease: number;
        current: number;
        target: number;
        last: number;
        position?: number;
    };
    onCheckDebounce: (...args: any[]) => void;
    renderer!: Renderer;
    gl!: GL;
    camera!: Camera;
    scene!: Transform;
    planeGeometry!: Plane;
    medias: Media[] = [];
    mediasImages: { image: string; text: string; quote?: string }[] = [];
    screen!: { width: number; height: number };
    viewport!: { width: number; height: number };
    raf: number = 0;

    boundOnResize!: () => void;
    boundOnWheel!: (e: Event) => void;
    boundOnTouchDown!: (e: MouseEvent | TouchEvent) => void;
    boundOnTouchMove!: (e: MouseEvent | TouchEvent) => void;
    boundOnTouchUp!: () => void;

    isDown: boolean = false;
    start: number = 0;

    onIndexChange?: (index: number) => void;
    activeIndex: number = 0;

    constructor(

        container: HTMLElement,
        {
            items,
            bend = 1,
            textColor = '#ffffff',
            borderRadius = 0,
            font = 'bold 30px Figtree',
            scrollSpeed = 2,
            scrollEase = 0.05,
            onIndexChange
        }: AppConfig
    ) {
        document.documentElement.classList.remove('no-js');
        this.container = container;
        this.scrollSpeed = scrollSpeed;
        this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
        this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
        this.onIndexChange = onIndexChange;
        this.createRenderer();
        this.createCamera();
        this.createScene();
        this.onResize();
        this.createGeometry();
        this.createMedias(items, bend, textColor, borderRadius, font);
        this.update();
        this.addEventListeners();
    }

    // ... (rest of methods)

    update() {
        this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
        const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
        if (this.medias) {
            this.medias.forEach(media => media.update(this.scroll, direction));

            // Calculate active index
            if (this.medias[0] && this.medias[0].width) {
                const itemWidth = this.medias[0].width;
                // Note: scroll.current is negative when scrolling right (items move left), so we use Math.abs or negate
                // The original code uses Math.abs(scroll.target) for snapping
                const rawIndex = Math.round(Math.abs(this.scroll.current) / itemWidth);
                const totalItems = this.medias.length / 2;
                const normalizedIndex = rawIndex % totalItems;

                if (normalizedIndex !== this.activeIndex) {
                    this.activeIndex = normalizedIndex;
                    if (this.onIndexChange) {
                        this.onIndexChange(this.activeIndex);
                    }
                }
            }
        }
        this.renderer.render({ scene: this.scene, camera: this.camera });
        this.scroll.last = this.scroll.current;
        this.raf = window.requestAnimationFrame(this.update.bind(this));
    }

    createRenderer() {
        this.renderer = new Renderer({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio || 1, 2)
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(0, 0, 0, 0);
        this.container.appendChild(this.renderer.gl.canvas as HTMLCanvasElement);
    }

    createCamera() {
        this.camera = new Camera(this.gl);
        this.camera.fov = 45;
        this.camera.position.z = 20;
    }

    createScene() {
        this.scene = new Transform();
    }

    createGeometry() {
        this.planeGeometry = new Plane(this.gl, {
            heightSegments: 50,
            widthSegments: 100
        });
    }

    createMedias(
        items: { image: string; text: string; quote?: string }[] | undefined,
        bend: number = 1,
        textColor: string,
        borderRadius: number,
        font: string
    ) {
        const defaultItems = [
            {
                image: `https://picsum.photos/seed/1/800/600?grayscale`,
                text: 'Bridge'
            },
            {
                image: `https://picsum.photos/seed/2/800/600?grayscale`,
                text: 'Desk Setup'
            },
            {
                image: `https://picsum.photos/seed/3/800/600?grayscale`,
                text: 'Waterfall'
            },
            {
                image: `https://picsum.photos/seed/4/800/600?grayscale`,
                text: 'Strawberries'
            },
            {
                image: `https://picsum.photos/seed/5/800/600?grayscale`,
                text: 'Deep Diving'
            },
            {
                image: `https://picsum.photos/seed/16/800/600?grayscale`,
                text: 'Train Track'
            },
            {
                image: `https://picsum.photos/seed/17/800/600?grayscale`,
                text: 'Santorini'
            },
            {
                image: `https://picsum.photos/seed/8/800/600?grayscale`,
                text: 'Blurry Lights'
            },
            {
                image: `https://picsum.photos/seed/9/800/600?grayscale`,
                text: 'New York'
            },
            {
                image: `https://picsum.photos/seed/10/800/600?grayscale`,
                text: 'Good Boy'
            },
            {
                image: `https://picsum.photos/seed/21/800/600?grayscale`,
                text: 'Coastline'
            },
            {
                image: `https://picsum.photos/seed/12/800/600?grayscale`,
                text: 'Palm Trees'
            }
        ];
        const galleryItems = items && items.length ? items : defaultItems;
        this.mediasImages = galleryItems.concat(galleryItems);
        this.medias = this.mediasImages.map((data, index) => {
            return new Media({
                geometry: this.planeGeometry,
                gl: this.gl,
                image: data.image,
                index,
                length: this.mediasImages.length,
                renderer: this.renderer,
                scene: this.scene,
                screen: this.screen,
                text: data.text,
                viewport: this.viewport,
                bend,
                textColor,
                borderRadius,
                font,
                quote: data.quote
            });
        });
    }

    onTouchDown(e: MouseEvent | TouchEvent) {
        this.isDown = true;
        this.scroll.position = this.scroll.current;
        this.start = 'touches' in e ? e.touches[0].clientX : e.clientX;
    }

    onTouchMove(e: MouseEvent | TouchEvent) {
        if (!this.isDown) return;
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const distance = (this.start - x) * (this.scrollSpeed * 0.025);
        this.scroll.target = (this.scroll.position ?? 0) + distance;
    }

    onTouchUp() {
        this.isDown = false;
        this.onCheck();
    }

    onWheel(e: Event) {
        const wheelEvent = e as WheelEvent;
        const delta = wheelEvent.deltaY || (wheelEvent as any).wheelDelta || (wheelEvent as any).detail;
        this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
        this.onCheckDebounce();
    }

    onCheck() {
        if (!this.medias || !this.medias[0]) return;
        const width = this.medias[0].width;
        const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
        const item = width * itemIndex;
        this.scroll.target = this.scroll.target < 0 ? -item : item;
    }

    onResize() {
        this.screen = {
            width: this.container.clientWidth,
            height: this.container.clientHeight
        };
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.camera.perspective({
            aspect: this.screen.width / this.screen.height
        });
        const fov = (this.camera.fov * Math.PI) / 180;
        const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        const width = height * this.camera.aspect;
        this.viewport = { width, height };
        if (this.medias) {
            this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
        }
    }



    addEventListeners() {
        this.boundOnResize = this.onResize.bind(this);
        this.boundOnWheel = this.onWheel.bind(this);
        this.boundOnTouchDown = this.onTouchDown.bind(this);
        this.boundOnTouchMove = this.onTouchMove.bind(this);
        this.boundOnTouchUp = this.onTouchUp.bind(this);
        window.addEventListener('resize', this.boundOnResize);
        window.addEventListener('mousewheel', this.boundOnWheel);
        window.addEventListener('wheel', this.boundOnWheel);
        window.addEventListener('mousedown', this.boundOnTouchDown);
        window.addEventListener('mousemove', this.boundOnTouchMove);
        window.addEventListener('mouseup', this.boundOnTouchUp);
        window.addEventListener('touchstart', this.boundOnTouchDown);
        window.addEventListener('touchmove', this.boundOnTouchMove);
        window.addEventListener('touchend', this.boundOnTouchUp);
    }

    destroy() {
        window.cancelAnimationFrame(this.raf);
        window.removeEventListener('resize', this.boundOnResize);
        window.removeEventListener('mousewheel', this.boundOnWheel);
        window.removeEventListener('wheel', this.boundOnWheel);
        window.removeEventListener('mousedown', this.boundOnTouchDown);
        window.removeEventListener('mousemove', this.boundOnTouchMove);
        window.removeEventListener('mouseup', this.boundOnTouchUp);
        window.removeEventListener('touchstart', this.boundOnTouchDown);
        window.removeEventListener('touchmove', this.boundOnTouchMove);
        window.removeEventListener('touchend', this.boundOnTouchUp);
        if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
            this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas as HTMLCanvasElement);
        }
    }
}

interface CircularGalleryProps {
    items?: { image: string; text: string; quote?: string }[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    font?: string;
    scrollSpeed?: number;
    scrollEase?: number;
    onIndexChange?: (index: number) => void;
}

export default function CircularGallery({
    items,
    bend = 3,
    textColor = '#ffffff',
    borderRadius = 0.05,
    font = 'bold 30px Figtree',
    scrollSpeed = 2,
    scrollEase = 0.05,
    onIndexChange
}: CircularGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const app = new App(containerRef.current, {
            items,
            bend,
            textColor,
            borderRadius,
            font,
            scrollSpeed,
            scrollEase,
            onIndexChange
        });
        return () => {
            app.destroy();
        };
    }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, onIndexChange]);
    return <div className="circular-gallery" ref={containerRef} />;
}
