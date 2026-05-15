import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const NAV_LINKS = ['Proyectos', 'Sobre mí', 'Contacto'] as const

const PROJECTS = [
  {
    id: '01',
    name: 'ORÍGENES',
    sector: 'Restauración',
    description:
      'Identidad digital para restaurante gastronómico. Carta online, reservas y experiencia de marca alineada con la propuesta culinaria.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://origenes-demo.vercel.app/',
    accent: '#C0623A',
    bg: '#fdf8f4',
  },
  {
    id: '02',
    name: 'Alba Corregidor',
    sector: 'Educación',
    description:
      'Landing page para profesora particular. Convierte visitas en contactos con métricas de confianza, formulario y canal WhatsApp integrado.',
    stack: ['Astro', 'TypeScript', 'Cloudinary'],
    url: 'https://landing-alba.vercel.app/',
    accent: '#2E7FC0',
    bg: '#f4f8fd',
  },
  {
    id: '03',
    name: 'SmartStudia',
    sector: 'EdTech · IA',
    description:
      'Plataforma SaaS educativa con generación de contenido por IA: resúmenes, exámenes y vídeos. Autenticación y pagos incluidos.',
    stack: ['React', 'Firebase', 'Gemini AI', 'PayPal'],
    url: 'https://www.smartstudia.com/home',
    accent: '#7040B0',
    bg: '#f7f4fd',
  },
  {
    id: '04',
    name: 'Consultoría Rabago AI',
    sector: 'IA · Consultoría',
    description:
      'Portfolio de proyectos de IA aplicada: asistentes RAG, pipelines de datos y herramientas internas con modelos de lenguaje.',
    stack: ['Python', 'LangChain', 'Gemini API'],
    url: 'https://consultoria-rabago-ai.vercel.app/',
    accent: '#1A9970',
    bg: '#f3fdf9',
  },
] as const

const SKILLS = [
  'React', 'TypeScript', 'Next.js', 'Astro',
  'Tailwind CSS', 'Python', 'FastAPI',
  'Supabase', 'Firebase', 'LangChain',
  'Gemini API', 'Vercel',
] as const

// ---------------------------------------------------------------------------
// Logo inline SVG
// ---------------------------------------------------------------------------

