import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import IndiaFootprint from "@/components/IndiaFootprint";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="Student Success Stories - AspireEach Testimonials"
                description="Read inspiring success stories and reviews from students who achieved their dream of studying abroad with AspireEach's expert guidance."
                canonical="https://aspireeach.com/testimonials"
            />
            <Navbar />

            <main className="flex-grow pt-[100px] lg:pt-[116px]">
                {/* Hero Section — Modern Student-Centric Design */}
                <section className="relative min-h-[600px] lg:min-h-[650px] flex items-center py-12 overflow-hidden bg-[#0A0F29]">
                    {/* Dynamic Background Elements */}
                    <div className="absolute inset-0 z-0">
                        {/* Mesh Gradient */}
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#14B8A6]/15 rounded-full blur-[120px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
                    </div>

                    {/* Animated Geometric Accents */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute top-20 left-[5%] w-64 h-64 border border-white/10 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-20 right-[10%] w-96 h-96 border border-white/5 rounded-[60px]"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side: Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-[#14B8A6] text-sm font-bold mb-8 mb-8"
                                >
                                    <span className="flex h-2 w-2 rounded-full bg-[#14B8A6] animate-ping" />
                                    SUCCESS STORIES
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-5xl lg:text-[52px] font-black text-white leading-[1.1] mb-6 tracking-tight"
                                >
                                    Making Global <br />
                                    Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#22D3EE] to-[#a78bfa]">Accessible</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
                                >
                                    Join thousands of students who have successfully embarked on their international academic journey with our expert guidance and support.
                                </motion.p>

                                {/* Social Proof Metric */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-6"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex -space-x-3 mb-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className={`w-10 h-10 rounded-full border-4 border-[#0A0F29] bg-slate-800 flex items-center justify-center text-white text-[10px] font-bold overflow-hidden`}>
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-50" />
                                                </div>
                                            ))}
                                            <div className="w-10 h-10 rounded-full border-4 border-[#0A0F29] bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-black">
                                                +1k
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-yellow-400 text-xs">
                                                {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                                            </div>
                                            <span className="text-white/60 text-[11px] font-medium">1,500+ Happy Students</span>
                                        </div>
                                    </div>

                                    <div className="h-10 w-px bg-white/10 hidden sm:block" />

                                    <div className="hidden sm:block">
                                        <div className="text-2xl font-black text-white leading-none mb-1">4.9/5</div>
                                        <div className="text-white/40 text-[9px] font-bold tracking-widest uppercase">Student Rating</div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right Side: Interactive Visuals */}
                            <div className="relative hidden lg:block h-[500px]">
                                {/* Central Floating Card */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] p-6 rounded-[32px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
                                >
                                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#14B8A6] rounded-full flex items-center justify-center shadow-lg shadow-[#14B8A6]/20">
                                        <span className="text-3xl">🎓</span>
                                    </div>

                                    <div className="flex items-center gap-0.5 text-yellow-500 mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-sm">★</span>)}
                                    </div>

                                    <p className="text-white text-base font-medium leading-[1.5] mb-6 italic">
                                        "AspireEach made my dream of studying in the UK a reality. Truly life-changing!"
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#14B8A6] to-[#22D3EE] flex items-center justify-center text-white text-sm font-black">A</div>
                                        <div>
                                            <div className="text-white font-bold text-base">Ananya S.</div>
                                            <div className="text-white/40 text-xs">Studying in UK</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Scattered Decorative Small Cards */}
                                <motion.div
                                    animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-0 right-0 z-30 w-44 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 font-bold">R</div>
                                        <div className="flex-1">
                                            <div className="h-2 w-20 bg-white/20 rounded-full mb-2" />
                                            <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <span className="text-[#14B8A6]">✓</span>
                                        <span className="text-white/60 text-[10px] font-bold">100% VISA SUCCESS</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-10 left-0 z-10 w-40 p-3 rounded-2xl bg-blue-500/10 backdrop-blur-md border border-white/5 shadow-xl"
                                >
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-white mb-1">98%</div>
                                        <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest leading-none">Accepted Rate</div>
                                    </div>
                                </motion.div>

                                {/* Background elements behind cards */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/30 rounded-full blur-[100px] z-0" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Testimonials Carousel Section */}
                <Testimonials />

                {/* Video Testimonials Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                                Video <span className="text-gradient">Testimonials</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Watch our students share their personal experiences and success journeys.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { id: "aiMAIeXWSD0", title: "Success Story 01" },
                                { id: "pNv6Z432oxk", title: "Success Story 02" },
                                { id: "WKfLlrwrCVE", title: "Success Story 03" },
                            ].map((video, index) => (
                                <motion.a
                                    key={index}
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="group relative aspect-video bg-slate-100 rounded-[32px] overflow-hidden border border-slate-200 cursor-pointer shadow-lg shadow-slate-200/50"
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                            }}
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors z-10 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all">
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-primary border-b-[8px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl">
                                            <p className="font-bold text-slate-900 text-lg leading-none">{video.title}</p>
                                            <p className="text-sm text-slate-600 mt-2 font-medium">Global Education Journey</p>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global Alumni Network Section */}
                <IndiaFootprint />

                {/* FAQ Section */}
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default TestimonialsPage;

