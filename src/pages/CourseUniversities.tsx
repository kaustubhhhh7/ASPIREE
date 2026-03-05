import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, MapPin, Globe, Star, ExternalLink, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { courseUniversities } from "@/data/courseUniversities";

const CourseUniversities = () => {
    const { courseName } = useParams();
    const decodedCourseName = decodeURIComponent(courseName || "");
    const [contactMessage, setContactMessage] = useState("");

    const handleEnquireClick = (info: string) => {
        setContactMessage(`I am interested in ${info}. Please provide more details.`);
        setTimeout(() => {
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // Get universities and sort by rating descending
    const universities = [...(courseUniversities[decodedCourseName] || [])].sort((a, b) => b.rating - a.rating);

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            <Navbar />

            {/* Hero Section */}
            <header className="relative pt-[100px] lg:pt-[116px] min-h-[450px] lg:min-h-[550px] flex items-center bg-[#000040] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 transition-colors group">
                        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Courses
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-4 block">Top Ranked Programs</span>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6">
                            Best Universities for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">{decodedCourseName}</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                            A curated leaderboard of the world's most prestigious institutions for {decodedCourseName} study. Sorted by academic excellence, global reputation, and student outcomes.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* University Leaderboard Table */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-black text-[#000040] flex items-center gap-3">
                            <Trophy className="w-8 h-8 text-yellow-500" />
                            Global Leaderboard
                        </h2>
                        <p className="text-gray-500 mt-2 font-medium">Comparative analysis of top institutions</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-bold text-[#000040] shadow-sm flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            Global Rankings
                        </span>
                    </div>
                </div>

                {universities.length > 0 ? (
                    <div className="overflow-x-auto rounded-[32px] border border-gray-100 shadow-2xl shadow-[#000040]/5 bg-white">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Rank/Rating</th>
                                    <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">University</th>
                                    <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest">Location</th>
                                    <th className="px-8 py-6 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {universities.map((uni, index) => (
                                    <motion.tr
                                        key={uni.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="hover:bg-teal-50/30 transition-colors group"
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-black text-sm shadow-lg shadow-navy-900/20">
                                                    #{index + 1}
                                                </div>
                                                <div className="flex items-center gap-1 text-sm font-black text-yellow-600">
                                                    <Star className="w-3.5 h-3.5 fill-current" />
                                                    {uni.rating}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl border border-gray-100 overflow-hidden flex-shrink-0">
                                                    <img src={uni.image} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <div className="font-black text-[#000040] text-lg group-hover:text-teal-600 transition-colors">{uni.name}</div>
                                                    <div className="flex gap-2 mt-1">
                                                        {uni.tags.slice(0, 2).map((tag) => (
                                                            <span key={tag} className="text-[10px] font-black text-teal-600 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded-md">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col">
                                                <div className="flex items-center text-sm font-bold text-gray-700">
                                                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-teal-500" />
                                                    {uni.location}
                                                </div>
                                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1 ml-5">
                                                    {uni.country}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-3">
                                                <button
                                                    onClick={() => handleEnquireClick(`${decodedCourseName} at ${uni.name}`)}
                                                    className="h-10 px-6 rounded-xl bg-navy-900 text-white text-xs font-black hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-500/20"
                                                >
                                                    Apply
                                                </button>
                                                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 hover:bg-teal-50 hover:text-teal-600 transition-all">
                                                    <ExternalLink size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="bg-gray-50/50 p-4 border-t border-gray-100 flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                <Globe size={14} className="text-blue-600" />
                            </div>
                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                                Note: Rankings are approximate 2024/2025 estimates and vary based on specific program and student outcomes.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200">
                        <div className="text-gray-400 mb-4 flex justify-center">
                            <GraduationCap className="w-16 h-16 opacity-20" />
                        </div>
                        <h3 className="text-2xl font-bold text-navy-900 mb-2">Data Coming Soon</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            We are currently updating our database for {decodedCourseName} universities. Please check back later.
                        </p>
                        <Link to="/" className="mt-8 inline-block bg-teal-500 text-white px-8 py-3 rounded-full font-bold">
                            Return Home
                        </Link>
                    </div>
                )}
            </section>

            {/* Counseling CTA */}
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="bg-navy-900 p-12 rounded-[40px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-3xl -z-0" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">Unsure about your choice?</h2>
                                <p className="text-gray-400 max-w-xl">Get a personalized profile evaluation from our expert medical counselors to find the university that best fits your score and aspirations.</p>
                            </div>
                            <button
                                onClick={() => handleEnquireClick(`Free Counseling for ${decodedCourseName}`)}
                                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-10 py-5 rounded-[20px] font-bold shadow-2xl shadow-teal-500/30 hover:opacity-90 transition-opacity"
                            >
                                Book Free Counseling
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection initialMessage={contactMessage} />

            <Footer />
        </div>
    );
};

export default CourseUniversities;

