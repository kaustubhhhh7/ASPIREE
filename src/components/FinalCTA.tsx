import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLenis } from '@/contexts/LenisContext';
import { scrollToSection } from '@/lib/utils';
import ContactModal from './ContactModal';

import Squares from './ui/Squares';

const FinalCTA = () => {
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
      <section id="resources" className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">

        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10">
            <Squares
              speed={0.2}
              squareSize={100}
              direction='diagonal'
              borderColor='rgba(0, 45, 98, 0.2)'
              hoverFillColor='rgba(0, 45, 98, 0.3)'
            />
          </div>
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#002D62]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#14B8A6]/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#002D62]/10 text-[#002D62] px-6 py-2.5 rounded-full text-sm font-bold mb-10 border border-[#002D62]/20"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              Limited Offer: Expert Session Worth ₹5,000 Free
            </motion.div>


            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#0B1238] mb-8 leading-[1.1]">
              Ready to Architect Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-navy-900 via-navy-900 to-gray-400">Global Future?</span>
            </h2>

            <p className="text-[#0B1238]/60 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Step into the world's most prestigious universities. Take the first step today with our elite consultants.
            </p>


            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => handleScroll('contact-section')}
                size="lg"
                className="bg-[#002D62] hover:bg-[#0B1238] text-white font-bold px-12 py-8 text-xl rounded-2xl shadow-[0_20px_50px_rgba(0,45,98,0.2)] transition-all group"
              >
                Experience Excellence
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-10 mt-16 text-[#0B1238]/40 text-[15px] font-bold tracking-widest uppercase">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                Zero Consultation Fee
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                University Matching
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                99% Admission Rate
              </div>
            </div>


          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default FinalCTA;
