import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Ensayos No Destructivos (END) | GF Inspecciones y Ensayos',
  description:
    'Servicios especializados de Ensayos No Destructivos: Ultrasonido, Radiografía Industrial, Líquidos Penetrantes y Partículas Magnetizables. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
  keywords: [
    'ensayos no destructivos',
    'NDT',
    'END',
    'ultrasonido',
    'radiografía industrial',
    'líquidos penetrantes',
    'partículas magnetizables',
    'IRAM-ISO 9712',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Ensayos No Destructivos (END) | GF Inspecciones y Ensayos',
    description:
      'Servicios especializados de Ensayos No Destructivos: Ultrasonido, Radiografía Industrial, Líquidos Penetrantes y Partículas Magnetizables. Personal Nivel 2 calificado conforme IRAM-ISO 9712.',
    url: '/servicios/ensayos-no-destructivos',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ensayos No Destructivos (END)',
  description:
    'Servicios especializados de Ensayos No Destructivos orientados al control de calidad, evaluación de integridad y verificación de la conformidad de materiales, componentes, uniones soldadas y estructuras.',
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
  serviceType: 'Non-Destructive Testing',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Técnicas de Ensayos No Destructivos',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ultrasonido (UT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Radiografía Industrial (RT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Líquidos Penetrantes (PT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Partículas Magnetizables (MT)' } },
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
    {/* Sonar / wave pulse icon representing NDT */}
    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7.5 7.5a6.5 6.5 0 0 0 0 9" />
    <path d="M16.5 7.5a6.5 6.5 0 0 1 0 9" />
    <path d="M4.5 4.5a11.5 11.5 0 0 0 0 15" />
    <path d="M19.5 4.5a11.5 11.5 0 0 1 0 15" />
  </svg>
);

const description = `En GF Inspecciones y Ensayos brindamos servicios especializados de Ensayos No Destructivos (END), orientados al control de calidad, evaluación de integridad y verificación de la conformidad de materiales, componentes, uniones soldadas y estructuras.

Nuestros servicios son ejecutados por personal Nivel 2 (Level II) calificado y autorizado conforme a los requisitos de IRAM-ISO 9712, asegurando la aplicación de procedimientos, técnicas y criterios de aceptación acordes con las normas y especificaciones técnicas aplicables a cada proyecto.

Las técnicas que ofrecemos incluyen Ultrasonido (UT), Radiografía Industrial (RT), Líquidos Penetrantes (PT) y Partículas Magnetizables (MT), cada una seleccionada según los requerimientos específicos del componente a inspeccionar y los criterios normativos aplicables.`;

const features = [
  'Ultrasonido Convencional (UT) — detección de discontinuidades internas y superficiales',
  'Radiografía Industrial (RT) — evaluación de la estructura interna de componentes y soldaduras',
  'Líquidos Penetrantes (PT) — detección de discontinuidades abiertas a la superficie',
  'Partículas Magnetizables (MT) — detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos',
  'Personal Nivel 2 calificado conforme IRAM-ISO 9712',
  'Procedimientos y criterios de aceptación acordes con normas y especificaciones técnicas aplicables',
  'Informes técnicos con evaluación de indicaciones y dictamen correspondiente',
  'Aplicable a materiales, componentes, uniones soldadas y estructuras',
];

const standards = ['IRAM-ISO 9712', 'ASME V', 'AWS D1.1', 'API 1104', 'ISO 17636'];

const relatedServices = [
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Radiografía Industrial', href: '/servicios/radiografia-industrial' },
  { name: 'Líquidos Penetrantes', href: '/servicios/liquidos-penetrantes' },
  { name: 'Partículas Magnetizables', href: '/servicios/particulas-magneticas' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
];

export default function EnsayosNoDestructivosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Ensayos No Destructivos (END)"
        subtitle="Control de calidad y evaluación de integridad sin comprometer la funcionalidad de los componentes"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
