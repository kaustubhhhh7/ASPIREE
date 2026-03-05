import { motion } from 'framer-motion';
import { Compass, BookOpen, FileText, Award, Wallet, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Compass,
    title: 'Counseling',
    description: 'Expert guidance on profile enhancement and identifying your strengths to level up your career path.',
  },
  {
    icon: BookOpen,
    title: 'Exam Preparation',
    description: 'Specialized coaching for GRE, GMAT, IELTS, and TOEFL with personalized study plans and mock tests.',
  },
  {
    icon: FileText,
    title: 'Application Support',
    description: 'End-to-end assistance in drafting application materials and applying to shortlisted universities.',
  },
  {
    icon: Wallet,
    title: 'Finance & Visa',
    description: 'Comprehensive financial advisory, loan support, and expert guidance through the entire visa process.',
  },
];

import Squares from './ui/Squares';
import Stepper, { Step } from './ui/Stepper';

const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 lg:py-20 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Squares */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Squares
          speed={0.15}
          squareSize={45}
          direction='diagonal'
          borderColor='rgba(0, 0, 64, 0.03)'
          hoverFillColor='rgba(20, 184, 166, 0.05)'
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-teal-600 font-bold text-[10px] tracking-[0.2em] uppercase mb-3 bg-teal-50 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1238] mb-5">
            Elite Roadmap to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1238] to-teal-600">Global Education</span>
          </h2>
          <p className="text-[#0B1238]/80 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            From initial discovery to your first lecture abroad, we provide high-fidelity consultancy services tailored for the ambitious student.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="w-full max-w-5xl mx-auto">
          <Stepper
            initialStep={1}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Step key={service.title}>
                  <div className="flex flex-col items-center text-center py-6 h-full group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 p-0.5 mb-8 shadow-xl shadow-teal-500/20 group-hover:rotate-[5deg] transition-transform">
                      <div className="w-full h-full bg-white rounded-[calc(1rem-2px)] flex items-center justify-center">
                        <Icon className="w-8 h-8 text-teal-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#002D62] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#0B1238]/70 leading-relaxed text-[15px] max-w-md mx-auto mb-4">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="mt-auto flex items-center gap-2 text-teal-600 font-bold text-sm transform transition-all group-hover:translate-x-2"
                    >
                      Explore Details →
                    </Link>
                  </div>
                </Step>
              );
            })}
          </Stepper>
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-800 transition-all shadow-2xl shadow-navy-900/20 group transform hover:-translate-y-1 text-sm sm:text-base"
          >
            Start Your Roadmap Today
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Dynamic Floating Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-700" />
    </section>
  );
};

export default ServicesGrid;
