"use client"

import { Phone, WhatsApp, AccessTime, LocalShipping, Verified, Star } from "@mui/icons-material"
import { generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function HeroSection() {
  const phoneNumber = "6207732383"
  const whatsappMessage = "नमस्ते! मुझे पूजा सामग्री के बारे में जानकारी चाहिए।"

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-rose-50 py-8 md:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-trishul-float opacity-20">
          <svg width="120" height="160" viewBox="0 0 120 160" className="text-orange-600">
            {/* Trishul Main Staff */}
            <rect x="58" y="40" width="4" height="120" fill="currentColor" className="animate-trishul-glow" />

            {/* Central Prong */}
            <polygon points="60,10 55,40 65,40" fill="currentColor" className="animate-trishul-glow" />

            {/* Left Prong */}
            <polygon points="45,25 40,45 50,40 55,20" fill="currentColor" className="animate-trishul-glow" />

            {/* Right Prong */}
            <polygon points="75,25 80,45 70,40 65,20" fill="currentColor" className="animate-trishul-glow" />

            {/* Decorative Elements */}
            <circle cx="60" cy="50" r="3" fill="currentColor" className="animate-pulse" />
            <circle cx="45" cy="35" r="2" fill="currentColor" className="animate-pulse" />
            <circle cx="75" cy="35" r="2" fill="currentColor" className="animate-pulse" />
          </svg>
        </div>

        <div className="absolute top-20 right-1/4 animate-trishul-rotate opacity-15">
          <svg width="40" height="60" viewBox="0 0 40 60" className="text-orange-500">
            <rect x="19" y="15" width="2" height="45" fill="currentColor" />
            <polygon points="20,5 17,15 23,15" fill="currentColor" />
            <polygon points="15,10 13,18 17,15 18,8" fill="currentColor" />
            <polygon points="25,10 27,18 23,15 22,8" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute bottom-1/4 left-1/5 animate-trishul-spin opacity-10">
          <svg width="50" height="70" viewBox="0 0 50 70" className="text-orange-400">
            <rect x="24" y="20" width="2" height="50" fill="currentColor" />
            <polygon points="25,8 21,20 29,20" fill="currentColor" />
            <polygon points="18,13 16,23 21,19 22,10" fill="currentColor" />
            <polygon points="32,13 34,23 29,19 28,10" fill="currentColor" />
          </svg>
        </div>

        {/* Animated Squares */}
        <div
          className="absolute top-10 left-10 w-8 h-8 bg-rose-200/30 rotate-45 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-32 right-20 w-12 h-12 bg-pink-200/40 rotate-12 animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 left-32 w-6 h-6 bg-rose-300/50 rotate-45 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/2 w-10 h-10 bg-pink-300/40 rotate-12 animate-float-diagonal"
          style={{ animationDelay: "0.5s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-7 h-7 bg-rose-400/35 rotate-45 animate-float-reverse"
          style={{ animationDelay: "1.8s", animationDuration: "4.5s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/4 w-9 h-9 bg-pink-200/45 rotate-30 animate-float-circular"
          style={{ animationDelay: "2.3s", animationDuration: "6s" }}
        ></div>

        {/* Animated Circles */}
        <div
          className="absolute top-20 right-32 w-10 h-10 bg-pink-200/30 rounded-full animate-ping"
          style={{ animationDelay: "0.5s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-32 right-10 w-14 h-14 bg-rose-200/40 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-8 h-8 bg-pink-300/50 rounded-full animate-bounce"
          style={{ animationDelay: "2.5s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-16 left-1/3 w-12 h-12 bg-rose-300/35 rounded-full animate-float-zigzag"
          style={{ animationDelay: "1.2s", animationDuration: "5.5s" }}
        ></div>
        <div
          className="absolute bottom-16 left-2/3 w-6 h-6 bg-pink-400/40 rounded-full animate-float-wave"
          style={{ animationDelay: "3s", animationDuration: "4.8s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-11 h-11 bg-rose-200/45 rounded-full animate-float-spiral"
          style={{ animationDelay: "0.8s", animationDuration: "7s" }}
        ></div>

        {/* Animated Triangles/Cones */}
        <div
          className="absolute top-40 left-1/4 w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent border-b-rose-200/40 animate-spin"
          style={{ animationDelay: "1s", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-transparent border-b-pink-200/50 animate-spin"
          style={{ animationDelay: "3s", animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/5 w-0 h-0 border-l-5 border-r-5 border-b-8 border-transparent border-b-rose-300/45 animate-float-triangle"
          style={{ animationDelay: "2.1s", animationDuration: "6.5s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/5 w-0 h-0 border-l-7 border-r-7 border-b-11 border-transparent border-b-pink-300/40 animate-spin-reverse"
          style={{ animationDelay: "1.7s", animationDuration: "9s" }}
        ></div>

        {/* Additional floating shapes with random movements */}
        <div
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-rose-400/30 rounded-full animate-float"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-pink-300/40 rotate-45 animate-float"
          style={{ animationDelay: "2.2s" }}
        ></div>
        <div
          className="absolute top-1/5 right-2/5 w-5 h-5 bg-rose-300/35 rounded-full animate-float-random"
          style={{ animationDelay: "1.4s", animationDuration: "5.2s" }}
        ></div>
        <div
          className="absolute bottom-2/5 right-1/6 w-8 h-8 bg-pink-400/30 rotate-60 animate-float-bounce"
          style={{ animationDelay: "2.8s", animationDuration: "4.3s" }}
        ></div>
        <div
          className="absolute top-4/5 left-3/5 w-7 h-7 bg-rose-200/40 rounded-full animate-float-slide"
          style={{ animationDelay: "0.3s", animationDuration: "6.8s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content without card effect */}
          <div className="space-y-4 md:space-y-8">
            <div className="space-y-3 md:space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 hindi-font leading-tight drop-shadow-lg">
                माँ सिद्धि
              </h1>

              <div className="space-y-2 md:space-y-4">
                <p className="text-lg md:text-xl text-slate-700 hindi-font font-medium drop-shadow-sm">
                  रांची, झारखंड की सबसे विश्वसनीय पूजा सामग्री की दुकान
                </p>

                <p className="text-base md:text-lg text-slate-600 hindi-font max-w-lg leading-relaxed drop-shadow-sm">
                  हमारे पास उच्च गुणवत्ता की प्रामाणिक पूजा सामग्री, हवन सामग्री, और धार्मिक वस्तुओं का विशाल संग्रह है। दुर्गा पूजा से लेकर
                  दैनिक पूजा तक, सभी आवश्यकताओं के लिए एक ही स्थान पर।
                </p>

                <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-slate-600 hindi-font">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></div>
                    <span>1000+ उत्पाद उपलब्ध</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></div>
                    <span>घर तक मुफ्त डिलीवरी</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></div>
                    <span>15+ वर्षों का अनुभव</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="hidden md:flex flex-col sm:flex-row gap-4">
              <a
                href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <WhatsApp sx={{ fontSize: 20 }} />
                <span className="hindi-font">व्हाट्सऐप पर संपर्क करें</span>
              </a>

              <a
                href={generateCallLink(phoneNumber)}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone sx={{ fontSize: 20 }} />
                <span className="hindi-font">अभी कॉल करें</span>
              </a>
            </div>
          </div>

          {/* Right Side - Services Grid with Glassmorphism */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 backdrop-blur-md bg-white/30 rounded-2xl shadow-2xl p-1 border border-white/40">
              <div className="grid grid-cols-2 gap-1 h-full">
                {/* Service 1 - 24/7 Service */}
                <div className="bg-gradient-to-br from-green-50/80 to-green-100/80 backdrop-blur-sm rounded-tl-xl p-3 md:p-6 flex flex-col items-center justify-center text-center space-y-2 md:space-y-3 border border-white/20">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                    <AccessTime sx={{ fontSize: { xs: 16, md: 24 }, color: "white" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-lg text-slate-900 hindi-font drop-shadow-sm">24/7</p>
                    <p className="text-xs md:text-sm text-slate-600 hindi-font drop-shadow-sm">सेवा उपलब्ध</p>
                  </div>
                </div>

                {/* Service 2 - Fast Delivery */}
                <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm rounded-tr-xl p-3 md:p-6 flex flex-col items-center justify-center text-center space-y-2 md:space-y-3 border border-white/20">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <LocalShipping sx={{ fontSize: { xs: 16, md: 24 }, color: "white" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-lg text-slate-900 hindi-font drop-shadow-sm">तुरंत</p>
                    <p className="text-xs md:text-sm text-slate-600 hindi-font drop-shadow-sm">डिलीवरी</p>
                  </div>
                </div>

                {/* Service 3 - Quality Products */}
                <div className="bg-gradient-to-br from-orange-50/80 to-orange-100/80 backdrop-blur-sm rounded-bl-xl p-3 md:p-6 flex flex-col items-center justify-center text-center space-y-2 md:space-y-3 border border-white/20">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Verified sx={{ fontSize: { xs: 16, md: 24 }, color: "white" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-lg text-slate-900 hindi-font drop-shadow-sm">प्रामाणिक</p>
                    <p className="text-xs md:text-sm text-slate-600 hindi-font drop-shadow-sm">गुणवत्ता</p>
                  </div>
                </div>

                {/* Service 4 - Premium Experience */}
                <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-br-xl p-3 md:p-6 flex flex-col items-center justify-center text-center space-y-2 md:space-y-3 border border-white/20">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Star sx={{ fontSize: { xs: 16, md: 24 }, color: "white" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-lg text-slate-900 hindi-font drop-shadow-sm">बेहतरीन</p>
                    <p className="text-xs md:text-sm text-slate-600 hindi-font drop-shadow-sm">अनुभव</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Added trishul-specific animations */
        @keyframes trishul-float {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translate(-50%, -50%) translateY(-15px) rotate(2deg) scale(1.05); 
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-25px) rotate(0deg) scale(1.1); 
          }
          75% { 
            transform: translate(-50%, -50%) translateY(-10px) rotate(-2deg) scale(1.05); 
          }
        }
        
        @keyframes trishul-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(251, 146, 60, 0.3)); }
          50% { filter: drop-shadow(0 0 15px rgba(251, 146, 60, 0.6)); }
        }
        
        @keyframes trishul-rotate {
          0% { transform: rotate(0deg) translateY(0px); }
          25% { transform: rotate(90deg) translateY(-10px); }
          50% { transform: rotate(180deg) translateY(-20px); }
          75% { transform: rotate(270deg) translateY(-10px); }
          100% { transform: rotate(360deg) translateY(0px); }
        }
        
        @keyframes trishul-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .animate-trishul-float { animation: trishul-float 8s ease-in-out infinite; }
        .animate-trishul-glow { animation: trishul-glow 3s ease-in-out infinite; }
        .animate-trishul-rotate { animation: trishul-rotate 12s linear infinite; }
        .animate-trishul-spin { animation: trishul-spin 10s ease-in-out infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-diagonal {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -15px) rotate(90deg); }
          50% { transform: translate(-10px, -30px) rotate(180deg); }
          75% { transform: translate(-25px, -10px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes float-reverse {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-15px, 20px) rotate(-120deg); }
          66% { transform: translate(25px, -15px) rotate(-240deg); }
          100% { transform: translate(0, 0) rotate(-360deg); }
        }
        @keyframes float-circular {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, 0) rotate(90deg); }
          50% { transform: translate(30px, 30px) rotate(180deg); }
          75% { transform: translate(0, 30px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes float-zigzag {
          0% { transform: translate(0, 0); }
          20% { transform: translate(15px, -10px); }
          40% { transform: translate(-20px, -25px); }
          60% { transform: translate(25px, -35px); }
          80% { transform: translate(-15px, -20px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes float-wave {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(20px) translateY(-15px); }
          50% { transform: translateX(0) translateY(-30px); }
          75% { transform: translateX(-20px) translateY(-15px); }
          100% { transform: translateX(0) translateY(0); }
        }
        @keyframes float-spiral {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(15px, -15px) rotate(90deg) scale(1.2); }
          50% { transform: translate(0, -30px) rotate(180deg) scale(0.8); }
          75% { transform: translate(-15px, -15px) rotate(270deg) scale(1.1); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
        @keyframes float-triangle {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -25px) rotate(120deg); }
          66% { transform: translate(-25px, 15px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float-random {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(10px, -20px) rotate(72deg); }
          40% { transform: translate(-15px, -10px) rotate(144deg); }
          60% { transform: translate(20px, 5px) rotate(216deg); }
          80% { transform: translate(-5px, 15px) rotate(288deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes float-bounce {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(15px, -20px) scale(1.1); }
          50% { transform: translate(-10px, -35px) scale(0.9); }
          75% { transform: translate(-20px, -10px) scale(1.05); }
        }
        @keyframes float-slide {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(30px) translateY(-10px) rotate(90deg); }
          50% { transform: translateX(15px) translateY(-25px) rotate(180deg); }
          75% { transform: translateX(-20px) translateY(-15px) rotate(270deg); }
          100% { transform: translateX(0) translateY(0) rotate(360deg); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-diagonal { animation: float-diagonal 5s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 4.5s ease-in-out infinite; }
        .animate-float-circular { animation: float-circular 6s ease-in-out infinite; }
        .animate-float-zigzag { animation: float-zigzag 5.5s ease-in-out infinite; }
        .animate-float-wave { animation: float-wave 4.8s ease-in-out infinite; }
        .animate-float-spiral { animation: float-spiral 7s ease-in-out infinite; }
        .animate-float-triangle { animation: float-triangle 6.5s ease-in-out infinite; }
        .animate-spin-reverse { animation: spin-reverse 9s linear infinite; }
        .animate-float-random { animation: float-random 5.2s ease-in-out infinite; }
        .animate-float-bounce { animation: float-bounce 4.3s ease-in-out infinite; }
        .animate-float-slide { animation: float-slide 6.8s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
