import { motion } from 'framer-motion'

const servicios = [
  {
    num: '01',
    titulo: 'Diseño web a medida',
    descripcion:
      'Sitios únicos construidos desde cero. Cada decisión de diseño responde a un objetivo concreto. Sin plantillas, sin atajos.',
  },
  {
    num: '02',
    titulo: 'Tiendas online',
    descripcion:
      'E-commerce diseñado para vender. Experiencia de compra optimizada, pasarelas integradas, gestión de producto clara.',
  },
  {
    num: '03',
    titulo: 'Landing pages de alto impacto',
    descripcion:
      'Páginas de aterrizaje con un único objetivo: convertir. Velocidad máxima, jerarquía clara, copy orientado a acción.',
  },
]

export default function Servicios() {
  return (
    <section className="bg-paper px-8 md:px-16 lg:px-24 py-28" id="servicios">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera de sección */}
        <motion.div
          className="flex items-baseline justify-between mb-20 border-b border-ink pb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-[clamp(36px,5vw,64px)] leading-none uppercase tracking-tight">
            Servicios
          </h2>
          <span className="font-body text-xs text-muted uppercase tracking-widest hidden md:block">
            Lo que hago
          </span>
        </motion.div>

        {/* Lista de servicios */}
        <div>
          {servicios.map((s, i) => (
            <motion.div
              key={s.num}
              className="grid grid-cols-12 gap-6 py-14 border-b border-subtle items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Número */}
              <div className="col-span-2 md:col-span-1">
                <span className="font-body text-xs text-muted uppercase tracking-widest">
                  {s.num}
                </span>
              </div>

              {/* Título */}
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display font-bold text-[clamp(28px,3.5vw,52px)] leading-tight">
                  {s.titulo}
                </h3>
              </div>

              {/* Descripción */}
              <div className="col-span-12 md:col-span-6 md:pt-2">
                <p className="font-body text-sm text-muted leading-relaxed max-w-sm">
                  {s.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
