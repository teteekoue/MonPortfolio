import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { site } from "../data/site";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

const ease = "easeOut" as const;

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-grid">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="container-content relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="chip mb-5 inline-flex gap-1.5">
              <Sparkles size={14} /> Portfolio · {site.alias}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }} className="font-display text-4xl sm:text-6xl font-bold text-ink-900 text-balance max-w-3xl">
              Je suis {site.name},
              <span className="mt-2 block text-brand-600">je construis des systèmes intelligents.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease }} className="section-lead text-pretty">{site.tagline}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25, ease }} className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projets" className="btn-primary">Voir mes projets <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-secondary">Me contacter</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-6 flex items-center gap-2 text-sm text-ink-500">
              <MapPin size={15} className="text-brand-500" /> {site.location} · Développeur autodidacte
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2, ease }} className="relative mx-auto hidden lg:block">
            <div className="relative grid h-64 w-64 place-items-center rounded-[2.5rem] bg-white border border-ink-100 shadow-xl">
              <div className="absolute inset-3 rounded-[2rem] border border-brand-100" />
              <span className="font-display text-6xl font-bold text-brand-600">{site.shortName}</span>
              <span className="absolute -bottom-3 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white shadow">{site.alias}</span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="container-content -mt-8 relative z-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-brand-600">{s.value}</p>
                <p className="mt-1 text-xs text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="container-content py-16">
        <Reveal>
          <p className="section-eyebrow">Sélection</p>
          <h2 className="section-title">Projets récents</h2>
          <p className="section-lead">Des outils et plateformes que je conçois et développe.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/projets" className="link-underline">Tous les projets</Link>
        </div>
      </section>
      <section className="container-content py-16 border-t border-ink-100">
        <Reveal>
          <p className="section-eyebrow">Compétences</p>
          <h2 className="section-title">Ce que je manipule au quotidien</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.08}>
              <div className="card p-5 h-full">
                <h3 className="font-display font-semibold text-ink-900">{g.group}</h3>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-ink-500">· {it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container-content py-16 border-t border-ink-100">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-eyebrow">À propos</p>
            <h2 className="section-title">Un développeur autodidacte et curieux</h2>
            <p className="section-lead">{site.bio}</p>
            <Link to="/a-propos" className="link-underline mt-4 inline-block">En savoir plus</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
