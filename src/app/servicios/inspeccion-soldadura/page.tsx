import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Inspección de Soldadura | GF Inspecciones y Ensayos',
  description:
    'Servicios de inspección y certificación de soldadura en Argentina. Calificación de procedimientos WPS/PQR, habilitación de soldadores, inspección visual y ensayos complementarios según AWS, ASME y API.',
  keywords: [
    'inspección de soldadura',
    'certificación de soldadura',
    'calificación de soldadores',
    'WPS PQR',
    'inspector de soldadura',
    'AWS D1.1',
    'ASME IX',
    'API 1104',
    'EN ISO 15614',
    'EN ISO 9606',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Inspección de Soldadura | GF Inspecciones y Ensayos',
    description:
      'Servicios de inspección y certificación de soldadura en Argentina. Calificación de procedimientos WPS/PQR, habilitación de soldadores, inspección visual y ensayos complementarios según AWS, ASME y API.',
    url: '/servicios/inspeccion-soldadura',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Inspección y Certificación de Soldadura',
  description:
    'Servicios profesionales de inspección de soldadura: calificación de procedimientos (WPS/PQR), habilitación y recertificación de soldadores, inspección visual, ensayos destructivos y no destructivos complementarios, y auditoría de conformidad con normas AWS, ASME, API e ISO.',
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
  serviceType: 'Welding Inspection and Certification',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Inspección de Soldadura',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Calificación de Procedimientos WPS/PQR' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Habilitación y Recertificación de Soldadores' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección Visual de Soldaduras (VT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supervisión de Soldadura en Obra' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auditoría de Conformidad Normativa' } },
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

const description = `La inspección y certificación de soldadura es un pilar fundamental en la garantía de integridad estructural de cualquier proyecto industrial. En GF Inspecciones y Ensayos brindamos un servicio integral que abarca desde la calificación de procedimientos de soldadura (WPS/PQR) hasta la habilitación y recertificación de soldadores, la supervisión en obra y la auditoría de conformidad normativa.

Nuestros inspectores certificados (CWI – Certified Welding Inspector / IWI – International Welding Inspector) poseen experiencia en sectores críticos como petroquímica, generación de energía, construcción en acero, gasoductos y fabricación de recipientes a presión. Aplicamos criterios de aceptación reconocidos internacionalmente y emitimos informes técnicos detallados que sirven como respaldo documental ante organismos de control, aseguradoras y clientes finales.

Trabajamos en estrecha colaboración con los departamentos de ingeniería y calidad de nuestros clientes para garantizar que cada unión soldada cumpla con los requisitos de diseño, materiales y proceso establecidos en las normas aplicables. La trazabilidad completa del proceso —desde el material base hasta el registro fotográfico de las juntas ejecutadas— forma parte estándar de nuestra documentación entregable.`;

const features = [
  'Elaboración y calificación de Especificaciones de Procedimiento de Soldadura (WPS) y Registros de Calificación de Procedimiento (PQR) según AWS, ASME IX, EN ISO 15614 y API 1104',
  'Habilitación y recertificación de soldadores (WPQ/WPQR) con ensayos de probetas y emisión de certificados con trazabilidad completa',
  'Inspección visual (VT) de soldaduras en proceso y finales: preparación de juntas, calificación de consumibles, geometría del cordón y discontinuidades superficiales',
  'Supervisión continua de soldadura en obra para proyectos de estructuras metálicas, cañerías y recipientes a presión',
  'Coordinación e interpretación de ensayos no destructivos complementarios: radiografía (RT), ultrasonido (UT/PAUT), líquidos penetrantes (PT) y partículas magnéticas (MT)',
  'Revisión y auditoría de planes de inspección y prueba (ITP) y procedimientos de calidad de soldadura',
  'Evaluación de reparaciones y re-soldaduras con criterios técnicos ajustados a la norma aplicable al proyecto',
  'Emisión de informes técnicos digitalizados con evidencias fotográficas, mapas de indicaciones y certificados de calificación',
];

const standards = ['AWS D1.1', 'ASME IX', 'EN ISO 15614', 'API 1104', 'EN ISO 9606'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/inspeccion-recipientes-presion' },
  { name: 'Inspección de Tanques', href: '/servicios/inspeccion-tanques' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Líquidos Penetrantes', href: '/servicios/liquidos-penetrantes' },
];

export default function InspeccionSoldaduraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Inspección y Certificación de Soldadura"
        subtitle="Control de calidad integral para uniones soldadas"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
