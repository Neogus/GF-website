'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { useLanguage } from '@/i18n/LanguageContext';

const NAV_LINKS = [
  { labelKey: 'nav.inicio',    href: '#inicio'    },
  { labelKey: 'nav.nosotros',  href: '#nosotros'  },
  { labelKey: 'nav.servicios', href: '#servicios' },
  { labelKey: 'nav.proyectos', href: '#proyectos' },
  { labelKey: 'nav.contacto',  href: '#contacto'  },
];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeLink, setActiveLink]   = useState<string>('');

  /* ── scroll detection ─────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close mobile menu on resize to desktop ──────────────────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ── smooth scroll handler ───────────────────────────────────────── */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveLink(href);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  /* ── styles ──────────────────────────────────────────────────────── */
  const navbarBase =
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
  const navbarScrolled =
    'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100';
  const navbarTop =
    'bg-white/80 backdrop-blur-sm';

  const linkBase =
    'relative text-sm font-medium tracking-wide transition-colors duration-200 ' +
    'after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 ' +
    'after:bg-[#4A6FA5] after:transition-all after:duration-300 ' +
    'hover:text-[#4A6FA5] hover:after:w-full';
  const linkActive  = 'text-[#4A6FA5] after:w-full';
  const linkInactive = 'text-[#1B2A4A]';

  return (
    <header className={`${navbarBase} ${scrolled ? navbarScrolled : navbarTop}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ──────────────────────────────────────────────────── */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex-shrink-0 flex items-center"
            aria-label="GF Inspecciones y Ensayos – Inicio"
          >
            <Image
              src="/logo.png"
              alt="GF Inspecciones y Ensayos"
              width={180}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* ── Desktop nav links ─────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ labelKey, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`${linkBase} ${activeLink === href ? linkActive : linkInactive}`}
              >
                {t(labelKey)}
              </a>
            ))}
          </div>

          {/* ── Right controls ────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
              className="
                flex items-center gap-1.5 px-3 py-1.5 rounded-full
                text-xs font-semibold tracking-wider uppercase
                border border-[#4A6FA5] text-[#4A6FA5]
                hover:bg-[#4A6FA5] hover:text-white
                transition-all duration-200
              "
            >
              <MdLanguage className="text-base" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              className="
                md:hidden p-2 rounded-md text-[#1B2A4A]
                hover:text-[#4A6FA5] hover:bg-gray-100
                transition-colors duration-200
              "
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              {menuOpen
                ? <HiX className="h-6 w-6" />
                : <HiMenu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile menu ───────────────────────────────────────────────── */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="pt-2 pb-4 space-y-1 border-t border-gray-100">
            {NAV_LINKS.map(({ labelKey, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`
                  block px-4 py-3 rounded-lg text-sm font-medium
                  transition-colors duration-200
                  ${activeLink === href
                    ? 'bg-[#4A6FA5]/10 text-[#4A6FA5]'
                    : 'text-[#1B2A4A] hover:bg-gray-50 hover:text-[#4A6FA5]'
                  }
                `}
              >
                {t(labelKey)}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
