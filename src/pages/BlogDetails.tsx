import { useParams, useNavigate, Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Tag, Share2 } from "lucide-react";
import Squares from "@/components/ui/Squares";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find(b => b.id === Number(id));

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center text-[#0B1238]">
                <h1 className="text-3xl font-black mb-4">Post not found</h1>
                <button
                    onClick={() => navigate('/blog')}
                    className="px-6 py-2 bg-[#0B1238] text-white rounded-xl font-bold"
                >
                    Back to Blog
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Navbar />

            <main className="flex-grow pt-16 lg:pt-[116px]">
                {/* Hero section for the blog post */}
                <header className="relative py-20 bg-[#0B1238] overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <Squares speed={0.2} squareSize={40} />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={() => navigate('/blog')}
                            className="flex items-center gap-2 text-blue-400 font-bold mb-8 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} />
                            BACK TO INSIGHTS
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black border border-blue-500/20 backdrop-blur-sm">
                                    {blog.category.toUpperCase()}
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-blue-500" />
                                        {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <User size={14} className="text-blue-500" />
                                        {blog.author}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                                {blog.title}
                            </h1>
                        </motion.div>
                    </div>
                </header>

                <article className="container mx-auto px-4 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">
                            {/* Main Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-black text-[#0B1238] mb-12 tracking-tight leading-tight">
                                    {blog.title}
                                </h1>

                                <div className="prose prose-slate max-w-none">
                                    <div className="space-y-10">
                                        {(blog.content || blog.excerpt).split('\n\n').map((paragraph, idx) => (
                                            <p
                                                key={idx}
                                                className="text-[1.25rem] md:text-[1.35rem] leading-[1.8] text-[#4A5568] font-normal tracking-tight"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-20 pt-12 border-t border-slate-200 flex flex-wrap items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-[#0B1238] flex items-center justify-center text-white">
                                            <User size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[#0B1238] font-black text-lg">Written by {blog.author}</p>
                                            <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Expert Insights</p>
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-100 text-[#0B1238] font-black hover:bg-[#0B1238] hover:text-white transition-all duration-300">
                                        <Share2 size={20} />
                                        SHARE STORY
                                    </button>
                                </div>
                            </motion.div>

                            {/* Sidebar */}
                            <aside className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="bg-[#F8F9FE] rounded-[32px] p-8 border border-slate-100"
                                >
                                    <h2 className="text-2xl font-black text-[#0B1238] mb-8">Recent posts</h2>
                                    <div className="space-y-8">
                                        {blogs
                                            .filter(b => b.id !== blog.id)
                                            .slice(0, 3)
                                            .map((recentBlog) => (
                                                <Link
                                                    key={recentBlog.id}
                                                    to={`/blog/${recentBlog.id}`}
                                                    className="flex gap-4 group cursor-pointer"
                                                >
                                                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-white">
                                                        <img
                                                            src={recentBlog.image}
                                                            alt={recentBlog.title}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <p className="text-slate-500 text-sm font-bold mb-1">By {recentBlog.author}</p>
                                                        <h3 className="text-[#0B1238] font-black text-base leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                                                            {recentBlog.title}
                                                        </h3>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </motion.div>

                                {/* Newsletter Sidebar Widget */}
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black mb-2">Join our Scoop!</h3>
                                        <p className="text-blue-100/80 text-sm mb-6">Stay updated with the latest in student finance.</p>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none mb-3 text-sm"
                                        />
                                        <button className="w-full py-3 rounded-xl bg-white text-blue-600 font-black text-sm hover:bg-blue-50 transition-colors">
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2" />
                                </div>
                            </aside>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetails;
