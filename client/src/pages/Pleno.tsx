import { GlassHeader } from "@/components/GlassHeader";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Mail, Building2, Award, ChevronDown, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PlenoMember {
  name: string;
  type: "claustral" | "cce" | "cge";
  center?: string;
  role?: string;
}

const plenoMembers: PlenoMember[] = [
  { name: "Alex López Damas", type: "claustral" },
  { name: "Dhirar Abdelkader Bahloul Rouab", type: "claustral" },
  { name: "Guillermo Serrano Pérez", type: "claustral" },
  { name: "Joan Cerezuela Soto", type: "claustral" },
  { name: "Jordi Altarejos Bono", type: "claustral" },
  { name: "Karen Abrego Rosas", type: "claustral" },
  { name: "María Almela Nácher", type: "claustral" },
  { name: "María Sarrió Sánchez", type: "claustral" },
  { name: "Mario Varela Fernández", type: "claustral" },
  { name: "Pau Escuder Montoya", type: "claustral" },
  { name: "Praise Ijeoma Iheanyi Anyanwu", type: "claustral" },
  { name: "Mohamed Al Howaidi Nasralla", type: "claustral" },
  { name: "Otman El Hakmaoui Sakif", type: "claustral" },
  { name: "Santiago Bernabé Hernández", type: "claustral" },
  { name: "Sergi Pérez Serra", type: "cce", role: "Delegat de Centre", center: "Escola Tècnica Superior de Ciències Experimentals" },
  { name: "Yolanda Roca Pyper", type: "cce", role: "Delegada de Centre", center: "Facultat de Ciències Humanes i Socials" },
  { name: "Alexandru Cristian Butaru", type: "cce", role: "Delegat de Centre", center: "Facultat de Ciències Jurídiques i Econòmiques" },
  { name: "Irene Llansola Rico", type: "cce", role: "Delegada de Centre", center: "Facultat de Ciències de la Salut" },
  { name: "Ariadna Soler Gutiérrez", type: "cge" },
  { name: "Jorge Juan Lluch", type: "cge" },
  { name: "Lydia Gómez López", type: "cge" },
  { name: "María Gavara Ferreiro", type: "cge" },
  { name: "Óscar Sáez Martín", type: "cge" },
  { name: "Pau Valcarcel Redon", type: "cge" },
  { name: "Sara Benedicto Molina", type: "cge" },
  { name: "Simón Marulanda Moreno", type: "cge" },
];

const claustrals = [
  "López Olivares, María De Los Desamparados",
  "Al Howaidi Nasralla, Mohamed",
  "Escuder Montoya, Pau",
  "Ropero Fabregat, Alex",
  "Tiscar Royo, David",
  "Bernabé Hernández, Santiago",
  "Lopez Damas, Alex",
  "García Petrakova, Eva María",
  "Saiz De Castro, Aitana",
  "Bahloul Rouab, Dhirar Abdelkader",
  "Abrego Rosas, Karen",
  "Almela Nácher, María",
  "Cerezuela Soto, Joan",
  "Altarejos Bono, Jordi",
  "Montagud Teijelo, Alicia",
  "Botiz, Nicolas Carlos",
  "Sarrió Sánchez, María",
  "Varela Fernandez, Mario",
  "Serrano Pérez, Guillermo",
  "Pérez Serra, Sergi",
  "Fito Mármol, Emilio",
  "Iheanyi Anyanwu, Praise Ijeoma",
  "El Hakmaoui Sakif, Otman",
  "Más Herranz, Rodrigo",
  "Blasco Adsuara, Miriam",
  "Milian Yamada, Marti",
  "Faubel Soligó, Anna Victoria",
  "Giménez Benito, Javier Alejandro",
  "Sánchez Edo, Adrián",
  "Torres Oliver, Enric",
  "Español Baptista, África Del Carmen",
  "Mayor Sanchez, Bridget Michell",
];

interface Commission {
  name: string;
  members: string[];
  note?: string;
}

