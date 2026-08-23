'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { FaShieldAlt, FaCrosshairs, FaLightbulb, FaHardHat } from 'react-icons/fa';

const icons = [FaShieldAlt, FaCrosshairs, FaLightbulb, FaHardHat];

export default function About() {
  const { t } = useLanguage();

  const values = [0, 1, 2, 3];

  return (
    <section id="nosotros" style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section Label */}
        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#D4A853',
            marginBottom: '12px',
          }}
        >
          {t('about.label')}
        </p>

        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: '#1B2A4A',
            marginBottom: '20px',
            lineHeight: 1.2,
          }}
        >
          {t('about.title')}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: '1.05rem',
            color: '#4A6FA5',
            maxWidth: '680px',
            lineHeight: 1.8,
            marginBottom: '56px',
          }}
        >
          {t('about.description')}
        </p>

        {/* Values Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {values.map((i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="about-value-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8edf5',
                  borderRadius: '12px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: '0 2px 8px rgba(27,42,74,0.06)',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                  cursor: 'default',
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '10px',
                    background: 'rgba(212,168,83,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon style={{ color: '#D4A853', fontSize: '1.5rem' }} />
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#1B2A4A',
                    margin: 0,
                  }}
                >
                  {t(`about.values.${i}.title`)}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#4A6FA5',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {t(`about.values.${i}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-value-card:hover {
          box-shadow: 0 8px 28px rgba(27,42,74,0.14);
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}
