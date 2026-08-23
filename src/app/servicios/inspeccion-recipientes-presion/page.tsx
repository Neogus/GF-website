import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Inspección de Recipientes a Presión | GF Inspecciones y Ensayos',
  description:
    'Servicios de inspección de recipientes a presión en Argentina. Inspección en servicio, pre-puesta en marcha, sistemas de cañerías y procesos según códigos ASME VIII, API 510, API 570 y normativa IRAM/NB-13.',
  keywords: [
    'recipientes a presión',
    'inspección recipientes a presión',
    'ASME VIII',
    'API 510',
    'API 570',
    'NB-13',
    'fitness for service',
    'prueba hidrostática',
    'inspección en servicio',
    'cañerías proceso',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Inspección de Recipientes a Presión | GF Inspecciones y Ensayos',
    description:
      'Servicios de inspección de recipientes a presión en Argentina. Inspección en servicio, pre-puesta en marcha, sistemas de cañerías y procesos según códigos ASME VIII, API 510, API 570 y normativa IRAM/NB-13.',
    url: '/servicios/inspeccion-recipientes-presion',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Inspección de Recipientes a Presión',
  description:
    'Servicios profesionales de inspección de recipientes a presión en servicio y pre-puesta en marcha, incluyendo inspección interna y externa, pruebas hidrostáticas, evaluación de aptitud para el servicio (FFS) e inspección de cañerías y sistemas de proceso conforme a ASME VIII, API 510, API 570, NB-13 y EN 13445.',
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
  serviceType: 'Pressure Vessel Inspection',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Inspección de Recipientes a Presión',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección Interna y Externa en Servicio' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prueba Hidrostática y Neumática' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Evaluación de Aptitud para el Servicio (FFS)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Cañerías de Proceso (API 570)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección Pre-Puesta en Marcha' } },
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
    {/* Pressure vessel / cylinder icon */}
    <ellipse cx="12" cy="5" rx="7" ry="2.5" />
    <path d="M5 5v14" />
    <path d="M19 5v14" />
    <ellipse cx="12" cy="19" rx="7" ry="2.5" />
    <path d="M12 2.5V1" />
    <path d="M12 23v-1.5" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
  </svg>
);

const description = `La inspección de recipientes a presión es una actividad crítica para garantizar la seguridad operativa y la integridad mecánica de equipos expuestos a condiciones de presión interna o externa. En GF Inspecciones y Ensayos ofrecemos un servicio completo que abarca la inspección en servicio, la evaluación pre-puesta en marcha y el seguimiento de sistemas de cañerías y procesos industriales, aplicando los códigos internacionales ASME VIII, API 510, API 570 y la normativa local NB-13 e IRAM.

Nuestros inspectores certificados API 510 e ICP cuentan con amplia experiencia en plantas petroquímicas, refinerías, industria alimentaria, generación de energía y fabricación de equipos a presión. Realizamos inspecciones internas y externas durante paradas de planta, evaluamos el estado de corrosión y erosión mediante técnicas de ensayo no destructivo, y determinamos la vida remanente de cada equipo con base en criterios de Fitness for Service (API 579 / ASME FFS-1).

Cada inspección culmina con un informe técnico detallado que incluye el historial de espesores, los mapas de corrosión, los próximos intervalos de inspección recomendados y el estado de cumplimiento normativo, proporcionando a nuestros clientes la documentación necesaria para sus sistemas de gestión de integridad, aseguradoras y organismos reguladores.`;

const features = [
  'Inspección interna y externa de recipientes a presión durante paradas de planta: recipientes de proceso, intercambiadores de calor, separadores, columnas de destilación y reactores',
  'Inspección pre-puesta en marcha (pre-commissioning) para verificar conformidad constructiva antes del inicio de operaciones',
  'Inspección de cañerías de proceso según API 570: medición de espesores, evaluación de tasas de corrosión y determinación de intervalos de inspección',
  'Prueba hidrostática y neumática con protocolos documentados: preparación, instrumentación, ejecución y certificación del resultado',
  'Evaluación de Aptitud para el Servicio (Fitness for Service – FFS) según API 579 / ASME FFS-1 para equipos con daño por corrosión, grietas o deformación',
  'Medición de espesores por ultrasonido (UT) de contacto y alta temperatura para detección de pérdidas de pared en operación',
  'Inspección visual (VT) y aplicación de END complementarios: partículas magnéticas (MT), líquidos penetrantes (PT) y radiografía industrial (RT)',
  'Revisión documental: cálculo de presión máxima admisible de operación (MAWP), registros de reparaciones previas, historial de inspecciones y planes de gestión de integridad',
  'Emisión de informes técnicos con mapas de corrosión, cálculos de vida remanente, clasificación de riesgo y programa de próximas inspecciones',
];

const standards = ['ASME VIII', 'API 510', 'API 570', 'NB-13', 'EN 13445'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Inspección de Tanques', href: '/servicios/inspeccion-tanques' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Radiografía Industrial', href: '/servicios/radiografia-industrial' },
];

export default function InspeccionRecipientesPresionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Inspección de Recipientes a Presión"
        subtitle="Evaluación segura conforme a códigos ASME y API"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
