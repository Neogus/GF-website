/**
 * Contact Form API Route
 *
 * SETUP INSTRUCTIONS:
 * -------------------
 * Option 1 - Gmail App Password (recommended for Gmail):
 *   1. Enable 2-Factor Authentication on your Google account
 *   2. Go to https://myaccount.google.com/apppasswords
 *   3. Generate an App Password for "Mail"
 *   4. Set SMTP_USER=your@gmail.com and SMTP_PASS=<16-char app password>
 *
 * Option 2 - Generic SMTP (e.g. SendGrid, Mailgun, Brevo, etc.):
 *   Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to your provider's values.
 *
 * Required environment variables (.env.local):
 *   SMTP_HOST     - SMTP server hostname  (default: smtp.gmail.com)
 *   SMTP_PORT     - SMTP port             (default: 587)
 *   SMTP_USER     - SMTP username / email
 *   SMTP_PASS     - SMTP password or App Password
 *   CONTACT_EMAIL - Destination inbox     (default: gusrab@gmail.com)
 */

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // ── SMTP transporter ────────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465, // true only for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ── Build & send email ──────────────────────────────────────────────────
    const subject = `Nuevo contacto desde web - ${nombre.trim()}${empresa ? ` - ${empresa.trim()}` : ''}`;
    const destination = process.env.CONTACT_EMAIL ?? 'gusrab@gmail.com';

    const formData: ContactFormData = {
      nombre: nombre.trim(),
      email: email.trim(),
      empresa: empresa?.trim(),
      telefono: telefono?.trim(),
      mensaje: mensaje.trim(),
    };

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: destination,
      replyTo: formData.email,
      subject,
      html: buildHtmlBody(formData),
      text: [
        `Nombre:   ${formData.nombre}`,
        `Email:    ${formData.email}`,
        empresa  ? `Empresa:  ${formData.empresa}`   : null,
        telefono ? `Teléfono: ${formData.telefono}`  : null,
        '',
        'Mensaje:',
        formData.mensaje,
      ]
        .filter(Boolean)
        .join('\n'),
    });

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
