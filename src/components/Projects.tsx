'use client';

import { motion, type Variants } from 'framer-motion';
import { FaBolt, FaBuilding, FaPrescriptionBottle, FaOilCan, FaCogs } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

const projectCards = [
  {
    gradient: 'from-orange-600 via-amber-500 to-yellow-400',
    accent: 'bg-orange-100 text-orange-700',
    titleKey: 'projects.items.petrochemical.title',
    locationKey: 'projects.items.petrochemical.location',
    descKey: 'projects.items.petrochemical.description',
    tagKey: 'projects.items.petrochemical.tag',
    extraTags: ['NDT', 'PAUT', 'RT'],
  },
  {
    gradient: 'from-slate-700 via-slate-600 to-slate-500',
    accent: 'bg-slate-100 text-slate-700',
    titleKey: 'projects.items.pipeline.title',
    locationKey: 'projects.items.pipeline.location',
    descKey: 'projects.items.pipeline.description',
    tagKey: 'projects.items.pipeline.tag',
    extraTags: ['RBI', 'FFS'],
  },
  {
    gradient: 'from-blue-700 via-blue-500 to-cyan-400',
    accent: 'bg-blue-100 text-blue-700',
    titleKey: 'projects.items.refinery.title',
    locationKey: 'projects.items.refinery.location',
    descKey: 'projects.items.refinery.description',
    tagKey: 'projects.items.refinery.tag',
    extraTags: ['API', 'ASME'],
  },
];

const industries = [
  { icon: FaBolt, labelKey: 'projects.sectors.energy', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200' },
  { icon: FaBuilding, labelKey: 'projects.sectors.construction', color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
  { icon: FaPrescriptionBottle, labelKey: 'projects.sectors.pharma', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
  { icon: FaOilCan, labelKey: 'projects.sectors.petrochem', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
  { icon: FaCogs, labelKey: 'projects.sectors.manufacturing', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const industryVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="proyectos"
      className="relative bg-white py-24 overflow-hidden"
    >
      {/* Subtle background accent blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-50 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-50 opacity-50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold tracking-widest uppercase rounded-full bg-orange-100 text-orange-600 mb-4">
            {t('projects.label')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {t('projects.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* ── Project cards grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image placeholder with gradient */}
              <div className={`h-48 bg-gradient-to-br ${card.gradient} relative flex items-end p-5`}>
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==')]" />
                <span className={`relative z-10 inline-block px-3 py-1 text-xs font-bold rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30`}>
                  {t(card.tagKey)}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-gray-400 font-medium">{t(card.locationKey)}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                  {t(card.titleKey)}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {t(card.descKey)}
                </p>

                {/* Technique badges */}
                <div className="flex flex-wrap gap-2">
                  {card.extraTags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${card.accent}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Sectores que Servimos ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold tracking-widest uppercase rounded-full bg-blue-100 text-blue-600 mb-4">
            {t('projects.sectorsLabel')}
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            {t('projects.sectorsTitle') || 'Sectores que Servimos'}
          </h3>
          <p className="max-w-xl mx-auto text-gray-500 text-base">
            {t('projects.sectorsSubtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map(({ icon: Icon, labelKey, color, bg, border }, idx) => (
            <motion.div
              key={idx}
              variants={industryVariants}
              className={`flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border ${bg} ${border} shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${bg} border ${border} shadow-inner`}>
                <Icon className={`w-7 h-7 ${color}`} />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center leading-tight">
                {t(labelKey)}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
