'use client';

import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const copyright = t('footer.copyright').replace('{year}', String(currentYear));

  const quickLinks = [
    { labelKey: 'footer.quick_links.home', href: '#inicio' },
    { labelKey: 'footer.quick_links.about', href: '#nosotros' },
    { labelKey: 'footer.quick_links.services', href: '#servicios' },
    { labelKey: 'footer.quick_links.projects', href: '#proyectos' },
    { labelKey: 'footer.quick_links.contact', href: '#contacto' },
  ];

  const serviceLinks = [
    { labelKey: 'footer.services_links.ndt' },
    { labelKey: 'footer.services_links.welding' },
    { labelKey: 'footer.services_links.pressure_vessels' },
    { labelKey: 'footer.services_links.corrosion' },
    { labelKey: 'footer.services_links.integrity' },
    { labelKey: 'footer.services_links.laser_scanning' },
  ];

  return (
    <footer
      className="text-gray-300"
      style={{ backgroundColor: '#1B2A4A' }}
    >
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Column 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="GF Inspecciones y Ensayos"
                width={160}
                height={56}
                className="object-contain brightness-0 invert"
                priority={false}
              />
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/gf-inspecciones"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-[#0077B5] transition-colors duration-200"
              >
                <FaLinkedin className="text-white text-base" />
              </a>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
              {t('footer.quick_links_title')}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ labelKey, href }) => (
                <li key={labelKey}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {t(labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
              {t('footer.services_title')}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ labelKey }) => (
                <li key={labelKey}>
                  <a
                    href="#servicios"
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {t(labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact Info ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-0.5 flex-shrink-0 text-sm" />
                <span className="text-sm text-gray-400 leading-snug">
                  Buenos Aires, Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-400 flex-shrink-0 text-sm" />
                <a
                  href="tel:+541100000000"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +54 11 XXXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0 text-sm" />
                <a
                  href="mailto:contacto@gfinspecciones.com.ar"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 break-all"
                >
                  contacto@gfinspecciones.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-gray-500">
              {copyright}
            </p>
            <p className="text-xs text-gray-500">
              {t('footer.made_in')}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
