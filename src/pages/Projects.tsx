import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section className="container-content py-16">
      <Reveal>
        <p className="section-eyebrow">Portfolio</p>
        <h1 className="section-title">Tous mes projets</h1>
        <p className="section-lead">
          Outils, plateformes et sites que je conçois et développe, de l'idée à la mise en ligne.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
