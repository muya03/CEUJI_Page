import { motion } from "framer-motion";
import {
  Calendar, Clock, MapPin, Ticket, Music, ChefHat,
  Shield, Smartphone, AlertTriangle, Users, Bus,
  Heart, Flame, Utensils, ArrowRight, Star,
  Info, Ban, GlassWater, Ambulance, QrCode,
  PartyPopper, Timer, Euro, ChevronDown
} from "lucide-react";
import { useState } from "react";
import logoDragonSF from "@assets/Logo+Dragon2D_SF_1771428576606.png";
import dragonHalal from "@assets/dragon_halal.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-white/10 last:border-0"
      data-testid={`faq-${question.slice(0, 20).replace(/\s/g, '-')}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-bold text-base pr-4 group-hover:text-amber-300 transition-colors">{question}</span>
        <ChevronDown className={`text-amber-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={20} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-gray-300 text-sm leading-relaxed pb-5">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Paellas2026() {
  const scheduleItems = [
    { time: "10:00h", label: "Apertura de puertas", icon: <Ticket size={18} />, highlight: false },
    { time: "10:00h", label: "Inicio de actuaciones musicales", icon: <Music size={18} />, highlight: false },
    { time: "11:00h", label: "Reparto de hierros para cocinar paella", icon: <Flame size={18} />, highlight: true },
    { time: "Todo el día", label: "Paella gigante - valenciana y vegetariana", icon: <Utensils size={18} />, highlight: true },
    { time: "Todo el día", label: "Punto Violeta-Rainbow activo", icon: <Heart size={18} />, highlight: false },
    { time: "19:00h", label: "Cierre del recinto", icon: <Timer size={18} />, highlight: false },
  ];

  const ticketOptions = [
    { type: "General", price: "5€", description: "Acceso al recinto y actuaciones musicales", icon: <Ticket size={24} />, color: "from-uji-base to-uji-sec-dark" },
    { type: "General + Paella Valenciana", price: "6€", description: "Entrada + ración de paella valenciana de la paella gigante", icon: <ChefHat size={24} />, color: "from-amber-600 to-orange-600" },
    { type: "General + Paella Vegetariana", price: "6€", description: "Entrada + ración de paella vegetariana de la paella gigante", icon: <Utensils size={24} />, color: "from-green-600 to-emerald-600" },
  ];

  const rules = [
    { icon: <Ban size={20} />, text: "No se permite la entrada de recipientes con líquido" },
    { icon: <AlertTriangle size={20} />, text: "Una vez se entra al campus, no se permite la salida" },
    { icon: <Smartphone size={20} />, text: "Obligatorio llevar el carnet universitario digital (App UJI)" },
    { icon: <QrCode size={20} />, text: "Acceso mediante lectura del código QR del carnet digital" },
    { icon: <Users size={20} />, text: "Aforo limitado a 8.000 personas - solo estudiantado UJI de Grado, Máster y SAUJI Premium" },
    { icon: <Info size={20} />, text: "El pago es un donativo y no se devuelve bajo ningún concepto" },
  ];

  const faqs: FAQItemProps[] = [
    { question: "¿Cómo compro la entrada?", answer: "A través de la aplicación IGLU de la UJI, en la pestaña 'Festa Paelles 2026'. Es importante realizar el pago SOLO UNA VEZ. Si se realizan pagos duplicados, no se devolverá el dinero." },
    { question: "¿Necesito pulsera de acceso?", answer: "No. Este año no hay pulsera de acceso. Se accede al recinto con el código QR del carnet universitario digital (App UJI). Se obtiene en el apartado 'Tarjeta virtual' de la app." },
    { question: "¿Qué documentación necesito para entrar?", answer: "Necesitas tres cosas: 1) El carnet universitario digital en la App UJI, 2) Tu DNI/documento de identidad, y 3) El justificante de pago impreso que genera la aplicación IGLU." },
    { question: "¿Puedo cocinar mi propia paella?", answer: "¡Sí! Un representante de cada grupo debe rellenar el formulario de inscripción antes del 8 de febrero. Los hierros se recogen a las 11:00h y deben devolverse antes de las 16:00h." },
    { question: "¿Hay servicio de transporte?", answer: "Se recomienda usar transporte público. Habrá servicio de TRAM cada 6 minutos hasta las 21:00h entre la UJI y el Corte Inglés. No habrá zona habilitada para aparcar." },
    { question: "¿Hay servicios sanitarios?", answer: "Sí. Se instalará un hospital de campaña con dos ambulancias y equipo sanitario durante todo el día. También habrá un Punto Violeta-Rainbow para cualquier incidente." },
    { question: "¿A qué hora conviene llegar?", answer: "Para evitar colas en el control de acceso, se recomienda entrar al recinto antes de las 11:00h. El control se realiza mediante lectura del QR del carnet universitario digital." },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-black to-black" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-800/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-orange-700/10 blur-[80px]" />
      </div>

      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto rounded-full px-6 py-3 flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10">
            <a href="/" className="flex items-center gap-3" data-testid="link-home">
              <img src={logoDragonSF} alt="Consell" className="h-10 w-auto" />
              <span className="text-white font-black text-lg hidden sm:block">CONSELL UJI</span>
            </a>
            <div className="flex items-center gap-3">
              <a href="/" className="px-4 py-2 rounded-full text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="link-back-consell">
                El Consell
              </a>
              <a href="/casa" className="px-4 py-2 rounded-full text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="link-back-casa">
                La Casa
              </a>
              <a href="#entradas" className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-black hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20" data-testid="button-get-tickets">
                Consigue tu entrada
              </a>
            </div>
          </div>
        </nav>

        <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative" data-testid="section-hero">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 backdrop-blur-sm text-amber-300 text-sm font-bold">
                <Calendar size={16} /> 27 de febrero de 2026
              </span>
            </motion.div>

            <motion.p variants={fadeUp} custom={1} className="text-amber-400 font-black text-lg md:text-xl uppercase tracking-[0.3em] mb-4">
              XXXV Aniversari UJI
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={2}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] mb-8 tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-500">
                FESTA DE LES
              </span>
              <br />
              <span className="text-white">PAELLES</span>
              <br />
              <span className="text-6xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                2026
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={3} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              La fiesta universitaria más grande de Castellón. Música, paella y tradición en el Campus del Riu Sec.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-4">
              <a href="#entradas" className="group px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2" data-testid="button-hero-tickets">
                Consigue tu entrada <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#programa" className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all" data-testid="button-hero-program">
                Ver programa
              </a>
            </motion.div>

            <motion.div variants={fadeUp} custom={5} className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              {[
                { value: "8.000", label: "Entradas", icon: <Ticket size={20} /> },
                { value: "+6.000", label: "Asistentes en 2025", icon: <Users size={20} /> },
                { value: "9h", label: "De fiesta", icon: <Music size={20} /> },
                { value: "3", label: "Paellas gigantes", icon: <ChefHat size={20} /> },
              ].map(({ value, label, icon }) => (
                <div key={label} className="flex flex-col items-center" data-testid={`stat-${label.replace(/\s/g, '-')}`}>
                  <div className="text-amber-400 mb-2">{icon}</div>
                  <span className="text-3xl md:text-4xl font-black text-white">{value}</span>
                  <span className="text-gray-500 text-sm font-medium mt-1">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={6} className="absolute bottom-8 right-8 w-32 h-32 md:w-48 md:h-48 opacity-20 rotate-12">
              <img src={dragonHalal} alt="" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        </section>

        <section id="programa" className="py-24 px-6 relative" data-testid="section-schedule">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent" />
          <div className="max-w-5xl mx-auto relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.span variants={fadeUp} custom={0} className="text-amber-400 font-black uppercase tracking-[0.2em] text-sm">Programa</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white mt-3">
                Horari del dia
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-gray-400 mt-4 max-w-lg mx-auto">
                Viernes 27 de febrero de 2026, Campus del Riu Sec
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-4"
            >
              {scheduleItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className={`flex items-center gap-6 p-6 rounded-2xl border transition-all ${
                    item.highlight
                      ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30 hover:border-amber-500/50"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                  data-testid={`schedule-item-${i}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    item.highlight ? "bg-amber-500/20 text-amber-400" : "bg-white/10 text-gray-400"
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <span className={`font-black text-lg ${item.highlight ? "text-amber-400" : "text-white"}`}>
                      {item.time}
                    </span>
                    <p className="text-gray-300 text-sm mt-0.5">{item.label}</p>
                  </div>
                  {item.highlight && (
                    <Star size={20} className="text-amber-400 shrink-0" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="entradas" className="py-24 px-6 relative" data-testid="section-tickets">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/10 to-transparent" />
          <div className="max-w-5xl mx-auto relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.span variants={fadeUp} custom={0} className="text-amber-400 font-black uppercase tracking-[0.2em] text-sm">Entradas</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white mt-3">
                Consigue tu entrada
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-gray-400 mt-4 max-w-lg mx-auto">
                Pago a través de la aplicación IGLU de la UJI. Las entradas son en concepto de donativo para cubrir los gastos de organización.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6"
            >
              {ticketOptions.map((ticket, i) => (
                <motion.div
                  key={ticket.type}
                  variants={fadeUp}
                  custom={i}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-amber-500/30 transition-all hover:bg-white/8"
                  data-testid={`ticket-${i}`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ticket.color} flex items-center justify-center text-white mb-6`}>
                    {ticket.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{ticket.type}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{ticket.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">{ticket.price}</span>
                    <span className="text-gray-500 text-sm mb-1">/donativo</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="mt-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center"
            >
              <p className="text-amber-300 font-bold text-sm flex items-center justify-center gap-2">
                <AlertTriangle size={16} />
                Importante: El pago se realiza directamente al banco. Solo debes entrar UNA VEZ para hacer el ingreso. Los pagos duplicados NO se devuelven.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 relative" data-testid="section-cook">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="text-amber-400 font-black uppercase tracking-[0.2em] text-sm">Tradición</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-6">
                  Cocina tu propia paella
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  ¿Quieres cocinar la paella con tu grupo de clase? Es una de las tradiciones más emblemáticas de la fiesta.
                  Cada facultad compite de forma amistosa por hacer la mejor paella, con camisetas personalizadas y frases ingeniosas.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Un representante del grupo rellena el formulario de inscripción",
                    "Fecha límite de inscripción: 8 de febrero",
                    "Los hierros se recogen a las 11:00h el día del evento",
                    "Devolución de hierros antes de las 16:00h (obligatorio)",
                    "Necesaria la tarjeta de estudiante física vigente",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-xs font-black mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-gray-300 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="relative">
                <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Flame size={64} className="text-amber-400 mx-auto mb-6" />
                    <p className="text-white font-black text-2xl mb-2">+2.500</p>
                    <p className="text-gray-400">raciones de paella gigante en 2025</p>
                    <p className="text-white font-black text-2xl mt-4 mb-2">+250</p>
                    <p className="text-gray-400">raciones de paella vegetariana</p>
                    <div className="mt-8 p-4 rounded-xl bg-black/30 border border-white/10">
                      <p className="text-amber-300 text-sm font-bold italic">
                        "In dubio, pro perreo"
                      </p>
                      <p className="text-gray-500 text-xs mt-1">— Camiseta de Derecho, 2025</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 relative" data-testid="section-rules">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />
          <div className="max-w-5xl mx-auto relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.span variants={fadeUp} custom={0} className="text-amber-400 font-black uppercase tracking-[0.2em] text-sm">Normas</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white mt-3">
                Info importante
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {rules.map((rule, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-400/20 transition-all"
                  data-testid={`rule-${i}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                    {rule.icon}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{rule.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 relative" data-testid="section-access">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.span variants={fadeUp} custom={0} className="text-amber-400 font-black uppercase tracking-[0.2em] text-sm">Acceso</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white mt-3">
                Cómo llegar
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeUp} custom={0} className="rounded-3xl bg-white/5 border border-white/10 p-8">
                <MapPin size={28} className="text-amber-400 mb-4" />
                <h3 className="text-xl font-black text-white mb-4">Ubicación</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Campus del Riu Sec, Universitat Jaume I, Castellón de la Plana.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  La entrada será por la <span className="text-white font-bold">puerta lateral</span>, al lado de la Facultat de Ciències Jurídiques i Econòmiques
                  (acceso más próximo a la carretera de Borriol).
                </p>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-amber-300 text-sm font-bold flex items-center gap-2">
                    <AlertTriangle size={14} /> No habrá zona habilitada para aparcar
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="rounded-3xl bg-white/5 border border-white/10 p-8">
                <Bus size={28} className="text-amber-400 mb-4" />
                <h3 className="text-xl font-black text-white mb-4">Transporte público</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Desde la organización recomendamos usar el transporte público para acudir al evento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-black text-xs">
                      TRAM
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">TRAM Castellón</p>
                      <p className="text-gray-400 text-xs mt-0.5">Servicio cada 6 minutos hasta las 21:00h</p>
                      <p className="text-gray-500 text-xs">Línea UJI — El Corte Inglés</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-3 gap-4 mt-8"
            >
              {[
                { icon: <Smartphone size={20} />, title: "App UJI", text: "Descarga y activa tu carnet universitario digital" },
                { icon: <Ambulance size={20} />, title: "Hospital de campaña", text: "2 ambulancias y equipo sanitario todo el día" },
                { icon: <Shield size={20} />, title: "Punto Violeta-Rainbow", text: "Atención ante cualquier incidente durante el evento" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3 p-5 rounded-2xl bg-white/5 border border-white/10"
                  data-testid={`access-info-${i}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{item.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 relative" data-testid="section-faq">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
              <motion.span variants={fadeUp} custom={0} className="text-amber-400 font-black uppercase tracking-[0.2em] text-sm">FAQ</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white mt-3">
                Preguntas frecuentes
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="rounded-3xl bg-white/5 border border-white/10 px-8"
            >
              {faqs.map((faq, i) => (
                <FAQItem key={i} {...faq} />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 relative" data-testid="section-cta">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-red-500/20 border border-amber-500/20 p-12 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-24 h-24 opacity-20 rotate-12">
                <img src={dragonHalal} alt="" className="w-full h-full object-contain" />
              </div>
              <motion.div variants={fadeUp} custom={0} className="mb-2">
                <PartyPopper size={48} className="text-amber-400 mx-auto" />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-black text-white mb-4">
                Ens veiem a les Paelles!
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-gray-400 mb-8 max-w-lg mx-auto">
                27 de febrero, Campus del Riu Sec. La fiesta que une a toda la comunidad universitaria de la UJI.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://e-ujier.uji.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2"
                  data-testid="button-cta-iglu"
                >
                  Acceder a IGLU <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-12 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={logoDragonSF} alt="Consell" className="h-8 w-auto opacity-50" />
              <span className="text-gray-500 text-sm">Consell de l'Estudiantat — Universitat Jaume I</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="/" className="text-gray-500 text-sm hover:text-white transition-colors" data-testid="footer-link-consell">El Consell</a>
              <a href="/casa" className="text-gray-500 text-sm hover:text-white transition-colors" data-testid="footer-link-casa">La Casa</a>
              <a href="/noticias" className="text-gray-500 text-sm hover:text-white transition-colors" data-testid="footer-link-noticias">Noticias</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
