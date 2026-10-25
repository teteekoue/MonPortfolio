export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  category: string;
  language: string;
  year: string;
  status: string;
  github: string;
  demo?: string;
  features: string[];
  highlights: string[];
  accent: "brand" | "accent";
};

export const projects: Project[] = [
  {
    slug: "nemesis-agent",
    name: "NEMESIS-AGENT",
    tagline: "Agent IA autonome pour Linux, sous contrôle humain.",
    description: "Agent IA autonome pour Linux : il lit, écrit, exécute et automatise sous votre contrôle. Trois surfaces partagent le même moteur et la même mémoire : une interface en ligne de commande, une interface web et un bot Telegram.",
    role: "Conception et développement complet",
    stack: ["Python", "FastAPI", "React", "Telegram", "MCP"],
    category: "Agent IA · Automatisation",
    language: "Python",
    year: "2026",
    status: "Actif",
    github: "https://github.com/teteekoue/NEMESIS-AGENT",
    features: [
      "Trois surfaces (CLI, Web, Telegram) sur un moteur et une mémoire partagés",
      "Mémoire persistante entre les sessions et les interfaces",
      "Autorisation fine des outils sensibles : une fois, refus ou toute la session",
      "Intégrations GitHub et Telegram via le protocole MCP",
      "Sous-agents, skills et plan de travail structuré",
    ],
    highlights: ["Multi-surfaces", "Mémoire partagée", "Sécurité par autorisation"],
    accent: "brand",
  },
  {
    slug: "nemapi",
    name: "NemApi",
    tagline: "Passerelle locale compatible OpenAI pour 7 LLM.",
    description: "Passerelle locale compatible OpenAI pour DeepSeek, Qwen, Claude, Gemini, ChatGPT, Kimi et Z.ai. Elle pilote l'interface web de chaque fournisseur via une extension navigateur Chromium, tout en exposant un protocole OpenAI strict à ses clients.",
    role: "Conception et développement complet",
    stack: ["Python", "Chromium Extension", "OpenAI API"],
    category: "Infrastructure IA · Proxy",
    language: "Python",
    year: "2026",
    status: "Actif · v5",
    github: "https://github.com/teteekoue/NemApi",
    features: [
      "Un seul protocole OpenAI pour 7 fournisseurs, sur un port local (8090)",
      "Pilotage des interfaces web via une extension Chromium, sans clé API",
      "Support des images sur les 7 fournisseurs",
      "Appels d'outils natifs renvoyés au format OpenAI (tool_calls)",
      "Analytics, page d'intégration des agents IA et interface de configuration",
    ],
    highlights: ["7 fournisseurs", "Protocole OpenAI", "tool_calls natifs"],
    accent: "accent",
  },
  {
    slug: "astatarote",
    name: "Astatarote",
    tagline: "Plateforme éducative gamifiée pour l'admin Linux et la cybersécurité.",
    description: "Plateforme éducative gamifiée, open-source et adaptative, conçue pour apprendre l'administration système Linux et la cybersécurité de manière éthique. Une IA Architecte génère dynamiquement des scénarios et des contrôles personnalisés selon le niveau de l'apprenant.",
    role: "Conception et développement",
    stack: ["React", "TypeScript", "FastAPI", "SQLite", "Docker", "xterm.js"],
    category: "Éducation · Cybersécurité",
    language: "TypeScript / Python",
    year: "2026",
    status: "En développement",
    github: "https://github.com/teteekoue/astatarote",
    features: [
      "IA Architecte qui construit des exercices adaptés à l'objectif de l'apprenant",
      "Terminal Unix virtuel directement dans le navigateur (xterm.js)",
      "Coéquipier IA pédagogique en temps réel via WebSockets",
      "Progression gamifiée : points, grades et badges de spécialisation",
      "Stack conteneurisée (Docker) pour un déploiement zéro-config",
    ],
    highlights: ["IA Architecte", "Terminal virtuel", "Progression gamifiée"],
    accent: "brand",
  },
  {
    slug: "allglory-business",
    name: "AllGlory Business",
    tagline: "Site vitrine livré à un client réel, à Atakpamé.",
    description: "Site vitrine livré pour un client réel : AllGlory Business, atelier de créations artisanales en résine époxy basé à Atakpamé, au Togo. Le site valorise le savoir-faire de l'atelier, présente ses créations et ses formations, et permet de contacter l'artisan directement via WhatsApp.",
    role: "Développement front-end et déploiement",
    stack: ["React 19", "React Router 7", "Vite", "Tailwind CSS", "Framer Motion"],
    category: "Site vitrine · Client",
    language: "JavaScript",
    year: "2026",
    status: "Livré · En ligne",
    github: "https://github.com/teteekoue/allglory-business-landing",
    demo: "https://allglory-business-landing.vercel.app",
    features: [
      "4 pages : Accueil, Créations, Formations, Contact",
      "Galerie de plus de 25 visuels réels de l'atelier",
      "Bouton WhatsApp flottant pour un contact direct en un clic",
      "Animations fluides au survol et au défilement (Framer Motion)",
      "Navigation responsive pensée mobile-first et déployée sur Vercel",
    ],
    highlights: ["Client réel", "4 pages", "Galerie 25+ photos"],
    accent: "accent",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
