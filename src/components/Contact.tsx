'use client'

import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Error al enviar el formulario')

      setSuccess(true)
      setFormData({ nombre: '', email: '', empresa: '', telefono: '', mensaje: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contacto"
      style={{ backgroundColor: '#1B2A4A' }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
          {/* Left column — contact info */}
          <div
            style={{ backgroundColor: '#162240' }}
            className="flex flex-col justify-center p-10 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  style={{ backgroundColor: '#D4A853' }}
                  className="mt-1 p-2 rounded-full flex-shrink-0"
                >
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Ubicación
                  </p>
                  <p className="text-gray-300 text-sm mt-0.5">
                    {t('contact.address')}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  style={{ backgroundColor: '#D4A853' }}
                  className="mt-1 p-2 rounded-full flex-shrink-0"
                >
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Teléfono
                  </p>
                  <p className="text-gray-300 text-sm mt-0.5">
                    {t('contact.phone')}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  style={{ backgroundColor: '#D4A853' }}
                  className="mt-1 p-2 rounded-full flex-shrink-0"
                >
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Email
                  </p>
                  <p className="text-gray-300 text-sm mt-0.5">
                    {t('contact.email')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="bg-white p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t('contact.formTitle')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.nombre')}
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder={t('contact.form.nombrePlaceholder')}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Empresa */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.empresa')}
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder={t('contact.form.empresaPlaceholder')}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.telefono')}
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder={t('contact.form.telefonoPlaceholder')}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.mensaje')}
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder={t('contact.form.mensajePlaceholder')}
                  required
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
              </div>

              {/* Status messages */}
              {success && (
                <p className="text-green-600 text-sm font-medium">
                  {t('contact.successMessage')}
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{ backgroundColor: '#D4A853' }}
                className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading
                  ? t('contact.form.sending')
                  : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
