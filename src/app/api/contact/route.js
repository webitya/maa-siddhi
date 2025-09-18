import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: "gmail", // You can change this to your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  })
}

// Email template for contact form submissions
const createContactEmailTemplate = (formData) => {
  const subjectMap = {
    "product-inquiry": "उत्पाद की जानकारी",
    "order-status": "ऑर्डर की स्थिति",
    "bulk-order": "थोक ऑर्डर",
    complaint: "शिकायत",
    suggestion: "सुझाव",
    other: "अन्य",
  }

  return {
    subject: `माँ सिद्धि - ${subjectMap[formData.subject] || "संपर्क फॉर्म"}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #be123c, #ec4899); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #be123c; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #be123c; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ॐ माँ सिद्धि</h1>
              <p>नया संपर्क संदेश प्राप्त हुआ</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">नाम:</div>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <div class="label">ईमेल:</div>
                <div class="value">${formData.email}</div>
              </div>
              ${
                formData.phone
                  ? `
              <div class="field">
                <div class="label">फोन नंबर:</div>
                <div class="value">${formData.phone}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <div class="label">विषय:</div>
                <div class="value">${subjectMap[formData.subject] || formData.subject}</div>
              </div>
              <div class="field">
                <div class="label">संदेश:</div>
                <div class="value">${formData.message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>यह संदेश माँ सिद्धि की वेबसाइट के संपर्क फॉर्म से भेजा गया है।</p>
              <p>समय: ${new Date().toLocaleString("hi-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }
}

// Auto-reply email template
const createAutoReplyTemplate = (customerName) => {
  return {
    subject: "माँ सिद्धि - आपका संदेश प्राप्त हो गया है",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #be123c, #ec4899); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .contact-info { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ॐ माँ सिद्धि</h1>
              <p>धन्यवाद आपके संदेश के लिए!</p>
            </div>
            <div class="content">
              <p>प्रिय ${customerName},</p>
              <p>माँ दुर्गा की कृपा से आपका संदेश हमें प्राप्त हो गया है। हम जल्द ही आपसे संपर्क करेंगे।</p>
              
              <div class="contact-info">
                <h3>तुरंत सहायता के लिए:</h3>
                <p><strong>फोन:</strong> +91 9876543210</p>
                <p><strong>व्हाट्सऐप:</strong> +91 9876543210</p>
                <p><strong>ईमेल:</strong> info@maasiddhi.com</p>
                <p><strong>समय:</strong> सुबह 8:00 - रात 8:00 (सोमवार से रविवार)</p>
              </div>
              
              <p>हमारी सेवाओं के लिए धन्यवाद।</p>
              <p>माँ दुर्गा का आशीर्वाद आप पर बना रहे।</p>
              
              <p>सादर,<br><strong>माँ सिद्धि टीम</strong><br>रांची, झारखंड</p>
            </div>
            <div class="footer">
              <p>यह एक स्वचालित संदेश है। कृपया इसका उत्तर न दें।</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }
}

export async function POST(request) {
  try {
    const formData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json({ error: "सभी आवश्यक फील्ड भरें" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({ error: "वैध ईमेल पता दर्ज करें" }, { status: 400 })
    }

    const transporter = createTransporter()

    // Send email to business owner
    const contactEmail = createContactEmailTemplate(formData)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
      subject: contactEmail.subject,
      html: contactEmail.html,
    })

    // Send auto-reply to customer
    const autoReply = createAutoReplyTemplate(formData.name)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: autoReply.subject,
      html: autoReply.html,
    })

    return NextResponse.json({ message: "संदेश सफलतापूर्वक भेज दिया गया है" }, { status: 200 })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "संदेश भेजने में त्रुटि हुई है" }, { status: 500 })
  }
}
