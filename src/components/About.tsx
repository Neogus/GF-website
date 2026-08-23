'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaShieldAlt, FaCrosshairs, FaLightbulb, FaHardHat } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

const values = [
  {
    icon: FaShieldAlt,
    keyPrefix: 'about.values.0',
    accent: '#1e3a5f',
  },
  {
    icon: FaCrosshairs,
    keyPrefix: 'about.values.1',
    accent: '#2e6da4',
  },
  {
    icon: FaLightbulb,
    keyPrefix: 'about.values.2',
    accent: '#1e3a5f',
  },
  {
    icon: FaHardHat,
    keyPrefix: 'about.values.3',
    accent: '#2e6da4',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative bg-gray-50 py-24 overflow-hidden"
    >
      {/* Decorative background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 80% 50%, rgba(46,109,164,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Top label tag */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row lg:gap-16 items-start"
        >
          {/* ── Left column: label + title + description ── */}
          <div className="lg:w-1/2 mb-14 lg:mb-0">
            <motion.div variants={fadeUpVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{
                  color: '#2e6da4',
                  borderColor: '#2e6da4',
                  backgroundColor: 'rgba(46,109,164,0.07)',
                }}
              >
                {/* Decorative accent dot */}
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#2e6da4' }}
                />
                {t('about.label') || 'Quiénes Somos'}
              </span>
            </motion.div>

            {/* Decorative accent line */}
            <motion.div
              variants={fadeUpVariants}
              className="mb-5"
            >
              <div
                className="h-1 w-12 rounded-full"
                style={{ background: 'linear-gradient(90deg, #1e3a5f 0%, #2e6da4 100%)' }}
              />
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ color: '#1e3a5f' }}
            >
              {t('about.title')}
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#334155' }}
            >
              {t('about.description')}
            </motion.p>
          </div>

          {/* ── Right column: values grid ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
          >
            {values.map(({ icon: Icon, keyPrefix, accent }, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Card top accent bar */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${accent} 0%, #2e6da4 100%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${accent}15` }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: '#1e3a5f' }}
                >
                  {t(`${keyPrefix}.title`)}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#475569' }}
                >
                  {t(`${keyPrefix}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
