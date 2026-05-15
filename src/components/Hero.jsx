import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-paper text-ink flex flex-col px-8 md:px-16 lg:px-24">
      {/* Barra superior */}
      <motion.div
        className="flex items-center justify-between py-8 border-b border-subtle"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <span className="font-body text-xs uppercase tracking-widest text-ink">
          RabagoDesign
        </span>
        <span className="font-body text-xs text-muted uppercase tracking-widest">
          Diseño & Desarrollo Web
        </span>
      </motion.div>

      {/* Bloque central */}
      <div className="flex-1 flex flex-col justify-center py-16 md:py-24">
        {/* Nombre display */}
        <motion.h1
          className="font-display font-bold text-[clamp(72px,13vw,200px)] leading-[0.88] tracking-tight mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Rabago
          <br />
          <span className="italic font-normal">Design.</span>
        </motion.h1>

        {/* Tagline + CTAs en fila */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <p className="font-body text-sm text-muted max-w-xs leading-relaxed">
            Diseño web que convierte.
            <br />
            Sin plantillas. Sin ruido. Con criterio.
          </p>

          <div className="flex items-center gap-10">
            <a
              href="#proyectos"
              className="font-body text-xs uppercase tracking-widest link-underline"
            >
              Ver proyectos ↓
            </a>
            <a
              href="#contacto"
              className="font-body text-xs uppercase tracking-widest link-underline"
            >
              Contactar →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Separador inferior */}
      <motion.div
        className="border-t border-subtle py-6 flex items-center justify-between"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <span className="font-body text-xs text-muted uppercase tracking-widest">
          Disponible para nuevos proyectos
        </span>
        <span className="font-body text-xs text-muted uppercase tracking-widest">
          {new Date().getFullYear()}
        </span>
      </motion.div>
    </section>
  )
}
