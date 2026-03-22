import { GlassHeader } from "@/components/GlassHeader";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, FileText, Download, Euro, Briefcase, ChevronRight, PieChart } from "lucide-react";

export default function TransparenciaPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-uji-dark">
      <GlassHeader />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-uji-dark mb-6">PORTAL DE TRANSPARENCIA</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              El Consell de l'Estudiantat se rige por los principios de publicidad activa y acceso a la información. 
              Aquí puedes consultar cómo gestionamos cada euro y cada decisión.
            </p>
          </div>

          {/* Stats / Key Figures */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-uji-surf-light border border-white shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-uji-base mb-4 shadow-sm">
                <Euro size={32} />
              </div>
              <h3 className="text-4xl font-black text-uji-dark mb-2">40.500€</h3>
              <p className="text-gray-500 font-bold uppercase text-sm tracking-wide">Presupuesto 2026</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg text-center transform scale-105 z-10">
              <div className="w-16 h-16 mx-auto bg-uji-base rounded-full flex items-center justify-center text-white mb-4 shadow-md">
                <PieChart size={32} />
              </div>
              <h3 className="text-4xl font-black text-uji-dark mb-2">98.5%</h3>
              <p className="text-gray-500 font-bold uppercase text-sm tracking-wide">Ejecución Presupuestaria</p>
            </div>
            <div className="p-8 rounded-3xl bg-uji-surf-light border border-white shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-uji-base mb-4 shadow-sm">
                <FileText size={32} />
              </div>
              <h3 className="text-4xl font-black text-uji-dark mb-2">12</h3>
              <p className="text-gray-500 font-bold uppercase text-sm tracking-wide">Informes de Auditoría</p>
            </div>
          </div>

          {/* Economic Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-uji-dark flex items-center justify-center text-white text-sm">1</span>
              Información Económica
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                 <h3 className="font-bold text-xl mb-4">Presupuestos Anuales</h3>
                 <ul className="space-y-3">
                   {['Presupuesto 2026', 'Presupuesto 2025', 'Presupuesto 2024'].map((item) => (
                     <li key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-uji-surf-light transition-colors group cursor-pointer">
                       <span className="font-medium text-gray-700 group-hover:text-uji-dark">{item}</span>
                       <Download size={18} className="text-gray-400 group-hover:text-uji-base" />
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                 <h3 className="font-bold text-xl mb-4">Ejecución y Gastos</h3>
                 <ul className="space-y-3">
                   {['Informe Trimestral Q1 2026', 'Liquidación Anual 2025', 'Gastos de Representación'].map((item) => (
                     <li key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-uji-surf-light transition-colors group cursor-pointer">
                       <span className="font-medium text-gray-700 group-hover:text-uji-dark">{item}</span>
                       <Download size={18} className="text-gray-400 group-hover:text-uji-base" />
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </section>

          {/* Institutional Agreements */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-uji-dark flex items-center justify-center text-white text-sm">2</span>
              Convenios y Acuerdos
            </h2>
            <div className="bg-uji-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-uji-base rounded-full blur-[120px] opacity-40" />
              <div className="relative z-10 grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Convenios con Empresas y Entidades</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Consulta los acuerdos firmados para ofrecer ventajas, descuentos y servicios exclusivos al estudiantado de la UJI.
                  </p>
                  <button className="px-6 py-3 bg-white text-uji-dark font-bold rounded-xl hover:bg-uji-surf-light transition-colors">
                    Ver Listado de Convenios
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <Briefcase className="text-uji-surf-light" />
                      <div>
                        <h4 className="font-bold">Convenio con el CADUS</h4>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <Briefcase className="text-uji-surf-light" />
                      <div>
                        <h4 className="font-bold">Convenio con Torrecid</h4>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
