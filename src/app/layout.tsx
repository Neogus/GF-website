import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/i18n/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'GF Inspecciones y Ensayos | Inspección Industrial y NDT en Argentina',
    template: '%s | GF Inspecciones y Ensayos',
  },
  description:
    'GF Inspecciones y Ensayos: servicios profesionales de inspección industrial, ensayos no destructivos (NDT), inspección de soldadura, recipientes a presión y gestión de integridad de activos en Buenos Aires, Argentina.',
  keywords: [
    'inspección industrial',
    'ensayos no destructivos',
    'NDT',
    'END',
    'inspección de soldadura',
    'ultrasonido phased array',
    'radiografía industrial',
    'recipientes a presión',
    'gestión de integridad',
    'Buenos Aires',
    'Argentina',
  ],
  authors: [{ name: 'GF Inspecciones y Ensayos' }],
  creator: 'GF Inspecciones y Ensayos',
  metadataBase: new URL('https://www.gfinspecciones.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.gfinspecciones.com.ar',
    siteName: 'GF Inspecciones y Ensayos',
    title: 'GF Inspecciones y Ensayos | Inspección Industrial y NDT',
    description:
      'Servicios profesionales de inspección industrial y ensayos no destructivos en Argentina. Más de 10 años de experiencia.',
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 200,
        alt: 'GF Inspecciones y Ensayos Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GF Inspecciones y Ensayos',
    description: 'Inspección Industrial y NDT en Argentina',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable}`}>
      <head>
        {/* JSON-LD Organization Schema for Google Business Profile */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GF Inspecciones y Ensayos',
              url: 'https://www.gfinspecciones.com.ar',
              logo: 'https://www.gfinspecciones.com.ar/logo.png',
              description:
                'Empresa especializada en inspección industrial y ensayos no destructivos en Buenos Aires, Argentina.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Buenos Aires',
                addressRegion: 'Buenos Aires',
                addressCountry: 'AR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'contacto@gfinspecciones.com.ar',
                availableLanguage: ['Spanish', 'English'],
              },
              sameAs: [
                'https://www.linkedin.com/company/gf-inspecciones',
              ],
              areaServed: {
                '@type': 'Country',
                name: 'Argentina',
              },
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: -34.6037,
                  longitude: -58.3816,
                },
                geoRadius: '500',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de Inspección Industrial',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ensayos No Destructivos (NDT)', url: '/servicios/ensayos-no-destructivos' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Soldadura', url: '/servicios/inspeccion-soldadura' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Recipientes a Presión', url: '/servicios/inspeccion-recipientes-presion' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Evaluación de Corrosión', url: '/servicios/evaluacion-corrosion' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de Integridad de Activos', url: '/servicios/gestion-integridad-activos' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Escaneo Láser 3D', url: '/servicios/escaneo-laser-3d' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ultrasonido Industrial', url: '/servicios/ultrasonido' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Partículas Magnéticas', url: '/servicios/particulas-magneticas' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Líquidos Penetrantes', url: '/servicios/liquidos-penetrantes' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspección de Tanques', url: '/servicios/inspeccion-tanques' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
