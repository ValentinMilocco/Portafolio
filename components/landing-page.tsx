"use client"

import { 
  GraduationCap, 
  Rocket, 
  Users, 
  Wrench,
  Database,
  BarChart3,
  GitBranch,
  FileSpreadsheet,
  MapPin,
  ChevronDown
} from "lucide-react"

export function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e2e8f0]">
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
          <ChevronDown className="w-5 h-5 text-[#71717a]" />
        </div>
      </section>

      {/* Manos a la Obra - Experiencia */}
      <section id="manos-a-la-obra" className="py-16 px-6 relative">
        <div className="max-w-[680px] w-full mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#3b82f6]">Manos a la Obra</h2>
            <div className="h-px bg-[#1f1f1f] flex-1" />
          </div>
          
          <div className="grid gap-4">
            {/* ChangaYa! */}
            <article className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-5 hover:border-[#3b82f6] transition-colors duration-200 group">
              <div className="aspect-video rounded-lg bg-[#0a0a0a] mb-4 overflow-hidden border border-[#1f1f1f]">
                <img 
                  src="/WhatsApp Image 2026-03-30 at 19.29.27.jpeg" 
                  alt="Proyecto ChangaYa!"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs font-mono text-[#3b82f6] mb-2">Co-creador y Desarrollador</p>
              <h3 className="text-base font-medium text-[#e2e8f0] mb-2">ChangaYa!</h3>
              <p className="text-sm text-[#71717a] leading-[1.7]">
                Un proyecto nacido de la amistad que se volvio real, gestionado de punta a punta.
              </p>
            </article>
            
            {/* Lab LINES */}
            <article className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-5 hover:border-[#3b82f6] transition-colors duration-200 group">
              <div className="aspect-video rounded-lg bg-[#0a0a0a] mb-4 overflow-hidden border border-[#1f1f1f]">
                <img 
                  src="/WhatsApp Image 2026-03-30 at 19.32.22.jpeg" 
                  alt="Lab LINES UTN"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs font-mono text-[#3b82f6] mb-2">Arquitecto de Software</p>
              <h3 className="text-base font-medium text-[#e2e8f0] mb-2">Lab LINES UTN</h3>
              <p className="text-sm text-[#71717a] leading-[1.7]">
                Lleve a cabo la migracion de arquitectura de software del proyecto "Cursos web scraping".
              </p>
            </article>
            
            {/* Tutor */}
            <article className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-5 hover:border-[#3b82f6] transition-colors duration-200 group">
              <div className="aspect-video rounded-lg bg-[#0a0a0a] mb-4 overflow-hidden flex items-center justify-center border border-[#1f1f1f]">
                <img 
                  src="utn-nacional.jpg" 
                  alt="Tutoría Académica UTN"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs font-mono text-[#3b82f6] mb-2">Mentor de Ingresantes</p>
              <h3 className="text-base font-medium text-[#e2e8f0] mb-2">Tutor Academico UTN</h3>
              <p className="text-sm text-[#71717a] leading-[1.7]">
                Mentoria a estudiantes ingresantes, coordinado con las autoridades de la universidad.
              </p>
            </article>
          </div>
        </div>
        {/* Scroll to next section */}
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
          
          <div className="flex flex-wrap gap-2">
            <SkillBadge icon={<FileSpreadsheet className="w-4 h-4" />} label="Jira" />
            <SkillBadge icon={<BarChart3 className="w-4 h-4" />} label="Power BI" />
            <SkillBadge icon={<Database className="w-4 h-4" />} label="SQL" />
            <SkillBadge icon={<GitBranch className="w-4 h-4" />} label="Git" />
            <SkillBadge icon={<FileSpreadsheet className="w-4 h-4" />} label="Excel Avanzado" />
            <SkillBadge icon={<Users className="w-4 h-4" />} label="Scrum" />
            <SkillBadge icon={<BarChart3 className="w-4 h-4" />} label="Analisis de Datos" />
            <SkillBadge icon={<Rocket className="w-4 h-4" />} label="Gestion de Proyectos" />
            <SkillBadge icon={<Database className="w-4 h-4" />} label="Python" />
            <SkillBadge icon={<GitBranch className="w-4 h-4" />} label="React" />
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
    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono border border-[#1f1f1f] text-[#71717a] bg-transparent rounded-md hover:border-[#3b82f6] hover:text-[#e2e8f0] transition-colors cursor-default">
      <span className="text-[#3b82f6]">{icon}</span>
      {label}
    </span>
  )
}
