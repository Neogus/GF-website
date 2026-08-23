import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Asesoramiento Técnico | GF Inspecciones y Ensayos',
  description:
    'Asesoramiento técnico especializado en Ensayos No Destructivos, inspección y soldadura. Selección de técnicas, interpretación de requisitos normativos y evaluación de resultados.',
  keywords: [
    'asesoramiento técnico',
    'consultoría END',
    'consultoría soldadura',
    'selección de técnicas de inspección',
    'requisitos normativos',
    'evaluación de resultados',
    'ensayos no destructivos',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Asesoramiento Técnico | GF Inspecciones y Ensayos',
    description:
      'Asesoramiento técnico especializado en Ensayos No Destructivos, inspección y soldadura. Selección de técnicas, interpretación de requisitos normativos y evaluación de resultados.',
    url: '/servicios/asesoramiento-tecnico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asesoramiento Técnico',
  description:
    'Asesoramiento técnico especializado en Ensayos No Destructivos, inspección y soldadura, colaborando en la selección de técnicas de inspección, interpretación de requisitos normativos, definición de alcances de inspección y evaluación de resultados.',
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
  serviceType: 'Technical Advisory Services',
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
    {/* Lightbulb for advisory/consulting */}
    <path d="M9 21h6" />
    <path d="M10 21v-2a4 4 0 0 1-1.5-3.1C8.5 13.5 9 12 12 10c3 2 3.5 3.5 3.5 5.9A4 4 0 0 1 14 19v2" />
    <circle cx="12" cy="6" r="3" />
    {/* Rays */}
    <line x1="12" y1="1" x2="12" y2="2" />
    <line x1="17" y1="3" x2="16.5" y2="3.5" />
    <line x1="7" y1="3" x2="7.5" y2="3.5" />
  </svg>
);

const description = `Brindamos asesoramiento técnico especializado en Ensayos No Destructivos, inspección y soldadura, colaborando en la selección de técnicas de inspección, interpretación de requisitos normativos, definición de alcances de inspección y evaluación de resultados.

Nuestro objetivo es proporcionar soluciones técnicas confiables, adaptadas a los requerimientos específicos de cada proyecto, priorizando la calidad, trazabilidad, seguridad y cumplimiento de los requisitos normativos aplicables.

El servicio está orientado a empresas que requieren soporte técnico para la planificación de actividades de inspección, definición de criterios de aceptación, selección de métodos de ensayo adecuados o interpretación de resultados obtenidos en sus procesos de control de calidad.`;

const features = [
  'Selección de técnicas de inspección adecuadas para cada aplicación',
  'Interpretación de requisitos normativos aplicables al proyecto',
  'Definición de alcances de inspección y planes de control',
  'Evaluación de resultados de ensayos e inspecciones',
  'Asesoramiento en selección de criterios de aceptación',
  'Soporte técnico en planificación de actividades de inspección',
  'Colaboración en la resolución de problemas técnicos de soldadura e inspección',
  'Soluciones adaptadas a los requerimientos específicos de cada proyecto',
];

const standards = ['IRAM-ISO 9712', 'ASME V', 'ASME IX', 'AWS D1.1', 'API 1104'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Calificación de Soldadura', href: '/servicios/calificacion-soldadura' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Radiografía Industrial', href: '/servicios/radiografia-industrial' },
];

export default function AsesoramientoTecnicoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Asesoramiento Técnico"
        subtitle="Soluciones técnicas especializadas en END, inspección y soldadura"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
