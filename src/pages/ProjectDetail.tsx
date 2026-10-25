import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Code2, ExternalLink, CheckCircle2 } from "lucide-react";
import { getProject } from "../data/projects";
import Reveal from "../components/Reveal";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <section className="container-content py-24 text-center">
        <h1 className="section-title">Projet introuvable</h1>
        <Link to="/projets" className="link-underline mt-4 inline-block">Retour aux projets</Link>
      </section>
    );
  }

  return (
    <section className="container-content py-16 max-w-3xl">
      <Reveal>
        <Link to="/projets" className="inline-flex items-center gap-1 text-sm text-brand-700 hover:gap-2 transition-all">
          <ArrowLeft size={16} /> Tous les projets
        </Link>
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">{project.category}</span>
            <span className="chip">{project.status}</span>
          </div>
          <h1 className="section-title">{project.name}</h1>
          <p className="section-lead">{project.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-100 bg-white p-4">
            <p className="text-xs text-ink-400">Mon rôle</p>
            <p className="mt-1 text-sm font-medium text-ink-800">{project.role}</p>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-4">
            <p className="text-xs text-ink-400">Langage</p>
            <p className="mt-1 text-sm font-medium text-ink-800">{project.language} · {project.year}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="text-xs px-2 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-100">{s}</span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-12 font-display text-2xl font-bold text-ink-900">Fonctionnalités clés</h2>
        <ul className="mt-5 space-y-3">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-ink-600">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary"><Code2 size={16} /> Voir sur GitHub</a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={16} /> Voir la démo</a>}
        </div>
      </Reveal>
    </section>
  );
}
