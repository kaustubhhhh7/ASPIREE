import { motion } from "framer-motion";
import Squares from "./ui/Squares";

const countries = [
    {
        name: "USA",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
        university: "Stanford & MIT",
        description: "Silicon Valley Innovation"
    },
    {
        name: "UK",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
        university: "Oxford & Imperial",
        description: "Prestigious Academic Heritage"
    },
    {
        name: "Canada",
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
        university: "UofT & McGill",
        description: "Diverse & Welcoming Culture"
    },
    {
        name: "Australia",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
        university: "UniMelb & UNSW",
        description: "Dynamic Quality of Life"
    },
    {
        name: "Ireland",
        image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80",
        university: "Trinity & UCD",
        description: "European Innovation Hub"
    },
    {
        name: "Europe",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
        university: "TUM & ETH Zurich",
        description: "Global Research Leaders"
    },
];

const Hotspots = () => {
    return (
        <section id="destinations" className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Squares */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <Squares
                    speed={0.15}
                    squareSize={50}
                    direction='diagonal'
                    borderColor='rgba(0, 0, 64, 0.03)'
                    hoverFillColor='rgba(20, 184, 166, 0.05)'
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-5 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-cyan-600 uppercase bg-cyan-50 rounded-full"
                    >
                        Global Horizons
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 mb-6"
                    >
                        Study Abroad <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Hotspots</span>
                    </motion.h2>
                    <p className="text-navy-900/60 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Strategically curated destinations matching your academic profile and career aspirations.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countries.map((country, index) => (
                        <motion.div
                            key={country.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl shadow-navy-900/5 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-700"
                        >
                            <img
                                src={country.image}
                                alt={country.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-10 transform transition-transform duration-700">
                                <span className="text-teal-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    {country.description}
                                </span>
                                <h3 className="text-4xl font-black text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {country.name}
                                </h3>
                                <div className="flex items-center gap-3 mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <span className="text-2xl">🏛️</span>
                                    </div>
                                    <p className="text-white/80 font-bold text-sm leading-tight">
                                        {country.university}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="w-0 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 mt-8 rounded-full group-hover:w-full transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hotspots;
