import { GlassHeader } from "@/components/GlassHeader";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Calendar, Clock, MapPin, Mail, Phone, ArrowRight,
  BookOpen, Coffee, Users, Gamepad2, Mic2, Heart,
  Recycle, HandHeart, Globe, ChevronRight, Instagram,
  Music, Palette, Megaphone, Sparkles, Utensils
} from "lucide-react";
import logoDragonSF from "@assets/Logo+Dragon2D_SF_1771428576606.png";

interface EventCardProps {
  title: string;
  time: string;
  day: string;
  dayNum: string;
  tag: string;
  color: string;
}

function EventCard({ title, time, day, dayNum, tag, color }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all group cursor-pointer"
      data-testid={`event-card-${title.slice(0, 20).replace(/\s/g, '-')}`}
    >
      <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-uji-surf-light text-uji-dark shrink-0">
        <span className="text-xs font-bold uppercase text-uji-sec-base">{day}</span>
        <span className="text-2xl font-black leading-none">{dayNum}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white ${color}`}>{tag}</span>
        </div>
        <h4 className="font-bold text-uji-dark text-sm leading-tight line-clamp-1 group-hover:text-uji-base transition-colors">{title}</h4>
        <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={12} /> {time}</span>
      </div>
      <ChevronRight size={18} className="text-gray-300 self-center group-hover:text-uji-base transition-colors shrink-0" />
    </motion.div>
  );
}

interface SpaceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

function SpaceCard({ title, description, icon, image }: SpaceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
      data-testid={`space-card-${title.replace(/\s/g, '-')}`}
    >
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
}

interface CampaignCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

function CampaignCard({ title, description, icon, gradient }: CampaignCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-3xl p-8 text-white relative overflow-hidden cursor-pointer group ${gradient}`}
      data-testid={`campaign-card-${title.replace(/\s/g, '-')}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:w-40 group-hover:h-40 transition-all" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/80 leading-relaxed mb-6">{description}</p>
        <span className="inline-flex items-center gap-2 font-bold text-sm group-hover:translate-x-2 transition-transform">
          Participar <ArrowRight size={16} />
        </span>
      </div>
    </motion.div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  statusColor: string;
  icon: React.ReactNode;
}

function ProjectCard({ title, description, status, statusColor, icon }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all group"
      data-testid={`project-card-${title.replace(/\s/g, '-')}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-uji-surf-light text-uji-base flex items-center justify-center group-hover:bg-uji-base group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor}`}>{status}</span>
      </div>
      <h3 className="text-lg font-bold text-uji-dark mb-2 group-hover:text-uji-base transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function CasaEstudiantat() {
  const events: EventCardProps[] = [
    { title: "ESN Club de Debat", time: "18:00 - 20:00", day: "LUN", dayNum: "02", tag: "Debat", color: "bg-blue-500" },
    { title: "Club de Juegos de Mesa de la UJI", time: "18:00 - 22:00", day: "MIÉ", dayNum: "04", tag: "Oci", color: "bg-green-500" },
    { title: "ESN Jornades 4x4 Formació Voluntaris", time: "18:00 - 20:00", day: "LUN", dayNum: "09", tag: "Formació", color: "bg-purple-500" },
    { title: "ESN Jornades 4x4 Formació Voluntaris", time: "18:00 - 20:00", day: "JUE", dayNum: "12", tag: "Formació", color: "bg-purple-500" },
    { title: "ESN Jornades 4x4 Formació Voluntaris", time: "18:00 - 19:00", day: "LUN", dayNum: "16", tag: "Formació", color: "bg-purple-500" },
    { title: "ESN Jornades 4x4 Formació Voluntaris", time: "18:00 - 20:00", day: "JUE", dayNum: "19", tag: "Formació", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-uji-dark">
      <GlassHeader />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-uji-surf-light via-white to-uji-surf-mid/30 pt-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-uji-base/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-uji-surf-mid/20 blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 bg-uji-base/10 text-uji-base rounded-full text-sm font-bold mb-6">
                  Àgora Universitària · Edifici E2
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-uji-dark leading-[0.9] tracking-tighter mb-6">
                  LA CASA <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-uji-base to-uji-sec-dark">
                    DE L'ESTUDIANTAT
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                  El teu espai al campus. Un lloc per estudiar, reunir-te, crear projectes i connectar
                  amb la comunitat universitària. Gestionat per i per a l'estudiantat.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#agenda" className="px-8 py-4 rounded-full bg-uji-dark text-white font-bold text-lg hover:bg-uji-base transition-all hover:scale-105 shadow-xl shadow-uji-dark/20 flex items-center gap-2 group" data-testid="link-agenda">
                  Agenda d'Activitats
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#espais" className="px-8 py-4 rounded-full bg-white text-uji-dark border-2 border-uji-surf-mid font-bold text-lg hover:bg-uji-surf-light transition-all hover:scale-105" data-testid="link-espais">
                  Descobreix els Espais
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4 border-t border-gray-200/60">
                <div>
                  <span className="text-3xl font-black text-uji-dark">500m²</span>
                  <p className="text-sm text-gray-500 font-medium">d'espai disponible</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <span className="text-3xl font-black text-uji-dark">+50</span>
                  <p className="text-sm text-gray-500 font-medium">activitats/semestre</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <span className="text-3xl font-black text-uji-dark">24/7</span>
                  <p className="text-sm text-gray-500 font-medium">sala d'estudi</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-uji-base/20 to-uji-surf-mid/30 rounded-[3rem] blur-xl scale-110" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
                    alt="Casa de l'Estudiantat"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-white" size={18} />
                      <span className="text-white font-medium">Campus del Riu Sec, Castelló de la Plana</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 w-32"
                >
                  <img src={logoDragonSF} alt="" className="w-full drop-shadow-xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Agenda Section */}
        <section id="agenda" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <span className="text-uji-base font-bold text-sm uppercase tracking-widest mb-2 block">Febrer 2026</span>
                <h2 className="text-4xl md:text-5xl font-black text-uji-dark">AGENDA D'ACTIVITATS</h2>
                <p className="text-xl text-gray-500 mt-3 max-w-xl">
                  Totes les activitats programades a la Casa. Clubs, tallers, xerrades i molt més.
                </p>
              </div>
              <a
                href="#"
                className="px-6 py-3 rounded-full border-2 border-uji-dark text-uji-dark font-bold hover:bg-uji-dark hover:text-white transition-all flex items-center gap-2"
                data-testid="link-full-calendar"
              >
                <Calendar size={18} /> Calendari Complet
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map((event, i) => (
                <EventCard key={i} {...event} />
              ))}
            </div>

            <div className="mt-12 p-8 bg-white rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-uji-base text-white flex items-center justify-center">
                  <Megaphone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-uji-dark text-lg">Vols organitzar una activitat?</h4>
                  <p className="text-gray-500 text-sm">Les associacions i col·lectius poden sol·licitar l'espai.</p>
                </div>
              </div>
              <a href="mailto:casaestudiantat@uji.es" className="px-6 py-3 bg-uji-surf-light text-uji-dark font-bold rounded-xl hover:bg-uji-dark hover:text-white transition-all" data-testid="link-request-space">
                Sol·licitar Espai
              </a>
            </div>
          </div>
        </section>

        {/* Spaces Section */}
        <section id="espais" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-uji-dark mb-4">ELS NOSTRES ESPAIS</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                La Casa compta amb diversos espais dissenyats per cobrir les necessitats de l'estudiantat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SpaceCard
                title="Sala d'Estudi"
                description="Espai amb endolls, Wi-Fi i llum natural. Disponible les 24 hores del dia."
                icon={<BookOpen size={22} />}
                image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600"
              />
              <SpaceCard
                title="Sala de Reunions"
                description="Per a treballs en grup i sessions de planificació de projectes."
                icon={<Users size={22} />}
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
              />
              <SpaceCard
                title="Zona de Descans"
                description="Sofàs i espai còmode per descansar entre classes. El teu racó de relax al campus."
                icon={<Coffee size={22} />}
                image="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=600"
              />
              <SpaceCard
                title="Sala Polivalent"
                description="Per a xerrades, presentacions, cinefòrums i actuacions en directe."
                icon={<Mic2 size={22} />}
                image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600"
              />
              <SpaceCard
                title="Zona de Jocs"
                description="Jocs de taula i espai per al Club de Jocs de Mesa de la UJI."
                icon={<Gamepad2 size={22} />}
                image="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=600"
              />
              <SpaceCard
                title="Zona de Microones"
                description="Espai amb microones per escalfar el teu menjar. Porta el teu tupperware!"
                icon={<Utensils size={22} />}
                image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600"
              />
              <SpaceCard
                title="Porxe Exterior"
                description="Terrassa a l'aire lliure per gaudir del bon temps, estudiar o fer un descans."
                icon={<Palette size={22} />}
                image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 bg-uji-surf-light/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-uji-dark mb-4">PROJECTES ESTUDIANTILS</h2>
              <p className="text-xl text-gray-500 max-w-2xl">
                Iniciatives creades per i per a l'estudiantat. Proposa el teu!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProjectCard
                title="Racó de Lectura"
                description="Biblioteca lliure d'intercanvi de llibres entre estudiants."
                status="Actiu"
                statusColor="bg-green-100 text-green-700"
                icon={<BookOpen size={24} />}
              />
              <ProjectCard
                title="Club de Debat"
                description="Espai setmanal de debat i oratòria obert a tot l'estudiantat."
                status="Actiu"
                statusColor="bg-green-100 text-green-700"
                icon={<Megaphone size={24} />}
              />
              <ProjectCard
                title="Ràdio Estudiantat"
                description="Podcast i ràdio en línia amb contingut estudiantil."
                status="En marxa"
                statusColor="bg-yellow-100 text-yellow-700"
                icon={<Music size={24} />}
              />
              <ProjectCard
                title="Mentoria entre Iguals"
                description="Estudiants sèniors acompanyen als de primer curs."
                status="Pròximament"
                statusColor="bg-blue-100 text-blue-700"
                icon={<HandHeart size={24} />}
              />
            </div>
          </div>
        </section>

        {/* Campaigns Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-uji-dark mb-4">CAMPANYES PERMANENTS</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Accions continuades que fan de la Casa un espai compromès amb la societat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <CampaignCard
                title="Punt Lila"
                description="Protocol d'atenció i espai segur contra les violències masclistes al campus. Formació, acompanyament i prevenció."
                icon={<Heart size={28} />}
                gradient="bg-gradient-to-br from-purple-600 to-pink-600"
              />
              <CampaignCard
                title="Campus Sostenible"
                description="Recollida selectiva, tallers de reciclatge creatiu i campanyes de conscienciació ambiental."
                icon={<Recycle size={28} />}
                gradient="bg-gradient-to-br from-green-600 to-teal-600"
              />
              <CampaignCard
                title="Solidaritat Internacional"
                description="Col·laboració amb ONG, recollida d'aliments i roba, i campanyes de sensibilització."
                icon={<Globe size={28} />}
                gradient="bg-gradient-to-br from-blue-600 to-indigo-600"
              />
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section className="py-24 bg-uji-dark text-white relative overflow-hidden rounded-t-[3rem]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-uji-base rounded-full blur-[150px] opacity-30" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-uji-sec-dark rounded-full blur-[100px] opacity-20" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-uji-surf-mid font-bold text-sm uppercase tracking-widest mb-2 block">Vine a visitar-nos</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-4">ON ENS TROBES?</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    La Casa de l'Estudiantat es troba a l'Àgora Universitària, al cor del campus.
                    Vine i descobreix tot el que tenim per oferir-te.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Direcció</h4>
                      <p className="text-gray-400">Àgora Universitària, Edifici de l'Estudiantat<br />Campus del Riu Sec E2, 12071 Castelló de la Plana</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Horari d'Atenció</h4>
                      <p className="text-gray-400">Dilluns a Divendres: 9:00 - 21:00<br />Sala d'estudi: 24 hores</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Contacte</h4>
                      <p className="text-gray-400">casaestudiantat@uji.es<br />+34 964 72 93 60</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <a href="https://www.instagram.com/conselluji/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-uji-dark transition-all" data-testid="link-instagram">
                    <Instagram size={22} />
                  </a>
                  <a href="mailto:casaestudiantat@uji.es" className="px-6 py-3 bg-white text-uji-dark font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2" data-testid="link-contact-email">
                    <Mail size={18} /> Escriu-nos
                  </a>
                  <a href="tel:+34964729360" className="px-6 py-3 bg-white/10 text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition-colors flex items-center gap-2" data-testid="link-contact-phone">
                    <Phone size={18} /> Truca'ns
                  </a>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800"
                    alt="Edifici de l'Estudiantat"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Sparkles className="mx-auto mb-3 text-uji-surf-mid" size={28} />
                <h4 className="font-bold text-lg">Espai Lliure</h4>
                <p className="text-gray-400 text-sm mt-1">Accés obert a tot l'estudiantat</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Users className="mx-auto mb-3 text-uji-surf-mid" size={28} />
                <h4 className="font-bold text-lg">Comunitat</h4>
                <p className="text-gray-400 text-sm mt-1">Clubs i col·lectius actius</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Calendar className="mx-auto mb-3 text-uji-surf-mid" size={28} />
                <h4 className="font-bold text-lg">Reserva Online</h4>
                <p className="text-gray-400 text-sm mt-1">Gestiona el teu espai</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Coffee className="mx-auto mb-3 text-uji-surf-mid" size={28} />
                <h4 className="font-bold text-lg">Microones</h4>
                <p className="text-gray-400 text-sm mt-1">Escalfa el teu menjar</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
