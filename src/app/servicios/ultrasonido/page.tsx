import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Ultrasonido (UT) | GF Inspecciones y Ensayos',
  description:
    'Ensayos mediante Ultrasonido Convencional para la detección y evaluación de discontinuidades internas y superficiales en materiales y componentes. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
  keywords: [
    'ultrasonido convencional',
    'ultrasonido',
    'UT',
    'ensayo ultrasónico',
    'discontinuidades internas',
    'inspección de soldaduras',
    'medición de espesores',
    'ensayos no destructivos',
    'NDT',
    'IRAM-ISO 9712',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Ultrasonido (UT) | GF Inspecciones y Ensayos',
    description:
      'Ensayos mediante Ultrasonido Convencional para la detección y evaluación de discontinuidades internas y superficiales en materiales y componentes. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
    url: '/servicios/ultrasonido',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ultrasonido Convencional (UT)',
  description:
    'Ensayos mediante Ultrasonido Convencional destinados a la detección y evaluación de discontinuidades internas y superficiales en materiales y componentes, mediante la propagación de ondas ultrasónicas y el análisis de las indicaciones obtenidas.',
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
  serviceType: 'Ultrasonic Testing (UT)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Ultrasonido',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ultrasonido Convencional (UT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Soldaduras por UT' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medición de Espesores' } },
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
    {/* Transducer probe */}
    <rect x="9" y="2" width="6" height="5" rx="1" />
    <line x1="12" y1="7" x2="12" y2="10" />
    {/* Ultrasonic wave arcs emanating downward */}
    <path d="M7 11 Q12 14 17 11" />
    <path d="M5 14 Q12 18 19 14" />
    <path d="M3 17 Q12 22 21 17" />
    {/* Reflection echo line */}
    <line x1="12" y1="10" x2="12" y2="22" strokeDasharray="2 2" strokeOpacity="0.5" />
  </svg>
);

const description = `Realizamos ensayos mediante Ultrasonido Convencional, destinados a la detección y evaluación de discontinuidades internas y superficiales en materiales y componentes.

La técnica permite inspeccionar soldaduras, piezas metálicas, componentes forjados y otros elementos, mediante la propagación de ondas ultrasónicas y el análisis de las indicaciones obtenidas.

El servicio comprende la preparación de la superficie, selección de palpadores y parámetros de inspección, ejecución del ensayo, evaluación de indicaciones y elaboración del informe técnico correspondiente.

Nuestros ensayos son ejecutados por personal Nivel 2 calificado conforme a los requisitos de IRAM-ISO 9712, asegurando la aplicación de procedimientos, técnicas y criterios de aceptación acordes con las normas y especificaciones técnicas aplicables a cada proyecto.`;

const features = [
  'Detección y evaluación de discontinuidades internas y superficiales en materiales metálicos',
  'Inspección de soldaduras mediante haz angular para detección de falta de fusión, falta de penetración, porosidad e inclusiones',
  'Inspección de piezas forjadas, fundiciones y laminados mediante haz recto y angular',
  'Medición de espesores en componentes con acceso unilateral',
  'Preparación de la superficie y selección de palpadores adecuados para cada aplicación',
  'Evaluación de indicaciones conforme a los criterios de aceptación de la norma aplicable',
  'Elaboración de informes técnicos con registro de indicaciones, dimensionamiento y localización',
  'Personal Nivel 2 calificado conforme IRAM-ISO 9712',
];

const standards = ['IRAM-ISO 9712', 'ASME V', 'AWS D1.1', 'API 1104'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Radiografía Industrial', href: '/servicios/radiografia-industrial' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Líquidos Penetrantes', href: '/servicios/liquidos-penetrantes' },
  { name: 'Partículas Magnetizables', href: '/servicios/particulas-magneticas' },
];

export default function UltrasonidoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Ultrasonido (UT)"
        subtitle="Detección y evaluación de discontinuidades mediante ondas ultrasónicas"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
