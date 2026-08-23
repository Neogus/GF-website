import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Líquidos Penetrantes (PT) | GF Inspecciones y Ensayos',
  description:
    'Ensayos mediante Líquidos Penetrantes para la detección de discontinuidades abiertas a la superficie en materiales metálicos y no metálicos no porosos. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
  keywords: [
    'líquidos penetrantes',
    'PT',
    'penetrant testing',
    'discontinuidades superficiales',
    'fisuras',
    'porosidad',
    'ensayos no destructivos',
    'NDT',
    'IRAM-ISO 9712',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Líquidos Penetrantes (PT) | GF Inspecciones y Ensayos',
    description:
      'Ensayos mediante Líquidos Penetrantes para la detección de discontinuidades abiertas a la superficie en materiales metálicos y no metálicos no porosos. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
    url: '/servicios/liquidos-penetrantes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ensayo por Líquidos Penetrantes (PT)',
  description:
    'Ensayos mediante Líquidos Penetrantes destinados a la detección de discontinuidades abiertas a la superficie en materiales metálicos y no metálicos no porosos, permitiendo detectar fisuras, porosidad abierta, pliegues, solapes y otras discontinuidades superficiales.',
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
  serviceType: 'Liquid Penetrant Testing (PT)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Líquidos Penetrantes',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ensayo por Líquidos Penetrantes (PT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Soldaduras por PT' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Control Post-Mecanizado y Post-Tratamiento Térmico' } },
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
    {/* Droplet body */}
    <path d="M12 2.5C12 2.5 5.5 9.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 9.5 12 2.5 12 2.5Z" />
    {/* Surface / workpiece line */}
    <line x1="2" y1="22" x2="22" y2="22" />
    {/* Penetrant seeping into a crack */}
    <line x1="12" y1="20.5" x2="12" y2="22" strokeWidth={2} />
    {/* Crack opening in the surface */}
    <path d="M10 22 L11.2 19.5 L12.8 21 L14 22" strokeWidth={1} strokeOpacity="0.7" />
  </svg>
);

const description = `Realizamos ensayos mediante Líquidos Penetrantes, destinados a la detección de discontinuidades abiertas a la superficie en materiales metálicos y no metálicos no porosos.

La técnica permite detectar fisuras, porosidad abierta, pliegues, solapes y otras discontinuidades superficiales que pueden no ser visibles mediante una inspección visual convencional.

El proceso incluye preparación y limpieza de la superficie, aplicación del penetrante, tiempo de penetración, remoción, aplicación del revelador, inspección y evaluación de las indicaciones.

Nuestros ensayos son ejecutados por personal Nivel 2 calificado conforme a los requisitos de IRAM-ISO 9712, asegurando la aplicación de procedimientos, técnicas y criterios de aceptación acordes con las normas y especificaciones técnicas aplicables a cada proyecto.`;

const features = [
  'Detección de fisuras, porosidad abierta, pliegues, solapes y otras discontinuidades abiertas a la superficie',
  'Aplicable a materiales metálicos y no metálicos no porosos',
  'Preparación y limpieza de la superficie según requerimientos del procedimiento aplicable',
  'Aplicación del penetrante y control del tiempo de penetración adecuado',
  'Remoción del exceso de penetrante y aplicación del revelador',
  'Inspección y evaluación de las indicaciones conforme a los criterios de aceptación aplicables',
  'Elaboración de informes técnicos con registro de indicaciones y dictamen de aceptación',
  'Personal Nivel 2 calificado conforme IRAM-ISO 9712',
];

const standards = ['IRAM-ISO 9712', 'ASME V Art. 6', 'ASTM E165', 'ISO 3452'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Partículas Magnetizables', href: '/servicios/particulas-magneticas' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Radiografía Industrial', href: '/servicios/radiografia-industrial' },
];

export default function LiquidosPenetrantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Líquidos Penetrantes (PT)"
        subtitle="Detección de discontinuidades superficiales en materiales no porosos"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