const commissions: Commission[] = [
  { name: "Mesa del Claustre", members: ["Praise Ijeoma Iheanyi Anyanwu", "Santiago Bernabé Hernández"], note: "Triats pel Claustre" },
  { name: "Junta Electoral", members: ["Titular: Mohamed Al Howaidi Nasralla (Suplent: Santiago Bernabé Hernández)", "Titular: Karen Abrego Rosas (Suplent: Per designar)"], note: "Triats pel Claustre" },
  { name: "Consell de Govern", members: ["Mohamed Al Howaidi Nasralla", "Sergi Pérez Serra", "Santiago Bernabé Hernández", "Álex López Damas", "Amparo López Olivares", "Mario Varela Fernández", "Bridget Michell Mayor Sánchez (triada per la Rectora)"] },
  { name: "Comissió d'Ètica i Responsabilitat Social Universitària (CERSU)", members: ["Sergi Pérez Serra", "Alicia Montagud Teijelo"] },
  { name: "Consell Assessor per a l'Orientació i Captació de l'Estudiantat", members: ["Santiago Bernabé Hernández"] },
  { name: "Comissió de Permanència", members: ["Dhirar Abdelkader Bahloul Rouab", "Santiago Bernabé Hernández"] },
  { name: "Comissió Disciplinària i de Convivència", members: ["Titular: Santiago Bernabé Hernández", "Suplent: Mohamed Al Howaidi Nasralla"] },
  { name: "Comissió d'Estudis i Professorat", members: ["Mohamed Al Howaidi Nasralla (Claustre)", "Alex López Damas (Claustre)", "Santiago Bernabé Hernández (Ple)", "Guillermo Serrano Pérez (Ple)"] },
  { name: "Comissió d'Avaluació Docent (CAD)", members: ["Alex López Damas (Consell)", "Santiago Bernabé Hernández (CEP)"] },
  { name: "Consell Social", members: ["Mohamed Al Howaidi Nasralla"] },
  { name: "Consell Assessor per a la Promoció de la Salut (CAPS)", members: ["Joan Cerezuela Soto"] },
  { name: "Comissió de Centre de Documentació", members: ["Guillermo Serrano Pérez (Claustre)", "Mario Varela Fernández (Claustre)", "Sergi Pérez Serra (ESTCE)", "Yolanda Roca Pyper (FCHS)", "Santiago Bernabé Hernández (FCJE)", "Irene Llansola Rico (FCS)"] },
  { name: "Comissió de Política Lingüística", members: ["Santiago Bernabé Hernández (Claustre)", "Otman El Hakmaoui Sakif (Ple)", "Sergi Pérez Serra (Ple)"] },
  { name: "Comissió d'Assumptes Econòmics, Informàtics i Infraestructura", members: ["Álex López Damas (Claustre)", "Sergi Pérez Serra (Claustre)", "Pau Escuder Montoya (Ple)", "Otman El Hakmaoui Sakif (Ple)", "Pau Valcárcel Redón (Ple)"] },
  { name: "Comissió de Reforma d'Estatuts", members: ["Mohamed Al Howaidi / Eva García", "Francisco Pérez / Joan Cerezuela", "Santiago Bernabé / Alberto Herrero", "Sergi Pérez / María Almela", "Amparo López / Guillermo Serrano"] },
  { name: "Comissió d'Investigació i Doctorat", members: ["Santiago Bernabé Hernández", "Amparo López Olivares"] },
  { name: "Comissió Assessora de la Unitat d'Igualtat", members: ["Praise Ijeoma Iheanyi Anyanwu"] },
  { name: "Consell de Planificació i Qualitat", members: ["Sergi Pérez Serra (ESTCE)", "Yolanda Roca Pyper (FCHS)", "Safaa Lamrini Hammate (FCJE)", "Irene Llansola Rico (FCS)"] },
  { name: "Consell Valencià d'Universitats", members: ["Mohamed Al Howaidi Nasralla"] },
  { name: "Patronat Fundació General de l'UJI", members: ["Mohamed Al Howaidi Nasralla"] },
  { name: "CANOE", members: ["Mohamed Al Howaidi Nasralla"] },
  { name: "Consell d'Ensenyaments Propis i Formació Permanent", members: ["Mohamed Al Howaidi Nasralla"] },
  { name: "Comissió de Qualitat del Centre d'Ensenyaments Propis i Formació Permanent", members: ["Mohamed Al Howaidi Nasralla"] },
  { name: "CEUNE (Consell d'Estudiants Universitari de l'Estat)", members: ["Titular: Mohamed Al Howaidi Nasralla", "Suplent: Dhirar Abdelkader Bahloul Rouab"] },
  { name: "Consell Assessor d'Inserció Professional", members: ["Santiago Bernabé Hernández (Consell)", "Sergi Pérez Serra (ESTCE)", "Yolanda Roca Pyper (FCHS)", "Elisa Prata Ciani (FCJE)", "Lydia Gómez López (FCS)"] },
  { name: "Jurat de Selecció de Becaris", members: ["Pau Valcárcel Redón", "Santiago Bernabé Hernández", "Mohamed Al Howaidi Nasralla"] },
  { name: "Comissió Cursos d'Estiu", members: ["Sergi Pérez Serra"] },
  { name: "Comissió de Cultura", members: ["Mario Varela Fernández"] },
  { name: "Consell Assessor d'Internacionalització", members: ["Mohamed Al Howaidi Nasralla"] },
  { name: "Comissió de Cooperació i Desenvolupament Sostenible", members: ["Sergi Pérez Serra"] },
  { name: "Consell Interuniversitari Valencià d'Estudiants", members: ["Titular: Mohamed Al Howaidi Nasralla (Suplent: Santiago Bernabé Hernández)", "Titular: Álex López Damas (Suplent: Dhirar Abdelkader Bahloul Rouab)"] },
];

