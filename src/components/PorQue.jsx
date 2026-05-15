import { motion } from 'framer-motion'

const puntos = [
  {
    num: '01',
    titulo: 'Diseño\ncon carácter',
    texto: 'Nada genérico. Cada proyecto tiene su propia identidad visual, construida desde cero para diferenciarse en su sector.',
  },
  {
    num: '02',
    titulo: 'Stack\nmoderno',
    texto: 'React, Next.js, Tailwind, Supabase. Tecnologías actuales que garantizan rendimiento, escalabilidad y mantenibilidad real.',
  },
  {
    num: '03',
    titulo: 'Entrega\nrápida',
    texto: 'Primeras versiones en días. Iteraciones cortas con feedback constante. Sin burocracia ni entregas en negro.',
  },
  {
    num: '04',
    titulo: 'Soporte\nreal',
    texto: 'No desaparezco tras el lanzamiento. Respondo, actualizo, y acompaño el crecimiento de tu proyecto a largo plazo.',
  },
]

export default function PorQue() {
  return (
    <section className="bg-paper px-8 md:px-16 lg:px-24 py-28" id="por-que">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <motion.div
          className="mb-20 border-b border-ink pb-6 flex items-baseline justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-[clamp(36px,5vw,64px)] leading-none uppercase tracking-tight">
            Por qué yo
          </h2>
          <span className="font-body text-xs text-muted uppercase tracking-widest hidden md:block">
            4 razones concretas
          </span>
        </motion.div>

        {/* Grid 2×2 editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {puntos.map((p, i) => (
            <motion.div
              key={p.num}
              className={`py-14 pr-0 md:pr-16 ${i % 2 === 0 ? 'md:border-r border-subtle' : 'md:pl-16'} ${i < 2 ? 'border-b border-subtle' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <span className="font-body text-xs text-muted uppercase tracking-widest block mb-8">
                {p.num}
              </span>
              <h3 className="font-display font-bold text-[clamp(32px,3.5vw,56px)] leading-tight mb-6 whitespace-pre-line">
                {p.titulo}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
                {p.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
