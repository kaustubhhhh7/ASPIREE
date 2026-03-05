import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const springConfigFollower = { damping: 20, stiffness: 300, mass: 0.8 };

    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const followerXSpring = useSpring(cursorX, springConfigFollower);
    const followerYSpring = useSpring(cursorY, springConfigFollower);

    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Only initiate on devices with fine pointer
        if (typeof window !== 'undefined' && window.matchMedia("(pointer: fine)").matches) {
            setIsVisible(true);
            document.body.style.cursor = 'none';
        } else {
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = () => setIsActive(true);
        const handleMouseUp = () => setIsActive(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.tagName === 'SELECT' ||
                target.closest('button') !== null ||
                target.closest('a') !== null ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovered(isInteractive);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Main Dot */}
            <motion.div
                className="absolute w-2.5 h-2.5 bg-[#002D62] rounded-full mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Follower Ring */}
            <motion.div
                className="absolute border border-[#002D62] rounded-full mix-blend-difference opacity-40"
                style={{
                    x: followerXSpring,
                    y: followerYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovered ? 60 : 20,
                    height: isHovered ? 60 : 20,
                    backgroundColor: isHovered ? 'rgba(0, 45, 98, 0.05)' : 'transparent',
                    borderColor: isHovered ? 'rgba(0, 45, 98, 0.2)' : 'rgba(0, 45, 98, 0.4)',
                    scale: isActive ? 0.9 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 28
                }}
            />
        </div>
    );
};

export default CustomCursor;
