export async function sendMail({ subject, text, mailTo }: { subject: string; text: string; mailTo: string }) {
  try {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.createTransport({
      host: import.meta.env.VITE_SMTP_HOST,
      port: Number(import.meta.env.VITE_SMTP_PORT || 587),
      secure: import.meta.env.VITE_SMTP_SECURE === 'true',
      auth: import.meta.env.VITE_SMTP_USER
        ? { user: import.meta.env.VITE_SMTP_USER, pass: import.meta.env.VITE_SMTP_PASS }
        : undefined,
    })

    await transporter.sendMail({
      from: import.meta.env.VITE_FROM_EMAIL || 'broomeservicesolutions@gmail.com',
      to: mailTo,
      subject,
      text,
    })

    return { ok: true }
  } catch (err) {
    console.error('Error sending mail:', err)
    return { ok: false, error: String(err) }
  }
}
