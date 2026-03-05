import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { worldMapPaths } from "@/data/worldMapData";

interface University {
    name: string;
    logo: string;
}

interface CountryData {
    name: string;
    universities: University[];
}

const hotspotData: Record<string, CountryData> = {
    Russia: {
        name: "Russia",
        universities: [
            { name: "HSE University", logo: "https://www.logo.wine/a/logo/Higher_School_of_Economics/Higher_School_of_Economics-Logo.wine.svg" },
            { name: "Bauman Moscow State Technical", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Bauman_Moscow_State_Technical_University_logo.svg/1200px-Bauman_Moscow_State_Technical_University_logo.svg.png" },
            { name: "ITMO University", logo: "https://itmo.ru/images/itmo_logo_horiz_white_en.png" },
            { name: "MEPhI", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/MEPhI_logo.svg/1200px-MEPhI_logo.svg.png" },
            { name: "Moscow Institute of Physics and Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/MIPT_logo.svg/1200px-MIPT_logo.svg.png" },
            { name: "Moscow State University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Lomonosov_Moscow_State_University_logo.svg/1200px-Lomonosov_Moscow_State_University_logo.svg.png" },
        ],
    },
    USA: {
        name: "United States",
        universities: [
            { name: "Harvard University", logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg" },
            { name: "Stanford University", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Stanford_University_logo.svg" },
            { name: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" },
            { name: "Yale University", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Yale_University_logo.svg" },
            { name: "Columbia University", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Columbia_University_logo_wordmark.svg" },
        ],
    },
    UK: {
        name: "United Kingdom",
        universities: [
            { name: "University of Oxford", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Logo.svg" },
            { name: "University of Cambridge", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/University_of_Cambridge_logo.svg" },
            { name: "Imperial College London", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Imperial_College_London_new_logo.svg" },
            { name: "UCL", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/University_College_London_logo.svg" },
            { name: "LSE", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/LSE_logo.svg" },
        ],
    },
    Germany: {
        name: "Germany",
        universities: [
            { name: "TUM Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/TUM_Logo.svg" },
            { name: "LMU Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/LMU_Muenchen_Logo.svg" },
            { name: "Heidelberg University", logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Heidelberg_University_Logo.svg" },
            { name: "Humboldt Berlin", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Humboldt-Universit%C3%A4t_zu_Berlin_Logo.svg" },
            { name: "KIT", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/KIT_Logo.svg" },
        ],
    },
    Canada: {
        name: "Canada",
        universities: [
            { name: "University of Toronto", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_logo.svg" },
            { name: "McGill University", logo: "https://upload.wikimedia.org/wikipedia/en/2/29/McGill_University_logo.svg" },
            { name: "UBC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/UBC_logo.svg/1200px-UBC_logo.svg.png" },
            { name: "University of Waterloo", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_logo.svg/1200px-University_of_Waterloo_logo.svg.png" },
        ],
    },
    Australia: {
        name: "Australia",
        universities: [
            { name: "University of Melbourne", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/University_of_Melbourne_logo.svg" },
            { name: "University of Sydney", logo: "https://upload.wikimedia.org/wikipedia/en/e/ee/University_of_Sydney_logo.svg" },
            { name: "UNSW Sydney", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/UNSW_Sydney_logo.svg" },
            { name: "Monash University", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Monash_University_logo.svg" },
        ],
    },
    India: {
        name: "India",
        universities: [
            { name: "IIT Bombay", logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg" },
            { name: "IIT Delhi", logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/IIT_Delhi_logo.svg" },
            { name: "IISc Bangalore", logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Indian_Institute_of_Science_logo.svg" },
            { name: "IIT Madras", logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" },
        ],
    },
    Ireland: {
        name: "Ireland",
        universities: [
            { name: "Trinity College Dublin", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Trinity_College_Dublin_logo.svg/1200px-Trinity_College_Dublin_logo.svg.png" },
            { name: "UCD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/University_College_Dublin_logo.svg/1200px-University_College_Dublin_logo.svg.png" },
            { name: "University of Galway", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/National_University_of_Ireland_Galway_logo.svg/1200px-National_University_of_Ireland_Galway_logo.svg.png" },
            { name: "UCC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/University_College_Cork_logo.svg/1200px-University_College_Cork_logo.svg.png" },
        ],
    },
};

const idToHotspot: Record<string, string> = {
    russia: "Russia",
    usa: "USA",
    britain: "UK",
    ulster: "UK",
    germany: "Germany",
    canada: "Canada",
    australia: "Australia",
    india: "India",
    ireland: "Ireland",
};

const GlobalHotspotMap = () => {
    const [hoveredCountry, setHoveredCountry] = useState<string>("Russia");
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section id="hotspots" className="py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F3F9] relative overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#002D62] font-black text-xs tracking-[0.3em] uppercase mb-4 block"
                    >
                        WHERE WE'RE OFFERING
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#1e1e2d] mb-6"
                    >
                        Explore These <span className="text-[#002D62] italic">Mind-Blowing</span> Study Abroad Hotspots!
                    </motion.h2>
                </div>

                {/* World Map SVG Container */}
                <div className="relative w-full max-w-6xl mx-auto bg-white/45 backdrop-blur-md rounded-[3rem] p-4 md:p-8 shadow-2xl shadow-navy-900/10 border border-white/60 overflow-hidden group/map">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                    <svg
                        viewBox="0 0 950 620"
                        className="w-full h-auto drop-shadow-2xl"
                        style={{ filter: 'drop-shadow(0 20px 40px rgba(0,45,98,0.08))' }}
                    >
                        <g stroke="white" strokeWidth="0.4" className="transition-all duration-700">
                            {Object.entries(worldMapPaths).map(([id, d]) => {
                                const hotspotKey = idToHotspot[id];
                                const isInteractive = !!hotspotKey;
                                const isActive = hoveredCountry === hotspotKey;

                                return (
                                    <motion.path
                                        key={id}
                                        d={d}
                                        initial={{ fill: "#E2E8F0" }}
                                        animate={{
                                            fill: isActive ? "#002D62" : (isInteractive ? "#CBD5E1" : "#E2E8F0"),
                                            scale: isActive ? 1.01 : 1
                                        }}
                                        className={`${isInteractive ? 'cursor-pointer hover:stroke-[#002D62]/30' : 'pointer-events-none'} transition-colors duration-300`}
                                        onMouseEnter={() => isInteractive && setHoveredCountry(hotspotKey)}
                                    />
                                );
                            })}
                        </g>

                        {/* Connection Lines & Hotspot Points */}
                        {Object.keys(hotspotData).map((key) => {
                            const pos = key === "USA" ? { x: 180, y: 195 } :
                                key === "Canada" ? { x: 210, y: 140 } :
                                    key === "Russia" ? { x: 650, y: 150 } :
                                        key === "UK" ? { x: 448, y: 160 } :
                                            key === "Ireland" ? { x: 435, y: 165 } :
                                                key === "Germany" ? { x: 475, y: 180 } :
                                                    key === "Australia" ? { x: 800, y: 460 } :
                                                        key === "India" ? { x: 675, y: 300 } : { x: 0, y: 0 };

                            return (
                                <g key={`point-${key}`}>
                                    <motion.circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r="4"
                                        animate={{
                                            scale: hoveredCountry === key ? [1, 1.5, 1] : 1,
                                            fill: hoveredCountry === key ? "#teal-400" : "#002D62"
                                        }}
                                        transition={{ repeat: hoveredCountry === key ? Infinity : 0, duration: 1.5 }}
                                        className="pointer-events-none"
                                    />
                                    {hoveredCountry === key && (
                                        <motion.circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="12"
                                            initial={{ opacity: 0.5, scale: 0 }}
                                            animate={{ opacity: 0, scale: 2 }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            fill="#14b8a6"
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </svg>

                    <AnimatePresence>
                        {hoveredCountry && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                style={{
                                    position: 'fixed',
                                    left: mousePos.x + 20,
                                    top: mousePos.y - 40,
                                    zIndex: 100,
                                }}
                                className="bg-navy-900 border border-white/20 text-white px-4 py-2 rounded-2xl text-sm font-black shadow-2xl pointer-events-none flex items-center gap-3 backdrop-blur-xl"
                            >
                                <span className="tracking-tight">{hoveredCountry}</span>
                                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse ring-4 ring-teal-400/20" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={hoveredCountry}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        >
                            {(hotspotData[hoveredCountry]?.universities || []).map((uni, idx) => (
                                <motion.div
                                    key={uni.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-[2.5rem] border border-white shadow-xl shadow-navy-900/5 hover:shadow-2xl hover:border-teal-500/30 transition-all hover:-translate-y-2 group flex flex-col items-center justify-between h-[190px]"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-slate-50/50 p-4 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                        <img
                                            src={uni.logo}
                                            alt={uni.name}
                                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(uni.name)}&background=14b8a6&color=fff&bold=true`;
                                            }}
                                        />
                                    </div>
                                    <h4 className="text-[10px] font-black text-[#1e1e2d] text-center mt-4 leading-normal uppercase tracking-widest group-hover:text-teal-600 transition-colors">
                                        {uni.name}
                                    </h4>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default GlobalHotspotMap;
