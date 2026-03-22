import { useQuery } from "@tanstack/react-query";
import { GlassHeader } from "@/components/GlassHeader";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Scale, HeartHandshake, Briefcase, Calculator, MessagesSquare, HelpCircle, type LucideIcon } from "lucide-react";
import type { Service } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  Scale,
  GraduationCap,
  Calculator,
  MessagesSquare,
  HeartHandshake,
  Briefcase,
};

function resolveIcon(iconName: string): React.ReactNode {
  const IconComponent = iconMap[iconName] || HelpCircle;
  return <IconComponent size={28} />;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link?: string | null;
}

function ServiceCard({ title, description, icon, color, link }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg ${color}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-uji-dark mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      <a href={link || "#"} className="inline-flex items-center font-bold text-uji-base hover:text-uji-dark transition-colors">
        Acceder al servicio →
      </a>
    </motion.div>
  );
}

export default function ServiciosPage() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans text-uji-dark">
        <GlassHeader />
        <main className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-gray-200 rounded-xl w-2/3" />
              <div className="h-6 bg-gray-100 rounded w-1/3" />
              <div className="h-48 bg-gray-200 rounded-[3rem]" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-64 bg-gray-100 rounded-3xl" />
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
    <div className="min-h-screen bg-gray-50 font-sans text-uji-dark">
      <GlassHeader />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-uji-dark mb-6">SERVICIOS AL ESTUDIANTE</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Herramientas prácticas, asesoramiento y ayudas directas. Hemos centralizado todos los recursos 
              que necesitas para tu vida académica en un solo lugar.
            </p>
          </div>

          <div className="bg-uji-dark text-white rounded-[3rem] p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-uji-dark via-uji-dark/90 to-transparent" />
            
            <div className="relative z-10 max-w-2xl">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Convocatoria Abierta
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">FONDO SOCIAL Y BECAS UJI</h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Nadie debería abandonar sus estudios por motivos económicos. El Fondo Social UJI ofrece ayudas 
                de emergencia para matrículas sobrevenidas. Consulta también las Becas Comedor y Ayudas al Transporte.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-uji-dark font-bold rounded-full hover:scale-105 transition-transform shadow-lg" data-testid="button-solicitar-ayuda">
                  Solicitar Ayuda
                </button>
                <button className="px-8 py-4 bg-white/10 text-white border border-white/30 font-bold rounded-full hover:bg-white/20 transition-colors" data-testid="button-consultar-bases">
                  Consultar Bases
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services.length > 0 ? (
              services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={resolveIcon(service.icon)}
                  color={service.color}
                  link={service.link}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-gray-500" data-testid="text-empty-services">
                <p className="text-lg">No hay servicios disponibles.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
