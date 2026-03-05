import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import MeetAllies from './MeetAllies';
import ContactSection from './ContactSection';

interface FooterProps {
  hideContact?: boolean;
}

const Footer = ({ hideContact = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Career Counseling', href: '/services' },
      { name: 'Test Preparation', href: '/services' },
      { name: 'Visa Assistance', href: '/services' },
      { name: 'Scholarship Support', href: '/services' },
    ],
    destinations: [
      { name: 'Study In USA', href: '/services' },
      { name: 'Study In UK', href: '/services' },
      { name: 'Study In Canada', href: '/services' },
      { name: 'Study In Australia', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Success Stories', href: '/testimonials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/Aspire-Each-Overseas-61550339423810/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/aspireeachoverseas', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/aspire-each/', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <>
      <MeetAllies />
      {!hideContact && <ContactSection />}
      <footer className="bg-[#0B1238] text-white overflow-hidden relative border-t border-white/10">

        {/* Decorative Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#002D62]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#14B8A6]/10 rounded-full blur-[100px]" />

        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

            {/* Brand Column */}
            <div className="lg:col-span-2">
              <p className="text-white/60 mb-5 max-w-sm leading-relaxed text-sm font-medium">
                Empowering global aspirations through elite education consultancy. Your journey to top-tier universities starts here.
              </p>

              {/* Contact Info */}
              <div className="space-y-1.5">
                <a href="mailto:info@aspireeach.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-all group">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-[#0B1238] transition-all">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="font-bold text-sm">info@aspireeach.com</span>
                </a>
                <a href="https://wa.me/919324482899" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-all group">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span className="font-bold text-sm">+91 93244 82899</span>
                </a>
                <div className="flex items-start gap-2 text-white/70 group">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span className="font-bold pt-1 text-sm">Navi Mumbai, Maharashtra, India</span>
                </div>
              </div>


              {/* Social Links */}

              <div className="flex gap-2 mt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white hover:text-[#0B1238] transition-all shadow-md border border-white/5"
                      aria-label={social.label}
                    >
                      <Icon className="w-3 h-3" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-white text-sm mb-2 tracking-tight">Services</h4>
              <ul className="space-y-1.5">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors font-bold text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm mb-2 tracking-tight">Destinations</h4>
              <ul className="space-y-1.5">
                {footerLinks.destinations.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors font-bold text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm mb-2 tracking-tight">Company</h4>
              <ul className="space-y-1.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors font-bold text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
              <p className="font-bold">© {currentYear} AspireEach. Designed for Global Excellence.</p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors font-bold">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors font-bold">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>


      </footer>
    </>
  );
};

export default Footer;
