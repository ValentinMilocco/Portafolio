"use client"

import { useState } from "react"
import Image from "next/image"
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
  ChevronUp,
  Sparkles
} from "lucide-react"

export function LandingPage() {
  const [activeExperienceId, setActiveExperienceId] = useState("changaya")
  const [experiencesExpanded, setExperiencesExpanded] = useState(true)
  const MOBILE_L_MAX_WIDTH = 425

  const smoothScrollToTarget = (targetId: string, offset = 0) => {
    const targetElement = targetId === "top" ? null : document.getElementById(targetId)

    if (window.matchMedia(`(max-width: ${MOBILE_L_MAX_WIDTH}px)`).matches) {
      const targetY =
        targetId === "top"
          ? 0
          : Math.max((targetElement?.getBoundingClientRect().top ?? 0) + window.scrollY - offset, 0)

      window.scrollTo({ top: targetY, behavior: "auto" })

      return
    }

    const targetY =
      targetId === "top"
        ? 0
        : Math.max((targetElement?.getBoundingClientRect().top ?? 0) + window.scrollY - offset, 0)

    const startY = window.scrollY
    const distance = targetY - startY
    const duration = 900
    let startTime: number | null = null

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutCubic(progress)

      window.scrollTo({ top: startY + distance * eased })

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  const jumpToTarget = (targetId: string, offset = 0) => {
    const targetY =
      targetId === "top"
        ? 0
        : Math.max((document.getElementById(targetId)?.getBoundingClientRect().top ?? 0) + window.scrollY - offset, 0)

    window.scrollTo({ top: targetY, behavior: "auto" })
  }

  const focusExperienceDetail = () => {
    // Wait two frames so React can commit state changes and layout settles before measuring target position.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        jumpToTarget("experience-detail-card", 16)
      })
    })
  }

  const experienceTimeline = [
    {
      id: "changaya",
      period: "03/2025 - 02/2026",
      title: "ChangaYa",
      role: "Co-creador y desarrollador",
      track: "Producto",
      summary: "Proyecto final UTN FRLP orientado a resolver tareas puntuales con un enfoque mobile-first y arquitectura escalable.",
      stack: ["TypeScript", "React Native", "Expo", "Supabase", "Socket.IO"],
      highlights: [
        "Publicación y gestión de changas.",
        "Autenticación y flujo de perfiles.",
        "Chat en tiempo real e integración frontend-backend."
      ],
      repo: "https://github.com/ValentinMilocco/ChangaYa",
    },
    {
      id: "webscrapping",
      period: "03/2025 - 01/2026",
      title: "Webscrapping - Lab LINES UTN",
      role: "Arquitecto de software",
      track: "Academia",
      summary: "Migración y ordenamiento de la arquitectura del proyecto de cursos de web scraping, con foco en mantenibilidad.",
      stack: ["Arquitectura de Software", "Refactor", "Buenas prácticas", "Gestión técnica"],
      highlights: [
        "Reorganización estructural del proyecto.",
        "Mejora de calidad técnica y legibilidad.",
        "Acompañamiento del ciclo académico del laboratorio."
      ],
      repo: null,
    },
    {
      id: "dondecomo",
      period: "08/2024 - 02/2025",
      title: "dondeComo",
      role: "Contributor mobile",
      track: "Mobile",
      summary: "Aplicación mobile para descubrir restaurantes con geolocalización, navegación modular y autenticación.",
      stack: ["TypeScript", "React Native", "Expo", "Google Maps API", "Kotlin"],
      highlights: [
        "Búsqueda y filtrado de resultados.",
        "Mejora de experiencia en listas y pantallas.",
        "Optimización de componentes y contexto global."
      ],
      repo: "https://github.com/ValentinMilocco/dondeComo",
    },
    {
      id: "vetsoft",
      period: "03/2024 - 07/2024",
      title: "vetsoft",
      role: "Contributor backend",
      track: "Web",
      summary: "Aplicación web para gestión de veterinarias con validaciones de negocio, pruebas y despliegue local.",
      stack: ["Python", "Django", "SQLite", "Docker", "Playwright", "Ruff"],
      highlights: [
        "Validaciones de dominio y formularios.",
        "Corrección de templates y mensajes.",
        "Mejora de cobertura de pruebas y calidad estática."
      ],
      repo: "https://github.com/ValentinMilocco/vetsoft",
    },
    {
      id: "bancofront",
      period: "07/2023 - 02/2024",
      title: "BancoFrontend",
      role: "Frontend developer",
      track: "Web",
      summary: "Frontend bancario para operaciones de clientes, cuentas y transferencias con rutas y consumo de APIs.",
      stack: ["JavaScript", "React", "React Router", "Bootstrap"],
      highlights: [
        "Navegación por vistas operativas.",
        "Integración con APIs de autenticación y operaciones.",
        "Refinamiento de interfaz para flujo bancario."
      ],
      repo: "https://github.com/ValentinMilocco/BancoFrontend",
    },
    {
      id: "tutorias",
      period: "01/2023 - 01/2024",
      title: "Tutorías UTN",
      role: "Mentor de ingresantes",
      track: "Formación",
      summary: "Acompañamiento de estudiantes en su ingreso universitario, coordinando contenidos y seguimiento académico.",
      stack: ["Mentoría", "Comunicación", "Coordinación", "Trabajo en equipo"],
      highlights: [
        "Seguimiento de ingresantes y dudas académicas.",
        "Apoyo en adaptación al ritmo universitario.",
        "Trabajo conjunto con equipo docente y autoridades."
      ],
      repo: null,
    },
  ]

  const selectedExperience = experienceTimeline.find((item) => item.id === activeExperienceId) ?? experienceTimeline[0]

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
    <main className="relative min-h-screen overflow-x-clip bg-[#0a0a0a] text-[#e2e8f0]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_28%)]" />
      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-20 sm:px-6 sm:pt-24 sm:pb-24 md:min-h-screen md:py-16">
        {/* Background Image - La Plata */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Gemini_Generated_Image_ecobaoecobaoecob.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/35 via-[#0a0a0a]/65 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[680px] space-y-5 text-center sm:space-y-6">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
            <div className="relative w-full h-full rounded-full overflow-hidden border border-[#1f1f1f]">
              <Image
                src="/WhatsApp Image 2026-03-30 at 19.34.03.jpeg"
                alt="Foto de perfil de Valentin Milocco"
                fill
                priority
                sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Welcome Text */}
          <div className="space-y-2.5 sm:space-y-3">
            <p className="inline-flex items-center px-2.5 py-1 text-xs font-mono border border-[#1f1f1f] text-[#3b82f6] bg-transparent rounded-md">Hola, soy</p>
            <h1 className="text-balance text-2xl font-medium text-[#e2e8f0] sm:text-3xl md:text-4xl">
              Valentin Milocco
            </h1>
            <p className="text-sm text-[#71717a]">24 años</p>
          </div>
          
          {/* Personal phrase */}
          <div className="mx-auto flex max-w-sm items-center justify-center gap-2 text-[#71717a]">
            <MapPin className="h-4 w-4 shrink-0 text-[#3b82f6]" />
            <p className="text-pretty text-sm leading-6">
              De 9 de Julio a La Plata, construyendo mi camino
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button
          onClick={() => smoothScrollToTarget("trayectoria", 12)}
          className="z-10 mt-10 cursor-pointer animate-bounce transition-opacity hover:opacity-70 md:absolute md:bottom-12 md:left-1/2 md:mt-0 md:-translate-x-1/2"
          aria-label="Ir a la siguiente sección"
        >
          <ChevronDown className="w-5 h-5 text-[#71717a]" />
        </button>
      </section>

      {/* Mi Trayectoria - Formación */}
      <section id="trayectoria" className="relative flex min-h-[100svh] flex-col justify-center overflow-x-hidden px-4 pt-16 pb-24 sm:px-6 sm:py-16 md:min-h-screen md:pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Gemini_Generated_Image_x5v3q5x5v3q5x5v3.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/45 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[680px]">
          <div className="mb-8 flex items-center gap-3 sm:mb-10">
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
                    <h3 className="text-base font-medium leading-6 text-[#e2e8f0]">
                      Ingeniero en Sistemas de Informacion
                </h3>
                    <p className="text-sm leading-6 text-[#71717a]">
                      UTN Facultad Regional La Plata
                </p>
                    <p className="text-sm leading-6 text-[#3b82f6]">
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
                <h3 className="text-base font-medium leading-6 text-[#e2e8f0]">
                      Bachiller en Economia y Administracion
                </h3>
                <p className="text-sm leading-6 text-[#71717a]">
                      Instituto Jesus Sacramentado
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll to next section */}
        <div className="relative z-20 mt-8 flex justify-center pb-2 md:absolute md:bottom-8 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:pb-0">
          <button
            type="button"
            onClick={() => smoothScrollToTarget("experiencia", 12)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1f1f1f] bg-[#0a0a0a]/85 text-[#94a3b8] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-[#3b82f6] hover:text-[#e2e8f0]"
            aria-label="Ir a experiencia"
          >
            <ChevronDown className="w-5 h-5 text-[#71717a]" />
          </button>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 sm:py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1080px]">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#3b82f6]">Experiencia</h2>
            <div className="h-px bg-[#1f1f1f] flex-1" />
          </div>

          <p className="mb-8 max-w-2xl text-sm leading-7 text-[#94a3b8] sm:mb-10">
            Una línea de tiempo de mi recorrido: academia, proyectos reales y construcción de producto. Elegí un hito para ver su detalle.
          </p>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-2xl border border-[#1f1f1f] bg-white/[0.02] p-4 shadow-[0_0_0_1px_rgba(59,130,246,0.04)] backdrop-blur-sm sm:p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1f1f1f] bg-[#111111] text-[#3b82f6]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#71717a]">Timeline profesional</p>
                  <h3 className="text-base font-medium text-[#e2e8f0]">2023 - 2026</h3>
                </div>
              </div>

              <div className="space-y-3">
                {(experiencesExpanded ? experienceTimeline : [selectedExperience]).map((item, index) => {
                  const isActive = selectedExperience.id === item.id

                  return (
                    <button
                      key={item.id}
                      id={`experience-${item.id}`}
                      type="button"
                      onClick={() => {
                        setActiveExperienceId(item.id)
                        setExperiencesExpanded(false)
                        focusExperienceDetail()
                      }}
                      className={`group relative w-full rounded-xl border p-3 text-left transition-all duration-300 sm:p-4 ${isActive ? "border-[#3b82f6] bg-[#111111] shadow-[0_0_0_1px_rgba(59,130,246,0.22)]" : "border-[#1f1f1f] bg-[#111111]/75 hover:border-[#3b82f6] hover:-translate-y-0.5"}`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${isActive ? "border-[#3b82f6] bg-[#3b82f6]/10 text-[#3b82f6]" : "border-[#1f1f1f] bg-[#0a0a0a] text-[#71717a]"}`}>
                          <span className="text-[11px] font-mono">{String(index + 1).padStart(2, "0")}</span>
                        </div>

                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className={`text-[11px] font-mono uppercase tracking-[0.1em] ${isActive ? "text-[#3b82f6]" : "text-[#94a3b8]"}`}>{item.period}</p>
                            <span className="rounded-md border border-[#1f1f1f] px-2 py-1 text-[10px] font-mono uppercase tracking-[0.08em] text-[#71717a]">
                              {item.track}
                            </span>
                            {isActive && (
                              <span className="rounded-md border border-[#3b82f6] px-2 py-1 text-[10px] font-mono uppercase tracking-[0.08em] text-[#3b82f6]">
                                Seleccionado
                              </span>
                            )}
                          </div>

                          <h4 className="text-sm font-medium text-[#e2e8f0]">{item.title}</h4>
                          <p className="text-sm text-[#94a3b8]">{item.role}</p>
                          <p className="text-sm leading-6 text-[#94a3b8]">{item.summary}</p>
                        </div>

                        <ArrowRight className={`mt-1 hidden h-4 w-4 shrink-0 transition-transform sm:block ${isActive ? "rotate-90 text-[#3b82f6]" : "text-[#71717a] group-hover:text-[#3b82f6]"}`} />
                      </div>
                    </button>
                  )
                })}

                <div className="flex justify-center pt-1">
                  <button
                    type="button"
                    onClick={() => setExperiencesExpanded((current) => !current)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f] bg-[#0a0a0a] px-3 py-2 text-[11px] font-mono uppercase tracking-[0.08em] text-[#94a3b8] transition-colors hover:border-[#3b82f6] hover:text-[#e2e8f0]"
                    aria-label={experiencesExpanded ? "Ocultar experiencias" : "Ver todas las experiencias"}
                  >
                    {experiencesExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Ocultar
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Ver todas
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>

            <article id="experience-detail-card" className="rounded-2xl border border-[#1f1f1f] bg-white/[0.02] p-4 shadow-[0_0_0_1px_rgba(59,130,246,0.04)] backdrop-blur-sm sm:p-6">
              <div className="mb-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#71717a]">Detalle del hito</p>
                  <h3 className="text-base font-medium text-[#e2e8f0]">{selectedExperience.title}</h3>
                </div>
                <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#3b82f6] sm:text-xs">
                  {selectedExperience.period}
                </p>
              </div>

              <div key={selectedExperience.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-sm leading-6 text-[#94a3b8] mb-5">
                  {selectedExperience.summary}
                </p>

                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#71717a] mb-2">Tecnologías y enfoque</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.stack.map((tech) => (
                        <span key={tech} className="rounded-md border border-[#1f1f1f] bg-[#111111] px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[#e2e8f0]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#71717a] mb-2">Aportes clave</p>
                    <ul className="space-y-2 text-sm leading-6 text-[#94a3b8]">
                      {selectedExperience.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedExperience.repo ? (
                    <a
                      href={selectedExperience.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-[#3b82f6] bg-[#3b82f6] px-3 py-2 text-xs font-mono uppercase tracking-[0.08em] text-[#0a0a0a] transition-opacity hover:opacity-90"
                    >
                      Ver repositorio
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <p className="text-xs text-[#71717a]">Este hito corresponde a una experiencia académica sin repositorio público asociado.</p>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="relative z-20 mt-8 flex justify-center pb-2 md:absolute md:bottom-8 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:pb-0">
          <button
            type="button"
            onClick={() => smoothScrollToTarget("herramientas", 12)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1f1f1f] bg-[#0a0a0a]/85 text-[#94a3b8] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-[#3b82f6] hover:text-[#e2e8f0]"
            aria-label="Ir a herramientas"
          >
            <ChevronDown className="w-5 h-5 text-[#71717a]" />
          </button>
        </div>
      </section>

      {/* La Caja de Herramientas - Skills */}
      <section id="herramientas" className="relative flex min-h-[100svh] flex-col justify-center overflow-x-hidden px-4 pt-16 pb-24 sm:px-6 sm:py-16 md:min-h-screen md:pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Gemini_Generated_Image_xwzg20xwzg20xwzg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/45 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[680px]">
          <div className="mb-8 flex items-center gap-3 sm:mb-10">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#3b82f6]">La Caja de Herramientas</h2>
            <div className="h-px bg-[#1f1f1f] flex-1" />
          </div>
          
          <div className="space-y-6">
            {toolCategories.map((category) => (
              <div key={category.title} className="rounded-xl border border-[#1f1f1f] bg-[#111111]/40 p-4 sm:p-5">
                <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.12em] text-[#71717a]">
                  {category.title}
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <SkillBadge key={item.label} icon={item.icon} label={item.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll to next section */}
        <div className="relative z-20 mt-8 flex justify-center pb-2 md:absolute md:bottom-8 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:pb-0">
          <button
            type="button"
            onClick={() => smoothScrollToTarget("top")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1f1f1f] bg-[#0a0a0a]/85 text-[#94a3b8] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-[#3b82f6] hover:text-[#e2e8f0]"
            aria-label="Volver al inicio"
          >
            <ChevronUp className="w-5 h-5 text-[#71717a]" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] px-4 py-8 sm:px-6">
        <div className="mx-auto w-full max-w-[680px] text-center">
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
    <span className="inline-flex w-full items-center gap-2 rounded-md border border-[#1f1f1f] bg-[#111111]/80 px-3 py-2 text-[11px] leading-tight text-[#71717a] transition-colors hover:border-[#3b82f6] hover:text-[#e2e8f0] sm:text-xs">
      <span className="text-[#3b82f6]">{icon}</span>
      {label}
    </span>
  )
}
