import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

// Newsletter subscription email template
const createNewsletterWelcomeTemplate = (email) => {
  return {
    subject: "माँ सिद्धि न्यूज़लेटर में आपका स्वागत है!",
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
            .benefits { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
            .benefit-item { margin: 10px 0; padding-left: 20px; position: relative; }
            .benefit-item:before { content: "✓"; position: absolute; left: 0; color: #be123c; font-weight: bold; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ॐ माँ सिद्धि</h1>
              <p>न्यूज़लेटर में आपका स्वागत है!</p>
            </div>
            <div class="content">
              <p>धन्यवाद हमारे न्यूज़लेटर की सदस्यता लेने के लिए!</p>
              
              <div class="benefits">
                <h3>आपको मिलेगा:</h3>
                <div class="benefit-item">नए उत्पादों की जानकारी</div>
                <div class="benefit-item">विशेष छूट और ऑफर</div>
                <div class="benefit-item">त्योहारी सामग्री की सूचना</div>
                <div class="benefit-item">पूजा विधि की जानकारी</div>
                <div class="benefit-item">धार्मिक तिथियों की याद</div>
              </div>
              
              <p>माँ दुर्गा का आशीर्वाद आप पर बना रहे।</p>
              
              <p>सादर,<br><strong>माँ सिद्धि टीम</strong><br>रांची, झारखंड</p>
            </div>
            <div class="footer">
              <p>यदि आप इस न्यूज़लेटर को प्राप्त नहीं करना चाहते, तो कृपया हमसे संपर्क करें।</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }
}

export async function POST(request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "ईमेल पता आवश्यक है" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "वैध ईमेल पता दर्ज करें" }, { status: 400 })
    }

    const transporter = createTransporter()

    // Send notification to business owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
      subject: "माँ सिद्धि - नई न्यूज़लेटर सदस्यता",
      html: `
        <h2>नई न्यूज़लेटर सदस्यता</h2>
        <p><strong>ईमेल:</strong> ${email}</p>
        <p><strong>समय:</strong> ${new Date().toLocaleString("hi-IN", { timeZone: "Asia/Kolkata" })}</p>
      `,
    })

    // Send welcome email to subscriber
    const welcomeEmail = createNewsletterWelcomeTemplate(email)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: welcomeEmail.subject,
      html: welcomeEmail.html,
    })

    return NextResponse.json({ message: "न्यूज़लेटर की सदस्यता सफल हो गई" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "सदस्यता में त्रुटि हुई है" }, { status: 500 })
  }
}
