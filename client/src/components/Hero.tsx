import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dragonAcostado from "@assets/dragon_acostado.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-uji-surf-light/50 blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-uji-surf-mid/30 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Typography Content */}
        <div className="order-2 md:order-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-uji-sec-base font-bold tracking-widest text-sm uppercase mb-4">
              Universitat Jaume I
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-uji-dark leading-[0.9] tracking-tighter mb-6">
              LA VEU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uji-base to-uji-sec-dark">
                DE L'ESTUDIANTAT
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Defendemos tus derechos, gestionamos tus recursos y construimos la universidad que quieres vivir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-uji-dark text-white font-bold text-lg hover:bg-uji-base transition-all hover:scale-105 shadow-xl shadow-uji-dark/20 flex items-center gap-2 group">
              Conoce tus Derechos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-uji-dark border-2 border-uji-surf-mid font-bold text-lg hover:bg-uji-surf-light transition-all hover:scale-105">
              Contactar
            </button>
          </motion.div>
        </div>

        {/* Mascot / Visual */}
        <div className="order-1 md:order-2 flex justify-center relative">
           <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
           >
              {/* Using the flying dragon with crown image */}
              <img 
                src={dragonAcostado} 
                alt="Dragón del Consell" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
           </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold text-uji-sec-base tracking-widest uppercase">Descubre más</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-uji-sec-base to-transparent" />
      </motion.div>
    </section>
  );
}
