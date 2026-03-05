import { motion } from 'framer-motion';
import {
    UserCheck,
    BookOpen,
    MapPin,
    FileText,
    ShieldCheck,
    PlaneTakeoff
} from 'lucide-react';

const steps = [
    {
        icon: UserCheck,
        title: "Counseling & Strategy",
        description: "Personalized guidance to map your academic strengths and global aspirations.",
        color: "teal"
    },
    {
        icon: BookOpen,
        title: "Test Preparation",
        description: "Expert-led coaching for IELTS, TOEFL, GRE, and GMAT to hit your target scores.",
        color: "cyan"
    },
    {
        icon: MapPin,
        title: "University Selection",
        description: "Data-driven shortlisting of universities that align with your career goals and ROI.",
        color: "teal"
    },
    {
        icon: FileText,
        title: "Documentation",
        description: "Polishing your SOPs, LORs, and resumes to perfection for elite admissions.",
        color: "cyan"
    },
    {
        icon: ShieldCheck,
        title: "Visa Assistance",
        description: "End-to-end support for documentation and mock interviews for 100% success.",
        color: "teal"
    },
    {
        icon: PlaneTakeoff,
        title: "Pre-Departure",
        description: "Assistance with accommodation, forex, and vital briefings before you fly.",
        color: "cyan"
    }
];

const ProcessSteps = () => {
    return (
        <section className="py-6 lg:py-10 bg-[#FDFBF7] relative overflow-hidden">
            {/* Rich Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -ml-64 -mb-64 animate-pulse delay-1000" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 mb-3 text-[10px] font-black tracking-[0.2em] text-teal-600 uppercase bg-teal-500/10 rounded-full border border-teal-500/20"
                    >
                        Success Roadmap
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0B1238] mb-3 tracking-tight leading-tight">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Architect</span> Your Success
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* S-Curve Connector Path (Desktop) - Curved & Continuous */}
                    <div
                        className="hidden lg:block absolute top-[48px] left-[calc(16.666%-1.333rem)] lg:-right-4 xl:-right-12 h-[304px] border-t-[2px] border-r-[2px] border-b-[2px] border-transparent rounded-r-[3rem] -z-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(135deg, rgba(244,63,94,0.3) 0%, rgba(245,158,11,0.3) 25%, rgba(16,185,129,0.3) 50%, rgba(6,182,212,0.3) 75%, rgba(217,70,239,0.3) 100%) border-box',
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'destination-out',
                            maskComposite: 'exclude'
                        }}
                    />


                    <div className="space-y-12 lg:space-y-16">
                        {/* Row 1: 1-2-3 (Left to Right) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 relative z-10">
                            {[0, 1, 2].map((idx) => {
                                const step = steps[idx];
                                const Icon = step.icon;
                                const gradients = [
                                    "from-rose-400 to-orange-500",
                                    "from-amber-400 to-yellow-500",
                                    "from-emerald-400 to-teal-500",
                                    "from-cyan-400 to-blue-500",
                                    "from-indigo-400 to-purple-500",
                                    "from-fuchsia-400 to-pink-500"
                                ];

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                                        className="flex flex-col items-center text-center group relative"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-b ${gradients[idx]} opacity-0 group-hover:opacity-[0.08] blur-[100px] transition-opacity duration-700 -z-10`} />

                                        <div className="relative mb-6">
                                            <div className={`w-24 h-24 rounded-[1.8rem] bg-gradient-to-br ${gradients[idx]} p-[3px] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                                                <div className="w-full h-full bg-white rounded-[1.6rem] flex items-center justify-center relative overflow-hidden backdrop-blur-xl">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx]} opacity-0 group-hover:opacity-[0.15] transition-opacity`} />
                                                    <Icon className="w-9 h-9 text-[#0B1238] transition-colors group-hover:text-teal-600" />
                                                </div>
                                            </div>
                                            {/* Glow Ring */}
                                            <div className={`absolute -inset-2 rounded-[2.2rem] bg-gradient-to-br ${gradients[idx]} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                                            <div className={`absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br ${gradients[idx]} rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg border-2 border-white transform transition-transform group-hover:scale-110 z-20`}>
                                                {idx + 1}
                                            </div>
                                        </div>

                                        <h3 className="text-lg lg:text-xl font-black text-[#002D62] mb-2 tracking-tight transition-all duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm lg:text-base text-[#0B1238]/70 font-medium leading-relaxed max-w-[240px] mx-auto group-hover:text-[#0B1238] transition-colors min-h-[4rem]">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Row 2: 4-5-6 (Flowing Right to Left) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 relative z-10">
                            {[5, 4, 3].map((idx, i) => {
                                const step = steps[idx];
                                const Icon = step.icon;
                                const gradients = [
                                    "from-rose-400 to-orange-500",
                                    "from-amber-400 to-yellow-500",
                                    "from-emerald-400 to-teal-500",
                                    "from-cyan-400 to-blue-500",
                                    "from-indigo-400 to-purple-500",
                                    "from-fuchsia-400 to-pink-500"
                                ];

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (2 - i) * 0.1 + 0.3, duration: 0.8 }}
                                        className="flex flex-col items-center text-center group relative"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-b ${gradients[idx]} opacity-0 group-hover:opacity-[0.08] blur-[100px] transition-opacity duration-700 -z-10`} />

                                        <div className="relative mb-6">
                                            <div className={`w-24 h-24 rounded-[1.8rem] bg-gradient-to-br ${gradients[idx]} p-[3px] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                                <div className="w-full h-full bg-white rounded-[1.6rem] flex items-center justify-center relative overflow-hidden backdrop-blur-xl">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx]} opacity-0 group-hover:opacity-[0.15] transition-opacity`} />
                                                    <Icon className="w-9 h-9 text-[#0B1238] transition-colors group-hover:text-teal-600" />
                                                </div>
                                            </div>
                                            {/* Glow Ring */}
                                            <div className={`absolute -inset-2 rounded-[2.2rem] bg-gradient-to-br ${gradients[idx]} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                                            <div className={`absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br ${gradients[idx]} rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg border-2 border-white transform transition-transform group-hover:scale-110 z-20`}>
                                                {idx + 1}
                                            </div>
                                        </div>

                                        <h3 className="text-lg lg:text-xl font-black text-[#002D62] mb-2 tracking-tight transition-all duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm lg:text-base text-[#0B1238]/70 font-medium leading-relaxed max-w-[240px] mx-auto group-hover:text-[#0B1238] transition-colors min-h-[4rem]">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
