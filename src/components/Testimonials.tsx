import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Stack from './Stack';
import { useTestimonials } from '@/hooks/useTestimonials';

const Testimonials = () => {
  const { testimonials: remoteTestimonials, loading } = useTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback data if remote is empty or loading
  const fallbackTestimonials = [
    {
      id: "1",
      name: 'Sagarika Shinde',
      role: 'SYRACUSE UNIVERSITY, FALL 2023',
      avatar: 'https://www.aspireeach.com/panel/assets/images/652a758657d86.jpg',
      initials: 'SS',
      quote:
        'Aniket has provided excellent direction and help throughout the entire process. Doubts were addressed and resolved quickly, from determining which MS degree would be best suited to providing advice on how to write SOPs and selecting schools. He was very straightforward and honest about which colleges would accept or reject me based on my profile.',
      rating: 5,
    },
    {
      id: "2",
      name: 'Om Langde',
      role: 'CRANFIELD UNIVERSITY, FALL 2023',
      avatar: 'https://www.aspireeach.com/panel/assets/images/652a760cab097.jpeg',
      initials: 'OL',
      quote:
        'I had a remarkable experience with Aspire Each, the leading company providing outstanding services for abroad jobs, student visas, and IELTS training. Their dedicated team of experts guided me throughout the entire process, ensuring a seamless transition to my desired destination.',
      rating: 5,
    },
    {
      id: "3",
      name: 'Swamy Salunkhe',
      role: 'TU DUBLIN, FALL 2022',
      avatar: 'https://www.aspireeach.com/panel/assets/images/652a7640e7ab4.jpeg',
      initials: 'SS',
      quote:
        'Thank you Aniket, for helping me out through the complete application process starting from filling out the form for Masters to the final Visa Process. You have been a good guide and mentor for me through this journey. Would surely recommend to take help from Aniket if planning to apply for Masters.',
      rating: 5,
    },
    {
      id: "4",
      name: 'Layashree Adepu',
      role: 'NORTH EASTERN UNIVERSITY, FALL 2023',
      avatar: 'https://www.aspireeach.com/panel/assets/images/652a740d7bf94.jpeg',
      initials: 'LA',
      quote:
        'Aniket has been helpful throughout the entire process. Every time I panicked due to any issue, he would call up and ensure all the problems are solved and give answers and suggestions to all my doubts and issues. He helped in filling out forms, connecting me to financial services and peers going to the same college.',
      rating: 5,
    },
    {
      id: "5",
      name: 'Rashi Raut',
      role: 'SYRACUSE UNIVERSITY, FALL 2023',
      avatar: 'https://www.aspireeach.com/panel/assets/images/652a76ef4f6fb.jpeg',
      initials: 'RR',
      quote:
        'Throughout the entire process, the consultants were prompt and responsive. They promptly addressed my queries, provided timely updates, and ensured that all the necessary documentation was completed accurately and on time. Their proactive approach gave me peace of mind and reassurance that I was in capable hands.',
      rating: 5,
    },
    {
      id: "6",
      name: 'Samay Ghadge',
      role: 'UNIVERSITY COLLEGE DUBLIN, FALL 2023',
      avatar: 'https://www.aspireeach.com/panel/assets/images/652a71a455990.jpeg',
      initials: 'SG',
      quote:
        'Experience with "Aspire Each" has been amazing. Having a previous Canada visa rejection and financial complications made my case difficult for Ireland VISA, but efforts from Aniket and Kranti right from college admission to SOP and everything else finally landed me in Ireland. Grateful and highly recommended.',
      rating: 5,
    },
  ];

  const testimonials = remoteTestimonials.length > 0 ? remoteTestimonials : fallbackTestimonials;
  const activeTestimonial = testimonials[activeIndex] || testimonials[0];

  // Memoized cards for the Stack component
  const cards = useMemo(() =>
    testimonials.map((t, i) => (
      <div
        key={t.id}
        onClick={() => setActiveIndex(i)}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0,45,98,0.25)',
          background: 'linear-gradient(160deg, #001840 0%, #002D62 60%, #003f8a 100%)',
        }}
      >
        {/* Full-bleed photo */}
        <img
          src={t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.initials)}&background=002D62&color=fff&bold=true&size=400`}
          alt={t.name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            pointerEvents: 'none',
            display: 'block',
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('ui-avatars.com')) {
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.initials)}&background=002D62&color=fff&bold=true&size=400`;
            }
          }}
        />

        {/* Rich gradient overlay — navy bottom fade */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,15,45,0.95) 0%, rgba(0,30,80,0.6) 38%, transparent 68%)',
          pointerEvents: 'none',
        }} />

        {/* Top-left frosted glass university badge */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          background: 'rgba(255,255,255,0.14)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.28)',
          borderRadius: '999px',
          padding: '7px 14px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        }}>
          <p style={{
            fontSize: '9px',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.65)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '2px',
            lineHeight: 1,
          }}>Accepted to</p>
          <p style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.01em',
            lineHeight: 1,
          }}>{t.role.split(',')[0]}</p>
        </div>

        {/* Bottom floating content — stars + name + year */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 20px 22px',
        }}>
          {/* Stars */}
          <div style={{ display: 'flex', gap: '3px', marginBottom: '8px' }}>
            {[...Array(t.rating)].map((_, si) => (
              <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Name */}
          <p style={{
            fontWeight: 800,
            fontSize: '19px',
            color: '#ffffff',
            letterSpacing: '-0.4px',
            lineHeight: 1.2,
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            marginBottom: '4px',
          }}>{t.name}</p>

          {/* Year */}
          <p style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>{t.role.split(',')[1]?.trim() || 'N/A'}</p>
        </div>
      </div>
    )),
    [testimonials]); // Rebuild only if data changes

  if (loading && remoteTestimonials.length === 0) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002D62]"></div>
      </div>
    );
  }

  return (
    <section
      id="testimonials"
      style={{
        background: 'linear-gradient(180deg, #f8faff 0%, #eef2ff 50%, #f8faff 100%)',
        padding: '100px 0 120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,45,98,0.04) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #002D62, #004A9F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800, fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px',
          }}>
            Testimonials
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#1b182f',
            margin: '0 0 16px', letterSpacing: '-1.5px', lineHeight: 1.1,
          }}>
            Dreams{' '}
            <span style={{
              background: 'linear-gradient(135deg, #002D62, #2563eb)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Weaved!
            </span>
          </h2>
          <p style={{
            color: '#64748b', fontSize: '17px', maxWidth: '500px',
            margin: '0 auto', lineHeight: 1.6, fontWeight: 500,
          }}>
            Real stories from students whose futures we helped shape.
          </p>
        </motion.div>

        {/* Main content — two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>

          {/* LEFT — Active testimonial quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0,45,98,0.1)',
                  borderRadius: '28px',
                  padding: '44px',
                  boxShadow: '0 20px 60px rgba(0,45,98,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '5px', height: '100%',
                  background: 'linear-gradient(180deg, #002D62, #2563eb)',
                  borderRadius: '28px 0 0 28px',
                }} />

                {/* Quote icon */}
                <div style={{
                  width: '52px', height: '52px',
                  background: 'linear-gradient(135deg, #002D62, #2563eb)',
                  borderRadius: '16px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '28px',
                  boxShadow: '0 8px 24px rgba(0,45,98,0.2)',
                }}>
                  <Quote size={24} color="white" />
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote style={{
                  fontSize: 'clamp(15px, 2vw, 18px)', color: '#1b182f',
                  fontStyle: 'italic', fontWeight: 500, lineHeight: 1.75, margin: '0 0 32px',
                }}>
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Author row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    overflow: 'hidden', flexShrink: 0,
                    border: '2px solid rgba(0,45,98,0.15)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}>
                    <img
                      src={activeTestimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(activeTestimonial.initials)}&background=002D62&color=fff&bold=true&size=200`}
                      alt={activeTestimonial.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('ui-avatars.com')) {
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(activeTestimonial.initials)}&background=002D62&color=fff&bold=true&size=200`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: '16px', color: '#002D62', marginBottom: '3px' }}>
                      {activeTestimonial.name}
                    </p>
                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setActiveIndex(i => (i - 1 + testimonials.length) % testimonials.length)}
                style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  border: '1.5px solid rgba(0,45,98,0.2)', background: 'white',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)', transition: 'all 0.2s ease', color: '#002D62',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#002D62'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'white'; (e.currentTarget as HTMLButtonElement).style.color = '#002D62'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setActiveIndex(i => (i + 1) % testimonials.length)}
                style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  border: 'none', background: 'linear-gradient(135deg, #002D62, #2563eb)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(0,45,98,0.25)', transition: 'all 0.2s ease', color: '#fff',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* RIGHT — Stack card deck */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}
          >
            {/* Stack */}
            <div style={{ width: '360px', height: '520px' }}>
              <Stack
                randomRotation={false}
                sensitivity={180}
                sendToBackOnClick={false}
                cards={cards}
                autoplay={true}
                autoplayDelay={3500}
                pauseOnHover={true}
                animationConfig={{ stiffness: 280, damping: 22 }}
                onTopCardChange={setActiveIndex}
              />
            </div>

            {/* Pagination dots */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: i === activeIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === activeIndex ? '#002D62' : '#cbd5e1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1px',
            background: 'rgba(0,45,98,0.08)',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          {[
            { label: 'Happy Students', value: '500+' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Partner Universities', value: '200+' },
            { label: 'Countries', value: '15+' },
          ].map((stat, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.9)', padding: '32px 24px', textAlign: 'center' }}>
              <p style={{
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900,
                background: 'linear-gradient(135deg, #002D62, #2563eb)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '6px', letterSpacing: '-1px',
              }}>
                {stat.value}
              </p>
              <p style={{ color: '#64748b', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
