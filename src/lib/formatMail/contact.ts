export function formatContactMessage(formData: {
  fullName: string
  email: string
  phone: string
  message: string
}) {
  const html = `
  <!DOCTYPE html>
  <html>
  <head><meta charset="UTF-8"></head>
  <body style="font-family:Arial, sans-serif; background-color:#f5f7fa; padding:20px; margin:0;">
    <div style="max-width:600px; background:#fff; border-radius:12px; margin:auto; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
      <div style="background:linear-gradient(135deg,#2563eb,#1e40af); color:#fff; padding:20px; text-align:center;">
        <h2 style="margin:0; font-size:20px;">New Contact Message</h2>
      </div>
      <div style="padding:24px; color:#333;">
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
        <div style="background:#f1f5f9; border-left:4px solid #2563eb; padding:16px; border-radius:8px; margin-top:20px;">
          ${formData.message}
        </div>
      </div>
      <div style="background:#f9fafb; text-align:center; padding:12px; color:#6b7280; font-size:13px;">
        Broome Service Solutions
      </div>
    </div>
  </body>
  </html>
  `

  return html
}