const Logo = () => (
  <svg width="18" height="18" viewBox="0 0 256 256" fill="none">
    <path
      fill="rgb(84, 84, 84)"
      d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
    />
  </svg>
)

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center pt-4 sm:pt-5 pb-3 px-4 sm:px-8 gap-2 sm:gap-3 backdrop-blur-sm">
      <a
        href="#"
        className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0"
        style={{ backgroundColor: '#EDEDED' }}
        aria-label="Inicio"
      >
        <Logo />
      </a>
      <div
        className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
        style={{ backgroundColor: '#EDEDED' }}
      >
        {NAV_LINKS.map((link) => {
          const id = link === 'Sobre mí' ? 'sobre-mi' : link.toLowerCase()
          return (
            <a
              key={link}
              href={`#${id}`}
              className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {link}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.setAttribute('webkit-playsinline', '')
    video.muted = true
    video.load()
    video.play().catch(() => {})
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-[#f0f0ee]"
      style={{ minHeight: 'calc(100vh - 72px)' }}
    >
      <video
        ref={videoRef}
        className="absolute inset-3 sm:inset-5 md:inset-8 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] h-[calc(100%-1.5rem)] sm:h-[calc(100%-2.5rem)] md:h-[calc(100%-4rem)] object-cover rounded-2xl"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div
        className="relative z-10 flex flex-col"
        style={{ minHeight: 'inherit' }}
      >
        <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-sm">
            <motion.span
              className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-gray-500 mb-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Disponible para nuevos proyectos
            </motion.span>

            <motion.h1
              className="text-[2.6rem] sm:text-[3.4rem] leading-[1.05] font-medium text-gray-900 tracking-tight mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Rabago<br />
              <span className="italic font-normal">Design.</span>
            </motion.h1>

            <motion.p
              className="text-[13px] text-gray-500 font-normal mb-5 leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Diseño web que convierte.<br />
              Sin plantillas. Sin ruido. Con criterio.
            </motion.p>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group"
              >
                Ver proyectos
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#contacto"
                className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group inline-flex items-center gap-1"
              >
                Contactar
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">↓</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Animated project card
// ---------------------------------------------------------------------------

type Project = (typeof PROJECTS)[number]

function AnimatedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="relative rounded-2xl h-full"
      style={{ padding: '2px', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      {/* Borde animado — conic-gradient giratorio */}
      <div
        className="project-card-border absolute inset-0"
        style={
          {
            '--card-accent': project.accent,
            animationDelay: `${-index * 1.25}s`,
          } as React.CSSProperties
        }
      />

      {/* Contenido de la card */}
      <article
        className="relative p-8 flex flex-col h-full rounded-[calc(1rem-2px)]"
        style={{ backgroundColor: project.bg }}
      >
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-[11px] font-medium uppercase tracking-widest"
            style={{ color: project.accent }}
          >
            {project.sector}
          </span>
          <span className="text-[11px] text-gray-300 font-normal tabular-nums">
            {project.id}
          </span>
        </div>

        <h3 className="text-[1.4rem] sm:text-[1.65rem] font-medium text-gray-900 tracking-tight mb-3 leading-snug">
          {project.name}
        </h3>

        <p className="text-[13px] text-gray-500 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Stack tags con color de acento */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium rounded-full px-2.5 py-1"
              style={{
                color: project.accent,
                backgroundColor: `${project.accent}1A`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[12px] font-medium transition-colors duration-200 group/link self-start"
          style={{ color: project.accent }}
        >
          Ver proyecto
          <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
        </a>
      </article>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Proyectos
// ---------------------------------------------------------------------------

function Proyectos() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function updateArrows() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  function scroll(dir: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    const firstCard = el.children[0] as HTMLElement
    const amount = firstCard ? firstCard.offsetWidth + 16 : 360
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section id="proyectos" className="bg-[#f0f0ee] py-24">
      {/* Cabecera */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-baseline justify-between mb-14 border-b border-gray-300 pb-5 px-6 sm:px-12 md:px-20 lg:px-28"
      >
        <h2 className="text-[1.5rem] sm:text-[1.75rem] font-medium text-gray-900 tracking-tight">
          Proyectos
        </h2>
        <span className="text-[12px] text-gray-400 font-normal hidden sm:block">
          Trabajo seleccionado
        </span>
      </motion.div>

      {/* Carrusel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 sm:px-12 md:px-20 lg:px-28 pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={updateArrows}
        >
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] lg:w-[380px]"
            >
              <AnimatedCard project={project} index={i} />
            </div>
          ))}
          {/* Spacer final para que la última card no quede cortada */}
          <div className="shrink-0 w-6 sm:w-12 md:w-20 lg:w-28" aria-hidden="true" />
        </div>

        {/* Botón anterior */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            aria-label="Anterior"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {/* Botón siguiente */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label="Siguiente"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Sobre mí
// ---------------------------------------------------------------------------

function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-[#f0f0ee] py-24 px-6 sm:px-12 md:px-20 lg:px-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-baseline justify-between mb-14 border-b border-gray-300 pb-5"
      >
        <h2 className="text-[1.5rem] sm:text-[1.75rem] font-medium text-gray-900 tracking-tight">
          Sobre mí
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[1.1rem] sm:text-[1.2rem] font-medium text-gray-900 leading-relaxed mb-6 tracking-tight">
            Manufacturing Manager con más de 20 años de experiencia industrial,
            en transición hacia el desarrollo web y la integración de inteligencia artificial.
          </p>
          <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
            Combino una visión de negocio sólida con stack técnico moderno para
            construir productos digitales que funcionan de verdad. Actualmente
            cursando DAM (Desarrollo de Aplicaciones Multiplataforma) y
            especializándome en aplicaciones con IA.
          </p>
          <p className="text-[13px] text-gray-500 leading-relaxed">
            Me interesa el espacio donde la tecnología resuelve problemas reales:
            automatización de procesos, herramientas internas y productos con IA
            para sectores tradicionales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-5">
            Stack técnico
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-[12px] font-medium text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-3">
              Actualmente
            </p>
            <p className="text-[13px] text-gray-600">
              Proyectos freelance de diseño y desarrollo web · IA aplicada a negocio
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Contacto
// ---------------------------------------------------------------------------

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Formulario enviado:', form)
    setEnviado(true)
    setForm({ nombre: '', email: '', mensaje: '' })
    setTimeout(() => setEnviado(false), 5000)
  }

  const inputClass =
    'w-full bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-[13px] text-white placeholder-white/25 py-3 transition-colors duration-300 resize-none'

  return (
    <section id="contacto" className="bg-[#0A0A0A] py-24 px-6 sm:px-12 md:px-20 lg:px-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-baseline justify-between mb-14 border-b border-white/10 pb-5"
      >
        <h2 className="text-[1.5rem] sm:text-[1.75rem] font-medium text-white tracking-tight">
          Contacto
        </h2>
        <span className="text-[12px] text-white/30 font-normal hidden sm:block">
          Hablemos
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[1.4rem] sm:text-[1.75rem] font-medium text-white leading-tight tracking-tight mb-8 italic">
            Tienes un proyecto.<br />
            Yo tengo la solución.
          </p>
          <a
            href="mailto:rabagoai01@gmail.com"
            className="text-[13px] text-white/50 hover:text-white transition-colors duration-200 block mb-6"
          >
            rabagoai01@gmail.com
          </a>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/francisco-garcia-rabago-445b20aa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium text-white/40 hover:text-white transition-colors duration-200 group inline-flex items-center gap-1"
            >
              LinkedIn
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="https://github.com/rabagoAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium text-white/40 hover:text-white transition-colors duration-200 group inline-flex items-center gap-1"
            >
              GitHub
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {enviado ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-8"
            >
              <p className="text-[1.2rem] font-medium text-white italic mb-2">Recibido.</p>
              <p className="text-[13px] text-white/40">Te respondo en menos de 24h.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-[11px] font-medium text-white/35 uppercase tracking-widest block mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[11px] font-medium text-white/35 uppercase tracking-widest block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[11px] font-medium text-white/35 uppercase tracking-widest block mb-1">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntame tu proyecto..."
                  required
                  rows={3}
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-white border border-white/25 rounded-full px-5 py-2.5 hover:bg-white hover:text-gray-900 transition-all duration-200 group"
              >
                Enviar mensaje
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 px-6 sm:px-12 md:px-20 lg:px-28 py-7">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[13px] font-medium text-white/60">RabagoDesign</span>
        <span className="text-[12px] text-white/25">
          © {new Date().getFullYear()} — rabagoai01@gmail.com
        </span>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/francisco-garcia-rabago-445b20aa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-white/30 hover:text-white/70 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rabagoAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-white/30 hover:text-white/70 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

export default function App() {
  return (
    <div className="bg-[#f0f0ee]">
      <Navbar />
      <Hero />
      <Proyectos />
      <SobreMi />
      <Contacto />
      <Footer />
    </div>
  )
}
