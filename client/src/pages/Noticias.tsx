import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GlassHeader } from "@/components/GlassHeader";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import type { News } from "@shared/schema";

function formatDate(dateStr: string | Date) {
  return new Date(dateStr).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
}

interface NewsItemProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

function NewsItem({ title, excerpt, image, date, category, author }: NewsItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-12 group cursor-pointer"
    >
      <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="flex-1 py-2">
        <div className="flex items-center gap-4 mb-3 text-sm font-medium">
          <span className="px-3 py-1 bg-uji-surf-light text-uji-base rounded-full uppercase tracking-wider text-xs font-bold">
            {category}
          </span>
          <span className="text-gray-400 flex items-center gap-1"><Calendar size={14} /> {date}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-uji-dark mb-3 group-hover:text-uji-base transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
           <span className="text-sm text-gray-500 flex items-center gap-2">
             <User size={16} /> {author}
           </span>
           <span className="text-uji-base font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">
             Leer más <ArrowRight size={16} />
           </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function NoticiasPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");

  const categories = ['Todas', 'Institucional', 'Cultura', 'Deportes', 'Convocatorias', 'Opinión'];

  const newsQueryKey = activeCategory === "Todas"
    ? ["/api/news"]
    : ["/api/news?category=" + activeCategory];

  const { data: newsItems, isLoading: isLoadingNews } = useQuery<News[]>({
    queryKey: newsQueryKey,
  });

  const { data: featuredNews, isLoading: isLoadingFeatured } = useQuery<News[]>({
    queryKey: ["/api/news/featured"],
  });

  const featured = featuredNews?.[0];

  if (isLoadingNews && isLoadingFeatured) {
    return (
      <div className="min-h-screen bg-white font-sans text-uji-dark">
        <GlassHeader />
        <main className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-gray-200 rounded-xl w-2/3 mx-auto" />
              <div className="h-6 bg-gray-100 rounded w-1/3 mx-auto" />
              <div className="h-64 bg-gray-100 rounded-3xl" />
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-uji-dark mb-4">ACTUALIDAD UNIVERSITARIA</h1>
            <p className="text-xl text-gray-600">Todas las novedades del campus, convocatorias y vida estudiantil.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`button-category-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === cat ? 'bg-uji-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {featured && (
            <div className="relative rounded-3xl overflow-hidden mb-16 aspect-[21/9] group cursor-pointer">
              <img 
                src={featured.image || "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"} 
                alt={featured.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                <span className="px-4 py-1 bg-uji-base text-white rounded-full uppercase tracking-wider text-xs font-bold mb-4 inline-block">
                  Destacado
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight max-w-4xl">
                  {featured.title}
                </h2>
                <div className="flex items-center gap-6 text-gray-300 font-medium">
                  <span>{featured.publishedAt ? formatDate(featured.publishedAt) : ''}</span>
                  <span>Por {featured.author}</span>
                </div>
              </div>
            </div>
          )}

          <div className="max-w-5xl mx-auto">
            {isLoadingNews ? (
              <div className="animate-pulse space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-8">
                    <div className="w-1/3 aspect-[4/3] bg-gray-200 rounded-2xl" />
                    <div className="flex-1 space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-1/4" />
                      <div className="h-8 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-100 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : newsItems && newsItems.length > 0 ? (
              newsItems.map((item) => (
                <NewsItem
                  key={item.id}
                  title={item.title}
                  excerpt={item.excerpt}
                  image={item.image || "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"}
                  date={item.publishedAt ? formatDate(item.publishedAt) : ''}
                  category={item.category}
                  author={item.author}
                />
              ))
            ) : (
              <div className="text-center py-16 text-gray-500" data-testid="text-empty-news">
                <p className="text-lg">No hay noticias disponibles en esta categoría.</p>
              </div>
            )}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-3 border-2 border-uji-dark text-uji-dark font-bold rounded-full hover:bg-uji-dark hover:text-white transition-all" data-testid="button-load-more">
              Cargar más noticias
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
