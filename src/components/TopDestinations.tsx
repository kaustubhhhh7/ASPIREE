import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const destinations = [
    {
        code: "US",
        name: "United States",
        universities: "4,000+ Universities",
        highlight: "Ivy League & Research",
        flag: "https://flagcdn.com/w80/us.png",
        bgImage: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80"
    },
    {
        code: "GB",
        name: "United Kingdom",
        universities: "150+ Universities",
        highlight: "Oxford & Cambridge",
        flag: "https://flagcdn.com/w80/gb.png",
        bgImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
    },
    {
        code: "CA",
        name: "Canada",
        universities: "100+ Universities",
        highlight: "Work Permit Benefits",
        flag: "https://flagcdn.com/w80/ca.png",
        bgImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80"
    },
    {
        code: "AU",
        name: "Australia",
        universities: "43 Universities",
        highlight: "Post-Study Work Rights",
        flag: "https://flagcdn.com/w80/au.png",
        bgImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80"
    },
    {
        code: "DE",
        name: "Germany",
        universities: "400+ Universities",
        highlight: "Low Tuition Fees",
        flag: "https://flagcdn.com/w80/de.png",
        bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
    },
    {
        code: "NZ",
        name: "New Zealand",
        universities: "8 Universities",
        highlight: "Quality of Life",
        flag: "https://flagcdn.com/w80/nz.png",
        bgImage: "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

const DestinationCard = ({ dest, index, navigate }: { dest: any, index: number, navigate: any }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { damping: 20, stiffness: 100 });
    const mouseYSpring = useSpring(y, { damping: 20, stiffness: 100 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const shineBg = useTransform(
        [mouseXSpring, mouseYSpring],
        ([mx, my]: any[]) => `radial-gradient(circle at ${50 + mx * 100}% ${50 + my * 100}%, rgba(20, 184, 166, 0.15) 0%, transparent 80%)`
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.21, 1.11, 0.81, 0.99]
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/universities/${dest.code.toLowerCase()}`)}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative p-5 rounded-[1.5rem] bg-[#020617] border border-white/10 hover:border-teal-500/40 transition-colors duration-500 cursor-pointer overflow-hidden shadow-2xl"
        >
            {/* Country Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={dest.bgImage}
                    alt=""
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />
            </div>

            {/* Premium Shine Effect */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: shineBg
                }}
            />

            {/* Card Content Wrapper for 3D perspective */}
            <div style={{ transform: "translateZ(30px)" }} className="relative z-20 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-12 h-8 rounded-lg overflow-hidden shadow-2xl border border-white/10 ring-4 ring-white/5"
                        >
                            <img src={dest.flag} alt={`${dest.name} flag`} className="w-full h-full object-cover shadow-inner" />
                        </motion.div>
                        <h3 className="text-6xl font-black text-white/[0.05] group-hover:text-white/[0.12] transition-all duration-700 uppercase tracking-tighter leading-none select-none">
                            {dest.code}
                        </h3>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-500 shadow-lg shadow-black/20"
                    >
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </motion.div>
                </div>

                <div>
                    <motion.p
                        className="text-lg font-bold mb-1 text-white group-hover:translate-x-1 transition-transform duration-300"
                    >
                        {dest.name}
                    </motion.p>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
                        <p className="text-teal-400 font-bold text-xs tracking-wide">{dest.universities}</p>
                    </div>
                    <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-teal-500/50 to-transparent transition-all duration-700 mb-2" />
                    <p className="text-gray-400/90 text-xs font-medium leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {dest.highlight}
                    </p>
                </div>
            </div>

            {/* Corner Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-[80px] group-hover:bg-teal-500/20 transition-all duration-700" />
        </motion.div>
    );
};

const TopDestinations = () => {
    const navigate = useNavigate();

    return (
        <section id="top-destinations" className="py-16 lg:py-20 bg-[#060B18] text-white overflow-hidden perspective-2000">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-500/5 blur-3xl rounded-full"
                    />
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-teal-500 font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 block"
                    >
                        WHERE WILL YOU GO?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-extrabold mt-1 text-white leading-tight tracking-tight"
                    >
                        Top Study <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white via-white/90 to-white/40">Destinations</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {destinations.map((dest, index) => (
                        <DestinationCard
                            key={dest.code}
                            dest={dest}
                            index={index}
                            navigate={navigate}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopDestinations;
