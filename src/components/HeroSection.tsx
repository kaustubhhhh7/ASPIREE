import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLenis } from '@/contexts/LenisContext';
import { scrollToSection } from '@/lib/utils';
import ContactModal from './ContactModal';

import Squares from './ui/Squares';
import JourneyVisual from './ui/JourneyVisual';

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { lenis } = useLenis();

  const handleScroll = (id: string, offset = -80) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset });
    } else {
      scrollToSection(id);
    }
  };

  return (
    <>
      <section className="relative min-h-screen pt-16 lg:pt-24 flex items-center overflow-hidden bg-[#FDFBF7]">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 z-0">
            <Squares
              speed={0.3}
              squareSize={60}
              direction='diagonal'
              borderColor='rgba(0, 0, 64, 0.03)'
              hoverFillColor='rgba(20, 184, 166, 0.05)'
            />
          </div>

          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-navy-900/5 rounded-full blur-[100px]" />

          {/* Right to Left Fade - Half Screen */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent z-0 pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-10 -translate-y-4 lg:-translate-y-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left w-full flex flex-col items-center lg:items-start"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#002D62]/5 backdrop-blur-md border border-[#002D62]/10 text-[#002D62] px-2.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold mb-6 sm:mb-8 hover:bg-[#002D62]/10 transition-colors duration-300"
              >
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-3.5 h-3.5 sm:w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-[1.5px] border-white shadow-sm" />
                  ))}
                </div>
                <span className="opacity-90 tracking-tight">Trusted by 10,000+ Students</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1238] leading-tight sm:leading-[1.1] mb-5 sm:mb-6 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
              >
                Aspire Higher, <br />
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#0B1238] via-[#0B1238] to-[#002D62] pb-2">
                  Each Step Matters.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xs sm:text-sm lg:text-base text-[#0B1238]/80 font-medium leading-relaxed mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
              >
                Navigate your global education journey with India's most trusted consultancy. We bridge the gap between your dreams and top-tier universities worldwide.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto"
              >
                <Button
                  onClick={() => handleScroll('contact-section')}
                  size="default"
                  className="w-full sm:w-auto bg-[#002D62] hover:bg-[#0B1238] text-white font-bold px-5 py-3 text-sm sm:text-base rounded-xl shadow-xl shadow-navy-900/20 group transition-all duration-300"
                >
                  Start Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <button
                  onClick={() => {
                    handleScroll('testimonials', -80);
                  }}
                  className="w-full sm:w-auto py-3 px-5 text-sm sm:text-base font-bold text-[#0B1238]/70 hover:text-[#0B1238] transition-colors bg-white sm:bg-transparent rounded-xl shadow-sm sm:shadow-none border border-[#0B1238]/10 sm:border-none"
                >
                  Success Stories
                </button>
              </motion.div>

              {/* Google Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm relative">
                      <img
                        src={`https://randomuser.me/api/portraits/thumb/men/${i * 12 + 5}.jpg`}
                        alt="Reviewer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-[#002D62] text-white flex items-center justify-center text-[10px] font-bold shadow-sm relative z-10">
                    99+
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-[#FBBC05]">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={14} fill="currentColor" className="text-[#FBBC05]" />
                      ))}
                    </div>
                    <span className="font-bold text-[#0B1238] text-sm">4.9/5</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-[#0B1238]/60">
                    <span>from 500+ reviews on</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <span className="font-bold text-[#0B1238] opacity-90">Google</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center lg:justify-end w-full mt-8 lg:mt-0"
            >
              <JourneyVisual />
            </motion.div>
          </div>
        </div>
      </section>



      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default HeroSection;
