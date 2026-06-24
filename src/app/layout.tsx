import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Iglesia Aviva Church | Un Lugar de Encuentro y Restauración",
  description: "Bienvenido a la Iglesia Aviva Church. Conectamos vidas, restauramos corazones y encendemos la pasión por Dios a través del amor y el servicio.",
  keywords: ["Iglesia Aviva", "Aviva Church", "Comunidad Cristiana", "Fe", "Esperanza", "Iglesia en Español"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${jakarta.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-navy text-gray-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
