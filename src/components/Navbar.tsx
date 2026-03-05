import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { scrollToSection } from '@/lib/utils';
import { useLenis } from '@/contexts/LenisContext';
import ContactModal from './ContactModal';
import TopBar from './TopBar';

const navLinks = [
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Free E-Book', path: '/ebook' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const { lenis } = useLenis();

  const handleScroll = (id: string) => {
    if (location.pathname !== '/' && !document.getElementById(id)) {
      window.location.href = `/#${id}`;
      return;
    }

    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -80 });
    } else {
      scrollToSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Small threshold for a quick transition
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? (location.pathname === '/' ? '-translate-y-[28px]' : '-translate-y-[36px]')
          : 'translate-y-0'
          }`}
      >
        {/* TopBar container - Hides when scrolled */}
        <div className={`transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <TopBar
            onContactClick={() => handleScroll('contact-section')}
            compact={location.pathname === '/'}
          />
        </div>

        {/* Main Navbar - Transparent on landing page, white on other pages or when scrolled */}
        <nav
          className={`transition-all duration-300 ${location.pathname === '/' && !isScrolled
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-xl'
            } ${isScrolled ? 'shadow-xl shadow-navy-900/5' : location.pathname === '/' ? '' : 'shadow-lg'
            } border-b ${location.pathname === '/' && !isScrolled ? 'border-transparent' : 'border-navy-900/5'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-all duration-300 py-0`}>
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center group transition-transform active:scale-95"
              >
                <img
                  src="/images/Aspire Logo.png"
                  alt="AspireEach Logo"
                  className={`w-auto object-contain transition-all duration-300 ${isScrolled
                    ? 'h-14 lg:h-16'
                    : 'h-16 lg:h-20'
                    }`}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => {
                  const isAnchor = link.path.startsWith('#');
                  return (
                    <Link
                      key={link.name}
                      to={isAnchor ? '/' : link.path}
                      onClick={(e) => {
                        if (isAnchor) {
                          e.preventDefault();
                          handleScroll(link.path.substring(1));
                        }
                      }}
                      className={`text-[15px] font-bold tracking-tight transition-all relative group ${location.pathname === link.path
                        ? 'text-navy-900'
                        : 'text-navy-900/80 hover:text-navy-900'
                        }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#002D62] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2.5 text-[#0B1238] bg-white/50 backdrop-blur-sm shadow-sm rounded-xl border border-navy-900/10 hover:bg-white transition-all overflow-hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-navy-900/5 shadow-2xl overflow-hidden"
              >
                <div className="container mx-auto px-4 py-8 space-y-2">
                  {navLinks.map((link, index) => {
                    const isAnchor = link.path.startsWith('#');
                    return (
                      <Link
                        key={link.name}
                        to={isAnchor ? '/' : link.path}
                        onClick={(e) => {
                          if (isAnchor) {
                            setIsMobileMenuOpen(false);
                            e.preventDefault();
                            handleScroll(link.path.substring(1));
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`block w-full text-left py-3 px-4 rounded-xl text-lg font-bold transition-all ${location.pathname === link.path
                          ? 'bg-navy-900/5 text-navy-900'
                          : 'text-navy-900/70 hover:bg-navy-900/5 hover:text-navy-900'
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                  <div className="pt-6 px-4">
                    <Button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleScroll('contact-section');
                      }}
                      className="w-full bg-[#002D62] hover:bg-[#0B1238] text-white font-black py-6 rounded-2xl shadow-xl shadow-navy-900/20 text-lg"
                    >
                      Let's Aspire
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
