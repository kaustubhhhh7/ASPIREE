import { motion } from "framer-motion";
import { GraduationCap, MapPin, ArrowRight, UserCheck, Globe } from "lucide-react";

const mentors = [
    {
        name: "Aarav Mehta",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        indiaCollege: "IIT Bombay",
        indiaCity: "Mumbai",
        globalUni: "Harvard University",
        country: "USA",
        flag: "🇺🇸",
        course: "M.S. in Data Science"
    },
    {
        name: "Ishita Sharma",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        indiaCollege: "University of Delhi",
        indiaCity: "New Delhi",
        globalUni: "University of Oxford",
        country: "UK",
        flag: "🇬🇧",
        course: "Public Policy"
    },
    {
        name: "Rohan Das",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        indiaCollege: "SRM University",
        indiaCity: "Chennai",
        globalUni: "University of Toronto",
        country: "Canada",
        flag: "🇨🇦",
        course: "MBA"
    },
    {
        name: "Ananya Iyer",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        indiaCollege: "Manipal Institute",
        indiaCity: "Manipal",
        globalUni: "NUS Singapore",
        country: "Singapore",
        flag: "🇸🇬",
        course: "Computer Science"
    }
];

const AlumniNetwork = () => {
    return (
        <section className="py-24 bg-[#F8FAFC] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: India Map Visual */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Decorative Background for Map */}
                            <div className="absolute inset-0 bg-teal-500/5 blur-[100px] rounded-full" />

                            <div className="relative z-10 p-8">
                                <h2 className="text-4xl font-black text-navy-900 mb-6">
                                    Our Pan-India <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Alumni Footprint</span>
                                </h2>
                                <p className="text-slate-600 text-lg mb-12 max-w-md">
                                    We cater to students from India's most prestigious institutions, helping them bridge the gap to world-class education.
                                </p>

                                {/* Stylized India Map Representation */}
                                <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
                                    {/* Simple India Outline Placeholder (SVG) */}
                                    <svg viewBox="0 0 400 500" className="w-full h-full text-slate-200 fill-current opacity-60">
                                        <path d="M200 40 L230 60 L240 90 L270 110 L280 150 L270 180 L285 220 L300 250 L290 280 L270 320 L240 350 L210 380 L195 430 L180 380 L160 360 L130 330 L110 300 L120 260 L105 220 L120 180 L110 140 L120 100 L150 70 Z" />
                                    </svg>

                                    {/* Connection Lines & Points */}
                                    {mentors.map((m, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: i * 0.2 }}
                                            className="absolute"
                                            style={{
                                                top: `${20 + i * 20}%`,
                                                left: `${30 + (i % 2) * 20}%`
                                            }}
                                        >
                                            <div className="relative">
                                                <div className="w-4 h-4 rounded-full bg-teal-500 animate-pulse" />
                                                <div className="absolute top-6 left-0 whitespace-nowrap bg-white px-3 py-1.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">From</span>
                                                    <span className="text-[11px] font-bold text-navy-900">{m.indiaCollege}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Mentor Profile Cards */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {mentors.map((mentor, index) => (
                                <motion.div
                                    key={mentor.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 relative overflow-hidden"
                                >
                                    {/* Destination country flag */}
                                    <div className="absolute top-4 right-4 text-2xl opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-125">
                                        {mentor.flag}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white group-hover:border-teal-500 transition-colors">
                                                <img src={mentor.photo} alt={mentor.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-black text-navy-900 group-hover:text-teal-600 transition-colors">{mentor.name}</h3>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{mentor.course}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-50 transition-colors">
                                                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Indian Origin</span>
                                                    <span className="text-sm font-bold text-navy-900">{mentor.indiaCollege}</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-center -my-2 opacity-20 group-hover:opacity-100 transition-all">
                                                <ArrowRight className="w-4 h-4 text-teal-500 transform group-hover:rotate-90 sm:group-hover:rotate-0 transition-transform" />
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                                                    <GraduationCap className="w-4 h-4 text-teal-600" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest block">Global Success</span>
                                                    <span className="text-sm font-bold text-navy-900">{mentor.globalUni}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full mt-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-teal-600 shadow-xl shadow-teal-500/20">
                                            Talk to {mentor.name.split(' ')[0]}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats Banner */}
                        <div className="mt-12 p-8 rounded-[40px] bg-navy-900 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 blur-3xl" />
                            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-white">500+</div>
                                        <div className="text-xs font-bold text-teal-400 uppercase tracking-widest">Global Mentors</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                        <UserCheck className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-white">100%</div>
                                        <div className="text-xs font-bold text-teal-400 uppercase tracking-widest">Alumni Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlumniNetwork;
