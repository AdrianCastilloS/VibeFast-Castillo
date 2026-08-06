import Link from "next/link"
import { Menu } from "lucide-react"
import config from "@/config"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-base-200 bg-base-100/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">

          {/* Menú móvil */}
          <div className="dropdown md:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-sm px-2"
              aria-label="Abrir menú"
            >
              <Menu className="size-5" />
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-2 w-56 rounded-box border border-base-200 bg-base-100 p-2 shadow"
            >
              {config.landing.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-3">

            <img
              src="/images/itchlogo.jpeg"
              alt="Instituto Tecnológico de Chihuahua"
              className="h-12 w-auto"
            />

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-none">
                Soporí Uparéame
              </h1>

              <p className="text-xs text-base-content/60">
                Instituto Tecnológico de Chihuahua
              </p>
            </div>

          </Link>

        </div>

        {/* Navegación */}
        <ul className="hidden items-center gap-8 md:flex">
          {config.landing.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-base-content/70 transition hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botones */}
        <div className="flex items-center gap-3">

          {config.features.googleAuth && (
            <Link
              href={config.auth.loginUrl}
              className="btn btn-sm btn-ghost"
            >
              Entrar
            </Link>
          )}

          <Link
            href="https://gofund.me/06c79d285"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            ❤️ Apóyanos
          </Link>

        </div>

      </nav>
    </header>
  )
}