import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './JourneyVisual.css';

import profileImg from '@/assets/images/profile-building.png';
import universityImg from '@/assets/images/university-choice.png';
import visaImg from '@/assets/images/visa-assistance.png';
import networkImg from '@/assets/images/global-network.png';
import coachingImg from '@/assets/images/success-coaching.png';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const getArtifacts = (isMobile: boolean) => [
    {
        id: 1,
        image: profileImg,
        title: 'Profile Building',
        desc: 'Crafting your legacy',
        rotate: isMobile ? -6 : -12,
        x: isMobile ? -60 : -120,
        y: isMobile ? -90 : -80,
        scale: isMobile ? 0.85 : 1,
    },
    {
        id: 2,
        image: universityImg,
        title: 'University',
        desc: 'Your dream campus',
        rotate: isMobile ? 4 : 8,
        x: isMobile ? 60 : 140,
        y: isMobile ? -110 : -100,
        scale: isMobile ? 0.8 : 0.9,
    },
    {
        id: 3,
        image: visaImg,
        title: 'Visa Success',
        desc: 'Approved & Ready',
        rotate: isMobile ? -2 : -5,
        x: isMobile ? 0 : 10,
        y: isMobile ? 10 : 10,
        scale: isMobile ? 0.95 : 1.1,
        zIndex: 10
    },
    {
        id: 4,
        image: networkImg,
        title: 'Network',
        desc: 'Global connections',
        rotate: isMobile ? 8 : 15,
        x: isMobile ? -50 : -150,
        y: isMobile ? 120 : 120,
        scale: isMobile ? 0.75 : 0.85,
    },
    {
        id: 5,
        image: coachingImg,
        title: 'Coaching',
        desc: 'Unlock potential',
        rotate: isMobile ? -5 : -10,
        x: isMobile ? 50 : 130,
        y: isMobile ? 140 : 140,
        scale: isMobile ? 0.8 : 0.95,
    }
];

const JourneyVisual = () => {
    const isMobile = useIsMobile();
    const artifacts = getArtifacts(isMobile);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Mouse parallax motion
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 45, stiffness: 90 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Ambient particles
    const particles = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
    }));

    return (
        <div
            className="journey-visual-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
                setHoveredId(null);
            }}
        >
            <div className="journey-canvas">
                {/* Ambient Effects */}
                <div className="ambient-vignette" />
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="floating-particle"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${50 + p.x}%`,
                            top: `${50 + p.y}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 40 - 20, 0],
                            y: [0, Math.random() * 40 - 20, 0],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Central Glow */}
                <div className="central-glow" />

                {/* Floating Artifacts */}
                {artifacts.map((item) => {
                    const isHovered = hoveredId === item.id;
                    const moveX = useTransform(springX, [-0.5, 0.5], [item.x - 12, item.x + 12]);
                    const moveY = useTransform(springY, [-0.5, 0.5], [item.y - 12, item.y + 12]);
                    const rotateParallax = useTransform(springX, [-0.5, 0.5], [item.rotate - 3, item.rotate + 3]);

                    return (
                        <motion.div
                            key={item.id}
                            className={`artifact-card ${isHovered ? 'hovered' : ''} ${hoveredId && !isHovered ? 'dimmed' : ''}`}
                            style={{
                                x: isHovered ? moveX : item.x,
                                y: isHovered ? moveY : item.y,
                                rotate: isHovered ? rotateParallax : item.rotate,
                                scale: item.scale,
                                zIndex: item.zIndex || 1
                            }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: 1,
                                scale: isHovered ? item.scale * 1.02 : item.scale
                            }}
                            transition={{
                                delay: isHovered ? 0 : item.id * 0.1,
                                type: 'spring',
                                stiffness: isHovered ? 200 : 100,
                                damping: isHovered ? 20 : 15
                            }}
                        >
                            <div className="card-inner">
                                <div className="photo-frame">
                                    <img src={item.image} alt={item.title} />
                                    <div className="frame-gloss" />
                                </div>

                                <motion.div
                                    className="card-info"
                                    initial={{ opacity: 0.4, y: 5 }}
                                    animate={{
                                        opacity: isHovered ? 1 : 0.4,
                                        y: isHovered ? 0 : 5
                                    }}
                                >
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </motion.div>

                                {/* Pin decorative element */}
                                <div className="card-pin" />

                                {/* Polaroid-style bottom tape or shadow */}
                                <div className="card-shadow" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Connection lines (Subtle) */}
            <svg className="connection-overlay">
                <path d="M 0 0" />
            </svg>
        </div>
    );
};


export default JourneyVisual;
