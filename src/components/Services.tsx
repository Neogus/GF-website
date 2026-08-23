'use client';

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

const services: { key: string; icon: IconType }[] = [
  { key: 'ndt', icon: FaSearchPlus },
  { key: 'welding', icon: FaFire },
  { key: 'pressure_vessel', icon: FaIndustry },
  { key: 'corrosion', icon: FaFlask },
  { key: 'asset_integrity', icon: FaClipboardCheck },
  { key: 'laser_scanning', icon: FaCube },
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
          {services.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 ease-in-out
                         border-t-4 border-t-transparent hover:border-t-[#D4A853]"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-50 mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <Icon className="w-7 h-7 text-amber-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1B2A4A] mb-3">
                {t(`services.items.${key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {t(`services.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
