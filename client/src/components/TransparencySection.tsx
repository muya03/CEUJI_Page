import { motion } from "framer-motion";
import { FileText, Download, Eye, Calendar, Award, ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

interface Document {
  id: number;
  title: string;
  description: string | null;
  type: string;
  category: string;
  fileUrl: string | null;
  fileSize: string | null;
  publishedAt: string | null;
}

interface DocItemProps {
  title: string;
  date: string;
  type: string;
}

function DocItem({ title, date, type }: DocItemProps) {
  return (
    <div className="group flex items-center justify-between p-4 rounded-xl bg-white border border-uji-surf-mid hover:border-uji-base hover:shadow-md transition-all">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-uji-surf-light flex items-center justify-center text-uji-base group-hover:bg-uji-base group-hover:text-white transition-colors">
          <FileText size={20} />
        </div>
        <div>
          <h4 className="font-bold text-uji-dark text-sm md:text-base group-hover:text-uji-base transition-colors line-clamp-1">
            {title}
          </h4>
          <span className="text-xs text-gray-500 font-medium">{date} • {type}</span>
        </div>
      </div>
      <button className="text-uji-sec-base hover:text-uji-dark transition-colors">
        <Download size={20} />
      </button>
    </div>
  );
}

export function TransparencySection() {
  const { data: documents, isLoading } = useQuery<Document[]>({ queryKey: ["/api/documents"] });

  const convocatorias = (documents ?? [])
    .filter((doc) => doc.type === "convocatoria")
    .slice(0, 3);

  const gestionEconomica = (documents ?? [])
    .filter((doc) => doc.type === "presupuesto" || doc.type === "informe")
    .slice(0, 3);

  const formatDate = (publishedAt: string | null) => {
    if (!publishedAt) return "";
    return new Date(publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  if (isLoading) {
    return null;
  }

  return (
    <section id="transparencia" className="py-24 bg-uji-surf-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-uji-dark blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-uji-base blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-uji-dark">TRANSPARENCIA</h2>
            <p className="text-xl text-uji-sec-dark max-w-2xl font-medium">
              Acceso abierto a la información pública, gestión económica y acuerdos institucionales.
            </p>
          </div>
          <a href="/transparencia" className="px-6 py-3 rounded-full border-2 border-uji-dark text-uji-dark font-bold hover:bg-uji-dark hover:text-white transition-all flex items-center gap-2">
            Portal de Transparencia Completo <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Convocatorias */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-uji-base" />
              <h3 className="text-xl font-bold text-uji-dark">Últimas Convocatorias</h3>
            </div>
            <div className="space-y-4">
              {convocatorias.map((doc) => (
                <DocItem key={doc.id} title={doc.title} date={formatDate(doc.publishedAt)} type={doc.category} />
              ))}
            </div>
          </div>

          {/* Column 2: Económico */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-uji-base" />
              <h3 className="text-xl font-bold text-uji-dark">Gestión Económica</h3>
            </div>
            <div className="space-y-4">
              {gestionEconomica.map((doc) => (
                <DocItem key={doc.id} title={doc.title} date={formatDate(doc.publishedAt)} type={doc.category} />
              ))}
            </div>
          </div>

          {/* Column 3: Becas y Ayudas */}
          <div className="bg-uji-dark text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-uji-base blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-uji-surf-light" />
                <h3 className="text-xl font-bold">Becas y Ayudas</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Información sobre el Fondo de Becas UJI para estudiantes con problemas económicos sobrevenidos y otras ayudas al estudio.
              </p>
              
              <div className="space-y-3">
                <a href="#" className="block p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Fondo Social UJI</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <span className="text-xs text-uji-surf-mid mt-1 block">Abierto todo el curso</span>
                </a>
                <a href="#" className="block p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Becas Comedor</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <span className="text-xs text-green-300 mt-1 block">Convocatoria Abierta</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
