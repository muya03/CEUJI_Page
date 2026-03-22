import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logoConsellAzul from "@assets/LOGO_CONSELL_AZUL_1771428565646.png";

export function GlassHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "El Consell", href: "/#consell" },
    { name: "Transparencia", href: "/transparencia" },
    { name: "Servicios", href: "/servicios" },
    { name: "Noticias", href: "/noticias" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300",
          isScrolled
            ? "bg-white/70 backdrop-blur-md border border-white/20 shadow-lg"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 z-50">
          <img
            src={logoConsellAzul}
            alt="Consell UJI"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-uji-base font-medium hover:text-uji-dark transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-uji-sec-dark transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
             <a
              href="/casa"
              className="px-4 py-2 rounded-full bg-uji-surf-light text-uji-base text-sm font-bold hover:bg-uji-surf-mid transition-colors"
            >
              Casa de l'Estudiantat
            </a>
            <a
              href="/paellas"
              className="px-4 py-2 rounded-full bg-uji-dark text-white text-sm font-bold hover:bg-uji-base transition-colors shadow-lg hover:shadow-xl"
              data-testid="link-paellas"
            >
              Paellas 2026
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-uji-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display text-uji-dark"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <a
                  href="/casa"
                  className="px-8 py-3 rounded-full bg-uji-surf-light text-uji-base text-lg font-bold text-center"
                >
                  Casa de l'Estudiantat
                </a>
                <a
                  href="/paellas"
                  className="px-8 py-3 rounded-full bg-uji-dark text-white text-lg font-bold text-center"
                >
                  Paellas 2026
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
