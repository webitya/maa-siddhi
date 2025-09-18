"use client"

export default function ContactMap() {
  return (
    <div className="mt-12 mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground hindi-font mb-1">हमारा स्थान</h2>
        <p className="text-sm text-muted-foreground hindi-font">रांची, झारखंड में हमारी दुकान का पता</p>
      </div>

      {/* Map Embed */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Maasiddhi Ranchi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123456789!2d85.3140!3d23.3440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e5fbe8f12345%3A0xabcdef1234567890!2sRanchi%2C%20Jharkhand%2C%20India!5e0!3m2!1sen!2sin!4v1695051234567!5m2!1sen!2sin"
          className="w-full h-64 md:h-80"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-card p-4 rounded-lg shadow-sm">
          <div className="text-sm font-semibold text-primary hindi-font">पता</div>
          <div className="text-xs text-muted-foreground mt-1">रांची, झारखंड, भारत</div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm">
          <div className="text-sm font-semibold text-primary hindi-font">फोन</div>
          <div className="text-xs text-muted-foreground mt-1">+91 9876543210</div>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm">
          <div className="text-sm font-semibold text-primary hindi-font">समय</div>
          <div className="text-xs text-muted-foreground mt-1">8:00 AM - 8:00 PM</div>
        </div>
      </div>
    </div>
  )
}
