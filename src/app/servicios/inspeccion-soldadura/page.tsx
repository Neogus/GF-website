import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Inspección de Soldadura | GF Inspecciones y Ensayos',
  description:
    'Servicios de inspección de soldadura con personal Nivel 2 calificado conforme IRAM-ISO 9712. Control y seguimiento durante las distintas etapas del proceso de fabricación y montaje.',
  keywords: [
    'inspección de soldadura',
    'control de soldadura',
    'inspección visual',
    'control de materiales',
    'verificación dimensional',
    'ensayos no destructivos',
    'IRAM-ISO 9712',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Inspección de Soldadura | GF Inspecciones y Ensayos',
    description:
      'Servicios de inspección de soldadura con personal Nivel 2 calificado conforme IRAM-ISO 9712. Control y seguimiento durante las distintas etapas del proceso de fabricación y montaje.',
    url: '/servicios/inspeccion-soldadura',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Inspección de Soldadura',
  description:
    'Servicios de control y seguimiento de soldadura durante las distintas etapas del proceso de fabricación y montaje, con personal Nivel 2 calificado conforme IRAM-ISO 9712.',
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
  serviceType: 'Welding Inspection',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Inspección de Soldadura',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección Visual de Soldaduras' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Control de Materiales y Consumibles' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Verificación Dimensional' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Coordinación de END' } },
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
    {/* Welding torch / arc icon */}
    <path d="M3 17l4-4 3 3 7-7" />
    <path d="M18 6l1.5-1.5a1.5 1.5 0 0 1 2.1 2.1L20 8" />
    <path d="M17 7l-6 6" />
    <circle cx="7" cy="17" r="1" fill="currentColor" />
    <path d="M6 21c0-1.1.9-2 2-2h1" />
    <path d="M20 8c.6 1 .9 2.2.6 3.4" />
  </svg>
);

const description = `Contamos con personal Nivel 2 en Inspección de Soldadura, brindando servicios de control y seguimiento durante las distintas etapas del proceso de fabricación y montaje.

Nuestros servicios de inspección abarcan desde la verificación de materiales y condiciones previas a la soldadura, hasta el control durante el proceso y la inspección final de las uniones soldadas terminadas, incluyendo la coordinación de Ensayos No Destructivos complementarios.

La inspección se realiza conforme a los requisitos de IRAM-ISO 9712, aplicando los criterios de aceptación y procedimientos establecidos por el código, norma o especificación técnica aplicable a cada proyecto. Emitimos informes y registros de inspección que proporcionan trazabilidad completa del proceso.`;

const features = [
  'Inspección visual de soldaduras y componentes',
  'Control de materiales y consumibles',
  'Verificación de preparación de juntas y condiciones previas a la soldadura',
  'Control de parámetros y variables del proceso de soldadura',
  'Inspección durante el proceso y control de soldaduras terminadas',
  'Verificación dimensional y de criterios de aceptación',
  'Coordinación y seguimiento de Ensayos No Destructivos',
  'Evaluación de discontinuidades y condiciones de aceptación',
  'Elaboración de informes y registros de inspección',
];

const standards = ['IRAM-ISO 9712', 'AWS D1.1', 'ASME IX', 'API 1104'];

const relatedServices = [
  { name: 'Calificación de Soldadura', href: '/servicios/calificacion-soldadura' },
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Radiografía Industrial', href: '/servicios/radiografia-industrial' },
  { name: 'Asesoramiento Técnico', href: '/servicios/asesoramiento-tecnico' },
];

export default function InspeccionSoldaduraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Inspección de Soldadura"
        subtitle="Control y seguimiento durante las etapas de fabricación y montaje"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
