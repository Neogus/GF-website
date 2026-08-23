import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Ensayos No Destructivos (END/NDT) | GF Inspecciones y Ensayos',
  description:
    'Servicios de ensayos no destructivos en Buenos Aires, Argentina. Ultrasonido Phased Array, radiografía industrial, corrientes inducidas, líquidos penetrantes y partículas magnéticas.',
  keywords: [
    'ensayos no destructivos',
    'NDT',
    'END',
    'ultrasonido phased array',
    'radiografía industrial',
    'corrientes inducidas',
    'líquidos penetrantes',
    'partículas magnéticas',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Ensayos No Destructivos (END/NDT) | GF Inspecciones y Ensayos',
    description:
      'Servicios de ensayos no destructivos en Buenos Aires, Argentina. Ultrasonido Phased Array, radiografía industrial, corrientes inducidas, líquidos penetrantes y partículas magnéticas.',
    url: '/servicios/ensayos-no-destructivos',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ensayos No Destructivos (END/NDT)',
  description:
    'Servicios profesionales de ensayos no destructivos: Ultrasonido Phased Array (PAUT), radiografía industrial (RT), corrientes inducidas (ET), líquidos penetrantes (PT) y partículas magnéticas (MT).',
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ultrasonido Phased Array (PAUT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Radiografía Industrial (RT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corrientes Inducidas (ET)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Líquidos Penetrantes (PT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Partículas Magnéticas (MT)' } },
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

const description = `Los ensayos no destructivos (END/NDT) permiten evaluar la integridad de materiales, soldaduras y componentes industriales sin afectar su funcionalidad ni su vida útil. En GF Inspecciones y Ensayos aplicamos las técnicas más avanzadas del sector para garantizar la seguridad y confiabilidad de sus instalaciones.

Contamos con personal certificado bajo normas internacionales (ISO 9712, ASNT SNT-TC-1A) en múltiples disciplinas NDT. Nuestros técnicos poseen niveles II y III en las principales técnicas, asegurando resultados precisos, documentados y trazables para auditorías y certificaciones de calidad.

Desde la detección de fisuras en soldaduras mediante Ultrasonido Phased Array (PAUT) hasta la verificación de espesores por corrosión con técnicas ultrasónicas convencionales, nuestros servicios cubren toda la cadena de valor del control de calidad industrial: petroquímica, energía, construcción, transporte y manufactura.`;

const features = [
  'Ultrasonido Phased Array (PAUT) con generación de imágenes S-scan y E-scan para mapeo volumétrico de defectos',
  'Radiografía industrial (RT) con equipos de rayos X portátiles e iridiación con Ir-192 para soldaduras y piezas fundidas',
  'Corrientes inducidas (ET) para detección de discontinuidades superficiales y subsuperficiales en materiales conductores',
  'Líquidos penetrantes (PT) visibles y fluorescentes para detección de discontinuidades abiertas a la superficie',
  'Partículas magnéticas (MT) con equipos portátiles de yugo y en cabina para materiales ferromagnéticos',
  'Medición de espesores por ultrasonido (UT) para monitoreo de corrosión en recipientes a presión y cañerías',
  'Emisión acústica (AE) para monitoreo en tiempo real de estructuras y recipientes a presión bajo carga',
  'Informes técnicos digitalizados con imágenes, coordenadas de indicaciones y recomendaciones de reparación',
];

const standards = ['ASME V', 'API 650', 'AWS D1.1', 'ISO 9712', 'EN 12062'];

const relatedServices = [
  { name: 'Inspección de Soldaduras', href: '/servicios/inspeccion-soldaduras' },
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/recipientes-presion' },
  { name: 'Control de Calidad Industrial', href: '/servicios/control-calidad' },
  { name: 'Certificación de Materiales', href: '/servicios/certificacion-materiales' },
  { name: 'Inspección de Tuberías', href: '/servicios/tuberias' },
];

export default function EnsayosNoDestructivosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Ensayos No Destructivos (END/NDT)"
        subtitle="Técnicas avanzadas para la detección de defectos sin dañar materiales"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
