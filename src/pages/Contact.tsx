import { Code2, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import Reveal from "../components/Reveal";

const items = [
  { icon: Mail, label: site.email, href: "mailto:" + site.email, text: "Email", hint: "Réponse rapide" },
  { icon: MessageCircle, label: site.whatsappLabel, href: site.whatsapp, text: "WhatsApp", hint: "Discussion directe" },
  { icon: Code2, label: site.githubLabel, href: site.github, text: "GitHub", hint: "Mes dépôts" },
];

export default function Contact() {
  return (
    <section className="container-content py-16 max-w-3xl">
      <Reveal>
        <p className="section-eyebrow">Contact</p>
        <h1 className="section-title">Travaillons ensemble</h1>
        <p className="section-lead">
          Un projet, une collaboration ou simplement une question ? Écrivez-moi, je réponds avec plaisir.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.text} delay={i * 0.08}>
            <a
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="card group flex h-full flex-col gap-3 p-5 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <it.icon className="text-brand-600" size={22} />
                <ArrowUpRight size={16} className="text-ink-300 transition-all group-hover:text-brand-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">{it.text}</p>
                <p className="text-xs text-ink-400">{it.hint}</p>
              </div>
              <p className="mt-auto break-all text-xs text-ink-500">{it.label}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-10 rounded-3xl border border-brand-100 bg-brand-50 p-6 text-sm text-ink-600">
          <p className="font-medium text-ink-800">Basé au {site.location}.</p>
          <p className="mt-1">Disponible pour des projets freelance, des collaborations open-source ou des missions autour de l'IA et du web.</p>
        </div>
      </Reveal>
    </section>
  );
}
