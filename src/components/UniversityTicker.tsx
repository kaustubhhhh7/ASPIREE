import { motion } from 'framer-motion';

const universities = [
  {
    name: 'Boston University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Boston_University_wordmark.svg',
  },
  {
    name: 'Cranfield University',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Cranfield_University_logo.svg/1200px-Cranfield_University_logo.svg.png',
  },
  {
    name: 'Syracuse University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Syracuse_University_logo.svg',
  },
  {
    name: 'Trinity College Dublin',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Trinity_College_Dublin_logo.svg',
  },
  {
    name: 'University of Melbourne',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/University_of_Melbourne_logo.svg',
  },
  {
    name: 'McGill University',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/29/McGill_University_logo.svg',
  },
  {
    name: 'Imperial College London',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Imperial_College_London_new_logo.svg',
  },
  {
    name: 'University of Toronto',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_logo.svg',
  },
  {
    name: 'Stanford University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Stanford_University_logo.svg',
  },
  {
    name: 'MIT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
  },
  {
    name: 'Harvard University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg',
  },
  {
    name: 'Oxford University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Logo.svg',
  },
];

const UniversityTicker = () => {
  return (
    <section id="universities" className="py-20 lg:py-24 bg-gradient-to-b from-white via-[#FDFBF7] to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-teal-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Global Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
            Trusted by Elite Universities Worldwide
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Ticker */}
        <motion.div
          className="flex gap-6 md:gap-10 items-center"
          animate={{ x: [0, -400 * (universities.length / 2)] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...universities, ...universities, ...universities].map((uni, index) => (
            <motion.div
              key={`${uni.name}-${index}`}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex-shrink-0 px-8 py-5 bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:shadow-teal-500/5 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-2 shadow-sm border border-gray-100 group-hover:border-teal-500/30 transition-all duration-300 overflow-hidden">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="w-full h-full object-contain filter group-hover:grayscale-0 grayscale transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(uni.name)}&background=14b8a6&color=fff&bold=true`;
                    }}
                  />
                </div>
                <span className="text-navy-900/70 group-hover:text-navy-900 font-bold text-lg whitespace-nowrap transition-colors">
                  {uni.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityTicker;
