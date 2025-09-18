export default function ContactMap() {
  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground hindi-font mb-2">हमारा स्थान</h2>
        <p className="text-muted-foreground hindi-font">रांची, झारखंड में हमारी दुकान का पता</p>
      </div>

      <div className="bg-card rounded-xl overflow-hidden shadow-lg">
        <div className="aspect-video bg-muted flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground hindi-font">माँ सिद्धि</h3>
              <p className="text-sm text-muted-foreground hindi-font">रांची, झारखंड</p>
              <p className="text-xs text-muted-foreground">मुख्य बाजार के पास</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-lg font-semibold text-primary hindi-font">पता</div>
              <div className="text-sm text-muted-foreground hindi-font mt-1">रांची, झारखंड, भारत</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary hindi-font">फोन</div>
              <div className="text-sm text-muted-foreground mt-1">+91 9876543210</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary hindi-font">समय</div>
              <div className="text-sm text-muted-foreground hindi-font mt-1">8:00 AM - 8:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
