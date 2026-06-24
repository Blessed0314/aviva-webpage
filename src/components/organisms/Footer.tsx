import Logo from "@/components/atoms/Logo";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";

// Custom SVG Icons for Brands (to keep the bundle light and independent of Lucide updates)
const InstagramIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

const WhatsappIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.601 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-brand-navy-light border-t border-white/5 pt-16 pb-12 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* Column 1: Logo */}
        <div className="flex items-center justify-center h-full">
          <Logo useImage={true} variant="full" width={220} height={73} />
        </div>

        {/* Column 2: Visítanos */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-xl font-bold text-white tracking-wide border-b border-brand-gold/15 pb-2">
            Visítanos
          </h4>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <span className="text-gray-300 font-medium">Carrera 66 # 9-41</span>
            </div>
            <div className="flex items-center gap-3.5 border-t border-white/5 pt-3">
              <Clock className="h-7 w-7 text-brand-gold shrink-0" />
              <div className="flex flex-col gap-2.5 text-gray-300 font-medium">
                <span>Domingos 10:00 AM — Familias</span>
                <span>Sábados 5:00 PM — Jóvenes</span>
                <span>Miércoles 6:45 PM — Estudio Bíblico</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Contáctanos */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-xl font-bold text-white tracking-wide border-b border-brand-gold/15 pb-2">
            Contáctanos
          </h4>
          <div className="flex flex-col gap-5 text-sm">
            {/* Social media icons first, then handle */}
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/avivachurch.oficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-gold hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/avivachurch.oficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-gold hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@avivachurchoficial5559" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-brand-gold hover:text-white transition-colors">
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <span className="text-gray-300 font-medium">
                @avivachurch.oficial
              </span>
            </div>

            {/* WhatsApp Numbers */}
            <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                Atención Telefónica / WhatsApp
              </p>
              <div className="flex items-center gap-3.5 mt-1">
                <WhatsappIcon className="h-7 w-7 text-brand-gold shrink-0" />
                <div className="flex flex-col gap-2.5 font-medium">
                  <a
                    href="https://wa.me/573173572369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-gold transition-colors block"
                  >
                    317 3572369
                  </a>
                  <a
                    href="https://wa.me/573128294503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-gold transition-colors block"
                  >
                    312 8294503
                  </a>
                  <a
                    href="https://wa.me/573233108127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-gold transition-colors block"
                  >
                    323 3108127
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: QR Code (Peticiones de Oración) */}
        <div className="flex flex-col gap-3 sm:pt-[52px]">
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <span className="text-xs text-gray-400 leading-relaxed max-w-[200px] text-center sm:text-left">
              ¿Tienes alguna petición? Déjanos orar por ti.
            </span>
            <div className="relative p-2 bg-white rounded-xl shadow-lg shadow-black/25 w-28 h-28 flex items-center justify-center overflow-hidden border border-white/10 hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/qr_aviva.webp"
                alt="Código QR Peticiones de Oración"
                width={96}
                height={96}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center">
        <p>&copy; {currentYear} Iglesia Aviva Church. Todos los derechos reservados.</p>
        <p>Cali, Colombia</p>
      </div>
    </footer>
  );
}
