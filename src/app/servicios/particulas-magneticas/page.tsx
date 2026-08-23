import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Partículas Magnéticas (MT) | GF Inspecciones y Ensayos',
  description:
    'Ensayo por partículas magnéticas (MT) en Buenos Aires, Argentina. Detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos mediante técnicas de yugo, prods, bobina, partículas fluorescentes y visibles para soldaduras, fundiciones y componentes críticos.',
  keywords: [
    'partículas magnéticas',
    'MT',
    'magnetic particle testing',
    'ensayo por partículas magnéticas',
    'discontinuidades superficiales',
    'materiales ferromagnéticos',
    'yugo magnético',
    'prods',
    'partículas fluorescentes',
    'ensayos no destructivos',
    'NDT',
    'inspección de soldadura MT',
    'ASME V Art. 7',
    'ASTM E709',
    'Buenos Aires',
    'Argentina',
  ],
  openGraph: {
    title: 'Partículas Magnéticas (MT) | GF Inspecciones y Ensayos',
    description:
      'Ensayo por partículas magnéticas (MT) en Buenos Aires, Argentina. Detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos mediante técnicas de yugo, prods, bobina, partículas fluorescentes y visibles para soldaduras, fundiciones y componentes críticos.',
    url: '/servicios/particulas-magneticas',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ensayo por Partículas Magnéticas (MT)',
  description:
    'Servicios profesionales de ensayo por partículas magnéticas (MT): detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos mediante técnicas de yugo, prods, bobina y conductor central, con partículas visibles (contraste de color) y fluorescentes bajo luz UV-A, aplicables a soldaduras, fundiciones, forjas, ejes y equipos de izaje.',
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
  serviceType: 'Magnetic Particle Testing (MT)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Partículas Magnéticas',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MT con Yugo Electromagnético (Yoke)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MT con Prods (Corriente Directa)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MT Fluorescente (FMT) bajo UV-A' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MT con Partículas Visibles (Contraste de Color)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desmagnetización Post-Ensayo' } },
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
    {/* Horseshoe magnet body — U-shape */}
    <path d="M7 4v8a5 5 0 0 0 10 0V4" />
    {/* Left pole cap (N) */}
    <line x1="5" y1="4" x2="9" y2="4" strokeWidth={2.5} />
    {/* Right pole cap (S) */}
    <line x1="15" y1="4" x2="19" y2="4" strokeWidth={2.5} />
    {/* Component surface under inspection */}
    <line x1="2" y1="20" x2="22" y2="20" />
    {/* Magnetic flux leakage at a surface discontinuity */}
    <path d="M10 20 Q12 17 14 20" strokeDasharray="1.5 1" strokeOpacity="0.8" />
    {/* Particles accumulating at the defect */}
    <circle cx="11" cy="20" r="0.65" fill="currentColor" stroke="none" />
    <circle cx="12" cy="20" r="0.65" fill="currentColor" stroke="none" />
    <circle cx="13" cy="20" r="0.65" fill="currentColor" stroke="none" />
  </svg>
);

const description = `El ensayo por partículas magnéticas (MT) es un método de ensayo no destructivo destinado a la detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos. El principio se basa en la magnetización del componente: cuando existe una discontinuidad (fisura, grieta, solape, pliegue, falta de fusión), el flujo magnético se dispersa y fuga hacia la superficie, atrayendo las partículas ferromagnéticas aplicadas y formando una indicación visible que revela la ubicación, orientación y extensión aproximada del defecto.

En GF Inspecciones y Ensayos aplicamos diferentes técnicas de magnetización según la geometría de la pieza, el tipo de discontinuidad esperada y los requisitos normativos: yugo electromagnético (yoke) para soldaduras planas y acceso in situ; prods para componentes de gran sección con inyección de corriente directa; bobina (solenoide) para piezas cilíndricas y ejes; y conductor central para bridas, anillos y piezas tubulares. La combinación de al menos dos direcciones de magnetización perpendiculares garantiza la detección de indicaciones en cualquier orientación.

Ofrecemos técnica húmeda con partículas visibles (contraste de color blanco/rojo o negro) para inspecciones generales en campo, y técnica húmeda con partículas fluorescentes bajo luz UV-A (luz de Wood) para máxima sensibilidad en la detección de fisuras finas, poros de cadena y laminaciones en zonas de alta criticidad. La técnica en polvo seco es aplicable cuando la superficie está a temperatura elevada o en condiciones donde el vehículo líquido no es conveniente. Finalizamos cada inspección con la desmagnetización del componente cuando los requisitos operativos o normativos así lo exigen, verificando el nivel residual con gaussímetro. Emitimos informes técnicos con registro fotográfico, mapeo de indicaciones y dictamen de aceptación o rechazo conforme a los criterios de la norma aplicable.`;

const features = [
  'Detección de fisuras superficiales y subsuperficiales (hasta ~3–4 mm de profundidad) en aceros al carbono, aceros de baja aleación y fundiciones ferromagnéticas',
  'Técnica húmeda con partículas visibles de contraste de color (blanco/rojo, negro/blanco) para inspección general en campo e instalaciones industriales',
  'Técnica húmeda con partículas fluorescentes (FMT) bajo luz UV-A para máxima sensibilidad en detección de fisuras finas, poros de cadena y defectos de forja',
  'Magnetización por yugo electromagnético (AC/DC) para soldaduras, piezas planas y accesos en altura, sin necesidad de contacto eléctrico directo con el componente',
  'Magnetización por prods con corriente directa (HWDC/FWDC) para secciones gruesas, fundiciones y zonas de alta concentración de tensiones',
  'Bobina y conductor central para magnetización longitudinal y circular de ejes, barras, tubos, bridas y piezas anulares',
  'Desmagnetización post-ensayo con verificación de campo residual mediante gaussímetro, conforme a los límites establecidos por la norma o el cliente',
  'Inspecciones in situ de soldaduras en recipientes a presión, estructuras, grúas, equipos de izaje, fundiciones y componentes de maquinaria en operación',
];

const standards = ['ASME V Art. 7', 'ASTM E709', 'ISO 9934', 'EN ISO 17638'];

const relatedServices = [
  { name: 'Ensayos No Destructivos', href: '/servicios/ensayos-no-destructivos' },
  { name: 'Líquidos Penetrantes', href: '/servicios/liquidos-penetrantes' },
  { name: 'Ultrasonido', href: '/servicios/ultrasonido' },
  { name: 'Inspección de Soldadura', href: '/servicios/inspeccion-soldadura' },
  { name: 'Inspección de Recipientes a Presión', href: '/servicios/inspeccion-recipientes-presion' },
  { name: 'Evaluación de Corrosión', href: '/servicios/evaluacion-corrosion' },
];

export default function ParticulasMagneticasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        title="Ensayo por Partículas Magnéticas (MT)"
        subtitle="Detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos"
        description={description}
        features={features}
        standards={standards}
        icon={icon}
        relatedServices={relatedServices}
      />
    </>
  );
}
