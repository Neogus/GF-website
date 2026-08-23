import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Evaluación de Corrosión | GF Inspecciones y Ensayos',
  description:
    'Servicios de evaluación de corrosión en Argentina. Medición de espesores de pared, mapeo de corrosión, estimación de vida remanente y análisis de degradación de activos industriales según API 579, API 580, API 581 y NACE SP0169.',
  keywords: [
    'evaluación de corrosión',
    'medición de espesores',
    'mapeo de corrosión',
    'vida remanente',
    'corrosión industrial',
    'API 579',
    'API 580',
    'API 581',
    'NACE SP0169',
    'fitness for service',
    'integridad de activos',
    'degradación de materiales',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Evaluación de Corrosión | GF Inspecciones y Ensayos',
    description:
      'Servicios de evaluación de corrosión en Argentina. Medición de espesores de pared, mapeo de corrosión, estimación de vida remanente y análisis de degradación de activos industriales según API 579, API 580, API 581 y NACE SP0169.',
    url: '/servicios/evaluacion-corrosion',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Evaluación de Corrosión',
  description:
    'Servicios profesionales de evaluación de corrosión industrial: medición de espesores de pared por ultrasonido, mapeo de corrosión, estimación de vida remanente, análisis de tasas de degradación y estrategias de mitigación, conforme a API 579-1/ASME FFS-1, API 580, API 581 y NACE SP0169.',
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
  serviceType: 'Corrosion Assessment',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Evaluación de Corrosión',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medición de Espesores de Pared por Ultrasonido' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mapeo de Corrosión en Equipos e Instalaciones' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estimación de Vida Remanente (RLA)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Evaluación de Aptitud para el Servicio (FFS)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estrategias de Mitigación y Control de Corrosión' } },
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
    {/* Corrosion / degradation icon */}
    <path d="M12 3a9 9 0 1 0 9 9" />
    <path d="M12 3c1.5 2 2.5 4.5 2.5 6.5S13.5 14 12 16" />
    <path d="M12 3C10.5 5 9.5 7.5 9.5 9.5S10.5 14 12 16" />
    <path d="M3 12h3" />
    <path d="M12 3v3" />
    <path d="M19.07 4.93l-2.12 2.12" />
    <path d="M8 16c0 2 1.8 4 4 5" />
    <path d="M16 16c0 2-1.8 4-4 5" />
  </svg>
);

const description = `La corrosión es uno de los principales mecanismos de degradación en activos industriales, responsable de pérdidas económicas significativas y riesgos para la seguridad operativa. En GF Inspecciones y Ensayos ofrecemos servicios especializados de evaluación de corrosión que combinan técnicas avanzadas de medición, análisis de datos y criterios internacionales para determinar con precisión el estado actual de sus equipos y estructuras.

Nuestro enfoque integral abarca la medición de espesores de pared mediante ultrasonido de contacto y de alta temperatura, el mapeo detallado de zonas afectadas por corrosión general y localizada, el cálculo de tasas de corrosión históricas y proyectadas, y la estimación de vida remanente (Remaining Life Assessment). Aplicamos metodologías reconocidas internacionalmente como API 579-1/ASME FFS-1, API 580 y API 581 para la evaluación de riesgos basada en confiabilidad (RBI).

Cada evaluación concluye con un informe técnico exhaustivo que incluye mapas de espesor, perfiles de corrosión, análisis de criticidad, intervalos de inspección recomendados y estrategias de mitigación adaptadas a cada proceso y entorno operativo. Esta información permite a nuestros clientes tomar decisiones fundamentadas sobre mantenimiento, reparación, reemplazo o extensión de vida de sus activos industriales.`;

const features = [
  'Medición de espesores de pared por ultrasonido (UT) de contacto, de alta temperatura e inmersión en recipientes a presión, cañerías, tanques y estructuras metálicas',
  'Mapeo de corrosión con grillas de alta densidad para caracterizar la distribución y profundidad de la pérdida de metal en áreas críticas',
  'Cálculo de tasas de corrosión a partir de historial de espesores y determinación de intervalos de inspección basados en riesgo (RBI) según API 580 / API 581',
  'Estimación de vida remanente (Remaining Life Assessment – RLA) y cálculo de la fecha límite de retiro de servicio del equipo',
  'Evaluación de Aptitud para el Servicio (Fitness for Service – FFS) de equipos con corrosión general, localizada (pitting) o bajo tensión, conforme a API 579-1 / ASME FFS-1',
  'Análisis de mecanismos de daño: corrosión bajo aislamiento (CUI), corrosión galvánica, corrosión por ácido nafténico, corrosión microbiológica (MIC) y erosión-corrosión',
  'Evaluación de sistemas de protección: revisión de recubrimientos anticorrosivos, estado de ánodos de sacrificio y sistemas de protección catódica según NACE SP0169',
  'Recomendaciones técnicas de mitigación: selección de materiales, inhibidores, modificación de proceso y programas de monitoreo continuo',
  'Emisión de informes técnicos con mapas de espesores, perfiles de corrosión, análisis de criticidad, clasificación por niveles de riesgo y plan de inspecciones futuras',
];

const standards = ['API 579-1/ASME FFS-1', 'API 580', 'API 581', 'NACE SP0169'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Gestión de Integridad de Activos', href: '/servicios/gestion-integridad-activos' },
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/inspeccion-recipientes-presion' },
  { name: 'Inspección de Tanques', href: '/servicios/inspeccion-tanques' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
];

export default function EvaluacionCorrosionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Evaluación de Corrosión"
        subtitle="Diagnóstico preciso del estado de sus activos industriales"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
