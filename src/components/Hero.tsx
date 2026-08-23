'use client';

import { useLanguage } from '@/i18n/LanguageContext';

const stats = [
  { value: '10+',  labelKey: 'hero.stats.years',      fallback: 'Años' },
  { value: '500+', labelKey: 'hero.stats.projects',   fallback: 'Proyectos' },
  { value: '50+',  labelKey: 'hero.stats.clients',    fallback: 'Clientes' },
  { value: '100%', labelKey: 'hero.stats.commitment', fallback: 'Compromiso' },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ backgroundColor: '#1B2A4A' }}
    >
      {/* ── Geometric / industrial background pattern ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(212,160,23,0.08) 0%, transparent 60%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.02) 40px,
              rgba(255,255,255,0.02) 41px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.02) 40px,
              rgba(255,255,255,0.02) 41px
            )
          `,
        }}
      />

      {/* ── Radial vignette / depth overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(212,160,23,0.06) 0%, transparent 65%), ' +
            'linear-gradient(to bottom, rgba(11,18,35,0.55) 0%, rgba(11,18,35,0.15) 50%, rgba(11,18,35,0.8) 100%)',
        }}
      />

      {/* ── Decorative accent lines ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-1 h-full pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #D4A017, transparent)' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-1 h-full pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,0.4), transparent)' }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">

        {/* Eyebrow label */}
        <div
          className="mb-6 inline-flex items-center gap-2 opacity-0 animate-[fade-up_0.7s_ease-out_forwards]"
          style={{ animationDelay: '0s' }}
        >
          <span
            className="block h-px w-10"
            style={{ background: '#D4A017' }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: '#D4A017' }}
          >
            {t('hero.eyebrow') || 'Inspección Industrial Profesional'}
          </span>
          <span
            className="block h-px w-10"
            style={{ background: '#D4A017' }}
          />
        </div>

        {/* Headline */}
        <h1
          className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl opacity-0 animate-[fade-up_0.7s_ease-out_forwards]"
          style={{ animationDelay: '0.15s' }}
        >
          {t('hero.headline') || (
            <>
              Soluciones de{' '}
              <span style={{ color: '#D4A017' }}>Inspección</span>{' '}
              que Garantizan Calidad
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100/80 sm:text-lg opacity-0 animate-[fade-up_0.7s_ease-out_forwards]"
          style={{ animationDelay: '0.3s' }}
        >
          {t('hero.subtitle') ||
            'Más de una década brindando servicios especializados de inspección, ensayos no destructivos y control de calidad para la industria.'}
        </p>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center opacity-0 animate-[fade-up_0.7s_ease-out_forwards]"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href="#servicios"
            className="group inline-flex items-center gap-2 rounded-sm px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-amber-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            style={{ backgroundColor: '#D4A017' }}
          >
            {t('hero.cta.services') || 'Nuestros Servicios'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-white/60 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t('hero.cta.contact') || 'Contáctenos'}
          </a>
        </div>

        {/* Scroll cue */}
        <div
          className="mt-14 flex flex-col items-center gap-2 opacity-0 animate-[fade-up_0.7s_ease-out_forwards]"
          style={{ animationDelay: '0.65s' }}
        >
          <span className="text-xs uppercase tracking-widest text-white/40">
            {t('hero.scroll') || 'Desplázate'}
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1">
            <div className="h-2 w-1 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        className="relative z-10 w-full opacity-0 animate-[fade-up_0.7s_ease-out_forwards]"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', animationDelay: '0.8s' }}
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-4"
          style={{ backgroundColor: 'rgba(11,18,35,0.6)', backdropFilter: 'blur(8px)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.labelKey}
              className={`flex flex-col items-center justify-center px-6 py-6 ${
                i < stats.length - 1 ? 'border-r border-white/10' : ''
              }`}
            >
              <span
                className="text-3xl font-extrabold tabular-nums tracking-tight"
                style={{ color: '#D4A017' }}
              >
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-widest text-white/60">
                {t(stat.labelKey) || stat.fallback}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
