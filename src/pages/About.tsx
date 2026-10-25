import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Cpu, Code2, Shield } from "lucide-react";
import { site } from "../data/site";
import Reveal from "../components/Reveal";

const values = [
  { icon: Cpu, title: "IA appliquée", text: "Je construis des outils concrets autour des modèles de langage, pas juste des démos." },
  { icon: Code2, title: "Apprendre en faisant", text: "Autodidacte, j'apprends en construisant des projets réels, du prototype à la mise en ligne." },
  { icon: Shield, title: "Sous contrôle", text: "Mes agents et outils gardent l'humain aux commandes, avec des autorisations claires." },
];

export default function About() {
  return (
    <div className="container-content py-16 max-w-4xl">
      <Reveal>
        <p className="section-eyebrow">À propos</p>
        <h1 className="section-title">{site.name}</h1>
        <p className="mt-2 text-brand-700 font-medium">{site.role}</p>
        <div className="mt-3 flex items-center gap-2 text-sm text-ink-500">
          <MapPin size={15} className="text-brand-500" /> {site.location}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 space-y-4 text-ink-600 leading-relaxed">
          <p>{site.bio}</p>
          <p>{site.tagline}</p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <h2 className="mt-14 font-display text-2xl font-bold text-ink-900">Ce qui me guide</h2>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <div className="card p-6 h-full">
              <v.icon className="text-brand-600" size={22} />
              <h3 className="mt-3 font-display font-semibold text-ink-900">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{v.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <h2 className="mt-14 font-display text-2xl font-bold text-ink-900">Compétences</h2>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {site.skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.06}>
            <div className="card p-5">
              <h3 className="font-display font-semibold text-ink-900">{g.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 rounded-3xl bg-brand-600 p-8 text-center text-white">
          <h2 className="font-display text-2xl font-bold">Travaillons ensemble</h2>
          <p className="mt-2 text-brand-100">Un projet autour de l'IA, du web ou de Linux ? Parlons-en.</p>
          <Link to="/contact" className="btn mt-5 bg-white text-brand-700 hover:bg-brand-50">Me contacter <ArrowRight size={16} /></Link>
        </div>
      </Reveal>
    </div>
  );
}
