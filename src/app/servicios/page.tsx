import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Servicios de Inspección Industrial | GF Inspecciones y Ensayos',
  description:
    'Ofrecemos servicios especializados de inspección industrial: Ensayos No Destructivos, Inspección de Soldadura, Inspección de Recipientes a Presión, Evaluación de Corrosión, Gestión de Integridad de Activos, Escaneo Láser 3D, Ultrasonido, Partículas Magnéticas, Líquidos Penetrantes e Inspección de Tanques.',
};

interface ServiceCard {
  href: string;
  title: string;
  description: string;
  icon: string;
}

const services: ServiceCard[] = [
  {
    href: '/servicios/ensayos-no-destructivos',
    title: 'Ensayos No Destructivos',
    description:
      'Evaluación integral de materiales y componentes sin comprometer su integridad estructural, utilizando las técnicas más avanzadas del sector.',
    icon: '🔬',
  },
  {
    href: '/servicios/inspeccion-soldadura',
    title: 'Inspección de Soldadura',
    description:
      'Verificación y control de calidad de uniones soldadas conforme a normas internacionales, garantizando la seguridad y durabilidad de las estructuras.',
    icon: '⚙️',
  },
  {
    href: '/servicios/inspeccion-recipientes-presion',
    title: 'Inspección de Recipientes a Presión',
    description:
      'Inspección técnica de recipientes, calderas y equipos a presión según estándares ASME, API y normativas locales vigentes.',
    icon: '🏭',
  },
  {
    href: '/servicios/evaluacion-corrosion',
    title: 'Evaluación de Corrosión',
    description:
      'Diagnóstico y monitoreo de procesos corrosivos en estructuras e instalaciones industriales para prevenir fallas y extender la vida útil.',
    icon: '🛡️',
  },
  {
    href: '/servicios/gestion-integridad-activos',
    title: 'Gestión de Integridad de Activos',
    description:
      'Programas de inspección basados en riesgo (RBI) y planes de mantenimiento para asegurar la confiabilidad operacional de sus activos.',
    icon: '📊',
  },
  {
    href: '/servicios/escaneo-laser-3d',
    title: 'Escaneo Láser 3D',
    description:
      'Captura tridimensional de alta precisión de instalaciones, equipos y estructuras para modelado BIM, control dimensional y documentación.',
    icon: '📡',
  },
  {
    href: '/servicios/ultrasonido',
    title: 'Ultrasonido',
    description:
      'Detección de discontinuidades internas y medición de espesores mediante técnicas de ultrasonido convencional, phased array y TOFD.',
    icon: '〰️',
  },
  {
    href: '/servicios/particulas-magneticas',
    title: 'Partículas Magnéticas',
    description:
      'Identificación de defectos superficiales y subsuperficiales en materiales ferromagnéticos mediante el método de partículas magnéticas.',
    icon: '🧲',
  },
  {
    href: '/servicios/liquidos-penetrantes',
    title: 'Líquidos Penetrantes',
    description:
      'Detección de discontinuidades abiertas a la superficie en materiales metálicos y no metálicos mediante ensayo con líquidos penetrantes.',
    icon: '💧',
  },
  {
    href: '/servicios/inspeccion-tanques',
    title: 'Inspección de Tanques',
    description:
      'Inspección completa de tanques de almacenamiento de acuerdo con la norma API 653, incluyendo fondos, envolventes y techos.',
    icon: '🗄️',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero Banner ── */}
        <section
          className="relative flex items-center justify-center"
          style={{ minHeight: '40vh', background: '#1B2A4A' }}
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(#4A6FA5 1px, transparent 1px), linear-gradient(90deg, #4A6FA5 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
            {/* Title */}
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Nuestros Servicios
            </h1>

            {/* Amber divider */}
            <div
              className="mx-auto mb-5 rounded-full"
              style={{ width: '64px', height: '4px', background: '#D4A853' }}
            />

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: '#B8C9E0' }}
            >
              Soluciones de inspección industrial de alta calidad respaldadas por
              tecnología de vanguardia y personal certificado internacionalmente.
            </p>
          </div>
        </section>

        {/* ── Breadcrumb ── */}
        <nav
          className="border-b"
          style={{ background: '#F0F4FA', borderColor: '#D1DCF0' }}
          aria-label="Breadcrumb"
        >
          <ol className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="transition-colors hover:underline"
                style={{ color: '#4A6FA5' }}
              >
                Inicio
              </Link>
            </li>
            <li style={{ color: '#9AAABF' }}>›</li>
            <li
              className="font-medium"
              style={{ color: '#1B2A4A' }}
              aria-current="page"
            >
              Servicios
            </li>
          </ol>
        </nav>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Áreas de Especialización
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Seleccione un servicio para conocer más detalles sobre nuestra
                metodología, equipos utilizados y normativas aplicadas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-3xl mb-5 group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Arrow CTA */}
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Ver servicio</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gray-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              ¿Necesita un servicio a medida?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Contáctenos para analizar sus requerimientos específicos. Nuestro
              equipo técnico está disponible para diseñar un plan de inspección
              adaptado a sus necesidades operativas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Solicitar consulta
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
