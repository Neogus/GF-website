'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { FaBolt, FaBuilding, FaPrescriptionBottle, FaOilCan, FaCogs } from 'react-icons/fa';

const projects = [
  {
    key: 'petrochemical',
    gradient: 'from-orange-500 via-orange-600 to-amber-700',
    iconBg: 'bg-orange-400/30',
  },
  {
    key: 'pipeline',
    gradient: 'from-slate-500 via-slate-600 to-slate-800',
    iconBg: 'bg-slate-400/30',
  },
  {
    key: 'refinery',
    gradient: 'from-blue-500 via-blue-600 to-blue-900',
    iconBg: 'bg-blue-400/30',
  },
];

const sectors = [
  { icon: FaBolt,               key: 'energy' },
  { icon: FaBuilding,           key: 'construction' },
  { icon: FaPrescriptionBottle, key: 'pharma' },
  { icon: FaOilCan,             key: 'petrochem' },
  { icon: FaCogs,               key: 'manufacturing' },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-widest uppercase rounded-full bg-orange-100 text-orange-600">
            {t('projects.label')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <div
              key={project.key}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Gradient image placeholder */}
              <div className={`relative h-52 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full ${project.iconBg} flex items-center justify-center`}>
                    <FaOilCan className="w-8 h-8 text-white/80" />
                  </div>
                </div>
                {/* Location badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 text-white text-xs font-medium backdrop-blur-sm">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {t(`projects.items.${project.key}.location`)}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {t(`projects.items.${project.key}.description`)}
                </p>

                {/* Tag badges */}
                <div className="flex flex-wrap gap-2">
                  {(t(`projects.items.${project.key}.tags`) as unknown as string[])?.map
                    ? (t(`projects.items.${project.key}.tags`) as unknown as string[]).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-700 border border-orange-100"
                        >
                          {tag}
                        </span>
                      ))
                    : (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-700 border border-orange-100">
                          {t(`projects.items.${project.key}.tag`)}
                        </span>
                      )
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sectors Section */}
        <div className="bg-white rounded-2xl shadow-md px-8 py-10">
          <h3 className="text-center text-xl font-bold text-gray-800 mb-8">
            {t('projects.sectorsTitle')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {sectors.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-200 shadow-sm">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-sm font-medium text-gray-600 text-center leading-tight">
                  {t(`projects.sectors.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