interface CenterCommission {
  center: string;
  compensacion: { titular: string; suplente: string };
  qualitat: string;
  note: string;
}

const centerCommissions: CenterCommission[] = [
  {
    center: "Facultat de Ciències Jurídiques i Econòmiques",
    compensacion: { titular: "Óscar Julián Rojas Jaimes", suplente: "Sara Benedicto Molina" },
    qualitat: "Safaa Lamrini Hammate",
    note: "Formaran part de cada Comissió de Grau de la FCJE els coordinadors del Grau.",
  },
  {
    center: "Escola Superior de Tecnologia i Ciències Experimentals",
    compensacion: { titular: "Sergi Pérez Serra", suplente: "Dhirar Abdelkader Bahloul Rouab" },
    qualitat: "Álex López Damas",
    note: "Formaran part de cada Comissió de Grau de l'ESTCE els coordinadors del Grau.",
  },
  {
    center: "Facultat de Ciències de la Salut",
    compensacion: { titular: "Irene Llansola Rico", suplente: "Lydia Gómez López" },
    qualitat: "Irene Llansola Rico",
    note: "Formaran part de cada Comissió de Grau de la FCS els coordinadors del Grau.",
  },
  {
    center: "Facultat de Ciències Humanes i Socials",
    compensacion: { titular: "Yolanda Roca Pyper", suplente: "Pau Valcárcel Redón" },
    qualitat: "Yolanda Roca Pyper",
    note: "Formaran part de cada Comissió de Grau de la FCHS els coordinadors del Grau.",
  },
];

function getInitials(name: string) {
  const parts = name.split(" ").filter(w => w.length > 1 && w[0] === w[0].toUpperCase());
  return parts.slice(0, 2).map(w => w[0]).join("");
}

const typeLabels: Record<string, string> = {
  claustral: "Representació Claustral",
  cce: "Consell de Centre d'Estudis (CCE)",
  cge: "Consell General d'Estudis (CGE)",
};

const typeBadge: Record<string, string> = {
  claustral: "bg-purple-100 text-purple-700",
  cce: "bg-blue-100 text-blue-700",
  cge: "bg-green-100 text-green-700",
};

