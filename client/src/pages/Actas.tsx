import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GlassHeader } from "@/components/GlassHeader";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Calendar, Filter, ChevronRight } from "lucide-react";
import type { Document } from "@shared/schema";

function formatDate(dateStr: string | Date) {
  return new Date(dateStr).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Actas() {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const filters = ['Todos', 'Plenos', 'Junta Permanente', 'Comisiones'];

  const { data: documents, isLoading } = useQuery<Document[]>({
    queryKey: ["/api/documents"],
  });

  const filteredDocuments = documents?.filter((doc) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Plenos") return doc.category === "Pleno" || doc.category === "Plenos";
    if (activeFilter === "Comisiones") return doc.category === "Comisión" || doc.category === "Comisiones";
    return doc.category === activeFilter;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white font-sans text-uji-dark">
        <GlassHeader />
        <main className="pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-6">
              <div className="h-10 bg-gray-200 rounded-xl w-2/3" />
              <div className="h-6 bg-gray-100 rounded w-full" />
              <div className="space-y-4 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-24 bg-gray-100 rounded-2xl" />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-uji-dark">
      <GlassHeader />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-uji-dark mb-6">ACTAS Y ACUERDOS</h1>
            <p className="text-lg text-gray-600">
              Repositorio oficial de documentos. Todas las decisiones tomadas por los órganos de gobierno 
              son públicas y accesibles para el estudiantado.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                data-testid={`button-filter-${filter}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-bold text-sm ${activeFilter === filter ? 'bg-uji-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {filter}
              </button>
            ))}
            <button className="ml-auto flex items-center gap-2 text-uji-base font-bold text-sm" data-testid="button-advanced-filters">
              <Filter size={16} /> Filtros Avanzados
            </button>
          </div>

          <div className="space-y-4">
            {filteredDocuments && filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 hover:border-uji-surf-mid hover:shadow-md transition-all cursor-pointer"
                  data-testid={`card-document-${doc.id}`}
                >
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-xl bg-uji-surf-light text-uji-base flex items-center justify-center group-hover:bg-uji-base group-hover:text-white transition-colors">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-uji-dark group-hover:text-uji-base transition-colors">{doc.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {doc.publishedAt ? formatDate(doc.publishedAt) : ''}</span>
                        <span className="px-2 py-0.5 bg-gray-100 rounded text-xs uppercase font-bold tracking-wide">{doc.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pl-16 md:pl-0">
                    <span className="text-sm font-mono text-gray-400">{doc.fileSize || ''}</span>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-uji-base group-hover:text-uji-base transition-all">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16 text-gray-500" data-testid="text-empty-documents">
                <p className="text-lg">No hay documentos disponibles para este filtro.</p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors" data-testid="button-load-more-documents">
              Cargar documentos anteriores
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
