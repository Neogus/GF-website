import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Líquidos Penetrantes (PT) | GF Inspecciones y Ensayos',
  description:
    'Ensayo por líquidos penetrantes (PT) en Buenos Aires, Argentina. Detección de discontinuidades superficiales en materiales ferrosos y no ferrosos mediante penetrantes visibles y fluorescentes, aplicable a soldaduras, fundiciones, forjas y componentes críticos según ASME V Art. 6, ASTM E165 e ISO 3452.',
  keywords: [
    'líquidos penetrantes',
    'PT',
    'penetrant testing',
    'ensayo por líquidos penetrantes',
    'penetrantes visibles',
    'penetrantes fluorescentes',
    'discontinuidades superficiales',
    'inspección superficial',
    'ensayos no destructivos',
    'NDT',
    'inspección de soldadura PT',
    'ASME V Art. 6',
    'ASTM E165',
    'ISO 3452',
    'materiales no ferrosos',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Líquidos Penetrantes (PT) | GF Inspecciones y Ensayos',
    description:
      'Ensayo por líquidos penetrantes (PT) en Buenos Aires, Argentina. Detección de discontinuidades superficiales en materiales ferrosos y no ferrosos mediante penetrantes visibles y fluorescentes, aplicable a soldaduras, fundiciones, forjas y componentes críticos según ASME V Art. 6, ASTM E165 e ISO 3452.',
    url: '/servicios/liquidos-penetrantes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ensayo por Líquidos Penetrantes (PT)',
  description:
    'Servicios profesionales de ensayo por líquidos penetrantes (PT): detección de discontinuidades superficiales abiertas en materiales ferrosos, no ferrosos, cerámicos y plásticos mediante penetrantes visibles (contraste de color) y fluorescentes bajo luz UV-A, con métodos de remoción con agua, post-emulsificable y remoción con solvente, conforme a ASME V Art. 6, ASTM E165, ISO 3452 y EN ISO 3452-1.',
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
  serviceType: 'Liquid Penetrant Testing (PT)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Líquidos Penetrantes',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PT Visible por Contraste de Color (Tipo II)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PT Fluorescente bajo Luz UV-A (Tipo I)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PT con Remoción con Solvente (Método C)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PT con Remoción con Agua (Método A)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PT Post-Emulsificable (Métodos B y D)' } },
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
    {/* Droplet body */}
    <path d="M12 2.5C12 2.5 5.5 9.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 9.5 12 2.5 12 2.5Z" />
    {/* Surface / workpiece line */}
    <line x1="2" y1="22" x2="22" y2="22" />
    {/* Penetrant seeping into a crack */}
    <line x1="12" y1="20.5" x2="12" y2="22" strokeWidth={2} />
    {/* Crack opening in the surface */}
    <path d="M10 22 L11.2 19.5 L12.8 21 L14 22" strokeWidth={1} strokeOpacity="0.7" />
  </svg>
);

const description = `El ensayo por líquidos penetrantes (PT) es uno de los métodos de ensayo no destructivo más versátiles y ampliamente utilizados para la detección de discontinuidades superficiales abiertas en casi cualquier material sólido no poroso: aceros al carbono y de baja aleación, aceros inoxidables, aleaciones de aluminio, titanio, cobre, materiales compuestos y cerámica. Su principio se basa en la acción capilar: un líquido penetrante de baja viscosidad y alta humectabilidad se aplica sobre la superficie limpia del componente; el penetrante penetra por capilaridad en grietas, poros, pliegues, soldaduras frías y otras discontinuidades abiertas; tras el tiempo de penetración, el exceso de penetrante es removido; y al aplicar el revelador se extrae el penetrante atrapado, generando una indicación visible que contrasta con el fondo y revela la ubicación y extensión del defecto.

En GF Inspecciones y Ensayos aplicamos los dos tipos principales de penetrante según sensibilidad requerida: Tipo I (fluorescente), examinado bajo luz UV-A (365 nm) en oscuridad, que ofrece la máxima sensibilidad y es preferido para componentes críticos, detección de fisuras finas de fatiga y grietas de temple; y Tipo II (visible o contraste de color), examinado bajo luz blanca natural o artificial, ideal para inspecciones en campo sin necesidad de equipamiento de iluminación UV. Dentro de cada tipo aplicamos el método de remoción más adecuado: Método A (lavable con agua) para inspecciones de gran área en piezas de geometría simple; Método B y D (post-emulsificable con emulsificador lipofílico o hidrofílico) para máxima sensibilidad en discontinuidades superficiales finas; y Método C (remoción con solvente) para inspecciones in situ de zonas localizadas en estructuras y recipientes de gran tamaño.

La técnica es aplicable a soldaduras en recipientes a presión, cañerías y estructuras; fundiciones y forjas de componentes industriales; inspección post-mecanizado de piezas maquinadas; inspección de fisuras de fatiga en mantenimiento predictivo; y control de calidad en fabricación. Los niveles de sensibilidad se seleccionan conforme a los requisitos normativos del cliente, abarcando desde nivel 1/2 hasta nivel 4 según ISO 3452-2. Todos los ensayos se realizan por personal certificado ASNT Nivel II / III y se documentan con registro fotográfico, mapeo de indicaciones y dictamen de aceptación o rechazo conforme a los criterios de la norma aplicable.`;

const features = [
  'Detección de grietas, fisuras de fatiga, pliegues, costuras, poros y soldaduras frías abiertas a la superficie en materiales ferrosos y no ferrosos',
  'Ensayo por penetrante visible Tipo II (contraste de color rojo/blanco) bajo luz blanca para inspecciones en campo sin equipamiento UV',
  'Ensayo por penetrante fluorescente Tipo I bajo luz UV-A (365 nm) para máxima sensibilidad en componentes críticos y detección de fisuras finas',
  'Método de remoción con solvente (Método C) para inspección in situ de áreas localizadas en recipientes, estructuras y equipos de gran tamaño',
  'Método lavable con agua (Método A) para cobertura eficiente de grandes superficies en componentes de geometría regular',
  'Métodos post-emulsificables lipofílico (B) e hidrofílico (D) para máxima retención del penetrante en discontinuidades de apertura muy fina',
  'Inspección de soldaduras en recipientes a presión, cañerías, tanques, estructuras y componentes estructurales según ASME V Art. 6 y ASTM E165',
  'Control post-mecanizado, post-forja y post-tratamiento térmico para detección temprana de fisuras de temple, pliegues y grietas de rectificado',
  'Selección del nivel de sensibilidad (1/2 a 4 según ISO 3452-2) conforme a los requisitos del código de diseño, procedimiento de soldadura o especificación del cliente',
  'Aplicabilidad en materiales no ferromagnéticos: aceros inoxidables austeníticos, aluminio, titanio, cobre, níquel y sus aleaciones donde las partículas magnéticas no son utilizables',
  'Inspecciones en planta y en campo, incluyendo posiciones de difícil acceso, con equipos portátiles y kits aerosol homologados',
  'Emisión de informes técnicos con registro fotográfico, mapeo de indicaciones, nivel de sensibilidad utilizado y criterios de aceptación aplicados',
];

const standards = ['ASME V Art. 6', 'ASTM E165', 'ISO 3452', 'EN ISO 3452-1'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Partículas Magnéticas', href: '/servicios/particulas-magneticas' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/inspeccion-recipientes-presion' },
  { name: 'Evaluación de Corrosión', href: '/servicios/evaluacion-corrosion' },
];

export default function LiquidosPenetrantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Ensayo por Líquidos Penetrantes (PT)"
        subtitle="Inspección superficial de alta sensibilidad para todo tipo de materiales"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
