import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect } from 'react';

// ── Animated number counter ──────────────────────────────────────────────────
const Counter = ({
  value,
  prefix = '',
  suffix = '',
  inView,
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const steps = 70;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(decimals)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, inView, decimals]);

  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
};

// ── University comparison data ────────────────────────────────────────────────
const universities = [
  { name: 'Syracuse University', general: 60, aspire: 92 },
  { name: 'TU Dublin', general: 55, aspire: 89 },
  { name: 'NE University', general: 18, aspire: 78 },
  { name: 'UC Dublin', general: 40, aspire: 85 },
  { name: 'Cranfield Univ.', general: 30, aspire: 80 },
  { name: 'Drexel University', general: 76, aspire: 95 },
  { name: 'Manipal Dubai', general: 50, aspire: 88 },
];

// ── Bar row component ─────────────────────────────────────────────────────────
const BarRow = ({
  name,
  general,
  aspire,
  inView,
  delay,
}: {
  name: string;
  general: number;
  aspire: number;
  inView: boolean;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    style={{ marginBottom: '14px' }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
      <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, width: '32px', textAlign: 'right', flexShrink: 0 }}>
        {general}%
      </span>
      <span style={{ flex: 1, textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#1b182f' }}>
        {name}
      </span>
      <span style={{ fontSize: '12px', color: '#002D62', fontWeight: 800, width: '38px', textAlign: 'left', flexShrink: 0 }}>
        {aspire}%
      </span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* General bar (grey, from right toward center) */}
      <div style={{ flex: 1, height: '7px', background: '#f1f5f9', borderRadius: '99px', overflow: 'hidden', display: 'flex', justifyContent: 'flex-end' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${general}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          style={{ height: '100%', background: '#cbd5e1', borderRadius: '99px' }}
        />
      </div>

      {/* Aspire bar (orange, from left) */}
      <div style={{ flex: 1, height: '7px', background: '#f0fdfa', borderRadius: '99px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${aspire}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #002D62, #2563eb)', borderRadius: '99px' }}
        />
      </div>
    </div>
  </motion.div>
);

// ── Main Component ────────────────────────────────────────────────────────────
const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: '#ffffff',
        padding: '100px 0 110px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accents */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,45,98,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>

        {/* ── Section Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{
            fontSize: '13px', fontWeight: 700, color: '#2563eb',
            letterSpacing: '0.04em', marginBottom: '10px',
            textTransform: 'none',
          }}>
            We Don't Just Guide Students — We Get Them Admitted
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900,
            color: '#1b182f', letterSpacing: '-1px', lineHeight: 1.1, margin: 0,
          }}>
            Our Track Record Speaks for Itself
          </h2>
        </motion.div>

        {/* ── 3-column Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1.6fr',
          gap: '24px',
          alignItems: 'stretch',
        }}>

          {/* ── COL 1: Student Photo Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '420px',
              boxShadow: '0 20px 60px rgba(0,45,98,0.18)',
            }}
          >
            {/* Photo */}
            <img
              src="https://www.aspireeach.com/panel/assets/images/652a740d7bf94.jpeg"
              alt="Aspire Student"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://www.aspireeach.com/panel/assets/images/652a758657d86.jpg';
              }}
            />

            {/* Bottom gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.75) 28%, transparent 60%)',
            }} />

            {/* Top label */}
            <div style={{
              position: 'absolute', top: '18px', left: '18px',
              background: 'rgba(255,255,255,0.88)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(0,45,98,0.15)',
              borderRadius: '12px',
              padding: '8px 14px',
            }}>
              <p style={{ fontWeight: 800, fontSize: '13px', color: '#002D62', fontStyle: 'italic', marginBottom: '2px' }}>
                Layashree Adepu
              </p>
              <p style={{ fontSize: '11px', color: '#2563eb', fontWeight: 600 }}>
                Accepted to Northeastern University
              </p>
            </div>

            {/* Bottom stat */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px 20px' }}>
              <p style={{
                fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 900,
                color: '#002D62', letterSpacing: '-1px', lineHeight: 1,
                marginBottom: '6px',
              }}>
                <Counter value={5000} suffix="+" inView={isInView} />
              </p>
              <p style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600, letterSpacing: '0.04em' }}>
                Students placed at leading universities
              </p>
            </div>
          </motion.div>

          {/* ── COL 2: Two Stat Cards stacked ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Visa Success card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                flex: 1,
                background: '#ecfdf5',
                borderRadius: '24px',
                padding: '32px 28px',
                border: '1.5px solid #a7f3d0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0,45,98,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '120px', height: '120px',
                background: 'radial-gradient(circle, rgba(0,45,98,0.12) 0%, transparent 70%)',
                borderRadius: '50%',
              }} />
              <p style={{
                fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 900,
                color: '#002D62', letterSpacing: '-2px', lineHeight: 1,
                marginBottom: '12px',
              }}>
                <Counter value={99.9} suffix="%" inView={isInView} decimals={1} />
              </p>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#1b182f', marginBottom: '6px' }}>
                Visa Success Rate
              </p>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, fontWeight: 500 }}>
                Nearly perfect approval across all countries
              </p>
            </motion.div>

            {/* Scholarships card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                flex: 1,
                background: '#ecfdf5',
                borderRadius: '24px',
                padding: '32px 28px',
                border: '1.5px solid #a7f3d0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0,45,98,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '120px', height: '120px',
                background: 'radial-gradient(circle, rgba(0,45,98,0.12) 0%, transparent 70%)',
                borderRadius: '50%',
              }} />
              <p style={{
                fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 900,
                color: '#002D62', letterSpacing: '-2px', lineHeight: 1,
                marginBottom: '12px',
              }}>
                <Counter value={2} prefix="$" suffix="M+" inView={isInView} />
              </p>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#1b182f', marginBottom: '6px' }}>
                In Scholarships
              </p>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, fontWeight: 500 }}>
                Making global education more affordable for students
              </p>
            </motion.div>
          </div>

          {/* ── COL 3: University Acceptance Rates Chart ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              background: '#fafbff',
              borderRadius: '24px',
              padding: '32px 28px',
              border: '1.5px solid rgba(0,45,98,0.08)',
              boxShadow: '0 8px 32px rgba(0,45,98,0.06)',
            }}
          >
            <h3 style={{
              fontSize: '15px', fontWeight: 800, color: '#002D62',
              marginBottom: '22px', letterSpacing: '-0.2px',
            }}>
              Compare Acceptance Rates Across Universities
            </h3>

            {/* Column headers */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, width: '32px', textAlign: 'right', flexShrink: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Gen.
              </span>
              <span style={{ flex: 1, textAlign: 'center' }} />
              <span style={{ fontSize: '10px', color: '#002D62', fontWeight: 700, width: '38px', textAlign: 'left', flexShrink: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Aspire
              </span>
            </div>

            {universities.map((u, i) => (
              <BarRow
                key={u.name}
                name={u.name}
                general={u.general}
                aspire={u.aspire}
                inView={isInView}
                delay={0.3 + i * 0.08}
              />
            ))}

            {/* Legend */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '18px', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '7px', borderRadius: '99px', background: '#cbd5e1' }} />
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>General Acceptance Rate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '7px', borderRadius: '99px', background: 'linear-gradient(90deg, #002D62, #2563eb)' }} />
                <span style={{ fontSize: '11px', color: '#002D62', fontWeight: 600 }}>Aspire Acceptance Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
