import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { founders } from "@/data/founders";

const FounderProfile = () => {
    const { id } = useParams<{ id: string }>();
    const founder = founders.find(f => f.id === id);

    if (!founder) {
        return <Navigate to="/about-us" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Navbar />

            <main className="flex-grow pt-[180px] lg:pt-[220px] pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-20">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#002D62] hover:text-teal-600 font-semibold mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <div className="bg-white/80 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 shadow-[0_20px_70px_-15px_rgba(11,18,56,0.08)] border border-white/40 overflow-hidden relative">
                        {/* Background blobs */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-teal-400/20 to-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/10 to-teal-500/20 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
                            {/* Left Column - Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: -50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="w-full md:w-1/3 flex flex-col items-center"
                            >
                                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-[2.5rem] overflow-hidden bg-slate-50 ring-8 ring-white shadow-2xl z-10">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 to-blue-600/20 mix-blend-overlay z-10" />
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem] pointer-events-none z-20"></div>
                                </div>

                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 flex items-center gap-3 px-6 py-3 bg-[#0A66C2] text-white rounded-xl hover:bg-[#004182] transition-colors shadow-lg hover:shadow-blue-500/30 font-semibold"
                                >
                                    <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                                    <span>Connect on LinkedIn</span>
                                </a>
                            </motion.div>

                            {/* Right Column - Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                                className="w-full md:w-2/3 flex flex-col"
                            >
                                <h1 className="text-4xl md:text-5xl font-black text-[#0B1238] mb-4 tracking-tight">
                                    {founder.name}
                                </h1>

                                <div className="flex items-center gap-3 mb-8">
                                    <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-teal-500 rounded-full" />
                                    <span className="text-sm font-black tracking-[0.2em] text-teal-600 uppercase">
                                        Co-Founder
                                    </span>
                                </div>

                                <p className="text-[#002D62] text-xl md:text-2xl font-semibold italic opacity-90 mb-8 border-l-4 border-teal-500 pl-6 py-2">
                                    "{founder.role.split(' - ')[1] || founder.role}"
                                </p>

                                <div className="prose prose-lg text-slate-600 font-medium whitespace-pre-line leading-relaxed pb-8">
                                    {founder.bio}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FounderProfile;
