import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card group relative p-6 flex flex-col gap-4 overflow-hidden hover:shadow-xl"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-100/60 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
      <div className="relative flex items-center justify-between">
        <span className="chip">{project.category}</span>
        <span className="text-xs font-medium text-ink-400">{project.year}</span>
      </div>
      <div className="relative">
        <h3 className="font-display text-xl font-bold text-ink-900">{project.name}</h3>
        <p className="mt-2 text-sm text-ink-500">{project.tagline}</p>
      </div>
      <div className="relative flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="text-xs px-2 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-100">{s}</span>
        ))}
      </div>
      <div className="relative mt-auto flex items-center justify-between pt-2">
        <Link to={"/projets/" + project.slug} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-all hover:gap-2">
          Voir le projet <ArrowUpRight size={16} />
        </Link>
        <div className="flex items-center gap-1">
          <a href={project.github} target="_blank" rel="noreferrer" className="p-1.5 text-ink-400 hover:text-brand-700" aria-label="GitHub"><Code2 size={16} /></a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="p-1.5 text-ink-400 hover:text-brand-700" aria-label="Demo"><ExternalLink size={16} /></a>}
        </div>
      </div>
    </motion.article>
  );
}
