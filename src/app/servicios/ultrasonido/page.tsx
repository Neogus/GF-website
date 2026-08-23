import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Ultrasonido Industrial | GF Inspecciones y Ensayos',
  description:
    'Ensayos ultrasónicos industriales en Buenos Aires, Argentina. Ultrasonido convencional, Phased Array (PAUT), TOFD, medición de espesores y mapeo de corrosión para soldaduras, recipientes a presión y estructuras metálicas.',
  keywords: [
    'ultrasonido industrial',
    'ultrasonido',
    'phased array',
    'PAUT',
    'TOFD',
    'medición de espesores',
    'ensayo ultrasónico',
    'mapeo de corrosión',
    'UT convencional',
    'inspección de soldadura ultrasonido',
    'NDT ultrasonido',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Ultrasonido Industrial | GF Inspecciones y Ensayos',
    description:
      'Ensayos ultrasónicos industriales en Buenos Aires, Argentina. Ultrasonido convencional, Phased Array (PAUT), TOFD, medición de espesores y mapeo de corrosión para soldaduras, recipientes a presión y estructuras metálicas.',
    url: '/servicios/ultrasonido',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ultrasonido Industrial',
  description:
    'Servicios profesionales de ensayos ultrasónicos: ultrasonido convencional (UT), Phased Array (PAUT), Time of Flight Diffraction (TOFD), medición de espesores, mapeo de corrosión y escaneo automatizado para la detección y caracterización de defectos en componentes metálicos y compuestos.',
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
  serviceType: 'Ultrasonic Testing (UT / PAUT / TOFD)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Ultrasonido Industrial',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ultrasonido Convencional (UT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Phased Array (PAUT)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Time of Flight Diffraction (TOFD)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medición de Espesores por Ultrasonido' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mapeo de Corrosión (C-Scan)' } },
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
    {/* Transducer probe */}
    <rect x="9" y="2" width="6" height="5" rx="1" />
    <line x1="12" y1="7" x2="12" y2="10" />
    {/* Ultrasonic wave arcs emanating downward */}
    <path d="M7 11 Q12 14 17 11" />
    <path d="M5 14 Q12 18 19 14" />
    <path d="M3 17 Q12 22 21 17" />
    {/* Reflection echo line */}
    <line x1="12" y1="10" x2="12" y2="22" strokeDasharray="2 2" strokeOpacity="0.5" />
  </svg>
);

const description = `El ultrasonido industrial es uno de los métodos de ensayo no destructivo más versátiles y confiables para la detección, localización y caracterización de discontinuidades internas en materiales metálicos y compuestos. En GF Inspecciones y Ensayos aplicamos técnicas ultrasónicas avanzadas —ultrasonido convencional (UT), Phased Array (PAUT) y Time of Flight Diffraction (TOFD)— adaptadas a cada aplicación y tipo de componente.

El ultrasonido convencional permite la inspección de soldaduras, piezas forjadas, fundiciones y laminados mediante haces pulsados de alta frecuencia. El Phased Array (PAUT) amplía las capacidades del UT convencional al manejar múltiples elementos piezoeléctricos de forma independiente, generando barridos electrónicos, sectoriales y lineales que permiten obtener imágenes B-scan, C-scan y S-scan en tiempo real con mayor cobertura y productividad. El TOFD aprovecha las señales difractadas en los extremos de los defectos para caracterizar con alta precisión su profundidad y extensión, siendo especialmente valioso en la inspección de recipientes a presión y tuberías críticas.

Complementamos estos servicios con medición de espesores por ultrasonido (incluso a través de recubrimientos), mapeo de corrosión mediante escaneo automatizado y la inspección de materiales compuestos. Emitimos informes técnicos con imágenes digitales, vistas sectoriales y datos de tamaño, posición y orientación de cada indicación, brindando la trazabilidad documental requerida por las normas ASME, API, ISO y EN.`;

const features = [
  'Ultrasonido convencional (UT) con técnicas de haz recto, angular y de inmersión para detección de laminaciones, inclusiones, fisuras y falta de fusión en soldaduras y componentes base',
  'Phased Array (PAUT) con barrido sectorial (S-scan) y lineal para inspección volumétrica de soldaduras, nozzles, bridas y geometrías complejas con visualización en tiempo real',
  'Time of Flight Diffraction (TOFD) para caracterización precisa de la altura y posición de defectos planares en uniones soldadas de recipientes a presión y tuberías de alta criticidad',
  'Medición de espesores por ultrasonido: paredes de cañerías, cascos de recipientes, estructuras y componentes con acceso unilateral, incluyendo medición a través de recubrimientos',
  'Mapeo de corrosión (C-scan) mediante escaneo automatizado o semiautomático con representación bidimensional del perfil de espesores residuales',
  'Inspección de soldaduras en uniones a tope, en ángulo y de penetración parcial conforme a procedimientos calificados según ASME V, EN 17640 y AWS D1.1',
  'Inspección de materiales compuestos (FRP/GRP) para detección de delaminaciones, zonas húmedas y despegues en estructuras de fibra de vidrio y carbono',
  'Escaneo automatizado y semiautomático (AUT/SAUT) para grandes volúmenes de inspección con trazabilidad completa de posición y datos de amplitud',
];

const standards = ['ASME V', 'EN 17640', 'API 570', 'ISO 16811', 'AWS D1.1'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/inspeccion-recipientes-presion' },
  { name: 'Evaluación de Corrosión', href: '/servicios/evaluacion-corrosion' },
  { name: 'Líquidos Penetrantes', href: '/servicios/liquidos-penetrantes' },
  { name: 'Partículas Magnéticas', href: '/servicios/particulas-magneticas' },
];

export default function UltrasonidoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Ultrasonido Industrial"
        subtitle="Detección y caracterización de defectos mediante ondas ultrasónicas"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
