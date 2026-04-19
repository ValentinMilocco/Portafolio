"use client"

import { useState } from "react"
import { 
  ArrowRight,
  Briefcase,
  Rocket, 
  Users, 
  Database,
  BarChart3,
  GitBranch,
  FileSpreadsheet,
  MapPin,
  ChevronDown,
  Code2,
  Sparkles
} from "lucide-react"

export function LandingPage() {
  const [activeProject, setActiveProject] = useState<string | null>("ChangaYa")

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentExperience = [
    {
      icon: <Users className="w-4 h-4" />,
      label: "Actual",
      title: "Tutor Académico UTN",
      description: "Acompaño a estudiantes ingresantes y coordiné la experiencia de adaptación dentro de la facultad."
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Academia",
      title: "Arquitecto de Software en Lab LINES UTN",
      description: "Llevé adelante la migración de arquitectura del proyecto Cursos web scraping."
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      label: "Producto propio",
      title: "Co-creador y Desarrollador de ChangaYa!",
      description: "Un proyecto nacido de la amistad que se volvió real y que gestioné de punta a punta."
    }
  ]

  const githubProjects = [
    {
      name: "ChangaYa",
      href: "https://github.com/ValentinMilocco/ChangaYa",
      language: "TypeScript",
      context: "Proyecto final UTN FRLP",
      description: "Plataforma móvil que conecta prestadores de servicios con clientes para tareas puntuales. Arquitectura de microservicios, IA para matching y enfoque en escalabilidad.",
      readme: "Fork con fines de portfolio profesional. El README lo presenta como una app móvil para conectar personas que necesitan resolver tareas puntuales con trabajadores independientes, con foco en microservicios, IA para matching y ciberseguridad.",
      stack: ["TypeScript", "JavaScript", "Expo", "React Native", "Supabase", "Socket.IO"],
      contribution: [
        "Desarrollo de publicación y gestión de changas.",
        "Autenticación y flujo de perfiles de usuario.",
        "Módulos de chat en tiempo real y mejora de UX.",
        "Integración frontend-backend y refactor general."
      ],
    },
    {
      name: "vetsoft",
      href: "https://github.com/ValentinMilocco/vetsoft",
      language: "Python",
      context: "Django",
      description: "Aplicación web para gestión de veterinarias. Permite administrar entidades del dominio con validaciones y flujo académico de trabajo colaborativo.",
      readme: "Fork para portfolio profesional. El README lo describe como una app web para gestión de veterinarias, enfocada en validaciones de negocio, cobertura de pruebas y despliegue con Docker.",
      stack: ["Python", "Django", "SQLite", "HTML", "Playwright", "Ruff", "Docker"],
      contribution: [
        "Validaciones de dominio y formularios.",
        "Corrección de bugs de visualización y templates.",
        "Mejora de cobertura de pruebas y calidad estática.",
      ],
    },
    {
      name: "dondeComo",
      href: "https://github.com/ValentinMilocco/dondeComo",
      language: "TypeScript",
      context: "Expo + React Native",
      description: "Aplicación móvil con autenticación, búsqueda de ubicaciones precisas y navegación modular. Construida con contextos y hooks.",
      readme: "Fork para portfolio profesional. El README lo presenta como una app móvil para descubrir restaurantes mediante geolocalización, con autenticación, navegación modular y estado global con contextos/hooks.",
      stack: ["TypeScript", "React Native", "Expo", "Kotlin", "JavaScript", "Google Maps API"],
      contribution: [
        "Búsqueda y filtrado de resultados.",
        "Mejora de la experiencia visual en listas y pantallas.",
        "Autenticación y contextos de datos.",
        "Optimización de componentes y refactor."
      ],
    },
    {
      name: "Presentacion-Nestle",
      href: "https://github.com/ValentinMilocco/Presentacion-Nestle",
      language: "TypeScript",
      context: "Proyecto personal",
      description: "Mini proyecto sobre mi presentación para Jóvenes Profesionales Nestlé 2026.",
      readme: "Proyecto personal de presentación para Jóvenes Profesionales Nestlé 2026. No se ve un README extenso en la raíz, así que el 'About' del repo funciona como la descripción principal pública.",
      stack: ["TypeScript", "CSS", "JavaScript", "Deploy en Vercel", "GitHub Copilot", "Claude (IA)"],
      contribution: [
        "Proyecto individual, sin contributors adicionales visibles.",
        "Orientado a presentación personal y comunicación.",
        "Sirve como pieza breve dentro del portfolio." 
      ],
    },
    {
      name: "BancoFrontend",
      href: "https://github.com/ValentinMilocco/BancoFrontend",
      language: "JavaScript",
      context: "React + Bootstrap",
      description: "Aplicación bancaria para gestionar clientes, cuentas, saldos, transferencias y movimientos con una interfaz clásica y funcional.",
      readme: "Fork para portfolio profesional. El repositorio se presenta como una app bancaria en React para gestionar clientes, sesiones, cuentas, saldos, transferencias y movimientos con consumos de APIs.",
      stack: ["JavaScript", "React", "React Router", "Bootstrap", "CSS", "HTML"],
      contribution: [
        "Ajustes del frontend bancario y refinamiento visual.",
        "Navegación entre vistas de clientes, cuentas y movimientos.",
        "Consumo de APIs para autenticación y operaciones financieras."
      ],
    },
  ]

  const toolCategories = [
    {
      title: "Gestión y negocio",
      items: [
        { icon: <FileSpreadsheet className="w-4 h-4" />, label: "Jira" },
        { icon: <BarChart3 className="w-4 h-4" />, label: "Power BI" },
        { icon: <FileSpreadsheet className="w-4 h-4" />, label: "Excel Avanzado" },
        { icon: <Users className="w-4 h-4" />, label: "Scrum" },
        { icon: <BarChart3 className="w-4 h-4" />, label: "Analisis de Datos" },
        { icon: <Rocket className="w-4 h-4" />, label: "Gestion de Proyectos" },
      ],
    },
    {
      title: "Desarrollo frontend y mobile",
      items: [
        { icon: <Database className="w-4 h-4" />, label: "TypeScript" },
        { icon: <Database className="w-4 h-4" />, label: "JavaScript" },
        { icon: <GitBranch className="w-4 h-4" />, label: "React" },
        { icon: <GitBranch className="w-4 h-4" />, label: "React Native" },
        { icon: <Rocket className="w-4 h-4" />, label: "Expo" },
        { icon: <GitBranch className="w-4 h-4" />, label: "React Router" },
        { icon: <FileSpreadsheet className="w-4 h-4" />, label: "Bootstrap" },
      ],
    },
    {
      title: "Backend, datos y APIs",
      items: [
        { icon: <Database className="w-4 h-4" />, label: "Python" },
        { icon: <Database className="w-4 h-4" />, label: "Django" },
        { icon: <Database className="w-4 h-4" />, label: "SQL" },
        { icon: <Database className="w-4 h-4" />, label: "SQLite" },
        { icon: <Rocket className="w-4 h-4" />, label: "Supabase" },
        { icon: <Rocket className="w-4 h-4" />, label: "Socket.IO" },
        { icon: <BarChart3 className="w-4 h-4" />, label: "Google Maps API" },
      ],
    },
    {
      title: "Calidad, DevOps e IA",
      items: [
        { icon: <GitBranch className="w-4 h-4" />, label: "Git" },
        { icon: <GitBranch className="w-4 h-4" />, label: "Docker" },
        { icon: <GitBranch className="w-4 h-4" />, label: "Playwright" },
        { icon: <GitBranch className="w-4 h-4" />, label: "Ruff" },
        { icon: <Rocket className="w-4 h-4" />, label: "Vercel" },
        { icon: <Sparkles className="w-4 h-4" />, label: "GitHub Copilot" },
        { icon: <Sparkles className="w-4 h-4" />, label: "Claude (IA)" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e2e8f0] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_28%)]" />
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Background Image - La Plata */}
        <div className="absolute inset-0 z-0">
          <img 
            src="Gemini_Generated_Image_ecobaoecobaoecob.png"
            alt=""
            className="w-full h-full object-top opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/35 via-[#0a0a0a]/65 to-[#0a0a0a]" />
        </div>
        <div className="max-w-[680px] w-full mx-auto text-center space-y-6 relative z-10">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto w-20 h-20">
            <div className="relative w-full h-full rounded-full overflow-hidden border border-[#1f1f1f]">
              <img 
                src="/WhatsApp Image 2026-03-30 at 19.34.03.jpeg" 
                alt="Foto de perfil de Valentin Milocco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Welcome Text */}
          <div className="space-y-3">
            <p className="inline-flex items-center px-2.5 py-1 text-xs font-mono border border-[#1f1f1f] text-[#3b82f6] bg-transparent rounded-md">Hola, soy</p>
            <h1 className="text-3xl font-medium text-[#e2e8f0] text-balance">
              Valentin Milocco
            </h1>
            <p className="text-sm text-[#71717a]">24 años</p>
          </div>
          
          {/* Personal phrase */}
          <div className="flex items-center justify-center gap-2 text-[#71717a]">
            <MapPin className="w-4 h-4 text-[#3b82f6]" />
            <p className="text-sm text-pretty">
              De 9 de Julio a La Plata, construyendo mi camino
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('trayectoria')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10 cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Ir a la siguiente sección"
        >
          <ChevronDown className="w-5 h-5 text-[#71717a]" />
        </button>
      </section>

      {/* Mi Trayectoria - Formación */}
      <section id="trayectoria" className="min-h-screen flex flex-col justify-center py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Gemini_Generated_Image_x5v3q5x5v3q5x5v3.png" 
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/45 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        </div>
        <div className="max-w-[680px] w-full mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#3b82f6]">Mi Trayectoria</h2>
            <div className="h-px bg-[#1f1f1f] flex-1" />
          </div>
          
          <div className="space-y-8">
            {/* Main achievement */}
            <div className="pl-4 border-l border-[#1f1f1f]">
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-1 text-xs font-mono border border-[#3b82f6] text-[#3b82f6] bg-transparent rounded-md">
                      En progreso
                </span>
                <h3 className="text-base font-medium text-[#e2e8f0]">
                      Ingeniero en Sistemas de Informacion
                </h3>
                <p className="text-sm text-[#71717a]">
                      UTN Facultad Regional La Plata
                </p>
                <p className="text-sm text-[#3b82f6]">
                      A una materia de recibirme - 2026
                </p>
              </div>
            </div>
              
            {/* Secondary education */}
            <div className="pl-4 border-l border-[#1f1f1f]">
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-1 text-xs font-mono border border-[#1f1f1f] text-[#71717a] bg-transparent rounded-md">
                      Completado
                </span>
                <h3 className="text-base font-medium text-[#e2e8f0]">
                      Bachiller en Economia y Administracion
                </h3>
                <p className="text-sm text-[#71717a]">
                      Instituto Jesus Sacramentado
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll to next section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection('experiencia')}
            className="cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Ir a experiencia"
          >
            <ChevronDown className="w-5 h-5 text-[#71717a]" />
          </button>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        </div>
        <div className="max-w-[1080px] w-full mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#3b82f6]">Experiencia</h2>
            <div className="h-px bg-[#1f1f1f] flex-1" />
          </div>

          <p className="max-w-2xl text-sm text-[#94a3b8] leading-7 mb-10">
            Acá se cruzan mi experiencia actual con lo que publiqué en GitHub.
          </p>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-2xl border border-[#1f1f1f] bg-white/[0.02] p-6 backdrop-blur-sm shadow-[0_0_0_1px_rgba(59,130,246,0.04)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1f1f1f] bg-[#111111] text-[#3b82f6]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#71717a]">Trayectoria actual</p>
                  <h3 className="text-base font-medium text-[#e2e8f0]">Lo que estoy haciendo hoy</h3>
                </div>
              </div>

              <div className="space-y-4">
                {currentExperience.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-4 transition-colors hover:border-[#3b82f6]">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] text-[#3b82f6]">
                        {item.icon}
                      </div>
                      <div className="space-y-2">
                        <span className="inline-flex items-center rounded-md border border-[#1f1f1f] px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[#71717a]">
                          {item.label}
                        </span>
                        <h4 className="text-sm font-medium text-[#e2e8f0]">{item.title}</h4>
                        <p className="text-sm leading-6 text-[#94a3b8]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-[#1f1f1f] bg-white/[0.02] p-6 backdrop-blur-sm shadow-[0_0_0_1px_rgba(59,130,246,0.04)]">
              <div className="flex items-center justify-between gap-3 mb-6">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#71717a]">GitHub público</p>
                  <h3 className="text-base font-medium text-[#e2e8f0]">Repos pinned y visibles</h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#71717a]">
                  <Code2 className="w-4 h-4 text-[#3b82f6]" />
                  5 proyectos
                </div>
              </div>

              <div className="grid gap-4">
                {githubProjects.map((project) => (
                  <article
                    key={project.name}
                    className="group rounded-xl border border-[#1f1f1f] bg-[#111111] transition-all duration-200 hover:border-[#3b82f6]"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(activeProject === project.name ? null : project.name)}
                      className="w-full rounded-xl p-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70"
                      aria-expanded={activeProject === project.name}
                      aria-controls={`project-details-${project.name}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-sm font-medium text-[#e2e8f0]">{project.name}</h4>
                            <span className="rounded-md border border-[#1f1f1f] px-2 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[#71717a]">
                              {project.language}
                            </span>
                            <span className="rounded-md border border-[#1f1f1f] px-2 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[#3b82f6]">
                              {project.context}
                            </span>
                          </div>
                          <p className="text-sm leading-6 text-[#94a3b8]">{project.description}</p>
                        </div>
                        <ArrowRight className={`mt-1 w-4 h-4 text-[#71717a] transition-transform ${activeProject === project.name ? "rotate-90 text-[#3b82f6]" : "group-hover:translate-x-0.5 group-hover:text-[#3b82f6]"}`} />
                      </div>
                    </button>

                    {activeProject === project.name && (
                      <div id={`project-details-${project.name}`} className="border-t border-[#1f1f1f] px-4 pb-4 pt-0">
                        <div className="rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] p-4">
                          <div className="space-y-5 text-sm leading-6 text-[#94a3b8]">
                            <div>
                              <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#71717a] mb-2">README</p>
                              <p>{project.readme}</p>
                            </div>

                            <div>
                              <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#71717a] mb-2">Tecnologías</p>
                              <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                  <span key={tech} className="rounded-md border border-[#1f1f1f] bg-[#111111] px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[#e2e8f0]">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#71717a] mb-2">Mi contribución</p>
                              <ul className="space-y-2">
                                {project.contribution.map((detail) => (
                                  <li key={detail} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-5 h-5 text-[#71717a]" />
        </div>
      </section>

      {/* La Caja de Herramientas - Skills */}
      <section id="herramientas" className="min-h-screen flex flex-col justify-center py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Gemini_Generated_Image_xwzg20xwzg20xwzg.png" 
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/45 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        </div>
        <div className="max-w-[680px] w-full mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#3b82f6]">La Caja de Herramientas</h2>
            <div className="h-px bg-[#1f1f1f] flex-1" />
          </div>
          
          <div className="space-y-6">
            {toolCategories.map((category) => (
              <div key={category.title} className="rounded-xl border border-[#1f1f1f] bg-[#111111]/40 p-4 sm:p-5">
                <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.12em] text-[#71717a]">
                  {category.title}
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                  {category.items.map((item) => (
                    <SkillBadge key={item.label} icon={item.icon} label={item.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll to next section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-5 h-5 text-[#71717a]" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-[680px] w-full mx-auto text-center">
          <p className="text-xs font-mono text-[#3b82f6]">
            Valentín Milocco · 2026
          </p>
        </div>
      </footer>
    </main>
  )
}

function SkillBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono border border-[#1f1f1f] text-[#71717a] bg-[#111111]/80 rounded-md hover:border-[#3b82f6] hover:text-[#e2e8f0] transition-colors cursor-default">
      <span className="text-[#3b82f6]">{icon}</span>
      {label}
    </span>
  )
}
