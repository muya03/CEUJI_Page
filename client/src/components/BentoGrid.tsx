import { motion } from "framer-motion";
import { Users, Scale, FileText, Vote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface BentoItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  image?: string;
  dark?: boolean;
  href?: string;
}

function BentoItem({ title, description, icon, className, image, dark, href }: BentoItemProps) {
  const Content = (
    <>
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
          <div className={cn("absolute inset-0", dark ? "bg-uji-dark/80" : "bg-white/40")} />
        </div>
      )}
      
      <div className="relative z-10 mb-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl",
           dark ? "bg-white/10 text-white" : "bg-uji-dark/10 text-uji-dark"
        )}>
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">{title}</h3>
        <p className={cn("text-sm font-medium leading-relaxed", dark ? "text-gray-300" : "text-gray-600")}>
          {description}
        </p>
      </div>

      <div className="relative z-10 pt-4 mt-auto">
        <span className={cn(
          "inline-flex items-center text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform",
          dark ? "text-uji-sec-base" : "text-uji-base"
        )}>
          Saber más →
        </span>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ y: -5 }}
          className={cn(
            "group relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 cursor-pointer",
            dark ? "bg-uji-dark text-white" : "bg-uji-surf-light text-uji-dark",
            className
          )}
        >
          {Content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300",
        dark ? "bg-uji-dark text-white" : "bg-uji-surf-light text-uji-dark",
        className
      )}
    >
      {Content}
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <section className="py-24 px-6 bg-white" id="consell">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-uji-dark mb-4">ESTRUCTURA DE GOBIERNO</h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            Una organización transparente diseñada para representar a los más de 14.000 estudiantes de la UJI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
          
          {/* Junta Permanente - Large Card */}
          <div className="md:col-span-2 md:row-span-2">
            <BentoItem 
              title="Junta Permanente"
              description="El órgano ejecutivo encargado de la gestión diaria. Presidida por la portavocía y compuesta por viceportavocía, secretaría y tesorería."
              icon={<Users />}
              className="h-full bg-uji-base"
              dark
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              href="/junta-permanente"
            />
          </div>

          {/* Pleno - Tall Card */}
          <div className="md:col-span-1 md:row-span-2">
             <BentoItem 
              title="El Pleno"
              description="El máximo órgano de decisión. 27 representantes que debaten y aprueban las líneas estratégicas del Consell."
              icon={<Vote />}
              className="h-full bg-uji-surf-mid"
              href="/pleno"
            />
          </div>

          {/* Normativas */}
          <div className="md:col-span-1">
             <BentoItem 
              title="Normativas"
              description="Consulta el reglamento y los estatutos."
              icon={<Scale />}
              href="/normativas"
            />
          </div>

          {/* Documentación */}
          <div className="md:col-span-1">
             <BentoItem 
              title="Actas y Acuerdos"
              description="Histórico de decisiones tomadas."
              icon={<FileText />}
              href="/actas"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
