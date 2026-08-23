import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Inspección de Tanques de Almacenamiento | GF Inspecciones y Ensayos',
  description:
    'Servicios de inspección de tanques de almacenamiento atmosféricos en Argentina. Inspección externa e interna, escaneo de fondo por MFL, medición de asentamiento y evaluación de aptitud para el servicio conforme API 650, API 653 y API 575.',
  keywords: [
    'inspección de tanques',
    'tanques de almacenamiento',
    'API 650',
    'API 653',
    'API 575',
    'EEMUA 159',
    'MFL escaneo de fondo',
    'asentamiento de tanques',
    'fitness for service tanques',
    'inspección interna tanque',
    'inspección externa tanque',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Inspección de Tanques de Almacenamiento | GF Inspecciones y Ensayos',
    description:
      'Servicios de inspección de tanques de almacenamiento atmosféricos en Argentina. Inspección externa e interna, escaneo de fondo por MFL, medición de asentamiento y evaluación de aptitud para el servicio conforme API 650, API 653 y API 575.',
    url: '/servicios/inspeccion-tanques',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Inspección de Tanques de Almacenamiento',
  description:
    'Servicios profesionales de inspección de tanques de almacenamiento atmosféricos, incluyendo inspección externa e interna, escaneo de fondo por flujo de dispersión magnética (MFL), medición de espesores de virola, relevamiento de asentamiento diferencial, evaluación de techo y fundación, y análisis de aptitud para el servicio (FFS) conforme a API 653, API 650, API 575 y EEMUA 159.',
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
  serviceType: 'Above Ground Storage Tank Inspection',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Inspección de Tanques de Almacenamiento',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección Externa API 653' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección Interna de Fondo, Virola y Techo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Escaneo de Fondo por MFL (Magnetic Flux Leakage)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Relevamiento de Asentamiento Diferencial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Evaluación de Aptitud para el Servicio (FFS)' } },
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
    {/* Large flat-bottom storage tank icon */}
    <ellipse cx="12" cy="5.5" rx="8" ry="2.5" />
    <path d="M4 5.5v12" />
    <path d="M20 5.5v12" />
    <ellipse cx="12" cy="17.5" rx="8" ry="2.5" />
    {/* Floating roof / pontoon lines */}
    <path d="M7 11h10" />
    <path d="M9 8.5l-1 5" strokeWidth={1} opacity="0.6" />
    <path d="M15 8.5l1 5" strokeWidth={1} opacity="0.6" />
    {/* Foundation base */}
    <path d="M3 20h18" strokeWidth={2} />
  </svg>
);

const description = `La inspección de tanques de almacenamiento atmosféricos es un proceso fundamental para preservar la integridad estructural y operativa de estos equipos presentes en refinerías, plantas petroquímicas, terminales portuarias, parques de almacenamiento de hidrocarburos y la industria alimentaria. En GF Inspecciones y Ensayos aplicamos el estándar API 653 — Tank Inspection, Repair, Alteration and Reconstruction — como marco técnico central, complementado con API 650 para aspectos constructivos, API 575 para guías de inspección y EEMUA 159 para gestión de integridad.

Nuestro servicio contempla tanto las inspecciones externas en servicio como las inspecciones internas durante las paradas de planta. Durante la inspección interna evaluamos el fondo del tanque mediante escaneo por flujo de dispersión magnética (MFL), una tecnología de END avanzada que detecta pérdidas de pared internas y externas sin necesidad de limpiezas exhaustivas. Completamos la evaluación con medición de espesores por ultrasonido en la virola y el techo, relevamiento topográfico de asentamiento diferencial del fondo, inspección de la fundación perimetral, y análisis del sistema de drenaje y protección catódica.

Cada inspección concluye con un informe técnico completo que incluye mapas de corrosión del fondo y la virola, cálculo de la tasa de corrosión, determinación de los intervalos de inspección recomendados, evaluación de la condición del techo, análisis de asentamiento y, cuando corresponde, una evaluación formal de Aptitud para el Servicio (Fitness for Service – FFS) que permite a los operadores fundamentar decisiones de continuidad operativa o planificación de reparaciones ante organismos reguladores y aseguradoras.`;

const features = [
  'Inspección externa en servicio según API 653: evaluación de virola, techo, accesorios, sellos, sistemas de venteo, protección anticorrosiva y condición general del tanque',
  'Inspección interna durante parada: relevamiento visual del fondo, virola, techo interno, escaleras, boquillas y accesorios internos',
  'Escaneo de fondo por Flujo de Dispersión Magnética (MFL): detección de pérdidas de pared, picaduras y laminaciones en toda la placa del fondo con mapa de condición digitalizado',
  'Medición de espesores por ultrasonido (UT) en virola: cuadriculado sistemático para determinación de tasas de corrosión y cálculo de vida remanente por cursos',
  'Relevamiento topográfico de asentamiento diferencial: nivelación de fondo con grilla de medición, análisis de asentamiento uniforme, diferencial y de borde conforme API 653 Apéndice B',
  'Evaluación de techo fijo y flotante: inspección de vigas, pontones, sello primario y secundario, drenaje de techo, y condición de la membrana',
  'Evaluación de fundación y anillo perimetral: inspección de grietas, socavaciones, humedad, condición del sellado y estado del sistema de protección catódica',
  'Análisis de Aptitud para el Servicio (FFS): evaluación de defectos de corrosión generalizada y localizada según API 579 / ASME FFS-1 para fundamentar decisiones de continuidad operativa',
  'Emisión de informes técnicos con mapas de corrosión, cálculos de MAWH (máxima altura de llenado admisible), intervalos de inspección y plan de reparaciones priorizadas',
];

const standards = ['API 650', 'API 653', 'API 575', 'EEMUA 159'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Evaluación de Corrosión', href: '/servicios/evaluacion-corrosion' },
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/inspeccion-recipientes-presion' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Gestión de Integridad de Activos', href: '/servicios/gestion-integridad-activos' },
];

export default function InspeccionTanquesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Inspección de Tanques de Almacenamiento"
        subtitle="Evaluación integral de tanques atmosféricos conforme API 653"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
