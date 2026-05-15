import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-paper px-8 md:px-16 lg:px-24 py-8 border-t border-subtle">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-display font-bold text-lg tracking-tight">
          RabagoDesign
        </span>

        <span className="font-body text-xs text-muted uppercase tracking-widest">
          © {new Date().getFullYear()} — Todos los derechos reservados
        </span>

        <div className="flex items-center gap-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs uppercase tracking-widest text-muted link-underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs uppercase tracking-widest text-muted link-underline"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
