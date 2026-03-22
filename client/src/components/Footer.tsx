import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import logoDragonSF from "@assets/Logo+Dragon2D_SF_1771428576606.png";

export function Footer() {
  return (
    <footer className="bg-uji-dark text-white pt-24 pb-12 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img 
              src={logoDragonSF} 
              alt="Consell UJI Logo" 
              className="h-24 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-uji-surf-deep max-w-md text-lg leading-relaxed">
              El máximo órgano de representación del estudiantado de la Universitat Jaume I. Trabajamos por una universidad pública, de calidad y crítica.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-uji-sec-base">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Transparencia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Normativas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Buzón de Sugerencias</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solicitar Cita</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-uji-sec-base">Contacto</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>consell@uji.es</span>
              </li>
              <li className="mt-8">
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-uji-dark transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-uji-dark transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-uji-dark transition-all">
                    <Facebook size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Consell de l'Estudiantat de la UJI.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
             <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
