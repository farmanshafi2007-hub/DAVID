import { Phone } from "lucide-react";

export default function TargoHero() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 h-full flex flex-col justify-between">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-sm" />
            <span className="text-lg font-bold lowercase">targo</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </nav>

          <button className="hidden md:block bg-[#EE3F2C] text-white px-5 py-2 text-sm font-medium clip-btn">
            Contact Us
          </button>
        </header>

        {/* Hero Content */}
        <div className="mt-10">
          <h1 className="text-[42px] md:text-[64px] font-bold uppercase tracking-[-0.04em] max-w-xl leading-tight">
            Swift and Simple Transport
          </h1>

          <button className="mt-6 bg-[#EE3F2C] px-6 py-3 font-medium clip-btn">
            Get Started
          </button>
        </div>

        {/* Bottom Card */}
        <div className="pb-10">
          <div className="glass-card max-w-sm p-6 rounded-2xl">
            <p className="text-sm mb-4 text-white/80 tracking-wide">Book a Free Consultation</p>

            <a href="tel:9697430658" className="flex items-center justify-center gap-2 bg-[#EE3F2C] text-white px-6 py-3 font-medium clip-btn hover:opacity-90 transition">
              <Phone size={16} />
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .clip-btn {
          clip-path: polygon(
            0 0,
            calc(100% - 12px) 0,
            100% 12px,
            100% 100%,
            12px 100%,
            0 calc(100% - 12px)
          );
        }

        .glass-card {
          backdrop-filter: blur(40px) saturate(180%);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.10),
            rgba(255, 255, 255, 0.02)
          );
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.15), 0 10px 30px rgba(0,0,0,0.4);
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0.25),
            transparent 40%
          );
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
