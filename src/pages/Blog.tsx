import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import SEO from "@/components/SEO";
import blogHeroImage from "@/assets/images/blog-hero.png";


const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...new Set(blogs.map(blog => blog.category))];

    const filteredBlogs = selectedCategory === "All"
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <SEO
                title="Blog - Latest Updates on Study Abroad, Scholarships, and Visa"
                description="Expert advice, student success stories, and the latest news on global education, finance, and university life."
                canonical="https://aspireeach.com/blog"
            />
            <Navbar />

            <main className="flex-grow pt-[100px] lg:pt-[116px]">
                {/* Hero Section — Editorial Magazine Style */}
                <section className="relative min-h-[550px] lg:min-h-[600px] flex items-center bg-[#FDFBF7] overflow-hidden border-b-4 border-[#0B1238]">
                    {/* Left Accent Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#14B8A6] via-[#002D62] to-[#14B8A6]" />

                    {/* Dotted grid pattern */}
                    <div className="absolute inset-0 opacity-[0.035]" style={{
                        backgroundImage: "radial-gradient(#0B1238 1.5px, transparent 1.5px)",
                        backgroundSize: "28px 28px"
                    }} />

                    {/* Decorative large rotated "BLOG" watermark */}
                    <div
                        className="absolute right-[-2%] top-1/2 -translate-y-1/2 text-[140px] lg:text-[170px] font-black text-[#0B1238]/[0.03] leading-none select-none pointer-events-none tracking-tighter"
                        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                        BLOG
                    </div>

                    {/* Large decorative ink splash circle */}
                    <div className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full bg-[#002D62]/[0.03] blur-xl pointer-events-none" />
                    <div className="absolute -bottom-24 right-[8%] w-80 h-80 rounded-full bg-[#14B8A6]/[0.06] blur-2xl pointer-events-none" />

                    <div className="container mx-auto px-4 pl-10 relative z-10 w-full py-12 lg:py-0">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="max-w-2xl lg:max-w-none lg:w-3/5">
                                {/* Issue header — editorial feel */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <div className="flex items-center gap-2 bg-[#0B1238] text-white px-4 py-1.5 rounded-full">
                                        <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                                        <span className="text-xs font-black tracking-[0.2em] uppercase">Aspire Insights</span>
                                    </div>
                                    <div className="h-px flex-1 max-w-[100px] bg-[#0B1238]/20" />
                                    <span className="text-[#0B1238]/40 text-xs font-bold uppercase tracking-widest">Est. 2014</span>
                                </motion.div>

                                {/* Giant editorial headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.6 }}
                                    className="text-5xl md:text-7xl lg:text-[85px] font-black text-[#0B1238] leading-[0.95] tracking-tight mb-8"
                                >
                                    Latest{" "}
                                    <span className="relative">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#14B8A6]">Scoops</span>
                                    </span>
                                    <br />
                                    <span className="text-[#0B1238]/90">and Blogs</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[#4a5568] text-lg lg:text-xl leading-relaxed max-w-xl mb-10"
                                >
                                    Expert advice, student success stories, and the latest updates on global education and finance.
                                </motion.p>

                                {/* Animated category pills teaser */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {["Study Abroad", "Scholarships", "Visa Tips", "Finance", "University Life", "IELTS / TOEFL"].map((tag, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + i * 0.07 }}
                                            className="px-4 py-1.5 rounded-full border border-[#0B1238]/15 bg-white text-[#0B1238] text-xs font-bold shadow-sm hover:border-[#14B8A6] hover:text-[#14B8A6] transition-colors cursor-pointer"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Hero Illustration */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                                className="hidden lg:flex lg:w-2/5 justify-center relative items-center"
                            >
                                {/* Glowing backdrop for image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#14B8A6]/20 to-[#002D62]/20 rounded-full blur-3xl opacity-70" />
                                <motion.img
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    src={blogHeroImage}
                                    alt="Education Insights"
                                    className="w-full max-w-[450px] object-contain drop-shadow-[0_20px_50px_rgba(0,45,98,0.2)] relative z-10"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Filters Section */}
                <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                                            ? "bg-[#0B1238] text-white shadow-lg shadow-blue-900/20"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="relative flex-grow max-w-md hidden md:block">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Blog (Optional, but let's make the first one prominent) */}
                <section className="py-16 container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {filteredBlogs.map((blog, index) => (
                            <motion.article
                                key={blog.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full"
                            >
                                <Link to={`/blog/${blog.id}`} className="flex flex-col h-full cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 border border-white/20 rounded-full overflow-hidden">
                                            <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0B1238] text-xs font-black shadow-sm flex items-center gap-1.5 ">
                                                <Tag size={12} className="text-blue-600" />
                                                {blog.category.toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1238]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-slate-400 text-xs font-bold mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-blue-500" />
                                                {blog.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <User size={14} className="text-blue-500" />
                                                {blog.author}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-black text-[#0B1238] mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                            {blog.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                                            {blog.excerpt}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex items-center gap-2 text-[#0B1238] font-black text-sm group/link hover:gap-3 transition-all">
                                                READ MORE
                                                <ArrowRight size={18} className="text-blue-600 transition-transform group-hover/link:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0B1238] to-[#002D62] rounded-[48px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Subscribe to our Scoop!</h2>
                                <p className="text-blue-100/70 mb-10 max-w-xl mx-auto">Get the best study abroad insights and finance tips delivered straight to your inbox.</p>
                                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-sm"
                                    />
                                    <button className="px-8 py-4 rounded-2xl bg-white text-[#0B1238] font-black hover:bg-blue-50 transition-all shadow-xl">
                                        SUBSCRIBE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;

