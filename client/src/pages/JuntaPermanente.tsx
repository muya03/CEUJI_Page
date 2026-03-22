import { GlassHeader } from "@/components/GlassHeader";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, Users, Briefcase, Shield } from "lucide-react";

interface JuntaMember {
  name: string;
  role: string;
  email?: string;
}

const juntaMembers: JuntaMember[] = [
  { name: "Mohamed Al Howaidi Nasralla", role: "Portaveu" },
  { name: "Dhirar Abdelkader Bahloul Rouab", role: "Viceportaveu" },
  { name: "Santiago Bernabé Hernández", role: "Secretari" },
  { name: "Álex López Damas", role: "Tresoreria" },
  { name: "Sergi Pérez Serra", role: "Vocal" },
  { name: "Mario Varela Fernández", role: "Vocal" },
  { name: "Karen Abrego Rosas", role: "Vocal" },
  { name: "Guillermo Serrano Pérez", role: "Vocal" },
  { name: "Praise Ijeoma Iheanyi Anyanwu", role: "Vocal" },
];

const roleColors: Record<string, string> = {
  Portaveu: "bg-uji-dark text-white",
  Viceportaveu: "bg-uji-base text-white",
  Secretari: "bg-uji-sec-dark text-white",
  Tresoreria: "bg-amber-600 text-white",
  Vocal: "bg-uji-surf-light text-uji-dark",
};

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("");
}

export default function JuntaPermanente() {
  const portaveu = juntaMembers[0];
  const otherMembers = juntaMembers.slice(1);

  return (
    <div className="min-h-screen bg-uji-surf-light/30 font-sans text-uji-dark">
      <GlassHeader />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="text-uji-base font-bold tracking-widest uppercase text-sm mb-2 block" data-testid="text-subtitle">Òrgan Executiu</span>
            <h1 className="text-5xl md:text-6xl font-black text-uji-dark mb-6" data-testid="text-title">JUNTA PERMANENT</h1>
            <p className="text-xl text-gray-600 leading-relaxed" data-testid="text-description">
              Presidida pel portaveu de l'estudiantat, la Junta Permanent és l'òrgan que s'encarrega
              de dur a terme el treball diari del Consell de l'Estudiantat. Coordina les comissions,
              executa els acords del Ple i representa l'estudiantat davant els òrgans de govern.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/50"
            data-testid="card-portaveu"
          >
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-uji-dark to-uji-base text-white flex items-center justify-center text-4xl font-black shadow-lg mx-auto md:mx-0">
                {getInitials(portaveu.name)}
              </div>
              <div className="text-center md:text-left space-y-4">
                <div>
                  <span className="bg-uji-dark text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    Portavocía
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-uji-dark mt-4 mb-2" data-testid="text-portaveu-name">{portaveu.name}</h2>
                  <p className="text-lg text-uji-sec-dark font-medium">Màxim representant de l'estudiantat de la Universitat Jaume I.</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 justify-center md:justify-start">
                  <a href="mailto:consell@uji.es" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-uji-surf-light text-uji-dark font-bold hover:bg-uji-dark hover:text-white transition-all" data-testid="link-contact-portaveu">
                    <Mail size={18} /> consell@uji.es
                  </a>
                  <a href="tel:+34964729360" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-uji-surf-light text-uji-dark font-bold hover:bg-uji-dark hover:text-white transition-all" data-testid="link-phone-portaveu">
                    <Phone size={18} /> 964 72 93 60
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                data-testid={`card-member-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-uji-surf-light to-uji-surf-mid text-uji-dark flex items-center justify-center font-bold text-lg group-hover:from-uji-base group-hover:to-uji-sec-dark group-hover:text-white transition-all">
                    {getInitials(member.name)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${roleColors[member.role] || roleColors.Vocal}`}>
                    {member.role}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-uji-dark group-hover:text-uji-base transition-colors leading-tight" data-testid={`text-member-name-${index}`}>
                  {member.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            data-testid="card-support"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-uji-surf-light text-uji-base flex items-center justify-center shrink-0">
                <Shield size={28} />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl font-bold text-uji-dark mb-1">Personal Tècnic de Suport</h3>
                <p className="text-gray-600 font-medium">Víctor Garné Miravete</p>
              </div>
              <a href="mailto:vgarne@uji.es" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-uji-surf-light text-uji-dark font-bold hover:bg-uji-dark hover:text-white transition-all" data-testid="link-support-email">
                <Mail size={18} /> vgarne@uji.es
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 bg-uji-dark text-white rounded-[3rem] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-uji-base rounded-full blur-[100px] opacity-50" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">Vols formar part?</h3>
              <p className="max-w-xl mx-auto text-uji-surf-mid mb-8 text-lg">
                Les comissions de treball estan obertes a tot l'estudiantat.
                Participa en Comunicació, Igualtat, Dinamització o Política Universitària.
              </p>
              <a href="mailto:consell@uji.es" className="px-8 py-4 bg-white text-uji-dark font-bold rounded-full hover:scale-105 transition-transform inline-block" data-testid="button-join">
                Uneix-te a una Comissió
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
