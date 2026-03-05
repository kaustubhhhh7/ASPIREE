import { motion } from "framer-motion";
import React, { useState } from "react";

interface Logo {
    name: string;
    logo: string;
    fallback?: string;
    scale?: number;
}

interface LogoLoopProps {
    logos: Logo[];
    speed?: number;
    direction?: "left" | "right";
}

const LogoItem: React.FC<{ item: Logo }> = ({ item }) => {
    const [hasError, setHasError] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex-shrink-0 group"
        >
            <div className="relative h-16 md:h-24 w-40 md:w-60 flex items-center justify-center p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group-hover:shadow-[0_20px_40px_rgba(20,184,166,0.1)] transition-all duration-500 overflow-hidden">
                {!hasError ? (
                    <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        style={{ transform: item.scale ? `scale(${item.scale})` : undefined }}
                        className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center p-4">
                        <span className="text-sm font-black uppercase tracking-widest text-[#1e1e2d] opacity-80 text-center leading-tight">
                            {item.fallback || item.name}
                        </span>
                        <div className="w-8 h-1 bg-teal-500 mt-2 rounded-full" />
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
};

const LogoLoop: React.FC<LogoLoopProps> = ({
    logos,
    speed = 30,
    direction = "left"
}) => {
    // Quadruple the list to ensure the loop is always full on ultra-wide screens
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="relative w-full overflow-hidden py-10">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-6 md:gap-10 w-max"
                animate={{
                    x: direction === "left" ? [0, -2000] : [-2000, 0]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedLogos.map((item, index) => (
                    <LogoItem key={`${item.name}-${index}`} item={item} />
                ))}
            </motion.div>
        </div>
    );
};

export default LogoLoop;
