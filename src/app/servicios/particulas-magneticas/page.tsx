import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Partículas Magnetizables (MT) | GF Inspecciones y Ensayos',
  description:
    'Ensayos mediante Partículas Magnetizables para la detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
  keywords: [
    'partículas magnetizables',
    'MT',
    'magnetic particle testing',
    'discontinuidades superficiales',
    'materiales ferromagnéticos',
    'fisuras',
    'ensayos no destructivos',
    'NDT',
    'IRAM-ISO 9712',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Partículas Magnetizables (MT) | GF Inspecciones y Ensayos',
    description:
      'Ensayos mediante Partículas Magnetizables para la detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
    url: '/servicios/particulas-magneticas',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ensayo por Partículas Magnetizables (MT)',
  description:
    'Ensayos mediante Partículas Magnetizables para la detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos, permitiendo identificar fisuras, falta de continuidad, solapes y otras indicaciones.',
  provider: {
    '@type': 'Organization',
    name: 'GF Inspecciones y Ensayos',
    url: 'https://www.gfinspecciones.com.ar',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Buenos Aires',
      addressCountry: 'AR',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  serviceType: 'Magnetic Particle Testing (MT)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Partículas Magnetizables',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ensayo por Partículas Magnetizables (MT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Soldaduras por MT' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Componentes Ferromagnéticos' } },
    ],
  },
};

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
    aria-hidden="true"
  >
    {/* Horseshoe magnet body — U-shape */}
    <path d="M7 4v8a5 5 0 0 0 10 0V4" />
    {/* Left pole cap (N) */}
    <line x1="5" y1="4" x2="9" y2="4" strokeWidth={2.5} />
    {/* Right pole cap (S) */}
    <line x1="15" y1="4" x2="19" y2="4" strokeWidth={2.5} />
    {/* Component surface under inspection */}
    <line x1="2" y1="20" x2="22" y2="20" />
    {/* Magnetic flux leakage at a surface discontinuity */}
    <path d="M10 20 Q12 17 14 20" strokeDasharray="1.5 1" strokeOpacity="0.8" />
    {/* Particles accumulating at the defect */}
    <circle cx="11" cy="20" r="0.65" fill="currentColor" stroke="none" />
    <circle cx="12" cy="20" r="0.65" fill="currentColor" stroke="none" />
    <circle cx="13" cy="20" r="0.65" fill="currentColor" stroke="none" />
  </svg>
);

const description = `Realizamos ensayos mediante Partículas Magnetizables para la detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos.

La técnica permite identificar discontinuidades tales como fisuras, falta de continuidad, solapes y otras indicaciones orientadas favorablemente respecto del campo magnético aplicado.

El ensayo comprende la preparación de la superficie, magnetización del componente, aplicación del medio indicador, interpretación de indicaciones y emisión del informe correspondiente.

Nuestros ensayos son ejecutados por personal Nivel 2 calificado conforme a los requisitos de IRAM-ISO 9712, asegurando la aplicación de procedimientos, técnicas y criterios de aceptación acordes con las normas y especificaciones técnicas aplicables a cada proyecto.`;

const features = [
  'Detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos',
  'Identificación de fisuras, falta de continuidad, solapes y otras indicaciones',
  'Preparación de la superficie del componente a inspeccionar',
  'Magnetización del componente mediante técnica adecuada al tipo de pieza y discontinuidad buscada',
  'Aplicación del medio indicador (partículas magnetizables)',
  'Interpretación de indicaciones y evaluación conforme a criterios de aceptación aplicables',
  'Emisión de informe técnico con registro de indicaciones y dictamen correspondiente',
  'Personal Nivel 2 calificado conforme IRAM-ISO 9712',
];

const standards = ['IRAM-ISO 9712', 'ASME V Art. 7', 'ASTM E709', 'ISO 9934'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Líquidos Penetrantes', href: '/servicios/liquidos-penetrantes' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Radiografía Industrial', href: '/servicios/radiografia-industrial' },
];

export default function ParticulasMagnetizablesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Partículas Magnetizables (MT)"
        subtitle="Detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
