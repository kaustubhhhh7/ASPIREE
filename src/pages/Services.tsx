import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import {
    ArrowRight,
    ShieldCheck,
    Compass,
    BookOpen,
    Target,
    Briefcase,
    PlaneTakeoff
} from 'lucide-react';

const plans = [
    {
        name: "Aspire Pro Plan",
        tagline: "Apply to a wide Range of World Class Schools!",
        features: [
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ]
    },
    {
        name: "Aspire Top Tier",
        tagline: "Apply To Chosen Premium Tier 1 Schools!",
        features: [
            "Apply only to Top schools in each country",
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance",
            "University Interview Preparation",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ],
        highlight: true
    },
    {
        name: "Aspire Freshman Plan",
        tagline: "Apply To Globally Acclaimed Universities!",
        features: [
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance (UCAS, Common App)",
            "Scholarship Assistance",
            "University Interview Preparation",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ]
    },
    {
        name: "Aspire MBA Plan",
        tagline: "Apply To The Top B Schools!",
        features: [
            "Apply to B-Schools in any Two Countries",
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance",
            "University Interview Preparation",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ]
    },
    {
        name: "Aspire MBBS Plan",
        tagline: "Apply To The Best Medical Schools!",
        features: [
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ]
    },
    {
        name: "Aspire Visa Plan",
        tagline: "Full Proof Visa Assistance",
        features: [
            "Assistance on VISA Process",
            "Assistance on VISA Application",
            "Assistance on VISA Interview Preparation",
            "Helping in Slot booking for VISA / Biometrics",
            "Help on VISA Cover Letter",
            "Understanding on Funding Documentation"
        ]
    },
    {
        name: "Aspire Language Proficiency Plan",
        tagline: "Learn from the experts! (IELTS/TOEFL/PTE)",
        features: [
            "Comprehensive exam preparation",
            "Online and Offline Classroom",
            "Flexible Class timings",
            "One on One Preparation",
            "Experienced and certified instructors",
            "Tailored study plans",
            "Proven strategies to improve performance",
            "Mock exams and progress tracking",
            "Study Material and test papers",
            "Detailed feedback",
            "Test Booking Support"
        ]
    },
    {
        name: "Aspire Psychometric Assessment",
        tagline: "Unlock your Career Opportunities!",
        features: [
            "Psychometric Assessments",
            "Official Assessment Reports",
            "One on One Counselling with Student",
            "One on One Counselling with Parents",
            "Exploring Career Opportunities",
            "Setting Up Goals",
            "Personalised Career Road Map",
            "Access to Career Workshops",
            "Dedicated counsellor for guidance"
        ]
    }
];



import SEO from "@/components/SEO";

