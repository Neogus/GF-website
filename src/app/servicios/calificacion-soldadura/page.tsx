import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Calificación de Soldadores y Procedimientos | GF Inspecciones y Ensayos',
  description:
    'Calificación de soldadores, operadores de soldadura y procedimientos de soldadura (PQR/WPS). Asistencia técnica conforme a código o norma aplicable.',
  keywords: [
    'calificación de soldadores',
    'calificación de procedimientos de soldadura',
    'WPS',
    'PQR',
    'WPQ',
    'soldadura',
    'ASME IX',
    'AWS D1.1',
    'API 1104',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Calificación de Soldadores y Procedimientos | GF Inspecciones y Ensayos',
    description:
      'Calificación de soldadores, operadores de soldadura y procedimientos de soldadura (PQR/WPS). Asistencia técnica conforme a código o norma aplicable.',
    url: '/servicios/calificacion-soldadura',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Calificación de Soldadores y Procedimientos de Soldadura',
  description:
    'Servicios de calificación de soldadores y operadores de soldadura, y asesoramiento para la calificación de Procedimientos de Soldadura (PQR/WPS), conforme a los códigos y normas aplicables.',
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
  serviceType: 'Welder and Procedure Qualification',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Calificación de Soldadura',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Calificación de Soldadores' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Calificación de Operadores de Soldadura' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Calificación de Procedimientos de Soldadura (PQR/WPS)' } },
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
    {/* Certificate / document */}
    <rect x="3" y="2" width="18" height="20" rx="2" />
    {/* Check mark */}
    <path d="M8 12l3 3 5-5" />
    {/* Lines representing text */}
    <line x1="8" y1="18" x2="16" y2="18" strokeOpacity="0.5" />
    <line x1="8" y1="6" x2="14" y2="6" strokeOpacity="0.5" />
  </svg>
);

const description = `Realizamos y gestionamos la calificación de soldadores y operadores de soldadura, verificando el cumplimiento de los requisitos establecidos por el código, norma o especificación aplicable.

Brindamos asistencia en la preparación de las probetas, seguimiento de las variables de soldadura, coordinación de los ensayos requeridos y recopilación de la documentación necesaria para la emisión de los registros correspondientes.

Adicionalmente, brindamos asesoramiento y asistencia técnica para la calificación de Procedimientos de Soldadura (PQR/WPS), contemplando las variables esenciales y requisitos establecidos por el código o norma aplicable. El servicio puede comprender el análisis de los requisitos técnicos, definición de variables de soldadura, seguimiento de la ejecución de probetas, coordinación de ensayos mecánicos y END, evaluación de resultados y documentación de la calificación.`;

const features = [
  'Calificación de soldadores y operadores de soldadura conforme a código o norma aplicable',
  'Verificación del cumplimiento de los requisitos establecidos por la especificación',
  'Asistencia en la preparación de probetas de calificación',
  'Seguimiento de variables de soldadura durante la ejecución',
  'Coordinación de ensayos requeridos (mecánicos y END)',
  'Recopilación de documentación y emisión de registros de calificación',
  'Asesoramiento para calificación de Procedimientos de Soldadura (PQR/WPS)',
  'Análisis de requisitos técnicos y definición de variables esenciales',
  'Evaluación de resultados y documentación de la calificación',
];

const standards = ['ASME IX', 'AWS D1.1', 'API 1104', 'EN ISO 15614', 'EN ISO 9606'];

const relatedServices = [
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Asesoramiento Técnico', href: '/servicios/asesoramiento-tecnico' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Radiografía Industrial', href: '/servicios/radiografia-industrial' },
];

export default function CalificacionSoldaduraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Calificación de Soldadores y Procedimientos"
        subtitle="Calificación de soldadores, operadores y procedimientos de soldadura (PQR/WPS)"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
