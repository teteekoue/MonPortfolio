import { Code2, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="mt-20 border-t border-ink-100">
      <div className="container-content flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display font-bold text-ink-900">
            {site.name} <span className="text-brand-600">· {site.alias}</span>
          </p>
          <p className="mt-1 text-sm text-ink-500">{site.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={site.github} target="_blank" rel="noreferrer" className="rounded-full border border-ink-100 bg-white p-2 text-ink-600 hover:text-brand-700" aria-label="GitHub"><Code2 size={18} /></a>
          <a href={"mailto:" + site.email} className="rounded-full border border-ink-100 bg-white p-2 text-ink-600 hover:text-brand-700" aria-label="Email"><Mail size={18} /></a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-ink-100 bg-white p-2 text-ink-600 hover:text-brand-700" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          <button onClick={scrollTop} className="rounded-full bg-brand-600 p-2 text-white hover:bg-brand-700" aria-label="Haut de page"><ArrowUp size={18} /></button>
        </div>
      </div>
      <div className="border-t border-ink-100 py-4 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {site.name}. Conçu et développé avec soin.
      </div>
    </footer>
  );
}
