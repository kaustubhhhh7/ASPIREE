import { useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { founders } from "@/data/founders";

const FoundersSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const introTextOpacity = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
    const introTextScale = useTransform(scrollYProgress, [0, 0.22], [1, 2.5]);
    const introTextY = useTransform(scrollYProgress, [0, 0.22], ["0%", "-30%"]);

    return (
        <section ref={containerRef} className="relative bg-[#FDFBF7]">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#002D62]/5 blur-[100px] rounded-full -z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B1238]/5 blur-[100px] rounded-full -z-0 pointer-events-none" />

            {/* Scroll duration container for Intro */}
            <div className="relative h-[140vh] w-full">
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 pointer-events-none">
                    <motion.div
                        style={{ opacity: introTextOpacity, scale: introTextScale, y: introTextY }}
                        className="flex flex-col items-center justify-center px-4"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[8rem] font-black bg-gradient-to-br from-[#0B1238] to-teal-500 bg-clip-text text-transparent mb-6 tracking-tighter text-center leading-[1] pb-2">
                            The Innovators-in-chief
                        </h2>
                        <p className="text-[#002D62]/80 text-xl md:text-2xl lg:text-3xl font-medium text-center">
                            Meet the minds behind AspireEach
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Cards Container */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto items-start justify-items-center">
                    {founders.map((founder, index) => {
                        return (
                            <motion.div
                                key={founder.name}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
                                className="w-full max-w-[520px] group relative bg-white/70 backdrop-blur-3xl rounded-[3rem] p-10 md:p-12 shadow-[0_20px_70px_-15px_rgba(11,18,56,0.08)] hover:shadow-[0_40px_100px_-20px_rgba(11,18,56,0.18)] transition-all duration-700 flex flex-col items-center text-center border border-white/40 hover:-translate-y-3 z-10 overflow-hidden"
                            >
                                {/* Aurora Blobs - Adjusted for more vibrance */}
                                <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-teal-400/30 to-blue-500/20 rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-1000 pointer-events-none"></div>
                                <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-cyan-400/20 to-teal-500/30 rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-1000 pointer-events-none"></div>

                                {/* Animated Border Glow */}
                                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                                {/* Profile Image with Magnetic effect-like wrapper */}
                                <div className="relative mb-10 transform transition-all duration-700 group-hover:scale-110">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-110 pointer-events-none"></div>
                                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-[2.5rem] overflow-hidden flex-shrink-0 bg-slate-50 ring-8 ring-white/80 shadow-2xl z-10">
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem] pointer-events-none"></div>
                                    </div>

                                    {/* Floating Element Support */}
                                    <div className="absolute -right-4 bottom-4 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 border border-slate-50">
                                        <div className="w-6 h-6 bg-teal-500 rounded-lg opacity-20 animate-pulse"></div>
                                        <CheckCircle2 className="w-5 h-5 text-teal-600 absolute" />
                                    </div>
                                </div>

                                {/* Name and Role with Enhanced Typography */}
                                <div className="mb-8 z-10">
                                    <h3 className="text-3xl lg:text-[2rem] font-black text-[#0B1238] mb-4 tracking-tighter leading-tight">{founder.name}</h3>

                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-teal-500 rounded-full" />
                                            <span className="text-[12px] font-black tracking-[0.25em] text-teal-600 uppercase">
                                                Co-Founder
                                            </span>
                                            <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-teal-500 rounded-full" />
                                        </div>
                                        <p className="text-[#002D62] font-semibold text-lg italic opacity-80 max-w-xs leading-relaxed">
                                            "{founder.role.split(' - ')[1] || founder.role}"
                                        </p>
                                    </div>
                                </div>

                                {/* Premium Footer Actions */}
                                <div className="flex flex-row items-center gap-4 w-full mt-auto pt-8 border-t border-slate-200/60 z-10">
                                    <Link
                                        to={`/founder/${founder.id}`}
                                        className="flex-grow group/btn relative overflow-hidden bg-[#0B1238] hover:bg-teal-600 text-white text-[14px] font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-[#0B1238]/20 hover:shadow-teal-500/30 flex items-center justify-center gap-2 block"
                                    >
                                        <span className="relative z-10">Read Full Story</span>
                                        <ArrowRight size={16} className="relative z-10 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>

                                    <a
                                        href={founder.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-[60px] h-[60px] rounded-2xl bg-white border border-slate-200 text-[#0A66C2] hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 flex-shrink-0"
                                        aria-label="Connect on LinkedIn"
                                    >
                                        <Linkedin size={22} fill="currentColor" strokeWidth={0} />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
