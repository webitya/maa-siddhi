// Utility functions for creating email templates

export const createOrderInquiryTemplate = (productName, customerInfo) => {
  return {
    subject: `माँ सिद्धि - ${productName} के लिए ऑर्डर पूछताछ`,
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
            .product-info { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #be123c; }
            .customer-info { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ॐ माँ सिद्धि</h1>
              <p>नई ऑर्डर पूछताछ</p>
            </div>
            <div class="content">
              <div class="product-info">
                <h3>उत्पाद की जानकारी:</h3>
                <p><strong>उत्पाद:</strong> ${productName}</p>
              </div>
              
              <div class="customer-info">
                <h3>ग्राहक की जानकारी:</h3>
                <p><strong>नाम:</strong> ${customerInfo.name || "नहीं दिया गया"}</p>
                <p><strong>फोन:</strong> ${customerInfo.phone || "नहीं दिया गया"}</p>
                <p><strong>ईमेल:</strong> ${customerInfo.email || "नहीं दिया गया"}</p>
                ${customerInfo.message ? `<p><strong>संदेश:</strong> ${customerInfo.message}</p>` : ""}
              </div>
            </div>
            <div class="footer">
              <p>समय: ${new Date().toLocaleString("hi-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }
}

export const createBulkOrderTemplate = (orderDetails) => {
  return {
    subject: "माँ सिद्धि - थोक ऑर्डर की पूछताछ",
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
            .order-details { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ॐ माँ सिद्धि</h1>
              <p>थोक ऑर्डर की पूछताछ</p>
            </div>
            <div class="content">
              <div class="order-details">
                <h3>ऑर्डर की जानकारी:</h3>
                <p><strong>ग्राहक:</strong> ${orderDetails.customerName}</p>
                <p><strong>कंपनी:</strong> ${orderDetails.company || "व्यक्तिगत"}</p>
                <p><strong>फोन:</strong> ${orderDetails.phone}</p>
                <p><strong>ईमेल:</strong> ${orderDetails.email}</p>
                <p><strong>पता:</strong> ${orderDetails.address}</p>
                <p><strong>आवश्यक मात्रा:</strong> ${orderDetails.quantity}</p>
                <p><strong>उत्पाद विवरण:</strong> ${orderDetails.productDetails}</p>
                ${orderDetails.specialRequirements ? `<p><strong>विशेष आवश्यकताएं:</strong> ${orderDetails.specialRequirements}</p>` : ""}
              </div>
            </div>
            <div class="footer">
              <p>समय: ${new Date().toLocaleString("hi-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }
}

export const createFestivalReminderTemplate = (festivalName, products) => {
  return {
    subject: `माँ सिद्धि - ${festivalName} की शुभकामनाएं और विशेष ऑफर`,
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
            .products { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
            .product-item { margin: 10px 0; padding: 10px; border-left: 3px solid #be123c; background: #fdf2f8; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ॐ माँ सिद्धि</h1>
              <h2>${festivalName} की हार्दिक शुभकामनाएं!</h2>
            </div>
            <div class="content">
              <p>माँ दुर्गा का आशीर्वाद आप पर बना रहे।</p>
              <p>${festivalName} के इस पावन अवसर पर हम आपके लिए विशेष छूट लेकर आए हैं।</p>
              
              <div class="products">
                <h3>विशेष उत्पाद:</h3>
                ${products
                  .map(
                    (product) => `
                  <div class="product-item">
                    <strong>${product.name}</strong><br>
                    <span style="color: #be123c;">विशेष मूल्य: ₹${product.price}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
              
              <p>अभी ऑर्डर करने के लिए हमसे संपर्क करें:</p>
              <p><strong>फोन:</strong> +91 9876543210</p>
              <p><strong>व्हाट्सऐप:</strong> +91 9876543210</p>
              
              <p>सादर,<br><strong>माँ सिद्धि टीम</strong></p>
            </div>
            <div class="footer">
              <p>यह ऑफर सीमित समय के लिए है।</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }
}
