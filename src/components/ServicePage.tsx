'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  standards?: string[];
  icon: React.ReactNode;
  relatedServices: { name: string; href: string }[];
}

export default function ServicePage({
  title,
  subtitle,
  description,
  features,
  standards,
  icon,
  relatedServices,
}: ServicePageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

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
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center justify-center w-20 h-20 rounded-full"
              style={{ background: 'rgba(74,111,165,0.25)', color: '#D4A853' }}
            >
              {icon}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: '#FFFFFF' }}
          >
            {title}
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
            {subtitle}
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
          <li>
            <Link
              href="/servicios"
              className="transition-colors hover:underline"
              style={{ color: '#4A6FA5' }}
            >
              Servicios
            </Link>
          </li>
          <li style={{ color: '#9AAABF' }}>›</li>
          <li
            className="font-medium truncate"
            style={{ color: '#1B2A4A' }}
            aria-current="page"
          >
            {title}
          </li>
        </ol>
      </nav>

      {/* ── Main Content + Sidebar ── */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-14 lg:grid lg:grid-cols-3 lg:gap-12">
        {/* ── Left / Main Column ── */}
        <div className="lg:col-span-2 space-y-12">

          {/* Description */}
          <section>
            <h2
              className="text-2xl font-semibold mb-5"
              style={{ color: '#1B2A4A' }}
            >
              Descripción del Servicio
            </h2>
            {description.split('\n').map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-4"
                style={{ color: '#3D4F6B' }}
              >
                {para}
              </p>
            ))}
          </section>

          {/* Features */}
          <section>
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ color: '#1B2A4A' }}
            >
              Características y Alcance
            </h2>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Checkmark icon */}
                  <span
                    className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full"
                    style={{ background: '#E8F0FB', color: '#4A6FA5' }}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-base" style={{ color: '#3D4F6B' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Standards / Norms (conditional) */}
          {standards && standards.length > 0 && (
            <section>
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ color: '#1B2A4A' }}
              >
                Normas y Estándares Aplicables
              </h2>
              <div className="flex flex-wrap gap-3">
                {standards.map((std, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold border"
                    style={{
                      background: '#F0F4FA',
                      borderColor: '#4A6FA5',
                      color: '#1B2A4A',
                    }}
                  >
                    {/* Shield icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: '#D4A853' }}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.589 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.563 2 12.162 2 7a12.1 12.1 0 0 1 .104-1.589.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.749Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {std}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section
            className="rounded-xl p-8 text-center"
            style={{ background: '#1B2A4A' }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: '#FFFFFF' }}
            >
              ¿Listo para comenzar?
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: '#B8C9E0' }}
            >
              Cuéntenos sobre su proyecto y nuestro equipo técnico lo contactará
              a la brevedad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacto"
                className="inline-block px-8 py-3 rounded-md font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: '#D4A853', color: '#1B2A4A' }}
              >
                Solicitar Cotización
              </Link>
            </div>
          </section>

          {/* Back link */}
          <div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline"
              style={{ color: '#4A6FA5' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                  clipRule="evenodd"
                />
              </svg>
              Volver a todos los servicios
            </Link>
          </div>
        </div>

        {/* ── Right Sidebar: Related Services ── */}
        <aside className="mt-12 lg:mt-0">
          <div
            className="rounded-xl p-6 sticky top-24"
            style={{ background: '#FFFFFF', boxShadow: '0 2px 16px rgba(27,42,74,0.08)', border: '1px solid #D1DCF0' }}
          >
            <h3
              className="text-base font-bold uppercase tracking-wider mb-5"
              style={{ color: '#1B2A4A', borderBottom: '2px solid #D4A853', paddingBottom: '10px' }}
            >
              Servicios Relacionados
            </h3>
            <ul className="space-y-2">
              {relatedServices.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-blue-50 group"
                    style={{ color: '#3D4F6B' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors group-hover:bg-amber-400"
                      style={{ background: '#4A6FA5' }}
                      aria-hidden="true"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sidebar CTA */}
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid #D1DCF0' }}>
              <p className="text-xs mb-4" style={{ color: '#6B7FA3' }}>
                ¿Necesita un servicio personalizado o una solución integral?
              </p>
              <Link
                href="/#contacto"
                className="block w-full text-center px-4 py-2.5 rounded-md text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: '#1B2A4A', color: '#FFFFFF' }}
              >
                Contáctenos
              </Link>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
