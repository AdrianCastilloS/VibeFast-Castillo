// ============================================================
// VibeFast · config.js
// ------------------------------------------------------------
// ESTE ES EL ARCHIVO MÁS IMPORTANTE DEL BOILERPLATE.
// Todo el branding, copy, features y configuración del producto vive aquí.
// Cambiar este archivo cambia el producto entero — sin abrir JSX.
//
// Estructura:
//   - app:      identidad del producto (nombre, descripción, dominio, color)
//   - features: toggles para encender/apagar funcionalidades
//   - ai:       configuración de OpenAI
//   - email:    configuración de Resend
//   - auth:     providers habilitados
//   - landing:  copy de la página pública
//   - pricing:  planes (si features.payments está activo)
//
// Tip Sem 1: empieza editando `app` y `landing.hero` con los datos de tu producto.
// ============================================================

const config = {
  // -----------------------------------------------------------
  // Identidad del producto
  // -----------------------------------------------------------
  app: {
    name: "Soporí Upareamé",
    description:
      "La plataforma oficial del equipo Soporí Uparéame y del proyecto SISA, dedicada al desarrollo de soluciones inteligentes para la gestión del suelo, agua y agricultura de precisión con aplicaciones en la Tierra y Marte.",
    domain: "soporiupareame.org", // sin https://, sin www
    locale: "es", // "es" | "en"
    // URL pública: usa NEXT_PUBLIC_APP_URL en .env. En este config solo definimos el default.
    defaultUrl: "http://localhost:3000",
  },

  // -----------------------------------------------------------
  // Identidad visual
  // -----------------------------------------------------------
  brand: {
    // Color primario en HEX. DaisyUI lo aplica como --color-primary via theme.
    primary: "#0F766E", 
    // Logo: puede ser texto o ruta a /public/logo.svg
    logoText: "Soporí Uparéame",
    logoSrc: null,
    // Estilo del bordeado global (DaisyUI usa esto para botones, cards)
    radius: "1rem",
  },

  // -----------------------------------------------------------
  // Toggles de features — encienden/apagan rutas y componentes
  // -----------------------------------------------------------
  features: {
    waitlist: false, // Captura emails en landing — Sem 1
    googleAuth: true, // Login con Google — Sem 2
    emailLogin: false, // Magic link email — opcional
    aiChat: true, // Chat AI en /chat — Sem 3
    toolUse: true, // Tool use registry — Sem 4
    agents: true, // LangGraph agents — Sem 5
    mcp: true, // Servidor MCP en /api/mcp — Sem 5
    rag: false, // RAG con pgvector — opcional
    posthog: false, // Tracking — opcional
    resend: true, // Email — Sem 1+
    pricing: false, // Muestra la sección de precios en la landing (vitrina; el cobro real es `payments`)
    payments: false, // Stripe — opcional, fuera del temario
    hardware: false, // ESP-Claw bridge — Sem 8
  },

  // -----------------------------------------------------------
  // OpenAI
  // -----------------------------------------------------------
  ai: {
    chatModel: "gpt-4o-mini", // default barato y rápido
    structuredModel: "gpt-4o-mini",
    agentModel: "gpt-4o", // los agentes razonan mejor con full gpt-4o
    embeddingModel: "text-embedding-3-small",
    maxTokens: 1500,
    temperature: 0.4,
  },

  // -----------------------------------------------------------
  // Resend (email transaccional)
  // -----------------------------------------------------------
  email: {
    // Asegúrate de tener el dominio verificado en Resend antes de cambiar `from`.
    // En desarrollo Resend permite enviar a tu propio correo desde `onboarding@resend.dev`.
    from: "VibeFast <onboarding@resend.dev>",
    replyTo: "hola@vibefast.dev",
    supportEmail: "soporte@vibefast.dev",
  },

  // -----------------------------------------------------------
  // Auth providers
  // -----------------------------------------------------------
  auth: {
    loginUrl: "/login",
    afterLoginUrl: "/dashboard",
    afterLogoutUrl: "/",
    providers: ["google"], // se sincroniza con features.googleAuth / emailLogin
  },

  // -----------------------------------------------------------
  // Landing — todo el copy de la página pública
  // -----------------------------------------------------------
  landing: {
    nav: [
      { label: "Inicio", href: "#hero" },
      { label: "Proyecto", href: "#project" },
      { label: "Tecnología", href: "#features" },
      { label: "Preguntas", href: "#faq" },
      { label: "❤️ Apóyanos", href: "https://gofund.me/06c79d285" },
    ],
    hero: {
      eyebrow: "Equipo Soporí Uparéame · Proyecto SISA",
      title: "Representando a México en el Mars Challenge 2026",
      subtitle:
        "Soporí Uparéame desarrolla tecnologías inteligentes para la gestión del agua, suelo y agricultura de precisión, demostrando cómo la innovación puede transformar tanto la exploración espacial como la agricultura en la Tierra.",
      cta: { label: "Conoce el proyecto", href: "#project" },
      ctaSecondary: { label: "Nuestro equipo", href: "#team" },
    },
    problem: {
  eyebrow: "El desafío",

  title: "Gestionar agua y suelo de manera eficiente es uno de los mayores retos para la agricultura y la exploración espacial.",

  subtitle:
    "La falta de información en tiempo real dificulta tomar decisiones oportunas sobre riego, humedad y condiciones ambientales, provocando desperdicio de recursos y menor productividad.",

  items: [
    {
      icon: "Droplets",
      title: "Uso ineficiente del agua",
      body:
        "El agua es un recurso limitado. Un monitoreo inteligente permite optimizar cada litro utilizado.",
    },
    {
      icon: "Leaf",
      title: "Monitoreo del suelo",
      body:
        "Conocer continuamente las condiciones del suelo ayuda a prevenir problemas antes de afectar los cultivos.",
    },
    {
      icon: "Brain",
      title: "Decisiones inteligentes",
      body:
        "SISA integra sensores e Inteligencia Artificial para transformar datos en recomendaciones útiles para el productor.",
    },
  ],
},
    features: {
      eyebrow: "Nuestra tecnología",
      title: "SISA integra hardware, software e Inteligencia Artificial en una sola plataforma.",
      subtitle: "El proyecto combina sensores, automatización y análisis inteligente para optimizar la gestión agrícola en ambientes terrestres y de exploración espacial.",
      items: [
        {
          icon: "Cpu",
          title: "Internet de las Cosas (IoT)",
          body: "Sensores conectados recopilan información del suelo y del ambiente en tiempo real.",
        },
        {
          icon: "Droplets",
          title: "Monitoreo del agua",
          body: "Control inteligente del riego para reducir desperdicios y mejorar la eficiencia hídrica.",
        },
        {
          icon: "Leaf",
          title: "Agricultura de precisión",
          body: "Análisis continuo de las condiciones del cultivo para mejorar la toma de decisiones.",
        },
        {
          icon: "Brain",
          title: "Inteligencia Artificial",
          body: "Los datos recopilados son procesados para generar recomendaciones que apoyan al usuario.",
        },
        {
          icon: "BarChart3",
          title: "Visualización de datos",
          body: "La plataforma presenta información clara mediante gráficos e indicadores en tiempo real.",
        },
        {
          icon: "Rocket",
          title: "Aplicaciones espaciales",
          body: "SISA fue desarrollado como una propuesta tecnológica para el Mars Challenge 2026.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Conoce más sobre el proyecto SISA y Soporí Uparéame",
      items: [
        {
          q: "¿Qué es Soporí Uparéame?",
          a: "Soporí Uparéame es un equipo multidisciplinario del Instituto Tecnológico de Chihuahua que desarrolla soluciones tecnológicas para resolver desafíos relacionados con la agricultura inteligente y la exploración espacial.",
        },
        {
          q: "¿Qué es SISA?",
          a: "SISA es el acrónimo de Sistema Inteligente de Suelo y Agua. Es una plataforma de software que integra hardware, software e Inteligencia Artificial para optimizar la gestión agrícola en ambientes terrestres y de exploración espacial.",
        },
        {
          q: "¿Qué es el Mars Challenge?",
          a: "Es una competencia internacional donde equipos universitarios desarrollan soluciones tecnológicas para enfrentar los desafíos de futuras misiones a Marte. Soporí Uparéame representará a México en la edición 2026 en Madrid, España.",
        },
        {
          q: "¿Como puedo colaborar?",
          a: "Empresas, instituciones y personas pueden colaborar mediante patrocinios, difusión del proyecto o estableciendo alianzas estratégicas que impulsen el desarrollo tecnológico del equipo.",
        },
      ],
    },
    socialProof: {
      text: "Proyecto desarrollado por estudiantes del Instituto Tecnológico de Chihuahua.",
      logos: ["ITCH","Mars Challenge","SISA","IoT","IA","Agricultura Inteligente",],
    },
    testimonials: {
      eyebrow: "Nuestros logos",
      title: "Un proyecto construido con innovación, investigación y trabajo en equipo.",
      subtitle: "Estos son algunos de los resultados alcanzados por Soporí Uparéame.",
      items: [
        {
          quote:
            "Clasificación a la Final Internacional del Mars Challenge 2026 para representar a México en Madrid.",
          author: "Mars Challenge",
          role: "Competencia Internacional",
        },
        {
          quote:
            "Desarrollo de SISA, una plataforma que integra sensores, Internet de las Cosas e Inteligencia Artificial para optimizar la gestión agrícola.",
          author: "Proyecto SISA",
          role: "Innovación Tecnológica",
        },
        {
          quote:
            "Equipo multidisciplinario conformado por estudiantes del Instituto Tecnológico de Chihuahua comprometidos con el desarrollo de soluciones de impacto.",
          author: "Equipo Soporí Uparéam",
          role: "Instituto Tecnológico de Chihuahua",
        },
      ],
    },
    finalCta: {
      eyebrow: "Unete a nuestra misión",
      title: "Ayúdanos a representar a México en el Mars Challenge 2026.",
      subtitle:
        "Tu apoyo permitirá que nuestro equipo continúe desarrollando soluciones tecnológicas para la agricultura inteligente y la exploración espacial. Juntos podemos llevar la innovación mexicana al escenario internacional.",
      cta: { label: "❤️ Apóyanos en GoFundMe", href: "https://gofund.me/06c79d285" },
      ctaSecondary: { label: "Conocer SISA", href: "#project" },
    },
    waitlist: {
      eyebrow: "Apoya nuestra misión",
      title: "Ayúdanos a representar a México en el Mars Challenge 2026.",
      subtitle: "Estamos recaudando fondos para cubrir los gastos de viaje, hospedaje, inscripción y logística que permitirán a Soporí Uparéame competir en la Final Internacional del Mars Challenge en Madrid, España. Cada aportación nos acerca a demostrar el talento y la innovación mexicana en un escenario mundial.",
      successMessage: "¡Muchas gracias por tu apoyo! Tu contribución nos acerca un paso más a representar a México.",
      buttonLabel: "❤️ Apóyanos en GoFundMe",
      href: "https://gofund.me/06c79d285",
    },
    footer: {
      tagline: "Soporí Uparéame • Representando a México en el Mars Challenge 2026 desde el Instituto Tecnológico de Chihuahua.",
      columns: [
        {
          title: "Proyecto",
          links: [
            { label: "Inicio", href: "#hero" },
            { label: "Proyecto", href: "#project" },
            { label: "Tecnología", href: "#features" },
            { label: "Preguntas frecuentes", href: "#faq" },
          ],
        },
        {
          title: "Apoyanos",
          links: [
            { label: "Donar en GoFundMe", href: "https://gofund.me/06c79d285" },
            { label: "Ser patrocinador", href: "#contact" },
            { label: "Contacto", href: "#contact" },
          ],
        },
        {
          title: "Redes sociales",
          links: [
            { label: "Instagram", href: "https://www.instagram.com/sopori_upareame/", external: true },
            { label: "GoFundMe", href: "https://gofund.me/06c79d285", external: true },
          ],
        },
      ],
      // Compat: links planos usados en el bar inferior
      links: [
        { label: "Instagram", href: "https://www.instagram.com/sopori_upareame/", external: true },
        { label: "GoFundMe", href: "https://gofund.me/06c79d285", external: true },
      ],
    },
  },

  // -----------------------------------------------------------
  // Pricing — vitrina de planes.
  // Se muestra en la landing si features.pricing === true.
  // El cobro real (Stripe) depende de features.payments.
  // -----------------------------------------------------------
  pricing: {
    eyebrow: "Precios",
    title: "Simple y sin sorpresas.",
    subtitle: "Empieza gratis. Sube de plan cuando tu producto crezca.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: 0,
        currency: "USD",
        interval: "mes",
        description: "Para probar el producto.",
        features: ["Hasta 100 usuarios", "Soporte por email", "Branding VibeFast"],
        cta: "Empezar gratis",
      },
      {
        id: "pro",
        name: "Pro",
        price: 29,
        currency: "USD",
        interval: "mes",
        description: "Para founders que ya facturan.",
        features: ["Usuarios ilimitados", "Soporte prioritario", "Sin branding"],
        cta: "Probar Pro",
        highlighted: true,
        stripePriceId: "", // llenar cuando se active payments
      },
    ],
  },
}

export default config
