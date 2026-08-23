'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/i18n/LanguageContext';

interface FormData {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  mensaje: string;
}

const initialFormData: FormData = {
  nombre: '',
  email: '',
  empresa: '',
  telefono: '',
  mensaje: '',
};

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(t('contact.errorMessage'));
      }

      setSuccess(true);
      setFormData(initialFormData);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t('contact.errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="text-amber-400 mt-1 shrink-0" size={20} />,
      label: t('contact.address'),
    },
    {
      icon: <FaPhone className="text-amber-400 shrink-0" size={18} />,
      label: t('contact.phone'),
    },
    {
      icon: <FaEnvelope className="text-amber-400 shrink-0" size={18} />,
      label: t('contact.email'),
    },
  ];

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7EBB] focus:border-transparent transition-all duration-200';

  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <section
      id="contacto"
      className="w-full py-20 px-4"
      style={{ backgroundColor: '#1B2A4A' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left Column: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {t('contact.title')}
            </h2>
            <p className="text-blue-200 text-base md:text-lg mb-10 leading-relaxed">
              {t('contact.subtitle')}
            </p>

            <ul className="space-y-6">
              {contactDetails.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mt-0.5">
                    {item.icon}
                  </span>
                  <span className="text-blue-100 text-sm leading-relaxed">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right Column: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {t('contact.formTitle')}
              </h3>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm"
                >
                  {t('contact.successMessage')}
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className={labelClass}>
                    {t('contact.form.nombre')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder={t('contact.form.nombrePlaceholder')}
                    value={formData.nombre}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {t('contact.form.email')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t('contact.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Empresa & Teléfono — two columns on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="empresa" className={labelClass}>
                      {t('contact.form.empresa')}
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder={t('contact.form.empresaPlaceholder')}
                      value={formData.empresa}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className={labelClass}>
                      {t('contact.form.telefono')}
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder={t('contact.form.telefonoPlaceholder')}
                      value={formData.telefono}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className={labelClass}>
                    {t('contact.form.mensaje')} <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder={t('contact.form.mensajePlaceholder')}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-3.5 px-6 rounded-lg font-semibold text-white text-sm tracking-wide transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#D4A853' }}
                  onMouseEnter={(e) => {
                    if (!loading)
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        '#C4943F';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      '#D4A853';
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      {t('contact.form.sending')}
                    </span>
                  ) : (
                    t('contact.form.submit')
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
