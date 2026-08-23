import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Gestión de Integridad de Activos | GF Inspecciones y Ensayos',
  description:
    'Servicios de gestión de integridad de activos industriales en Argentina. Programas RBI, mantenimiento predictivo, auditorías de cumplimiento y consultoría técnica según API 580, API 581, ISO 55000 y API 571.',
  keywords: [
    'gestión de integridad de activos',
    'RBI',
    'risk based inspection',
    'inspección basada en riesgo',
    'mantenimiento predictivo',
    'API 580',
    'API 581',
    'ISO 55000',
    'API 571',
    'auditoría de integridad',
    'consultoría técnica',
    'confiabilidad operacional',
    'plan de inspección',
    'integridad de activos industriales',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Gestión de Integridad de Activos | GF Inspecciones y Ensayos',
    description:
      'Servicios de gestión de integridad de activos industriales en Argentina. Programas RBI, mantenimiento predictivo, auditorías de cumplimiento y consultoría técnica según API 580, API 581, ISO 55000 y API 571.',
    url: '/servicios/gestion-integridad-activos',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gestión de Integridad de Activos',
  description:
    'Servicios profesionales de gestión de integridad de activos industriales: desarrollo de programas de inspección basada en riesgo (RBI), planes de mantenimiento predictivo, auditorías de cumplimiento normativo, evaluación de mecanismos de daño y consultoría técnica especializada, conforme a API 580, API 581, ISO 55000 y API 571.',
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
  serviceType: 'Asset Integrity Management',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Gestión de Integridad de Activos',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Programas de Inspección Basada en Riesgo (RBI)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Planes de Mantenimiento Predictivo e Inspección' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auditorías de Cumplimiento Normativo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoría Técnica en Integridad de Activos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Análisis de Mecanismos de Daño según API 571' } },
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
    {/* Asset integrity / shield-check icon */}
    <path d="M12 2l7 4v6c0 4.5-3 8.5-7 10C5 20.5 2 16.5 2 12V6l10-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const description = `La gestión de la integridad de activos es el pilar fundamental para garantizar la confiabilidad, seguridad y disponibilidad de los equipos e instalaciones industriales a lo largo de todo su ciclo de vida. En GF Inspecciones y Ensayos desarrollamos programas integrales de gestión de integridad que permiten a las organizaciones optimizar sus recursos de inspección y mantenimiento, reducir el riesgo operativo y cumplir con las exigencias regulatorias vigentes.

Nuestra metodología se basa en la Inspección Basada en Riesgo (RBI, Risk-Based Inspection) conforme a API 580 y API 581, que permite priorizar los esfuerzos de inspección según la probabilidad y consecuencias de falla de cada activo. Este enfoque permite racionalizar los intervalos de inspección, identificar los mecanismos de daño más críticos mediante API 571 y asignar los recursos de mantenimiento donde el impacto en seguridad y producción es mayor.

Complementamos los programas RBI con planes de mantenimiento predictivo, análisis de confiabilidad y disponibilidad (RAM), auditorías de cumplimiento normativo y asesoramiento continuo a los equipos técnicos de nuestros clientes. Cada programa se diseña a medida según el tipo de industria, los fluidos de proceso, las condiciones operativas y los objetivos estratégicos de la organización, en alineación con los principios de gestión de activos establecidos en la norma ISO 55000.`;

const features = [
  'Desarrollo de programas de Inspección Basada en Riesgo (RBI) conforme a API 580 y API 581: definición de consecuencias de falla, probabilidad de falla, matriz de riesgo y priorización de equipos críticos',
  'Identificación y análisis de mecanismos de daño activos y potenciales en equipos e instalaciones según API 571: corrosión, fragilización, fatiga, fluencia y degradación térmica, entre otros',
  'Elaboración de planes de inspección individualizados con técnicas de END recomendadas, extensión de cobertura, frecuencias de inspección y criterios de aceptación basados en el nivel de riesgo',
  'Diseño de programas de mantenimiento predictivo e inspección continua: monitoreo de corrosión, análisis de vibración, termografía infrarroja y ultrasonido en línea para activos críticos',
  'Estimación de vida remanente (Remaining Life Assessment – RLA) y planificación de extensiones de vida o retiro de servicio de equipos e instalaciones industriales',
  'Auditorías de cumplimiento de integridad operacional: evaluación del estado de los programas de inspección existentes, brechas normativas y oportunidades de mejora frente a estándares API, ASME e ISO',
  'Consultoría técnica especializada para la implementación o mejora de sistemas de gestión de integridad de activos alineados con ISO 55000 y las mejores prácticas de la industria',
  'Clasificación y jerarquización de activos industriales: definición de criticidad operativa, ranking de equipos y priorización de inversiones en inspección, mantenimiento y renovación',
  'Generación de informes de integridad, planes de acción correctiva y documentación técnica de soporte para decisiones de operación, mantenimiento y aseguramiento de la calidad',
];

const standards = ['API 580', 'API 581', 'ISO 55000', 'API 571'];

const relatedServices = [
  { name: 'Evaluación de Corrosión', href: '/servicios/evaluacion-corrosion' },
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/inspeccion-recipientes-presion' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
];

export default function GestionIntegridadActivosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Gestión de Integridad de Activos"
        subtitle="Planes de inspección basados en riesgo para maximizar disponibilidad"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
