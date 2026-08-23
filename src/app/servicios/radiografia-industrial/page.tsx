import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Radiografía Industrial (RT) | GF Inspecciones y Ensayos',
  description:
    'Radiografía Industrial para la evaluación de discontinuidades internas en uniones soldadas y componentes. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
  keywords: [
    'radiografía industrial',
    'RT',
    'rayos X',
    'radiographic testing',
    'discontinuidades internas',
    'porosidad',
    'falta de penetración',
    'falta de fusión',
    'ensayos no destructivos',
    'NDT',
    'IRAM-ISO 9712',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Radiografía Industrial (RT) | GF Inspecciones y Ensayos',
    description:
      'Radiografía Industrial para la evaluación de discontinuidades internas en uniones soldadas y componentes. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
    url: '/servicios/radiografia-industrial',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Radiografía Industrial (RT)',
  description:
    'Radiografía Industrial para la evaluación de discontinuidades internas en uniones soldadas y componentes, utilizando equipos de generación de radiación X y sistemas de película radiográfica o tecnología aplicable.',
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
  serviceType: 'Radiographic Testing (RT)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Radiografía Industrial',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Radiografía Industrial (RT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Evaluación de Uniones Soldadas por RT' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Componentes por RT' } },
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
    {/* X-ray source */}
    <circle cx="12" cy="4" r="2.5" />
    {/* Radiation cone */}
    <path d="M9.5 6.5L4 20" />
    <path d="M14.5 6.5L20 20" />
    {/* Film / detector plate */}
    <rect x="3" y="20" width="18" height="2" rx="0.5" />
    {/* Radiation symbol lines */}
    <line x1="12" y1="6.5" x2="12" y2="20" strokeDasharray="2 2" strokeOpacity="0.4" />
    <line x1="10" y1="13" x2="14" y2="13" strokeOpacity="0.5" />
  </svg>
);

const description = `Realizamos Radiografía Industrial para la evaluación de discontinuidades internas en uniones soldadas y componentes, utilizando equipos de generación de radiación X y sistemas de película radiográfica o tecnología aplicable.

La técnica permite obtener una representación de la estructura interna del componente inspeccionado, posibilitando la identificación y evaluación de discontinuidades tales como porosidad, inclusiones, falta de penetración, falta de fusión y otras indicaciones relevantes.

Los ensayos se realizan bajo procedimientos establecidos y considerando los requisitos de seguridad radiológica, normas aplicables y criterios de aceptación especificados para cada trabajo.

Nuestros ensayos son ejecutados por personal Nivel 2 calificado conforme a los requisitos de IRAM-ISO 9712, asegurando la aplicación de procedimientos, técnicas y criterios de aceptación acordes con las normas y especificaciones técnicas aplicables a cada proyecto.`;

const features = [
  'Evaluación de discontinuidades internas en uniones soldadas y componentes',
  'Obtención de representación de la estructura interna del componente inspeccionado',
  'Identificación de porosidad, inclusiones, falta de penetración y falta de fusión',
  'Utilización de equipos de generación de radiación X',
  'Sistemas de película radiográfica o tecnología aplicable',
  'Cumplimiento de requisitos de seguridad radiológica',
  'Aplicación de criterios de aceptación conforme a norma o especificación del proyecto',
  'Elaboración de informes técnicos con evaluación de indicaciones',
  'Personal Nivel 2 calificado conforme IRAM-ISO 9712',
];

const standards = ['IRAM-ISO 9712', 'ASME V', 'API 1104', 'ISO 17636'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Líquidos Penetrantes', href: '/servicios/liquidos-penetrantes' },
  { name: 'Partículas Magnetizables', href: '/servicios/particulas-magneticas' },
];

export default function RadiografiaIndustrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Radiografía Industrial (RT)"
        subtitle="Evaluación de discontinuidades internas en uniones soldadas y componentes"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
