import Link from "next/link"
import { ArrowRight, Heart, Instagram } from "lucide-react"
import config from "@/config"

export default function Hero() {
  const { eyebrow, title, subtitle } = config.landing.hero

  return (
    <section id="hero" className="relative overflow-hidden bg-base-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row">
        <div className="flex-1">
          <span className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            🇲🇽 {eyebrow}
          </span>

          <img
            src="/images/soporilogo.jpeg"
            alt="Logo Soporí Uparéame"
            className="mb-6 h-24 w-auto"
          />

          <h1 className="text-5xl font-black leading-tight lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-base-content/70">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://gofund.me/06c79d285"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Apóyanos en GoFundMe
            </Link>

            <Link
              href="https://www.instagram.com/sopori_upareame/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-xl border p-4 text-center">
              <h3 className="text-3xl font-bold text-primary">1</h3>
              <p className="text-sm">Proyecto SISA</p>
            </div>

            <div className="rounded-xl border p-4 text-center">
              <h3 className="text-3xl font-bold text-primary">2026</h3>
              <p className="text-sm">Mars Challenge</p>
            </div>

            <div className="rounded-xl border p-4 text-center">
              <h3 className="text-3xl font-bold text-primary">🇲🇽</h3>
              <p className="text-sm">Representando México</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="overflow-hidden rounded-3xl border shadow-2xl">
            <img
              src="/images/equipo.jpeg"
              alt="Equipo Soporí Uparéame"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 rounded-2xl border bg-base-200 p-6">
            <h2 className="text-xl font-bold">
              ¿Por qué apoyar a Soporí Uparéame?
            </h2>

            <p className="mt-3 text-base-content/70">
              Somos un equipo multidisciplinario del Instituto Tecnológico de
              Chihuahua que representará a México en el Mars Challenge 2026 con
              SISA, una plataforma inteligente para la gestión del suelo y agua
              mediante sensores, IoT e Inteligencia Artificial.            
            </p>

            <div className="mt-6">
              <Link
                href="https://gofund.me/06c79d285"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent w-full"
              >
                Donar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
