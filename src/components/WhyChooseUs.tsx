import { motion } from "framer-motion";
import { CheckCircle, Globe, Award, HeartHandshake } from "lucide-react";

const features = [
    {
        icon: CheckCircle,
        title: "100% Visa Success",
        description: "Our expert guidance ensures a flawless application process.",
        color: "teal",
        gradient: "from-teal-400 to-teal-600",
        shadow: "shadow-teal-500/20"
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Partnered with 750+ universities across 29+ countries.",
        color: "cyan",
        gradient: "from-cyan-400 to-cyan-600",
        shadow: "shadow-cyan-500/20"
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We are committed to providing the highest quality of service.",
        color: "navy",
        gradient: "from-[#002D62] to-[#0B1238]",
        shadow: "shadow-navy-900/20"
    },
    {
        icon: HeartHandshake,
        title: "Personalized Support",
        description: "Tailored counseling to match your unique aspirations.",
        color: "teal",
        gradient: "from-teal-500/80 to-cyan-500/80",
        shadow: "shadow-teal-500/20"
    },
];

import Squares from "./ui/Squares";

const WhyChooseUs = () => {
    return (
        <section className="py-12 lg:py-16 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-navy-900/5 rounded-full blur-[100px]" />
            </div>

            {/* Background Squares */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Squares
                    speed={0.15}
                    squareSize={60}
                    direction='diagonal'
                    borderColor='rgba(0, 45, 98, 0.05)'
                    hoverFillColor='rgba(20, 184, 166, 0.08)'
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-[9px] font-black tracking-[0.2em] text-teal-600 uppercase bg-teal-500/10 rounded-full border border-teal-500/20"
                    >
                        Success Framework
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1238] mb-6 leading-tight tracking-tight"
                    >
                        Why Global Aspirants <br />
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 pb-2">Choose Aspire Each</span>
                    </motion.h2>
                    <p className="text-[#0B1238]/80 max-w-xl mx-auto text-base lg:text-lg leading-relaxed font-medium">
                        We don't just process applications; we architect careers with a focus on holistic growth and successful global transitions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group p-8 min-h-[340px] bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 text-center relative overflow-hidden flex flex-col items-center justify-center"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Decorative Corner Element */}
                            <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-[0.03] group-hover:opacity-[0.08] rounded-full transition-all duration-700 group-hover:scale-[2.5]`} />

                            <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl ${feature.shadow} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                <feature.icon className="w-8 h-8 text-white" />
                                {/* Internal Glow */}
                                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <h3 className="relative text-xl font-black text-[#002D62] mb-3 group-hover:text-teal-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="relative text-[#0B1238]/70 leading-relaxed font-medium text-sm">
                                {feature.description}
                            </p>

                            {/* Bottom Accent */}
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-900/10 rounded-full blur-[120px]" />
            </div>
        </section>
    );
};

export default WhyChooseUs;
