import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import logoConsellAzul from "@assets/LOGO_CONSELL_AZUL_1771428565646.png";
import dragonHalal from "@assets/dragon_halal.png";

export function SatelliteCallout() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* Casa de l'Estudiantat Card */}
        <a href="/casa" className="block">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="relative group rounded-3xl overflow-hidden h-[400px] flex items-end p-8 md:p-12 cursor-pointer"
          >
            <div className="absolute inset-0 bg-uji-surf-light group-hover:bg-uji-surf-mid transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
              <img src={logoConsellAzul} className="w-64 h-auto grayscale" alt="" />
            </div>
            
            <div className="relative z-10 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-black text-uji-dark mb-2">LA CASA</h3>
                  <p className="text-uji-base font-medium max-w-xs">
                    Tu espacio de estudio, reunión y descanso en el corazón del campus.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-uji-dark text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </motion.div>
        </a>

        {/* Paellas Card */}
        <a href="/paellas" className="block" data-testid="link-paellas-card">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="relative group rounded-3xl overflow-hidden h-[400px] flex items-end p-8 md:p-12 cursor-pointer bg-black"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-80 z-0" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
          
          <div className="relative z-10 w-full">
             <div className="flex justify-between items-end">
              <div>
                <span className="px-3 py-1 rounded-full border border-white/30 text-xs font-bold text-white uppercase mb-4 inline-block backdrop-blur-sm">
                  Próximamente
                </span>
                <h3 className="text-3xl font-black text-white mb-2">FESTES DE LES PAELLES</h3>
                <p className="text-gray-300 font-medium max-w-xs">
                  El evento universitario más grande. Música, tradición y fiesta.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight />
              </div>
            </div>
            <div className="absolute top-4 right-4 w-24 h-24 rotate-12 opacity-80">
                <img src={dragonHalal} alt="Dragón Paellas" />
            </div>
          </div>
        </motion.div>
        </a>

      </div>
    </section>
  );
}