const Services = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [activePlanIndex, setActivePlanIndex] = useState(0);
    const [contactMessage, setContactMessage] = useState("");

    const handleEnquireClick = (planName: string) => {
        setContactMessage(`I am interested in the ${planName}. Please provide more details.`);
        setTimeout(() => {
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const bgColors = [
        '#CCFBF1', // Phase 01: Light Teal
        '#E0F2FE', // Phase 02: Light Sky
        '#E0E7FF', // Phase 03: Light Indigo
        '#D1FAE5', // Phase 04: Light Emerald
        '#CFFAFE'  // Phase 05: Light Cyan
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Our Services - Study Abroad Packages"
                description="Comprehensive study abroad services including profile building, university shortlisting, visa assistance, and exam preparation for IELTS, GRE, GMAT."
                canonical="https://aspireeach.com/services"
            />
            <Navbar />

            <main className="flex-grow pt-[100px] lg:pt-[116px]">
                {/* Hero Section — Diagonal Split with Compass */}
                <section className="relative min-h-[540px] lg:min-h-[620px] flex flex-col overflow-hidden">
                    {/* Top Diagonal Area */}
                    <div className="relative flex flex-1">
                        {/* Left: Light panel with compass watermark */}
                        <div className="relative flex-1 flex items-center bg-[#FDFBF7] py-20 px-8 md:px-16 lg:px-20 overflow-hidden">
                            {/* Compass SVG watermark */}
                            <svg className="absolute right-8 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.06] pointer-events-none" viewBox="0 0 200 200" fill="none">
                                <circle cx="100" cy="100" r="95" stroke="#002D62" strokeWidth="3" />
                                <circle cx="100" cy="100" r="70" stroke="#002D62" strokeWidth="1.5" strokeDasharray="4 4" />
                                <circle cx="100" cy="100" r="45" stroke="#002D62" strokeWidth="1.5" />
                                <circle cx="100" cy="100" r="10" fill="#002D62" />
                                {/* N S E W */}
                                <polygon points="100,5 93,40 107,40" fill="#002D62" />
                                <polygon points="100,195 93,160 107,160" fill="#002D62" opacity="0.5" />
                                <polygon points="195,100 160,93 160,107" fill="#002D62" opacity="0.5" />
                                <polygon points="5,100 40,93 40,107" fill="#002D62" opacity="0.5" />
                                {/* Tick marks */}
                                {Array.from({ length: 36 }).map((_, i) => (
                                    <line key={i}
                                        x1={100 + 90 * Math.cos(i * 10 * Math.PI / 180)}
                                        y1={100 + 90 * Math.sin(i * 10 * Math.PI / 180)}
                                        x2={100 + (i % 9 === 0 ? 80 : 86) * Math.cos(i * 10 * Math.PI / 180)}
                                        y2={100 + (i % 9 === 0 ? 80 : 86) * Math.sin(i * 10 * Math.PI / 180)}
                                        stroke="#002D62" strokeWidth={i % 9 === 0 ? "2" : "1"}
                                    />
                                ))}
                            </svg>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                className="relative z-10 max-w-lg"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 }}
                                    className="flex items-center gap-3 mb-6"
                                >
                                    <div className="h-[2px] w-8 bg-[#14B8A6]" />
                                    <span className="text-[#14B8A6] font-bold text-xs tracking-[0.22em] uppercase">Our Offerings</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0B1238] leading-[1.06] mb-6"
                                >
                                    Set sail on your <br />journey to{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#14B8A6]">success</span>
                                    <br />with our roadmap
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[#4a5568] text-lg leading-relaxed max-w-sm"
                                >
                                    Comprehensive support at every step of your study abroad journey, from early planning to your first day on campus.
                                </motion.p>
                            </motion.div>
                        </div>

                        {/* Diagonal clip right panel */}
                        <div
                            className="hidden lg:block absolute top-0 right-0 h-full w-[48%] bg-[#0B1238] overflow-hidden"
                            style={{ clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                        >
                            {/* Glow rings */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                {[320, 240, 160, 80].map((size, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute rounded-full border border-[#14B8A6]/20"
                                        style={{ width: size, height: size, top: -size / 2, left: -size / 2 }}
                                        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
                                        transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                                    />
                                ))}
                                <div className="w-16 h-16 rounded-full bg-[#14B8A6]/20 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-[#14B8A6]/40" />
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#14B8A6]/10 rounded-full blur-3xl" />
                        </div>
                    </div>

                    {/* Bottom: 5-step animated nodes bar */}
                    <div className="relative bg-[#0B1238] py-5 px-8 z-10">
                        <div className="container mx-auto">
                            <div className="flex items-center justify-center gap-0">
                                {[
                                    { label: "Profile", num: "01" },
                                    { label: "Exams", num: "02" },
                                    { label: "Admission", num: "03" },
                                    { label: "Finance & Visa", num: "04" },
                                    { label: "Take-off!", num: "05" },
                                ].map((step, i) => (
                                    <React.Fragment key={i}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            className="flex flex-col items-center gap-1.5"
                                        >
                                            <div className="w-9 h-9 rounded-full bg-[#14B8A6]/15 border border-[#14B8A6]/40 flex items-center justify-center">
                                                <span className="text-[#14B8A6] text-xs font-black">{step.num}</span>
                                            </div>
                                            <span className="text-white/50 text-[10px] font-bold tracking-wide hidden sm:block">{step.label}</span>
                                        </motion.div>
                                        {i < 4 && (
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                                                className="flex-1 max-w-[80px] h-[1px] bg-gradient-to-r from-[#14B8A6]/40 to-[#14B8A6]/10 origin-left"
                                            />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Roadmap - Scroll Stack */}
                <section style={{ backgroundColor: bgColors[activeCardIndex] || '#FDFBF7' }} className="pt-40 pb-16 relative transition-colors duration-[1500ms] ease-in-out">
                    {/* Background Blobs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-navy-900/5 rounded-full blur-[100px]" />
                    </div>

                    <div className="container mx-auto px-4 text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#002D62] uppercase bg-[#002D62]/5 rounded-full"
                        >
                            The Journey
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0B1238] leading-tight">
                            Your Elite Roadmap <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#0B1238] font-black italic">to Global Success</span>
                        </h2>
                    </div>

                    <ScrollStack useWindowScroll={true} itemStackDistance={25} baseScale={0.88} onActiveCardChange={setActiveCardIndex} className="pb-10">
                        <ScrollStackItem itemClassName="group">
                            <div className="flex flex-col md:flex-row h-full w-full bg-white relative overflow-hidden">
                                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center relative z-20 bg-white">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3.5 text-[#14B8A6] bg-[#14B8A6]/10 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                            <Compass size={24} strokeWidth={2.5} />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-[2px] w-8 bg-[#14B8A6]/50 rounded-full" />
                                            <span className="text-[#002D62] font-bold text-[12px] uppercase tracking-[0.2em] opacity-80">Phase 01</span>
                                        </div>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl lg:text-[48px] font-black mb-6 text-[#0B1238] tracking-tight leading-[1.08] relative z-10">
                                        Counseling & <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#14B8A6]">Profile Enhancement</span>
                                    </h2>

                                    <p className="text-[#0B1238]/70 text-lg md:text-xl font-medium max-w-xl leading-relaxed relative z-10">
                                        Personalized guidance to architect a high-fidelity academic profile that stands out globally.
                                    </p>
                                </div>
                                <div className="hidden md:block w-2/5 lg:w-[45%] relative overflow-hidden border-l border-slate-100 bg-slate-50">
                                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Counseling" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] group-hover:-rotate-1 transition-all duration-[1.5s] ease-out will-change-transform" />

                                    <div className="absolute inset-0 bg-[#002D62]/0 group-hover:bg-[#002D62]/5 transition-colors duration-1000 pointer-events-none z-10" />

                                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,45,98,0.1)] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[0.6s] delay-100 z-20">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#14B8A6]/10 text-[#14B8A6]">
                                                <Compass className="w-5 h-5" />
                                            </div>
                                            <div className="pr-3">
                                                <p className="text-[10px] text-[#002D62]/60 uppercase font-black tracking-widest mb-0.5">Status</p>
                                                <p className="text-[14px] text-[#0B1238] font-bold tracking-tight leading-none">Analysis Active</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>

                        <ScrollStackItem itemClassName="group">
                            <div className="flex flex-col md:flex-row h-full w-full bg-white relative overflow-hidden">
                                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center relative z-20 bg-white">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3.5 text-[#06B6D4] bg-[#06B6D4]/10 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                            <BookOpen size={24} strokeWidth={2.5} />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-[2px] w-8 bg-[#06B6D4]/50 rounded-full" />
                                            <span className="text-[#002D62] font-bold text-[12px] uppercase tracking-[0.2em] opacity-80">Phase 02</span>
                                        </div>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl lg:text-[48px] font-black mb-6 text-[#0B1238] tracking-tight leading-[1.08] relative z-10">
                                        Elite <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#06B6D4]">Exam Preparation</span>
                                    </h2>

                                    <p className="text-[#0B1238]/70 text-lg md:text-xl font-medium max-w-xl leading-relaxed relative z-10">
                                        Structured, expert-led coaching for IELTS, TOEFL, GRE and GMAT with rigorous mock cycles.
                                    </p>
                                </div>
                                <div className="hidden md:block w-2/5 lg:w-[45%] relative overflow-hidden border-l border-slate-100 bg-slate-50">
                                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" alt="Exams" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] group-hover:-rotate-1 transition-all duration-[1.5s] ease-out will-change-transform" />

                                    <div className="absolute inset-0 bg-[#002D62]/0 group-hover:bg-[#002D62]/5 transition-colors duration-1000 pointer-events-none z-10" />

                                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,45,98,0.1)] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[0.6s] delay-100 z-20">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#06B6D4]/10 text-[#06B6D4]">
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <div className="pr-3">
                                                <p className="text-[10px] text-[#002D62]/60 uppercase font-black tracking-widest mb-0.5">Status</p>
                                                <p className="text-[14px] text-[#0B1238] font-bold tracking-tight leading-none">Skills Upgrading</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>

                        <ScrollStackItem itemClassName="group">
                            <div className="flex flex-col md:flex-row h-full w-full bg-white relative overflow-hidden">
                                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center relative z-20 bg-white">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3.5 text-[#002D62] bg-[#002D62]/10 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                            <Target size={24} strokeWidth={2.5} />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-[2px] w-8 bg-[#002D62]/50 rounded-full" />
                                            <span className="text-[#002D62] font-bold text-[12px] uppercase tracking-[0.2em] opacity-80">Phase 03</span>
                                        </div>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl lg:text-[48px] font-black mb-6 text-[#0B1238] tracking-tight leading-[1.08] relative z-10">
                                        Targeting <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#002D62]">Dream Admits</span>
                                    </h2>

                                    <p className="text-[#0B1238]/70 text-lg md:text-xl font-medium max-w-xl leading-relaxed relative z-10">
                                        Strategic university selection based on career trajectory, ROI, and your unique strengths.
                                    </p>
                                </div>
                                <div className="hidden md:block w-2/5 lg:w-[45%] relative overflow-hidden border-l border-slate-100 bg-slate-50">
                                    <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" alt="University" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] group-hover:-rotate-1 transition-all duration-[1.5s] ease-out will-change-transform" />

                                    <div className="absolute inset-0 bg-[#002D62]/0 group-hover:bg-[#002D62]/5 transition-colors duration-1000 pointer-events-none z-10" />

                                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,45,98,0.1)] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[0.6s] delay-100 z-20">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#002D62]/10 text-[#002D62]">
                                                <Target className="w-5 h-5" />
                                            </div>
                                            <div className="pr-3">
                                                <p className="text-[10px] text-[#002D62]/60 uppercase font-black tracking-widest mb-0.5">Status</p>
                                                <p className="text-[14px] text-[#0B1238] font-bold tracking-tight leading-none">Target Locked</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>

                        <ScrollStackItem itemClassName="group">
                            <div className="flex flex-col md:flex-row h-full w-full bg-white relative overflow-hidden">
                                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center relative z-20 bg-white">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3.5 text-[#14B8A6] bg-[#14B8A6]/10 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                            <Briefcase size={24} strokeWidth={2.5} />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-[2px] w-8 bg-[#14B8A6]/50 rounded-full" />
                                            <span className="text-[#002D62] font-bold text-[12px] uppercase tracking-[0.2em] opacity-80">Phase 04</span>
                                        </div>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl lg:text-[48px] font-black mb-6 text-[#0B1238] tracking-tight leading-[1.08] relative z-10">
                                        Finance & <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#14B8A6]">Visa Mastery</span>
                                    </h2>

                                    <p className="text-[#0B1238]/70 text-lg md:text-xl font-medium max-w-xl leading-relaxed relative z-10">
                                        End-to-end guidance on education loans, documentation, and mock visa interviews for 100% success.
                                    </p>
                                </div>
                                <div className="hidden md:block w-2/5 lg:w-[45%] relative overflow-hidden border-l border-slate-100 bg-slate-50">
                                    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" alt="Finance" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] group-hover:-rotate-1 transition-all duration-[1.5s] ease-out will-change-transform" />

                                    <div className="absolute inset-0 bg-[#002D62]/0 group-hover:bg-[#002D62]/5 transition-colors duration-1000 pointer-events-none z-10" />

                                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,45,98,0.1)] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[0.6s] delay-100 z-20">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#14B8A6]/10 text-[#14B8A6]">
                                                <Briefcase className="w-5 h-5" />
                                            </div>
                                            <div className="pr-3">
                                                <p className="text-[10px] text-[#002D62]/60 uppercase font-black tracking-widest mb-0.5">Status</p>
                                                <p className="text-[14px] text-[#0B1238] font-bold tracking-tight leading-none">Funds Verified</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>

                        <ScrollStackItem itemClassName="group">
                            <div className="flex flex-col md:flex-row h-full w-full bg-white relative overflow-hidden">
                                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center relative z-20 bg-white">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3.5 text-[#06B6D4] bg-[#06B6D4]/10 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                            <PlaneTakeoff size={24} strokeWidth={2.5} />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-[2px] w-8 bg-[#06B6D4]/50 rounded-full" />
                                            <span className="text-[#002D62] font-bold text-[12px] uppercase tracking-[0.2em] opacity-80">Phase 05</span>
                                        </div>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl lg:text-[48px] font-black mb-6 text-[#0B1238] tracking-tight leading-[1.08] relative z-10">
                                        Ready for <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#06B6D4]">Take-off!</span>
                                    </h2>

                                    <p className="text-[#0B1238]/70 text-lg md:text-xl font-medium max-w-xl leading-relaxed relative z-10">
                                        Handling your accommodation, insurance, forex, and vital pre-departure briefings with precision.
                                    </p>
                                </div>
                                <div className="hidden md:block w-2/5 lg:w-[45%] relative overflow-hidden border-l border-slate-100 bg-slate-50">
                                    <img src="https://images.unsplash.com/photo-1569096658934-8c4d63b27b99?auto=format&fit=crop&q=80" alt="Take-off" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] group-hover:-rotate-1 transition-all duration-[1.5s] ease-out will-change-transform" />

                                    <div className="absolute inset-0 bg-[#002D62]/0 group-hover:bg-[#002D62]/5 transition-colors duration-1000 pointer-events-none z-10" />

                                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,45,98,0.1)] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[0.6s] delay-100 z-20">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#06B6D4]/10 text-[#06B6D4]">
                                                <PlaneTakeoff className="w-5 h-5" />
                                            </div>
                                            <div className="pr-3">
                                                <p className="text-[10px] text-[#002D62]/60 uppercase font-black tracking-widest mb-0.5">Status</p>
                                                <p className="text-[14px] text-[#0B1238] font-bold tracking-tight leading-none">Cleared for Flight</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    </ScrollStack>
                </section>

                {/* Tailor Made Plans - Redesigned Tab Layout */}
                <section className="py-16 lg:py-20 bg-[#FDFBF7] relative overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Left Side: Sidebar & Header */}
                            <div className="lg:w-1/3">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-8"
                                >
                                    <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary/5 rounded-full">
                                        Pricing & Plans
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black mb-3 text-slate-900 leading-tight">
                                        Tailor Made <br />
                                        Plans <span className="text-primary italic">Just For You</span>
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Choose the plan that best fits your global educational aspirations. Precision-engineered for success.
                                    </p>
                                </motion.div>

                                <div className="space-y-2">
                                    {plans.map((plan, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setActivePlanIndex(index)}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`w-full group relative flex items-center justify-between p-3 rounded-lg transition-all duration-300 text-left ${activePlanIndex === index
                                                ? 'bg-primary text-white shadow-md shadow-primary/20 translate-x-1.5'
                                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                                                }`}
                                        >
                                            <span className="font-bold text-sm">{plan.name}</span>
                                            <ArrowRight className={`w-4 h-4 transition-all duration-300 ${activePlanIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                                                }`} />
                                        </motion.button>
                                    ))}
                                </div>


                            </div>

                            {/* Right Side: Detailed Content */}
                            <div className="lg:w-2/3">
                                <motion.div
                                    key={activePlanIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-2xl p-4 md:p-5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden flex flex-col"
                                >
                                    {/* Content Header */}
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-5 border-b border-slate-100 pb-3">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-0.5">
                                                {plans[activePlanIndex].name}
                                            </h3>
                                            <p className="text-primary text-[11px] font-bold tracking-tight">
                                                {plans[activePlanIndex].tagline}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-0.5">Selected Plan</span>
                                            <div className="h-0.5 w-8 bg-primary ml-auto rounded-full" />
                                        </div>
                                    </div>

                                    {/* Features List with Dotted Line Effect */}
                                    <div className="flex-grow">
                                        <div className="grid md:grid-cols-1 gap-y-2">
                                            {plans[activePlanIndex].features.map((feature, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="group flex items-end gap-2 text-sm"
                                                >
                                                    <div className="flex-shrink-0 mb-0.5">
                                                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                                                    </div>
                                                    <span className="font-bold text-slate-800 whitespace-nowrap">{feature}</span>
                                                    <div className="flex-grow border-b border-dotted border-slate-100 group-hover:border-primary/20 transition-colors mb-1.5" />
                                                    <span className="text-primary font-black text-[9px] mb-0.5 uppercase tracking-tight">Included</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                <Target size={16} />
                                            </div>
                                            <div>
                                                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-0.5">Global Success</p>
                                                <p className="text-slate-900 font-bold text-xs leading-none">Guaranteed Path</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleEnquireClick(plans[activePlanIndex].name)}
                                            className="w-full md:w-auto bg-slate-900 text-white px-8 py-3 rounded-lg font-black text-sm hover:bg-primary transition-all shadow-md shadow-slate-900/10 hover:shadow-primary/20 transform hover:-translate-y-1"
                                        >
                                            Enquire Now
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight"
                        >
                            Not sure which plan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">is right for you?</span>
                        </motion.h2>
                        <p className="text-teal-50/60 text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                            Our elite consultants are ready to map your global educational journey. Connect with us for a personalized strategy session.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                onClick={() => handleEnquireClick("Elite Strategy Session")}
                                className="bg-[#002D62] text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-[#0B1238] transition-all shadow-2xl shadow-[#002D62]/20 flex items-center justify-center gap-3 transform hover:-translate-y-1"
                            >
                                Book Strategy Call <ArrowRight className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => handleEnquireClick("General Support")}
                                className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all transform hover:-translate-y-1"
                            >
                                Contact Support
                            </button>
                        </div>
                    </div>
                </section>

                <ContactSection initialMessage={contactMessage} />
            </main>
            <Footer />
        </div>
    );
};

export default Services;

