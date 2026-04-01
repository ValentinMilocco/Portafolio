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
  Coffee,
  Zap,
  Sparkles,
  Heart,
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background Image - La Plata */}
        <div className="absolute inset-0 z-0">
          <img 
            src="Gemini_Generated_Image_ecobaoecobaoecob.png"
            alt=""
            className="w-full h-full object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/35 to-background" />
        </div>
        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
          {/* Profile Image Placeholder */}
          <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img 
                src="/WhatsApp Image 2026-03-30 at 19.34.03.jpeg" 
                alt="Foto de perfil de Valentin Milocco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Welcome Text */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Hola, soy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
              Valentin Milocco
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">24 años</p>
          </div>
          
          {/* Personal phrase */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <p className="text-lg md:text-xl text-pretty">
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
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </section>

      {/* Mi Trayectoria - Formación */}
      <section id="trayectoria" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Gemini_Generated_Image_x5v3q5x5v3q5x5v3.png" 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/35 to-background" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-2xl bg-primary/10">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">Mi Trayectoria</h2>
          </div>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted-foreground/30" />
            
            <div className="space-y-8">
              {/* Main achievement */}
              <div className="glass rounded-3xl p-8 shadow-sm relative">
                <div className="flex items-start gap-6">
                  <div className="relative z-10 w-[14px] h-[14px] rounded-full bg-primary ring-4 ring-background mt-1 shrink-0" />
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                      En progreso
                    </span>
                    <h3 className="text-xl md:text-2xl font-medium text-foreground">
                      Ingeniero en Sistemas de Informacion
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      UTN Facultad Regional La Plata
                    </p>
                    <p className="text-primary font-medium">
                      A una materia de recibirme - 2026
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Secondary education */}
              <div className="glass rounded-3xl p-8 shadow-sm opacity-80 relative">
                <div className="flex items-start gap-6">
                  <div className="relative z-10 w-[14px] h-[14px] rounded-full bg-muted-foreground ring-4 ring-background mt-1 shrink-0" />
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary text-muted-foreground rounded-full">
                      Completado
                    </span>
                    <h3 className="text-xl font-medium text-foreground">
                      Bachiller en Economia y Administracion
                    </h3>
                    <p className="text-muted-foreground">
                      Instituto Jesus Sacramentado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll to next section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Manos a la Obra - Experiencia */}
      <section id="manos-a-la-obra" className="py-24 px-6 bg-secondary/30 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">Manos a la Obra</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* ChangaYa! */}
            <article className="glass rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="aspect-video rounded-2xl bg-muted mb-5 overflow-hidden">
                <img 
                  src="/WhatsApp Image 2026-03-30 at 19.29.27.jpeg" 
                  alt="Proyecto ChangaYa!"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">ChangaYa!</h3>
              <p className="text-sm text-primary font-medium mb-3">Co-creador y Desarrollador</p>
              <p className="text-muted-foreground leading-relaxed">
                Un proyecto nacido de la amistad que se volvio real, gestionado de punta a punta.
              </p>
            </article>
            
            {/* Lab LINES */}
            <article className="glass rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="aspect-video rounded-2xl bg-muted mb-5 overflow-hidden">
                <img 
                  src="/WhatsApp Image 2026-03-30 at 19.32.22.jpeg" 
                  alt="Lab LINES UTN"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Lab LINES UTN</h3>
              <p className="text-sm text-primary font-medium mb-3">Arquitecto de Software</p>
              <p className="text-muted-foreground leading-relaxed">
                Lleve a cabo la migracion de arquitectura de software del proyecto "Cursos web scraping".
              </p>
            </article>
            
            {/* Tutor */}
            <article className="glass rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group md:col-span-2 lg:col-span-1">
              <div className="aspect-video rounded-2xl bg-muted mb-5 overflow-hidden flex items-center justify-center">
                <img 
                  src="utn-nacional.jpg" 
                  alt="Tutoría Académica UTN"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Tutor Academico UTN</h3>
              <p className="text-sm text-primary font-medium mb-3">Mentor de Ingresantes</p>
              <p className="text-muted-foreground leading-relaxed">
                Mentoria a estudiantes ingresantes, coordinado con las autoridades de la universidad.
              </p>
            </article>
          </div>
        </div>
        {/* Scroll to next section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* La Caja de Herramientas - Skills */}
      <section id="herramientas" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Gemini_Generated_Image_xwzg20xwzg20xwzg.png" 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/35 to-background" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">La Caja de Herramientas</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
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
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Por qué Nestlé - Visión */}
      <section id="por-que-nestle" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ChatGPT Image 31 mar 2026, 11_38_06 a.m..png" 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/35 to-background" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">Por que Nestle</h2>
          </div>
          
          <div className="glass rounded-3xl p-8 md:p-12 shadow-sm">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground text-pretty">
              Nestle forma parte de mi vida, en cada etapa, me acompaña.
            </p>
            <p className="text-lg text-muted-foreground mt-6 text-pretty">
              Mi objetivo es desarrollarme en una organización que defina los más altos estándares de su industria. Admiro profundamente la trayectoria de Nestlé y la robustez de sus procesos y protocolos globales. Es el escenario ideal para aplicar una visión sistémica: un ecosistema donde la eficiencia operativa y la excelencia histórica se cruzan para generar un impacto masivo y real.
            </p>
          </div>
        </div>
        {/* Scroll to next section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* El Gen Nescafé - Footer */}
      <section id="gen-nescafe" className="min-h-screen flex flex-col justify-center py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Coffee className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">El Gen Nescafe</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Mi personalidad contada a traves de lo que mas me representa: el cafe.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {/* Imagen del cafe - compartida */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insumos-para-maquinas-vaso-nescafe-lTk7dClCFGazmJC67WE9NVEt8Vfq3e.webp"
                alt="Cafe Nescafe"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Las 3 tarjetas */}
            <div className="space-y-4">
              {/* La Pausa */}
              <div className="glass rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">La Pausa</h3>
                  <p className="text-muted-foreground text-sm">
                    El momento para pensar con claridad antes de actuar.
                  </p>
                </div>
              </div>
              
              {/* La Energia */}
              <div className="glass rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">La Energia</h3>
                  <p className="text-muted-foreground text-sm">
                    El impulso para ejecutar y convertir ideas en realidad.
                  </p>
                </div>
              </div>
              
              {/* El Aroma */}
              <div className="glass rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">El Aroma</h3>
                  <p className="text-muted-foreground text-sm">
                    La personalidad y caracteristica que delata un buen cafe Nescafe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll to top button */}
        <button
          onClick={() => scrollToSection('hero')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Volver al inicio"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground rotate-180" />
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p className="text-muted-foreground">
            Hecho con dedicacion para Nestle Jovenes Profesionales
          </p>
          <p className="text-sm text-muted-foreground/70">
            Valentin Milocco - 2026
          </p>
        </div>
      </footer>
    </main>
  )
}

function SkillBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-sm text-foreground font-medium hover:shadow-md transition-shadow cursor-default">
      <span className="text-primary">{icon}</span>
      {label}
    </span>
  )
}
