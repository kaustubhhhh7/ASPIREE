import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Globe, CheckCircle2, User } from "lucide-react";
import ChromaGrid from "@/components/ui/ChromaGrid";
import Squares from "@/components/ui/Squares";
import aniketImg from "@/assets/images/Aniket Shinde.png";
import krantiImg from "@/assets/images/Kranti .png";
import aboutImg from "@/assets/images/indian-student.png";

import SEO from "@/components/SEO";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SEO
        title="About Us - AspireEach"
        description="Learn about AspireEach, our mission, vision, and the team dedicated to empowering students to achieve their global education dreams."
        canonical="https://aspireeach.com/about-us"
      />
      <Navbar />

      <main className="flex-grow pt-[100px] lg:pt-[116px]">
        {/* Hero Section — Split Layout */}
        <section className="relative min-h-[520px] lg:min-h-[600px] flex overflow-hidden border-b border-slate-100">
          {/* ── Left Panel: Light ── */}
          <div className="relative flex-1 flex items-center bg-gradient-to-br from-[#f8faff] to-[#eef4ff] py-20 px-8 md:px-16 lg:px-24 z-10">
            {/* Large faint teal circle decoration */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#14B8A6]/8 blur-3xl pointer-events-none" />
            <div className="absolute top-8 right-0 w-48 h-48 rounded-full bg-[#002D62]/5 blur-2xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 max-w-xl"
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002D62]/8 border border-[#002D62]/15 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                <span className="text-[#002D62] font-bold text-xs tracking-[0.18em] uppercase">About AspireEach</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1238] leading-[1.05] mb-6">
                Empowering<br />
                Global{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#14B8A6]">Minds</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 180 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4C40 1 80 1 178 4" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-[#4a5568] text-lg leading-relaxed mb-10 max-w-md">
                We are your one-stop solution for all study abroad needs, enabling individuals worldwide to unlock limitless possibilities.
              </p>

              {/* Stat Badges */}
              <div className="flex gap-4 flex-wrap">
                {[
                  { value: "10+", label: "Years Experience", color: "bg-[#002D62]" },
                  { value: "100%", label: "Visa Success", color: "bg-[#14B8A6]" },
                  { value: "1500+", label: "Students Guided", color: "bg-[#0B1238]" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white rounded-2xl px-5 py-3 shadow-lg shadow-slate-200/60 border border-slate-100"
                  >
                    <span className={`text-2xl font-black text-[#002D62]`}>{stat.value}</span>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Diagonal divider */}
          <div className="absolute top-0 right-[42%] bottom-0 w-24 z-20 pointer-events-none hidden lg:block" style={{
            background: "linear-gradient(to bottom right, #f8faff 49%, #0B1238 51%)"
          }} />

          {/* ── Right Panel: Dark with animated globe ── */}
          <div className="hidden lg:flex relative w-[45%] items-center justify-center bg-[#0B1238] overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#14B8A6]/10 rounded-full blur-[80px]" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#002D62]/30 rounded-full blur-2xl" />
            </div>

            {/* Animated Dot Grid (Globe-like) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-[320px] h-[320px]"
            >
              {/* SVG World map outline as watermark */}
              <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full opacity-10" fill="none">
                <ellipse cx="250" cy="150" rx="240" ry="140" stroke="#14B8A6" strokeWidth="1.5" />
                <ellipse cx="250" cy="150" rx="160" ry="140" stroke="#14B8A6" strokeWidth="1" />
                <ellipse cx="250" cy="150" rx="80" ry="140" stroke="#14B8A6" strokeWidth="1" />
                <line x1="10" y1="150" x2="490" y2="150" stroke="#14B8A6" strokeWidth="1" />
                <line x1="250" y1="10" x2="250" y2="290" stroke="#14B8A6" strokeWidth="1" />
                <ellipse cx="250" cy="150" rx="240" ry="60" stroke="#14B8A6" strokeWidth="0.7" />
                <ellipse cx="250" cy="150" rx="240" ry="110" stroke="#14B8A6" strokeWidth="0.7" />
              </svg>

              {/* Pulsing location pins */}
              {[
                { cx: "38%", cy: "30%", delay: 0 },
                { cx: "62%", cy: "20%", delay: 0.4 },
                { cx: "72%", cy: "55%", delay: 0.8 },
                { cx: "28%", cy: "65%", delay: 1.2 },
                { cx: "50%", cy: "75%", delay: 0.6 },
                { cx: "82%", cy: "36%", delay: 1.6 },
                { cx: "18%", cy: "44%", delay: 2.0 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ left: dot.cx, top: dot.cy }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 1, 0.6], scale: [0, 1.4, 1, 1] }}
                  transition={{ delay: dot.delay, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <div className="relative w-3 h-3">
                    <div className="absolute inset-0 rounded-full bg-[#14B8A6] animate-ping opacity-60" style={{ animationDuration: "2s", animationDelay: `${dot.delay}s` }} />
                    <div className="relative w-3 h-3 rounded-full bg-[#14B8A6] shadow-[0_0_10px_#14B8A6]" />
                  </div>
                </motion.div>
              ))}

              {/* Center glow dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.6)]" />
            </motion.div>

            {/* Tagline below globe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-center px-8"
            >
              <p className="text-white/40 text-xs font-bold tracking-[0.25em] uppercase">Connecting Students Worldwide</p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Are We?</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  At AspireEach Overseas, we envision a world where every individual has the opportunity to expand their knowledge, broaden their perspectives, and unlock their full potential through transformative international experiences.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We are committed to empowering global minds, regardless of their background, to embark on life-changing journeys of discovery. We understand that to thrive in this global landscape, one must possess not only knowledge but also a deep understanding of different cultures.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="text-3xl font-bold text-primary mb-1">10+</h3>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="text-3xl font-bold text-primary mb-1">100%</h3>
                    <p className="text-sm text-slate-500">Visa Success</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(20,184,166,0.3)] border-4 border-white/50 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={aboutImg}
                    alt="Success Journey"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl z-0" />
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl z-0" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  To be the leading catalyst for students seeking to explore the world, bridging the gap between cultures and creating a global community of diverse learners. We aim to revolutionize the study abroad experience by empowering students with the knowledge, skills, and confidence to become global leaders.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  To empower students by offering personalized assistance and customized solutions that cater to their unique aspirations. We prioritize integrity, transparency, and ethical practices, aiming not only to help students achieve academic dreams but also ensuring a fulfilling educational experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-24 bg-[#050505] relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0 opacity-100">
            <Squares
              speed={0.2}
              squareSize={40}
              direction='diagonal'
              borderColor='rgba(255, 255, 255, 0.15)'
              hoverFillColor='rgba(255, 255, 255, 0.25)'
            />
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-500/5 blur-[120px] pointer-events-none" />

          <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Meet Our Founders</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">The visionaries behind your global journey.</p>
            </div>

            <div className="w-full">
              <ChromaGrid
                items={[
                  {
                    image: aniketImg,
                    title: "Aniket Shinde",
                    subtitle: "Founder & CEO",
                    handle: "@aniketshinde",
                    borderColor: "#14b8a6",
                    gradient: "linear-gradient(180deg, rgba(20, 184, 166, 0.1) 0%, #0B1238 100%)",
                    location: "Global Operations",
                    url: "https://www.linkedin.com/in/aniket-shinde-8b648177/"
                  },
                  {
                    title: "Aniket's Expertise",
                    subtitle: "Specializations",
                    isInfo: true,
                    expertise: [
                      "Senior Operations Lead: Over 8 years of expertise in global education and finance, currently driving innovation at Aspire Each.",
                      "Study Abroad Specialist: Expert in international university admissions, portfolio architecture, and global student success.",
                      "End-to-End Delivery: Proven success leading students from initial counseling to successful university enrollment worldwide.",
                      "Strategic Problem Solver: Skilled at bridging the gap between complex admission requirements and student aspirations."
                    ],
                    borderColor: "#14b8a6",
                  },
                  {
                    title: "Kranti's Expertise",
                    subtitle: "International Relations",
                    isInfo: true,
                    expertise: [
                      "Counseling Veteran: 9+ years of deep expertise in international education and bespoke student counseling.",
                      "Alumni Insight: UK graduate from Anglia Ruskin University, bringing first-hand global student perspective.",
                      "Proven Success: Successfully guided over 1500+ students with an exceptional 98% visa approval rate.",
                      "Strategic Relations: Expert at cultivating partnerships with top-tier global universities for student success."
                    ],
                    borderColor: "#06b6d4",
                  },
                  {
                    image: krantiImg,
                    title: "Kranti Joshi",
                    subtitle: "Co-Founder",
                    handle: "@krantijoshi",
                    borderColor: "#06b6d4",
                    gradient: "linear-gradient(180deg, rgba(6, 182, 212, 0.1) 0%, #0B1238 100%)",
                    location: "International Relations",
                    url: "https://www.linkedin.com/in/kranti-joshi-09b90a176/"
                  }
                ]}
                radius={350}
                damping={0.5}
                fadeOut={0.4}
                columns={3}
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

