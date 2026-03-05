import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';
import { useLenis } from '@/contexts/LenisContext';
import './ScrollStack.css';

export interface ScrollStackItemProps {
    itemClassName?: string;
    children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>
        <div className="scroll-stack-card-inner">
            {children}
        </div>
    </div>
);

interface ScrollStackProps {
    className?: string;
    children: ReactNode;
    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;
    stackPosition?: string;
    scaleEndPosition?: string;
    baseScale?: number;
    scaleDuration?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean;
    onStackComplete?: () => void;
    onActiveCardChange?: (index: number) => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = '',
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = '20%',
    scaleEndPosition = '10%',
    baseScale = 0.85,
    scaleDuration = 0.5,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = false,
    onStackComplete,
    onActiveCardChange
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef<number | null>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const cardsRef = useRef<HTMLElement[]>([]);
    const isUpdatingRef = useRef(false);
    const cardOffsetsRef = useRef<number[]>([]);
    const endElementOffsetRef = useRef<number>(0);
    const activeIndexRef = useRef<number>(0);
    const { lenis: globalLenis } = useLenis();

    const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value as string);
    }, []);

    const getScrollData = useCallback(() => {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight,
                scrollContainer: document.documentElement
            };
        } else {
            const scroller = scrollerRef.current;
            return {
                scrollTop: scroller!.scrollTop,
                containerHeight: scroller!.clientHeight,
                scrollContainer: scroller!
            };
        }
    }, [useWindowScroll]);

    const getElementOffset = useCallback(
        (element: HTMLElement) => {
            if (useWindowScroll) {
                const rect = element.getBoundingClientRect();
                return rect.top + window.scrollY;
            } else {
                return element.offsetTop;
            }
        },
        [useWindowScroll]
    );

    const updateCardTransforms = useCallback(() => {
        if (!cardsRef.current.length || isUpdatingRef.current) return;

        isUpdatingRef.current = true;

        const { scrollTop, containerHeight } = getScrollData();
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
        const endElementTop = endElementOffsetRef.current;

        let topCardIndex = 0;
        for (let j = 0; j < cardOffsetsRef.current.length; j++) {
            const jCardTop = cardOffsetsRef.current[j];
            const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
            if (scrollTop >= jTriggerStart) {
                topCardIndex = j;
            }
        }

        if (onActiveCardChange && topCardIndex !== activeIndexRef.current) {
            activeIndexRef.current = topCardIndex;
            onActiveCardChange(topCardIndex);
        }

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const cardTop = cardOffsetsRef.current[i];
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = triggerStart;
            const pinEnd = endElementTop - containerHeight;

            let scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);

            // The last card should never scale down or darken, as it forms the front of the final stack
            if (i === cardsRef.current.length - 1) {
                scaleProgress = 0;
            }

            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount && i < topCardIndex) {
                blur = (topCardIndex - i) * blurAmount;
            }

            let translateY = 0;
            if (scrollTop >= pinStart && scrollTop <= pinEnd) {
                translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;

            // Calculate fade for previous cards in the stack. 
            // We increase darkness significantly (0.6) so it's a dramatic light-to-dark effect.
            const brightness = 1 - (scaleProgress * 0.6);
            let filterStr = `brightness(${brightness})`;
            if (blur > 0) {
                filterStr += ` blur(${blur}px)`;
            }

            card.style.transform = transform;
            card.style.filter = filterStr;


            if (i === cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                } else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });

        isUpdatingRef.current = false;
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        rotationAmount,
        blurAmount,
        onStackComplete,
        onActiveCardChange,
        calculateProgress,
        parsePercentage,
        getScrollData
    ]);

    const handleScroll = useCallback(() => {
        updateCardTransforms();
    }, [updateCardTransforms]);

    const setupLenis = useCallback(() => {
        if (useWindowScroll) {
            if (globalLenis) {
                lenisRef.current = globalLenis;
                globalLenis.on('scroll', handleScroll);
                return globalLenis;
            }

            const lenis = new Lenis({
                duration: 1.2,
                easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 2,
                infinite: false,
                wheelMultiplier: 1,
                lerp: 0.1,
                syncTouch: true,
                syncTouchLerp: 0.075,
                gestureOrientation: 'vertical'
            });

            lenis.on('scroll', handleScroll);

            const raf = (time: number) => {
                lenis.raf(time);
                animationFrameRef.current = requestAnimationFrame(raf);
            };
            animationFrameRef.current = requestAnimationFrame(raf);

            lenisRef.current = lenis;
            return lenis;
        } else {
            const scroller = scrollerRef.current;
            if (!scroller) return;

            const lenis = new Lenis({
                wrapper: scroller,
                content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
                duration: 1.2,
                easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 2,
                infinite: false,
                gestureOrientation: 'vertical',
                wheelMultiplier: 1,
                lerp: 0.1,
                syncTouch: true,
                syncTouchLerp: 0.075
            });

            lenis.on('scroll', handleScroll);

            const raf = (time: number) => {
                lenis.raf(time);
                animationFrameRef.current = requestAnimationFrame(raf);
            };
            animationFrameRef.current = requestAnimationFrame(raf);

            lenisRef.current = lenis;
            return lenis;
        }
    }, [handleScroll, useWindowScroll, globalLenis]);

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const cards = Array.from(
            useWindowScroll
                ? document.querySelectorAll('.scroll-stack-card')
                : scroller.querySelectorAll('.scroll-stack-card')
        ) as HTMLElement[];

        cardsRef.current = cards;

        const refreshOffsets = () => {
            cardOffsetsRef.current = cards.map(card => getElementOffset(card));
            const endElement = useWindowScroll
                ? (document.querySelector('.scroll-stack-end') as HTMLElement)
                : (scroller.querySelector('.scroll-stack-end') as HTMLElement);
            endElementOffsetRef.current = endElement ? getElementOffset(endElement) : 0;
            updateCardTransforms();
        };

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = 'transform, opacity';
            card.style.transformOrigin = 'top center';
            card.style.backfaceVisibility = 'hidden';
            card.style.transform = 'translate3d(0,0,0)';
        });

        setupLenis();
        refreshOffsets();

        window.addEventListener('resize', refreshOffsets);

        return () => {
            window.removeEventListener('resize', refreshOffsets);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (lenisRef.current) {
                if (lenisRef.current === globalLenis) {
                    lenisRef.current.off('scroll', handleScroll);
                } else {
                    lenisRef.current.destroy();
                }
            }
            stackCompletedRef.current = false;
            cardsRef.current = [];
            cardOffsetsRef.current = [];
            isUpdatingRef.current = false;
        };
    }, [
        itemDistance,
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        scaleDuration,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        setupLenis,
        updateCardTransforms,
        globalLenis
    ]);

    return (
        <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
            <div className="scroll-stack-inner">
                {children}
                {/* Spacer so the last pin can release cleanly */}
                <div className="scroll-stack-end" />
            </div>
        </div>
    );
};

export default ScrollStack;
