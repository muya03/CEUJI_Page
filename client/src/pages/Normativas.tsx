import { GlassHeader } from "@/components/GlassHeader";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Download, Scale, Book, Shield } from "lucide-react";
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

interface RegulationCardProps {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

function RegulationCard({ title, description, category, icon }: RegulationCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-uji-base/30 hover:shadow-lg transition-all group">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-uji-surf-light text-uji-dark flex items-center justify-center group-hover:bg-uji-dark group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-uji-dark mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        {description}
      </p>
      <button className="w-full py-3 rounded-xl border-2 border-uji-surf-mid text-uji-dark font-bold hover:bg-uji-base hover:border-uji-base hover:text-white transition-all flex items-center justify-center gap-2">
        <Download size={18} /> Descargar PDF
      </button>
    </div>
  );
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Fundamental":
      return <Scale size={28} />;
    case "Interna":
      return <Book size={28} />;
    case "Derechos":
      return <Shield size={28} />;
    default:
      return <FileText size={28} />;
  }
}

export default function Normativas() {
  const { data, isLoading } = useQuery<Document[]>({ queryKey: ["/api/documents"] });

  const normativas = (data ?? []).filter(doc => doc.type === "normativa");

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-uji-dark">
      <GlassHeader />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-uji-dark mb-4">MARCO NORMATIVO</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Documentos fundamentales que rigen el funcionamiento, derechos y obligaciones 
              del Consell de l'Estudiantat y la comunidad universitaria.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin w-8 h-8 border-4 border-uji-base border-t-transparent rounded-full" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {normativas.map((doc) => (
                <RegulationCard
                  key={doc.id}
                  title={doc.title}
                  description={doc.description ?? ''}
                  category={doc.category}
                  icon={getCategoryIcon(doc.category)}
                />
              ))}
            </div>
          )}

          <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-uji-dark mb-2">¿Necesitas ayuda interpretando la normativa?</h4>
              <p className="text-gray-600">La Comisión de Asuntos Jurídicos ofrece asesoramiento gratuito.</p>
            </div>
            <button className="px-8 py-3 bg-white text-uji-base border-2 border-uji-base rounded-full font-bold hover:bg-uji-base hover:text-white transition-all">
              Contactar Asesoría
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
