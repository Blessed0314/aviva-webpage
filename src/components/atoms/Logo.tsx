import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  useImage?: boolean;
  variant?: "icon" | "full";
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ useImage = true, variant = "full", className = "", width, height }: LogoProps) {
  if (useImage) {
    const src = variant === "icon" ? "/logo_aviva.webp" : "/full_logo_aviva_blanco.webp";
    const defaultWidth = variant === "icon" ? 48 : 150;
    const defaultHeight = variant === "icon" ? 48 : 50;
    
    return (
      <Link href="/" className={`inline-flex items-center outline-none ${className}`}>
        <Image
          src={src}
          alt="Iglesia Aviva Church"
          width={width ?? defaultWidth}
          height={height ?? defaultHeight}
          className="object-contain drop-shadow-[0_0_0_rgba(212,175,55,0)] hover:scale-[1.02] hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.55)] transition-all duration-300"
          unoptimized
          priority
        />
      </Link>
    );
  }

  // Fallback text-based logo
  return (
    <Link href="/" className={`inline-flex flex-col outline-none group ${className}`}>
      <span className="font-serif text-2xl font-semibold tracking-wider text-brand-gold group-hover:text-white transition-colors duration-300">
        AVIVA
      </span>
      {variant === "full" && (
        <span className="text-[10px] tracking-[0.25em] text-gray-400 font-sans uppercase -mt-1 group-hover:text-brand-gold transition-colors duration-300">
          CHURCH
        </span>
      )}
    </Link>
  );
}
