/**
 * Contact Form API Route (Resend — Cloudflare-compatible)
 *
 * SETUP:
 * 1. Create account at https://resend.com
 * 2. Generate API Key → set RESEND_API_KEY in environment
 * 3. Verify your domain in Resend dashboard (or use onboarding@resend.dev for testing)
 * 4. Set CONTACT_EMAIL as the destination inbox
 *
 * Environment variables:
 *   RESEND_API_KEY  - Resend API key (re_...)
 *   RESEND_FROM     - Verified sender (e.g. "GF Web <info@gfinspecciones.com.ar>")
 *   CONTACT_EMAIL   - Destination inbox
 *   CONTACT_BCC     - Silent BCC recipient
 */

import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  nombre: string;
  email: string;
  empresa?: string;
  telefono?: string;
  mensaje: string;
}

function buildHtmlBody(data: ContactFormData): string {
  const { nombre, email, empresa, telefono, mensaje } = data;

  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nuevo contacto desde web</title>
      </head>
      <body style="margin:0;padding:0;background-color:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0"
                style="background-color:#ffffff;border-radius:8px;overflow:hidden;
                       box-shadow:0 2px 8px rgba(0,0,0,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background-color:#1a1a2e;padding:32px 40px;text-align:center;">
                    <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;
                               letter-spacing:0.5px;">
                      Nuevo contacto desde el sitio web
                    </h1>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:40px;">
                    <p style="margin:0 0 24px;color:#555;font-size:15px;">
                      Has recibido un nuevo mensaje a través del formulario de contacto.
                    </p>

                    <!-- Data table -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="border-collapse:collapse;font-size:14px;">

                      <tr>
                        <td style="padding:12px 16px;background-color:#f8f9fb;
                                   border-left:3px solid #1a1a2e;width:140px;
                                   color:#777;font-weight:600;text-transform:uppercase;
                                   font-size:11px;letter-spacing:0.5px;">
                          Nombre
                        </td>
                        <td style="padding:12px 16px;background-color:#f8f9fb;
                                   color:#1a1a2e;font-weight:500;">
                          ${escapeHtml(nombre)}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:12px 16px;border-left:3px solid #1a1a2e;
                                   color:#777;font-weight:600;text-transform:uppercase;
                                   font-size:11px;letter-spacing:0.5px;">
                          Email
                        </td>
                        <td style="padding:12px 16px;color:#1a1a2e;">
                          <a href="mailto:${escapeHtml(email)}"
                            style="color:#0066cc;text-decoration:none;">
                            ${escapeHtml(email)}
                          </a>
                        </td>
                      </tr>

                      ${empresa ? `
                      <tr>
                        <td style="padding:12px 16px;background-color:#f8f9fb;
                                   border-left:3px solid #1a1a2e;
                                   color:#777;font-weight:600;text-transform:uppercase;
                                   font-size:11px;letter-spacing:0.5px;">
                          Empresa
                        </td>
                        <td style="padding:12px 16px;background-color:#f8f9fb;
                                   color:#1a1a2e;">
                          ${escapeHtml(empresa)}
                        </td>
                      </tr>` : ''}

                      ${telefono ? `
                      <tr>
                        <td style="padding:12px 16px;border-left:3px solid #1a1a2e;
                                   color:#777;font-weight:600;text-transform:uppercase;
                                   font-size:11px;letter-spacing:0.5px;">
                          Teléfono
                        </td>
                        <td style="padding:12px 16px;color:#1a1a2e;">
                          <a href="tel:${escapeHtml(telefono)}"
                            style="color:#0066cc;text-decoration:none;">
                            ${escapeHtml(telefono)}
                          </a>
                        </td>
                      </tr>` : ''}

                    </table>

                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="margin-top:24px;">
                      <tr>
                        <td style="padding:8px 16px;background-color:#1a1a2e;
                                   border-radius:4px 4px 0 0;">
                          <span style="color:#ffffff;font-weight:600;font-size:11px;
                                       text-transform:uppercase;letter-spacing:0.5px;">
                            Mensaje
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:20px;background-color:#f8f9fb;
                                   border-radius:0 0 4px 4px;border:1px solid #e8eaed;
                                   color:#333;font-size:15px;line-height:1.6;
                                   white-space:pre-wrap;">
                          ${escapeHtml(mensaje)}
                        </td>
                      </tr>
                    </table>

                    <!-- Reply CTA -->
                    <div style="margin-top:32px;text-align:center;">
                      <a href="mailto:${escapeHtml(email)}"
                        style="display:inline-block;padding:12px 28px;
                               background-color:#1a1a2e;color:#ffffff;
                               border-radius:5px;text-decoration:none;
                               font-size:14px;font-weight:600;letter-spacing:0.3px;">
                        Responder a ${escapeHtml(nombre)}
                      </a>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color:#f4f6f9;padding:20px 40px;
                             text-align:center;border-top:1px solid #e8eaed;">
                    <p style="margin:0;color:#aaa;font-size:12px;">
                      Este mensaje fue enviado automáticamente desde el formulario de contacto de tu sitio web.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

/** Minimal HTML entity escaping to prevent injection in the email body */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await request.json();

    const { nombre, email, empresa, telefono, mensaje } = body;

    // ── Validation ──────────────────────────────────────────────────────────
    const missingFields: string[] = [];
    if (!nombre?.trim()) missingFields.push('nombre');
    if (!email?.trim()) missingFields.push('email');
    if (!mensaje?.trim()) missingFields.push('mensaje');

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Campos requeridos faltantes',
          missingFields,
        },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    // ── Build email data ────────────────────────────────────────────────────
    const formData: ContactFormData = {
      nombre: nombre.trim(),
      email: email.trim(),
      empresa: empresa?.trim(),
      telefono: telefono?.trim(),
      mensaje: mensaje.trim(),
    };

    const subject = `Nuevo contacto desde web - ${formData.nombre}${formData.empresa ? ` - ${formData.empresa}` : ''}`;
    const destination = process.env.CONTACT_EMAIL ?? 'gabrielfranco2301@gmail.com';
    const bcc = process.env.CONTACT_BCC ?? 'rabino.gustavo@gmail.com';
    const from = process.env.RESEND_FROM ?? 'GF Web <onboarding@resend.dev>';
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('[contact/route] RESEND_API_KEY not configured');
      return NextResponse.json(
        { success: false, error: 'Email service not configured.' },
        { status: 500 }
      );
    }

    // ── Send via Resend API ─────────────────────────────────────────────────
    const toAddresses = [destination];
    const bccAddresses = bcc ? [bcc] : [];

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: toAddresses,
        bcc: bccAddresses,
        reply_to: formData.email,
        subject,
        html: buildHtmlBody(formData),
        text: [
          `Nombre:   ${formData.nombre}`,
          `Email:    ${formData.email}`,
          formData.empresa ? `Empresa:  ${formData.empresa}` : null,
          formData.telefono ? `Teléfono: ${formData.telefono}` : null,
          '',
          'Mensaje:',
          formData.mensaje,
        ]
          .filter(Boolean)
          .join('\n'),
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error('[contact/route] Resend API error:', resendResponse.status, errorData);
      return NextResponse.json(
        {
          success: false,
          error: 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
        },
        { status: 500 }
      );
    }

    const result = await resendResponse.json();
    console.log('[contact/route] Email sent via Resend:', result);

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[contact/route] Error sending email:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
      },
      { status: 500 }
    );
  }
}
