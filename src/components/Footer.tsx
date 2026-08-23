'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const copyright = t('footer.copyright').replace('{year}', String(currentYear));

  const quickLinks = [
    { label: t('nav.inicio'), href: '#inicio' },
    { label: t('nav.nosotros'), href: '#nosotros' },
    { label: t('nav.servicios'), href: '#servicios' },
    { label: t('nav.proyectos'), href: '#proyectos' },
    { label: t('nav.contacto'), href: '#contacto' },
  ];

  const serviceLinks = [
    { label: t('services.items.ndt.title'), href: '/servicios/ensayos-no-destructivos' },
    { label: t('services.items.radiografia.title'), href: '/servicios/radiografia-industrial' },
    { label: t('services.items.welding.title'), href: '/servicios/inspeccion-soldadura' },
    { label: t('services.items.calificacion.title'), href: '/servicios/calificacion-soldadura' },
    { label: t('services.items.asesoramiento.title'), href: '/servicios/asesoramiento-tecnico' },
    { label: t('services.items.pressure_vessel.title'), href: '/servicios/inspeccion-recipientes-presion' },
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
                className="brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {t('footer.description')}
            </p>
            <a
              href="https://www.linkedin.com/company/gf-inspecciones"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              <FaLinkedin className="text-blue-400" />
              LinkedIn
            </a>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
              {t('footer.quick_links_title')}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services (links to individual pages) ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
              {t('footer.services_title')}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact Info ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
              {t('nav.contacto')}
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
                  href="tel:+5491161528650"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +54 9 11 6152-8650
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center">
            {copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
