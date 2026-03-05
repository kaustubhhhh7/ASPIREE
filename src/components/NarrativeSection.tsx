import { motion } from "framer-motion";
import { CheckCircle2, Globe, Sparkles, ArrowRight } from "lucide-react";
import Squares from "./ui/Squares";

const NarrativeSection = () => {
    return (
        <section className="py-12 lg:py-16 bg-[#FDFBF7] overflow-hidden relative">
            {/* Background Squares */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <Squares
                    speed={0.1}
                    squareSize={60}
                    direction='down'
                    borderColor='rgba(0, 0, 64, 0.03)'
                    hoverFillColor='rgba(20, 184, 166, 0.05)'
                />
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-navy-900/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 text-[9px] font-black tracking-[0.2em] uppercase mb-4 border border-teal-500/20">
                            <Sparkles className="w-3 h-3" />
                            <span>Who We Are</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mb-6 leading-[1.2] tracking-tight">
                            Our Narrative: <br />
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-[#0B1238] to-[#002D62] pr-2 pb-2">Fueling Ambitions</span>
                        </h2>

                        <div className="space-y-4 mb-8">
                            <p className="text-base lg:text-lg text-[#0B1238]/80 leading-relaxed font-medium">
                                Imagine ditching the classroom and diving into your <span className="text-teal-600 font-bold relative inline-block">
                                    global education
                                    <span className="absolute bottom-1 left-0 w-full h-2 bg-teal-500/10 -z-10 rounded-full" />
                                </span> while living the culture in the world's most vibrant cities. At <span className="text-[#002D62] font-black">AspireEach</span>, we transform studying abroad into a life-defining adventure.
                            </p>
                            <p className="text-base lg:text-lg text-[#0B1238]/80 leading-relaxed font-medium">
                                Think of us as your elite squad of <span className="text-[#002D62] font-bold">career architects</span>. From selecting the perfect university to navigating complex visa paths, we ensure you step onto global campuses with absolute confidence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {[
                                { text: "100% Visa Success", color: "from-teal-500 to-teal-600" },
                                { text: "10+ Years Experience", color: "from-cyan-500 to-cyan-600" },
                                { text: "Certified Counselors", color: "from-teal-500 to-teal-600" },
                                { text: "Elite University Network", color: "from-cyan-500 to-cyan-600" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-teal-500/20 transition-transform group-hover:scale-110`}>
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-navy-900 font-extrabold text-[15px] tracking-tight">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <button className="group relative py-3 px-6 bg-[#002D62] text-white rounded-xl font-black text-sm sm:text-base overflow-hidden shadow-2xl shadow-navy-900/20 transition-all hover:scale-105 active:scale-95">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 flex items-center gap-3">
                                Discover Our Mission
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </span>
                        </button>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative z-10 p-2 sm:p-4 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden max-w-lg mx-auto">
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-navy-900">
                                <img
                                    src="/images/indian-student.png"
                                    alt="Aspiring Indian student"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#002D62]/40 via-transparent to-teal-500/20" />

                                {/* Floating Stats Card */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-2xl py-3 px-6 rounded-[1.5rem] shadow-2xl border border-white/20"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_30px_rgba(20,184,166,0.4)]">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-2xl font-black text-white mb-0.5 shadow-sm">1000+</p>
                                            <p className="text-[9px] font-bold text-teal-400 uppercase tracking-[0.15em] leading-none">Global Placements</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-[120px] -z-10" />
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NarrativeSection;
