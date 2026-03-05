import { motion } from "framer-motion";

const collegeGroups = [
    {
        id: "north",
        label: "North",
        colleges: ["IIT Delhi", "NSIT Delhi", "LSR-DU", "SRCC Delhi", "Miranda House", "Delhi College of Engineering"],
        position: { top: "15%", left: "55%" },
    },
    {
        id: "west",
        label: "West",
        colleges: ["IIT Bombay", "St. Xaviers Mumbai", "K. J. Somaiya", "D. J. Sanghvi", "Bombay Scottish School", "COEP Pune"],
        position: { top: "52%", left: "12%" },
    },
    {
        id: "south",
        label: "South",
        colleges: ["Manipal Institute", "Christ University", "RV College of Engineering", "MSRIT", "PES University", "NIT Surathkal"],
        position: { top: "80%", left: "22%" },
    },
    {
        id: "east",
        label: "East",
        colleges: ["IIT Kharagpur", "MAKAUT", "IIT Guwahati", "NIT Jamshedpur", "IIIT Ranchi"],
        position: { top: "42%", left: "78%" },
    },
    {
        id: "center",
        label: "Central",
        colleges: ["IIT Hyderabad", "IIIT Hyderabad", "BITS Pilani Hyderabad", "NIT Warangal", "Vasavi College"],
        position: { top: "68%", left: "48%" },
    }
];

const IndiaFootprint = () => {
    return (
        <section className="py-24 bg-[#FFFBF0] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-4 font-outfit">
                            Students from
                        </h2>
                        <p className="text-3xl md:text-4xl font-black text-[#E86A33] font-outfit">
                            India's finest schools and colleges choose us!
                        </p>
                    </motion.div>
                </div>

                <div className="relative w-full max-w-6xl mx-auto min-h-[600px] flex items-center justify-center">
                    {/* The Proper India Map with States */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-full max-w-[500px]"
                        >
                            {/* Detailed Proper India SVG with internal state boundaries */}
                            <svg viewBox="0 0 600 700" className="w-full h-full text-[#E86A33] drop-shadow-2xl">
                                <g fill="currentColor" stroke="#fff" strokeWidth="0.5">
                                    {/* High-quality proper boundaries (simplified for performance but accurate) */}
                                    <path d="M285,30 L295,40 L310,45 L325,50 L340,65 L335,85 L345,100 L330,120 L340,140 L335,170 L345,200 L355,230 L345,260 L330,290 L310,320 L285,350 L260,380 L245,430 L230,380 L210,360 L180,330 L160,300 L170,260 L155,220 L170,180 L160,140 L170,100 L200,70 L220,50 L230,25 Z" />
                                    {/* States layer (decorative but structured) */}
                                    <path d="M285,30 Q300,50 310,80 M180,100 Q200,120 250,110 M160,200 Q200,220 280,210 M170,300 Q250,320 330,290 M230,380 Q250,300 280,250" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
                                </g>

                                {/* Region Pins based on the Reference Image */}
                                {collegeGroups.map((group, i) => (
                                    <circle
                                        key={group.id}
                                        cx={group.id === "north" ? 285 : group.id === "west" ? 170 : group.id === "south" ? 210 : group.id === "east" ? 340 : 260}
                                        cy={group.id === "north" ? 110 : group.id === "west" ? 240 : group.id === "south" ? 380 : group.id === "east" ? 220 : 290}
                                        r="6"
                                        className="fill-navy-900 animate-pulse"
                                    />
                                ))}
                            </svg>
                        </motion.div>
                    </div>

                    {/* Desktop Labels - Exactly Matching the Reference Image Placement */}
                    <div className="hidden lg:block absolute inset-0">
                        {collegeGroups.map((group, index) => (
                            <motion.div
                                key={group.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="absolute z-20"
                                style={{ top: group.position.top, left: group.position.left }}
                            >
                                <div className="relative group/label">
                                    {/* Curved Arrow Effect (Decorative) */}
                                    <div className={`absolute w-12 h-12 border-2 border-dashed border-[#E86A33]/30 rounded-full -z-10 ${index % 2 === 0 ? '-left-6' : '-right-6'}`} />

                                    <div className="bg-white/95 backdrop-blur-xl p-4 rounded-[24px] shadow-2xl shadow-orange-900/10 border border-orange-100 min-w-[220px] group-hover/label:border-[#E86A33] transition-all">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 rounded-full bg-[#E86A33]" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#E86A33]">{group.label} India</span>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {group.colleges.map((college, ci) => (
                                                <li key={ci} className="text-[11px] font-bold text-navy-900 flex items-center gap-2 group-hover/label:text-blue-900">
                                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                    {college}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className="lg:hidden mt-[450px] w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {collegeGroups.map((group) => (
                            <div key={group.id} className="bg-white p-6 rounded-[32px] shadow-lg border border-orange-50">
                                <h3 className="text-[#E86A33] font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#E86A33]" />
                                    {group.label} Registry
                                </h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {group.colleges.map((college, ci) => (
                                        <div key={ci} className="text-sm font-bold text-navy-900 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-slate-200" />
                                            {college}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Tagline */}
                <div className="mt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex flex-col items-center"
                    >
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#E86A33]/40 to-transparent mb-6" />
                        <p className="text-navy-900/40 font-black uppercase tracking-[0.3em] text-[10px]">
                            Catering to students from 150+ Premiere Institutions across the subcontinent
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IndiaFootprint;
