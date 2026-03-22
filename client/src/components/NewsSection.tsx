import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

interface NewsCardProps {
  category: string;
  title: string;
  date: string;
  image: string;
  large?: boolean;
}

function NewsCard({ category, title, date, image, large }: NewsCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        large ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"
      )}
    >
      <div className="absolute inset-0 bg-gray-900" />
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        <span className="inline-block px-3 py-1 bg-uji-base text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
          {category}
        </span>
        <h3 className={cn(
          "font-display font-bold text-white mb-2 leading-tight group-hover:text-uji-surf-light transition-colors",
          large ? "text-2xl md:text-4xl" : "text-xl"
        )}>
          {title}
        </h3>
        <div className="flex items-center gap-4 text-gray-300 text-sm font-medium">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {date}
          </span>
          {large && (
            <span className="flex items-center gap-1 group-hover:translate-x-2 transition-transform text-white">
              Leer noticia <ArrowRight size={14} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string | null;
  image: string | null;
  category: string;
  author: string;
  featured: boolean | null;
  publishedAt: string | null;
}

export function NewsSection() {
  const { data, isLoading } = useQuery<News[]>({ queryKey: ["/api/news?limit=3"] });

  if (isLoading) {
    return (
      <section id="noticias" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-uji-base border-t-transparent rounded-full" />
        </div>
      </section>
    );
  }

  const newsItems = data ?? [];

  return (
    <section id="noticias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-uji-dark mb-4">ACTUALIDAD</h2>
            <p className="text-xl text-gray-500 max-w-xl">
              Entérate de todo lo que ocurre en el campus: eventos, comunicados y vida universitaria.
            </p>
          </div>
          <a href="/noticias" className="font-bold text-uji-base hover:text-uji-dark flex items-center gap-2 group">
            Ver todas las noticias 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard
              key={item.id}
              category={item.category}
              title={item.title}
              date={item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
              image={item.image ?? ''}
              large={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
