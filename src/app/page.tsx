"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MainLayout from "@/components/templates/MainLayout";
import Button from "@/components/atoms/Button";
import { ArrowRight, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 0,
    image: "/familias.webp",
    title: "Familias",
    time: "Todos los domingos — 10:00 AM",
    description: "Un oasis semanal diseñado para recargar tu fe y consolidar los lazos del hogar. Nos reunimos en un ambiente lleno de calidez, adoración contemporánea y enseñanzas prácticas que traerán restauración, dirección y el amor incondicional de Dios a cada miembro de tu casa."
  },
  {
    id: 1,
    image: "/jóvenes.webp",
    title: "Jóvenes",
    time: "Todos los sábados — 5:00 PM",
    description: "Una comunidad apasionada de jóvenes listos para romper esquemas, conectar en amistad genuina y encender su propósito en Dios. Si buscas respuestas reales, buena música y un lugar al que pertenecer, este es tu espacio."
  },
  {
    id: 2,
    image: "/estudio.webp",
    title: "Estudio Bíblico",
    time: "Todos los miércoles — 6:45 PM",
    description: "Profundiza en la sabiduría eterna de las Escrituras de una forma clara y práctica. Es el momento perfecto a mitad de semana para fortalecer tu mente con respuestas a preguntas profundas y edificar raíces firmes de fe."
  }
];

// Vision text split into animated segments
const visionParts = [
  { text: '"Edificar una gran iglesia ', bold: false },
  { text: "Cristo-céntrica", bold: true },
  { text: " que ame, obedezca y sirva a ", bold: false },
  { text: "Dios", bold: true },
  { text: " apasionadamente; de tal manera que ", bold: false },
  { text: "Avive", bold: true },
  { text: " las ", bold: false },
  { text: "Naciones de la Tierra", bold: true },
  { text: " por medio del ", bold: false },
  { text: "evangelio", bold: true },
  { text: " de ", bold: false },
  { text: "Jesús", bold: true },
  { text: " y el ", bold: false },
  { text: "poder", bold: true },
  { text: " del ", bold: false },
  { text: "Espíritu Santo", bold: true },
  { text: '."', bold: false },
];

export default function Home() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);

  const visionRef = useRef(null);
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    fetch("/api/latest-video")
      .then((res) => res.json())
      .then((data) => {
        if (data.videoId) {
          setVideoId(data.videoId);
        }
      })
      .catch((err) => {
        console.error("Error loading latest video:", err);
        setVideoId("8tHKu3xxsGc");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout>
      {/* HERO SECTION MINIMAL */}
      <section id="inicio" className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Gradients and Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-brand-navy to-brand-navy z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

        {/* Parallax Watermark Logo */}
        <div 
          className="absolute pointer-events-none z-0 select-none flex items-center justify-center transition-opacity duration-75"
          style={{
            transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.35}px), 0)`,
            opacity: Math.max(0, 0.06 * (1 - scrollY / 380)),
            top: "50%",
            left: "50%",
            width: "min(80vw, 550px)",
            height: "min(80vw, 550px)",
          }}
        >
          <img 
            src="/logo_aviva.webp" 
            alt="Marca de agua Aviva" 
            className="w-full h-full object-contain filter brightness-110 opacity-70" 
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center gap-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-widest"
          >
            Próximamente
          </motion.span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/logo_texto.webp"
                alt="Iglesia Aviva Church"
                width={450}
                height={94}
                className="h-auto max-w-[280px] sm:max-w-[380px] md:max-w-[450px] object-contain"
                priority
                unoptimized
              />
            </motion.div>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed"
          >
            Estamos preparando un espacio digital renovado. Muy pronto encontrarás aquí todos los detalles sobre nuestras reuniones, ministerios y comunidad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button variant="gold" size="md">
              {/* Trigger Recompilation */}
              Saber Más <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Vision Section — with decorative frame background */}
      <section id="vision" className="relative bg-brand-navy overflow-hidden">
        {/* Background image — decorative frame */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/vision_bg.webp?v=2')" }}
        />
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#050b14_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div
          ref={visionRef}
          className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center gap-4 py-16 md:py-20"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold uppercase tracking-widest text-white/60"
          >
            Nuestra Visión
          </motion.span>

          <blockquote className="font-playfair italic text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl text-white/85">
            {visionParts.map((part, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className={
                  part.bold
                    ? "text-xl sm:text-2xl md:text-3xl font-black not-italic text-white inline mx-0.5"
                    : ""
                }
              >
                {part.text}
              </motion.span>
            ))}
          </blockquote>
        </div>
      </section>

      {/* Dynamic YouTube Video Section */}
      {videoId && (
        <section id="mensaje" className="relative bg-brand-navy-light/20 border-t border-white/5 py-20 overflow-hidden">
          {/* Background Gradient Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center z-10 relative">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-start gap-4 text-left">
              <span className="inline-block px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                Mensaje Reciente
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                No te pierdas nuestro último mensaje
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
                Te invitamos a conectarte y ser edificado con nuestra última prédica en video. Recibe una palabra fresca de bendición y restauración para tu vida y tu familia.
              </p>
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button variant="gold" size="md">
                  Ver en YouTube <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Right Column: Video Thumbnail with Play Button Overlay */}
            <div className="w-full flex justify-center">
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block w-full max-w-xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 hover:border-brand-gold/30 transition-all duration-300 bg-brand-navy-light/80"
              >
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 animate-pulse text-sm">
                    Cargando mensaje...
                  </div>
                ) : (
                  <>
                    {/* Image Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Miniatura de la Prédica"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    
                    {/* Dark overlay that fades out on hover */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center shadow-lg shadow-black/50 group-hover:scale-110 group-hover:bg-white group-hover:text-brand-navy transition-all duration-300 relative">
                        {/* Pulsing ring effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-brand-gold/30 animate-ping group-hover:bg-white/30 hidden group-hover:block" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-7 w-7 ml-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Meetings Carousel Section — Swiper */}
      <section id="reuniones" className="relative bg-brand-navy overflow-hidden py-14 md:py-18">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/reuniones_bg.webp?v=2')" }}
        />
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#050b14_1px,transparent_1px)] [background-size:16px_16px]" />
 
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Nuestras Reuniones
            </h2>
          </div>
 
          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/30 !w-2.5 !h-2.5 !mx-1.5 !rounded-full transition-all duration-300",
              bulletActiveClass: "!bg-brand-gold !w-7 !opacity-100",
            }}
            loop={true}
            className="w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pb-12">
                  {/* Left Column: Image */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-md aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="flex flex-col items-start gap-3 text-left">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {slide.title}
                    </h3>
                    <div className="flex items-center gap-2 text-brand-navy font-semibold text-sm bg-brand-gold px-3 py-1.5 rounded-full">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>{slide.time}</span>
                    </div>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-1 max-w-md">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </MainLayout>
  );
}
