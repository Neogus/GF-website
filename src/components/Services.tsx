'use client';

import Link from 'next/link';
import {
  FaSearchPlus,
  FaFire,
  FaIndustry,
  FaFlask,
  FaClipboardCheck,
  FaCube,
} from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';
import { IconType } from 'react-icons';

const services: { key: string; icon: IconType; href: string }[] = [
  { key: 'ndt', icon: FaSearchPlus, href: '/servicios/ensayos-no-destructivos' },
  { key: 'welding', icon: FaFire, href: '/servicios/inspeccion-soldadura' },
  { key: 'pressure_vessel', icon: FaIndustry, href: '/servicios/inspeccion-recipientes-presion' },
  { key: 'corrosion', icon: FaFlask, href: '/servicios/evaluacion-corrosion' },
  { key: 'asset_integrity', icon: FaClipboardCheck, href: '/servicios/gestion-integridad-activos' },
  { key: 'laser_scanning', icon: FaCube, href: '/servicios/escaneo-laser-3d' },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#D4A853] mb-3">
            ●&nbsp;&nbsp;{t('services.title')}&nbsp;&nbsp;●
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ key, icon: Icon, href }) => (
            <Link
              key={key}
              href={href}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 ease-in-out
                         border-t-4 border-t-transparent hover:border-t-[#D4A853]
                         block no-underline"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-50 mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <Icon className="w-7 h-7 text-amber-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1B2A4A] mb-3 group-hover:text-[#4A6FA5] transition-colors duration-200">
                {t(`services.items.${key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {t(`services.items.${key}.description`)}
              </p>

              {/* Arrow indicator */}
              <span className="mt-4 inline-flex items-center text-sm font-medium text-[#4A6FA5] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Ver más →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