function CollapsibleSection({ title, icon, children, defaultOpen = false }: { title: string; icon: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-100 rounded-3xl bg-white overflow-hidden shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 md:p-8 text-left group hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-uji-surf-light text-uji-base flex items-center justify-center shrink-0">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-black text-uji-dark group-hover:text-uji-base transition-colors">{title}</h3>
        </div>
        <ChevronDown className={`text-gray-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={24} />
      </button>
      {open && <div className="px-6 md:px-8 pb-8">{children}</div>}
    </div>
  );
}

export default function Pleno() {
  const [filter, setFilter] = useState<string>("all");

  const filteredMembers = filter === "all" ? plenoMembers : plenoMembers.filter(m => m.type === filter);

  return (
    <div className="min-h-screen bg-white font-sans text-uji-dark">
      <GlassHeader />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="text-uji-base font-bold tracking-widest uppercase text-sm mb-2 block" data-testid="text-subtitle">Òrgan Màxim de Decisió</span>
            <h1 className="text-5xl md:text-6xl font-black text-uji-dark mb-6" data-testid="text-title">EL PLE DEL CONSELL</h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed" data-testid="text-description">
              El Ple del Consell de l'Estudiantat el formen 27 estudiants: 15 claustrals que es renoven
              cada 2 anys, i 12 que es renoven cada any amb la renovació dels CCE i del CGE.
              Debat i aprova les línies polítiques, el pressupost i els posicionaments oficials de l'estudiantat.
            </p>
            <div className="mt-4">
              <a href="mailto:pleconsell@uji.es" className="inline-flex items-center gap-2 text-uji-base font-bold hover:text-uji-dark transition-colors" data-testid="link-pleno-email">
                <Mail size={16} /> pleconsell@uji.es
              </a>
            </div>
          </motion.div>

          <div className="sticky top-24 z-30 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-lg mb-12 flex flex-wrap gap-3" data-testid="filter-bar">
            {["all", "claustral", "cce", "cge"].map(key => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={cn(
                  "px-5 py-2.5 rounded-xl font-bold text-sm transition-all",
                  filter === key ? "bg-uji-dark text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-uji-surf-light"
                )}
                data-testid={`filter-${key}`}
              >
                {key === "all" ? `Tots (${plenoMembers.length})` : `${typeLabels[key]} (${plenoMembers.filter(m => m.type === key).length})`}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {filteredMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-uji-surf-mid hover:shadow-lg transition-all bg-white"
                data-testid={`pleno-member-${idx}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-uji-surf-light text-uji-base flex items-center justify-center font-bold text-lg">
                    {getInitials(member.name)}
                  </div>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
                    typeBadge[member.type]
                  )}>
                    {member.type === "claustral" ? "Claustral" : member.type === "cce" ? "CCE" : "CGE"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-uji-dark mb-1 group-hover:text-uji-base transition-colors">{member.name}</h3>
                {member.center && (
                  <p className="text-sm text-gray-500 font-medium flex items-center gap-2 mt-1">
                    <Building2 size={14} /> {member.center}
                  </p>
                )}
                {member.role && (
                  <p className="text-sm text-uji-sec-base font-medium mt-1">{member.role}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <CollapsibleSection title="Estudiants Claustrals" icon={<Award size={24} />} defaultOpen={false}>
              <p className="text-gray-500 text-sm mb-6">
                Llista completa dels 32 estudiants claustrals de la Universitat Jaume I.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {claustrals.map((name, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-uji-surf-light/50 transition-colors" data-testid={`claustral-${i}`}>
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-black shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-uji-dark">{name}</span>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Representants a les Comissions de l'UJI" icon={<Scale size={24} />} defaultOpen={false}>
              <p className="text-gray-500 text-sm mb-6">
                Representants de l'estudiantat en les diferents comissions i òrgans de la Universitat Jaume I.
              </p>
              <div className="space-y-4">
                {commissions.map((comm, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-gray-50 hover:bg-uji-surf-light/30 transition-colors" data-testid={`commission-${i}`}>
                    <h4 className="font-bold text-uji-dark text-base mb-3">{comm.name}</h4>
                    {comm.note && <p className="text-xs text-uji-sec-base font-medium mb-2">{comm.note}</p>}
                    <ul className="space-y-1.5">
                      {comm.members.map((member, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-uji-base mt-1.5 shrink-0" />
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Representants a les Comissions dels Centres" icon={<Building2 size={24} />} defaultOpen={false}>
              <p className="text-gray-500 text-sm mb-6">
                Representants de l'estudiantat en els tribunals de compensació i comissions de qualitat de cada centre.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {centerCommissions.map((cc, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100" data-testid={`center-commission-${i}`}>
                    <h4 className="font-bold text-uji-dark text-base mb-1">{cc.center}</h4>
                    <p className="text-xs text-gray-400 mb-4">{cc.note}</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-uji-sec-base uppercase tracking-wider mb-1">Tribunal de Compensació</p>
                        <p className="text-sm text-gray-600">Titular: {cc.compensacion.titular}</p>
                        <p className="text-sm text-gray-600">Suplent: {cc.compensacion.suplente}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-uji-sec-base uppercase tracking-wider mb-1">Comissió de Qualitat del Centre</p>
                        <p className="text-sm text-gray-600">{cc.qualitat}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
