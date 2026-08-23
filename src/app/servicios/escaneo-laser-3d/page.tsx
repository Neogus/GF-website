import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Escaneo Láser 3D | GF Inspecciones y Ensayos',
  description:
    'Servicios de escaneo láser 3D en Buenos Aires, Argentina. Relevamiento dimensional de alta precisión, nube de puntos, modelado BIM, ingeniería inversa y documentación as-built para instalaciones industriales.',
  keywords: [
    'escaneo láser 3D',
    'escáner láser industrial',
    'nube de puntos',
    'modelado BIM',
    'ingeniería inversa',
    'documentación as-built',
    'relevamiento dimensional',
    'análisis de deformación',
    'FARO',
    'Leica',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Escaneo Láser 3D | GF Inspecciones y Ensayos',
    description:
      'Servicios de escaneo láser 3D en Buenos Aires, Argentina. Relevamiento dimensional de alta precisión, nube de puntos, modelado BIM, ingeniería inversa y documentación as-built para instalaciones industriales.',
    url: '/servicios/escaneo-laser-3d',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Escaneo Láser 3D',
  description:
    'Servicio profesional de escaneo láser 3D para relevamiento dimensional de alta precisión: generación de nube de puntos, modelado BIM, ingeniería inversa, análisis de deformaciones y documentación as-built de instalaciones industriales.',
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
  serviceType: '3D Laser Scanning',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Escaneo Láser 3D',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Relevamiento Dimensional con Nube de Puntos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modelado BIM (Building Information Modeling)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ingeniería Inversa de Componentes' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Análisis de Deformaciones y Asentamientos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Documentación As-Built' } },
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
    {/* 3D scan / point cloud icon */}
    <path d="M12 2l8 4.5v7L12 18l-8-4.5v-7L12 2z" />
    <path d="M12 18v4" />
    <path d="M20 6.5l-8 5-8-5" />
    <path d="M12 11.5V2" />
    <circle cx="12" cy="11.5" r="1" fill="currentColor" />
    <circle cx="7" cy="9" r="0.75" fill="currentColor" />
    <circle cx="17" cy="9" r="0.75" fill="currentColor" />
    <circle cx="9.5" cy="14.5" r="0.75" fill="currentColor" />
    <circle cx="14.5" cy="14.5" r="0.75" fill="currentColor" />
  </svg>
);

const description = `El escaneo láser 3D es una tecnología de medición de alta precisión que captura millones de puntos tridimensionales en cuestión de minutos, generando una representación digital exacta de cualquier instalación, estructura o componente industrial. En GF Inspecciones y Ensayos contamos con equipos de última generación para brindar relevamientos dimensionales con precisión milimétrica.

A partir de la nube de puntos obtenida, elaboramos modelos BIM (Building Information Modeling), planos as-built, modelos CAD 3D para ingeniería inversa y análisis comparativos de deformaciones. Esta tecnología es especialmente valiosa para plantas industriales, refinería, instalaciones petroquímicas, infraestructura de energía y cualquier entorno donde la documentación dimensional precisa sea crítica para el mantenimiento, ampliación o certificación de las instalaciones.

Nuestro equipo técnico certificado interpreta y procesa cada nube de puntos con software especializado, entregando informes detallados y modelos 3D listos para ser integrados en flujos de trabajo de ingeniería, facilitando la toma de decisiones y reduciendo los tiempos de paro de planta al mínimo indispensable.`;

const features = [
  'Relevamiento dimensional con escáneres láser de largo alcance y precisión submilimétrica (±1 mm a 30 m)',
  'Generación de nube de puntos de alta densidad con textura fotorrealista en formato E57, RCP y PTS',
  'Modelado BIM (LOD 300–400) a partir de nube de puntos para plantas industriales y edificios',
  'Ingeniería inversa de componentes y equipos industriales con exportación a STEP, IGES y STL',
  'Análisis comparativo de deformaciones y asentamientos entre relevamientos periódicos',
  'Documentación as-built para certificaciones, ampliaciones y trabajos de mantenimiento',
  'Elaboración de planos 2D (plantas, cortes y elevaciones) derivados del modelo 3D',
  'Verificación dimensional de montaje de estructuras metálicas, cañerías y equipos rotativos',
  'Integración con software de diseño (AutoCAD, Revit, Plant 3D, PDMS, E3D)',
  'Informes técnicos con capturas panorámicas, cotas críticas y tolerancias verificadas',
];

const standards = ['ASME Y14.5', 'ISO 10360', 'VDI/VDE 2634'];

const relatedServices = [
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/inspeccion-recipientes-presion' },
  { name: 'Evaluación de Corrosión', href: '/servicios/evaluacion-corrosion' },
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Inspección de Soldaduras', href: '/servicios/inspeccion-soldadura' },
  { name: 'Gestión de Integridad de Activos', href: '/servicios/gestion-integridad-activos' },
];

export default function EscaneoLaser3DPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Escaneo Láser 3D"
        subtitle="Relevamiento dimensional de alta precisión para instalaciones industriales"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
