import { useState } from 'react'
import { motion } from 'framer-motion'

const inputClass =
  'w-full bg-transparent border-b border-paper/20 focus:border-paper outline-none font-body text-sm text-paper placeholder-paper/30 py-4 transition-colors duration-300'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Formulario enviado:', form)
    setEnviado(true)
    setForm({ nombre: '', email: '', mensaje: '' })
    setTimeout(() => setEnviado(false), 5000)
  }

  return (
    <section className="bg-ink text-paper px-8 md:px-16 lg:px-24 py-28" id="contacto">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <motion.div
          className="mb-20 border-b border-paper/10 pb-6 flex items-baseline justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-[clamp(36px,5vw,64px)] leading-none uppercase tracking-tight">
            Contacto
          </h2>
          <span className="font-body text-xs text-paper/30 uppercase tracking-widest hidden md:block">
            Hablemos
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Texto izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display font-bold text-[clamp(36px,4vw,60px)] leading-tight italic mb-10">
              Tienes un proyecto.<br />
              Yo tengo la solución.
            </p>
            <p className="font-body text-xs text-paper/40 uppercase tracking-widest">
              francisco.g.rabago@gmail.com
            </p>
          </motion.div>

          {/* Formulario derecha */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {enviado ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10"
              >
                <p className="font-display font-bold text-4xl italic mb-3">
                  Recibido.
                </p>
                <p className="font-body text-xs text-paper/40 uppercase tracking-widest">
                  Te respondo en menos de 24h.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-paper/40 block mb-1">
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
                  <label className="font-body text-xs uppercase tracking-widest text-paper/40 block mb-1">
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
                  <label className="font-body text-xs uppercase tracking-widest text-paper/40 block mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntame tu proyecto..."
                    required
                    rows={4}
                    className={inputClass + ' resize-none'}
                  />
                </div>
                <button
                  type="submit"
                  className="font-body text-xs uppercase tracking-widest link-underline text-paper"
                >
                  Enviar mensaje →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
