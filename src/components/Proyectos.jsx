import { motion } from 'framer-motion'

const proyectos = [
  {
    id: '01',
    titulo: 'ORÍGENES',
    sector: 'Restauración',
    descripcion: 'Identidad digital y reservas online para restaurante gastronómico.',
  },
  {
    id: '02',
    titulo: 'Portal Podcast',
    sector: 'Media',
    descripcion: 'Plataforma de distribución de contenido y comunidad de oyentes.',
  },
  {
    id: '03',
    titulo: 'NutriDoc AI',
    sector: 'Salud',
    descripcion: 'App de nutrición personalizada potenciada por inteligencia artificial.',
  },
]

function ImagePlaceholder({ titulo, id }) {
  return (
    <div className="w-full aspect-[3/2] bg-ink relative overflow-hidden group-hover:opacity-80 transition-opacity duration-400">
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <span className="font-body text-xs text-paper/30 uppercase tracking-widest">
          {id}
        </span>
        <span className="font-display font-bold text-[clamp(28px,3vw,42px)] text-paper leading-tight uppercase">
          {titulo}
        </span>
      </div>
    </div>
  )
}

export default function Proyectos() {
  return (
    <section className="bg-paper px-8 md:px-16 lg:px-24 py-28" id="proyectos">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <motion.div
          className="flex items-baseline justify-between mb-20 border-b border-ink pb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-[clamp(36px,5vw,64px)] leading-none uppercase tracking-tight">
            Proyectos
          </h2>
          <span className="font-body text-xs text-muted uppercase tracking-widest hidden md:block">
            Trabajo seleccionado
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {proyectos.map((p, i) => (
            <motion.article
              key={p.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ImagePlaceholder titulo={p.titulo} id={p.id} />
              <div className="pt-5 pb-10 border-b border-subtle">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-xs text-muted uppercase tracking-widest">
                    {p.sector}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">{p.titulo}</h3>
                <p className="font-body text-xs text-muted leading-relaxed mb-4">
                  {p.descripcion}
                </p>
                <a
                  href="#"
                  className="font-body text-xs uppercase tracking-widest link-underline"
                >
                  Ver demo →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
