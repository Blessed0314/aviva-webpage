"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/molecules/NavLink";
import Button from "@/components/atoms/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#vision", label: "Visión" },
    { href: "#mensaje", label: "Último Mensaje" },
    { href: "#reuniones", label: "Reuniones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-panel-glow border-b border-brand-gold/10 shadow-lg shadow-black/30"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Logo useImage={true} variant="icon" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="gold" size="sm" onClick={() => {
            const el = document.getElementById("contacto");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>
            Planifica tu Visita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-x-0 top-[78px] md:hidden glass-panel border-b border-white/10 shadow-2xl transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4 bg-brand-navy/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-1 text-base"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="h-[1px] bg-white/10 my-2" />
          <Button
            variant="gold"
            fullWidth
            onClick={() => {
              setIsOpen(false);
              const el = document.getElementById("contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Planifica tu Visita
          </Button>
        </div>
      </div>
    </header>
  );
}
