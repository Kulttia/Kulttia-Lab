// Bóveda Kulttia — dataset curado y verificado (2026-07-10)
// 116 repos open-source verificados vivos vía GitHub API. Comandos de instalación extraídos de cada README.
// Curaduría y descripciones: Kulttia Lab. Inspirado en la bóveda comunitaria de tododeia.com.
const BOVEDA_RESOURCES = [
 {
  "repo": "obra/superpowers",
  "name": "superpowers",
  "owner": "obra",
  "url": "https://github.com/obra/superpowers",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Framework de skills agénticas y metodología de desarrollo completa. El estándar de facto para armar agentes que trabajan como equipo.",
  "stars": 250913,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "/plugin install superpowers@claude-plugins-official"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Deja de explicarle a Claude cómo trabajar cada vez",
   "cuerpo": "Cada sesión arrancas de cero: le repites tus mañas, qué revisar antes de dar algo por bueno, cómo te gusta que estructure las cosas. Superpowers agarra todo eso y lo vuelve skills que Claude carga solo, sin que se lo pidas. Deja de ser un asistente que adivina y pasa a trabajar con tu método — el mismo truco que usan los que sacan trabajo real de un agente y no solo demos bonitas para Twitter.",
   "regla": "Si te descubres repitiéndole lo mismo a Claude, eso es una skill esperando a existir."
  }
 },
 {
  "repo": "affaan-m/ECC",
  "name": "ECC",
  "owner": "affaan-m",
  "url": "https://github.com/affaan-m/ECC",
  "level": "avanzado",
  "cat": "agentes",
  "desc": "Sistema de optimización del harness: skills, instintos, memoria y seguridad para exprimir al máximo cualquier agente de código.",
  "stars": 227892,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "# Add marketplace\n/plugin marketplace add https://github.com/affaan-m/ECC\n\n# Install plugin\n/plugin install ecc@ecc"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Tu agente ya es potente; esto es afinarle el motor",
   "cuerpo": "La mayoría instala Claude Code y lo usa tal cual sale de la caja. ECC es la capa de arriba: le mete skills, instintos, memoria y reglas de seguridad para que rinda como si lo hubiera configurado alguien que lleva meses exprimiéndolo. No cambia el agente, cambia cómo trabaja. Es para cuando ya le sacaste el jugo a lo básico y quieres el siguiente nivel.",
   "regla": "Primero domina el agente pelón; después ponle el kit de carreras."
  }
 },
 {
  "repo": "NousResearch/hermes-agent",
  "name": "hermes-agent",
  "owner": "NousResearch",
  "url": "https://github.com/NousResearch/hermes-agent",
  "level": "intermedio",
  "cat": "agentes",
  "desc": "Agente open-source que crece contigo: aprende de tus sesiones y se adapta a tu forma de trabajar.",
  "stars": 212238,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",
    "iex (irm https://hermes-agent.nousresearch.com/install.ps1)"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Un agente que no se queda igual sesión tras sesión",
   "cuerpo": "La mayoría de los agentes olvidan todo cuando cierras la ventana. Hermes hace lo contrario: aprende de cómo trabajas y se va ajustando a tu forma, sesión tras sesión. Mientras más lo usas, menos tienes que explicarle. Es la diferencia entre una herramienta que estrenas cada día y una que te va conociendo.",
   "regla": "El mejor agente no es el más listo hoy, es el que mañana te conoce mejor."
  }
 },
 {
  "repo": "multica-ai/andrej-karpathy-skills",
  "name": "andrej-karpathy-skills",
  "owner": "multica-ai",
  "url": "https://github.com/multica-ai/andrej-karpathy-skills",
  "level": "avanzado",
  "cat": "skills",
  "desc": "Un solo CLAUDE.md destilado de las observaciones de Karpathy sobre programar con LLMs. Menos ruido, mejor código.",
  "stars": 190092,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "/plugin marketplace add forrestchang/andrej-karpathy-skills",
    "/plugin install andrej-karpathy-skills@karpathy-skills"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Las manías de Karpathy, metidas en tu Claude",
   "cuerpo": "Karpathy —de los que más sabe de LLMs en el planeta— fue anotando qué hace que un agente programe bien y qué lo descarrila. Alguien destiló todo eso en un solo CLAUDE.md. Lo sueltas en tu proyecto y Claude hereda ese criterio: menos vueltas, menos código de más, mejores decisiones. Es tomar prestada la intuición de un experto sin tener que ganártela a golpes.",
   "regla": "Un buen CLAUDE.md es años de experiencia ajena que empiezas a usar hoy."
  }
 },
 {
  "repo": "ollama/ollama",
  "name": "ollama",
  "owner": "ollama",
  "url": "https://github.com/ollama/ollama",
  "level": "avanzado",
  "cat": "herramientas",
  "desc": "Corre modelos open-source (DeepSeek, Qwen, Gemma y más) en tu propia máquina. La puerta de entrada a la IA local.",
  "stars": 175836,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "curl -fsSL https://ollama.com/install.sh | sh",
    "irm https://ollama.com/install.ps1 | iex"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "IA en tu máquina, sin pedirle permiso a nadie",
   "cuerpo": "Todo lo que le escribes a una IA en la nube pasa por un servidor ajeno. Ollama le da la vuelta: corre modelos open-source como DeepSeek, Qwen o Gemma directo en tu computadora, sin internet y sin que tus datos salgan de ahí. Ideal para privacidad, para experimentar sin gastar en API, o para entender qué es realmente un modelo cuando lo tienes enfrente. Es la puerta de entrada a la IA local.",
   "regla": "Si tus datos son sensibles, el mejor servidor es el que tienes debajo del escritorio."
  }
 },
 {
  "repo": "microsoft/markitdown",
  "name": "markitdown",
  "owner": "microsoft",
  "url": "https://github.com/microsoft/markitdown",
  "level": "principiante",
  "cat": "herramientas",
  "desc": "Convierte Word, Excel, PDF y casi cualquier documento a Markdown listo para LLMs. De Microsoft.",
  "stars": 164386,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+",
    "Git instalado"
   ],
   "cmds": [
    "uv venv --python=3.12 .venv\nsource .venv/bin/activate\n# NOTE: Be sure to use 'uv pip install' rather than just 'pip install' to install packages in this virtual environment",
    "git clone git@github.com:microsoft/markitdown.git\ncd markitdown\npip install -e 'packages/markitdown[all]'"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Ese PDF que la IA no entiende, ahora sí",
   "cuerpo": "Las IAs leen texto plano, pero tu información vive en Word, Excel y PDFs llenos de formato. Markitdown convierte casi cualquier documento a Markdown limpio, justo lo que un LLM digiere bien. Dejas de copiar y pegar a mano y de pelear con tablas que se rompen. Es de Microsoft, es gratis, y resuelve el paso aburrido que nadie te cuenta.",
   "regla": "La IA no es tonta con tu documento: es que se lo diste en un idioma que no lee."
  }
 },
 {
  "repo": "mattpocock/skills",
  "name": "skills",
  "owner": "mattpocock",
  "url": "https://github.com/mattpocock/skills",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Las skills que Matt Pocock usa en su propio directorio .claude. Ingeniería real, sin humo.",
  "stars": 163103,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills@latest add mattpocock/skills"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Las skills que un ingeniero de verdad usa a diario",
   "cuerpo": "Hay repos de skills teóricas y hay esto: el directorio .claude real de Matt Pocock, uno de los referentes de TypeScript. No son ejemplos de demo, son las herramientas con las que trabaja de verdad. Copiar el setup de alguien que ya resolvió los problemas te ahorra meses de prueba y error. Ingeniería real, sin humo.",
   "regla": "Aprende del directorio de quien ya vive de esto, no del tutorial."
  }
 },
 {
  "repo": "anthropics/skills",
  "name": "skills",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/skills",
  "level": "principiante",
  "cat": "skills",
  "desc": "El repositorio oficial de Agent Skills de Anthropic. Si vas a empezar por un solo repo, que sea este.",
  "stars": 159836,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/anthropics/skills.git"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Si vas a instalar una sola cosa, empieza aquí",
   "cuerpo": "Este es el repositorio oficial de Agent Skills de Anthropic —los que hacen Claude. Es el punto de partida limpio para entender qué es una skill y cómo se arma, sin filtros de terceros ni opiniones raras. Antes de perderte en repos de la comunidad, entiende la base desde la fuente. Es el mapa oficial del terreno.",
   "regla": "Antes de coleccionar skills ajenas, entiende cómo funciona una desde la fuente."
  }
 },
 {
  "repo": "langchain-ai/langchain",
  "name": "langchain",
  "owner": "langchain-ai",
  "url": "https://github.com/langchain-ai/langchain",
  "level": "avanzado",
  "cat": "agentes",
  "desc": "La plataforma de ingeniería de agentes más usada del ecosistema Python.",
  "stars": 141412,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "uv add langchain"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "El estándar para construir agentes en serio",
   "cuerpo": "Cuando pasas de jugar con prompts a construir algo que otros van a usar, necesitas estructura: memoria, herramientas, flujos, conexiones. LangChain es la plataforma más usada de Python para eso, y por eso hay tutoriales, empleos y comunidad enorme alrededor. No es la más simple, pero es la que más puertas te abre si vas a dedicarte a esto en serio.",
   "regla": "Aprende la herramienta que usa la industria, no la que está de moda esta semana."
  }
 },
 {
  "repo": "anthropics/claude-code",
  "name": "claude-code",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/claude-code",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "El agente de código que vive en tu terminal, entiende tu codebase y ejecuta. La herramienta central de esta bóveda.",
  "stars": 137085,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "curl -fsSL https://claude.ai/install.sh | bash",
    "brew install --cask claude-code"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "El agente que no vive en un chat, vive en tu terminal",
   "cuerpo": "La diferencia entre pedirle código a un chat y trabajar con Claude Code es la misma que entre dictarle a alguien por teléfono y sentarlo frente a tu máquina. Code lee tu proyecto entero, edita archivos, corre comandos y ve los errores para arreglarlos solo. Es la herramienta sobre la que se construye casi todo lo demás de esta bóveda: si vas a instalar una sola cosa, que sea esta.",
   "regla": "Todo lo demás aquí pega más fuerte con Claude Code debajo."
  }
 },
 {
  "repo": "msitarzewski/agency-agents",
  "name": "agency-agents",
  "owner": "msitarzewski",
  "url": "https://github.com/msitarzewski/agency-agents",
  "level": "intermedio",
  "cat": "agentes",
  "desc": "Una agencia completa de agentes IA: frontend, contenido, comunidad y más. Plug and play.",
  "stars": 129778,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Una terminal y ganas de romper cosas (con respaldo)"
   ],
   "cmds": [
    "brew install --cask msitarzewski/agency-agents/agency-agents"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Una agencia entera, sin contratar a nadie",
   "cuerpo": "Un proyecto real necesita frontend, contenido, comunidad, diseño… roles que normalmente son personas distintas. Esto te da esos roles como agentes listos para trabajar: le pides la tarea al agente indicado y él sabe su oficio. Plug and play. No reemplaza a un equipo humano, pero te deja empezar solo sin quedarte atascado en lo que no dominas.",
   "regla": "No tienes que saber de todo; tienes que saber a qué agente pedirle qué."
  }
 },
 {
  "repo": "garrytan/gstack",
  "name": "gstack",
  "owner": "garrytan",
  "url": "https://github.com/garrytan/gstack",
  "level": "intermedio",
  "cat": "agentes",
  "desc": "El setup exacto de Claude Code de Garry Tan (Y Combinator): 23 herramientas que actúan como CEO, diseñador y eng manager.",
  "stars": 120816,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "~/.claude/skills/gstack/bin/gstack-uninstall"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "El setup exacto del jefe de Y Combinator",
   "cuerpo": "Garry Tan dirige Y Combinator y comparte, tal cual, las 23 herramientas de Claude Code que él usa: agentes que hacen de CEO, de diseñador, de eng manager. En vez de armar tu configuración desde cero adivinando, arrancas con la de alguien que ve pasar mil startups al año. Lo instalas, lo pruebas, y quitas lo que no te sirva. Atajo puro.",
   "regla": "Copiar el setup del que ya lo resolvió no es trampa, es sentido común."
  }
 },
 {
  "repo": "github/spec-kit",
  "name": "spec-kit",
  "owner": "github",
  "url": "https://github.com/github/spec-kit",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Toolkit oficial de GitHub para desarrollo guiado por especificaciones (Spec-Driven Development).",
  "stars": 119114,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@vX.Y.Z"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Escribe qué quieres antes de que la IA escriba mal",
   "cuerpo": "El error clásico con un agente: le pides código de una y te entrega algo que no era. Spec-kit —oficial de GitHub— invierte el orden: primero defines bien la especificación, después el agente construye contra ese plano. Menos malentendidos, menos rehacer. Suena a paso extra, pero es el que te ahorra las tres iteraciones que venían después.",
   "regla": "Cinco minutos escribiendo la spec te ahorran una hora corrigiendo al agente."
  }
 },
 {
  "repo": "Shubhamsaboo/awesome-llm-apps",
  "name": "awesome-llm-apps",
  "owner": "Shubhamsaboo",
  "url": "https://github.com/Shubhamsaboo/awesome-llm-apps",
  "level": "avanzado",
  "cat": "aprende",
  "desc": "Más de 100 apps de agentes y RAG que puedes clonar, personalizar y desplegar hoy.",
  "stars": 117100,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Python 3.10+",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git\ncd awesome-llm-apps/starter_ai_agents/ai_travel_agent\npip install -r requirements.txt\nstreamlit run travel_agent.py"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "Más de 100 apps de IA para abrir el capó y aprender",
   "cuerpo": "Leer sobre agentes y RAG está bien; ver 100 apps funcionando y meterles mano es otra cosa. Este repo es justo eso: proyectos que clonas, corres y desarmas para entender cómo se construyó cada uno. La mejor forma de aprender no es empezar de cero, es partir de algo que ya funciona y modificarlo. Un gimnasio entero de ejemplos reales.",
   "regla": "Se aprende más desarmando una app que funciona que leyendo diez tutoriales."
  }
 },
 {
  "repo": "google-gemini/gemini-cli",
  "name": "gemini-cli",
  "owner": "google-gemini",
  "url": "https://github.com/google-gemini/gemini-cli",
  "level": "avanzado",
  "cat": "herramientas",
  "desc": "El agente de terminal de Google. Útil para comparar flujos frente a Claude Code.",
  "stars": 105873,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "# Using npx (no installation required)\nnpx @google/gemini-cli",
    "npm install -g @google/gemini-cli"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "El terminal de Google, para comparar de tú a tú",
   "cuerpo": "Casarte con una sola herramienta sin haber probado las otras es cómo no saber si estás en la buena. Gemini CLI es el agente de terminal de Google: instalarlo y probarlo al lado de Claude Code te da criterio propio sobre cuál te rinde para qué. No se trata de bandos, se trata de elegir con información. Conocer al otro te hace mejor con el tuyo.",
   "regla": "Prueba la alternativa: es la única forma de saber si tu favorita lo merece."
  }
 },
 {
  "repo": "nextlevelbuilder/ui-ux-pro-max-skill",
  "name": "ui-ux-pro-max-skill",
  "owner": "nextlevelbuilder",
  "url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Inteligencia de diseño UI/UX para tu agente: estilos, paletas, tipografías y stacks listos para usar.",
  "stars": 103528,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "uipro init --ai claude --global   # Install to ~/.claude/skills/\nuipro init --ai cursor --global   # Install to ~/.cursor/skills/",
    "npm install -g ui-ux-pro-max-cli@latest\nuipro uninstall"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Para que Claude deje de diseñar como plantilla de 2015",
   "cuerpo": "El agente escribe código de sobra, pero déjalo diseñar solo y te saca un formulario gris con botón azul que parece de otra década. Esta skill le mete criterio: estilos, paletas, tipografías y layouts que de verdad combinan, para varias plataformas. Le pides una interfaz y en vez de improvisar, elige con gusto. Es la distancia entre «funciona» y «se ve hecho por alguien que sabe».",
   "regla": "El código lo saca cualquiera; el gusto hay que instalárselo."
  }
 },
 {
  "repo": "VoltAgent/awesome-design-md",
  "name": "awesome-design-md",
  "owner": "VoltAgent",
  "url": "https://github.com/VoltAgent/awesome-design-md",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Colección de archivos DESIGN.md de sistemas de diseño famosos. Suelta uno en tu proyecto y tu agente diseña con criterio.",
  "stars": 99780,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/VoltAgent/awesome-design-md.git"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Roba el sistema de diseño de las marcas grandes",
   "cuerpo": "Las marcas top tienen reglas de diseño que hacen que todo se vea coherente y profesional. Este repo recopila archivos DESIGN.md que capturan esos sistemas. Sueltas uno en tu proyecto y tu agente diseña con ese criterio prestado, en vez de improvisar. Es como trabajar con la guía de estilo de una marca famosa, gratis.",
   "regla": "El buen diseño no es inspiración de golpe, son reglas que puedes copiar."
  }
 },
 {
  "repo": "openai/codex",
  "name": "codex",
  "owner": "openai",
  "url": "https://github.com/openai/codex",
  "level": "principiante",
  "cat": "herramientas",
  "desc": "El agente de código de OpenAI para terminal. El contrapunto natural de Claude Code.",
  "stars": 96689,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
    "powershell -ExecutionPolicy ByPass -c \"irm https://chatgpt.com/codex/install.ps1 | iex\""
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "El agente de OpenAI, el otro lado del ring",
   "cuerpo": "Codex es el agente de código de OpenAI para terminal: el contrapunto natural de Claude Code. Tenerlo instalado te deja probar la misma tarea con los dos y sentir en qué se diferencian de verdad, no de oídas. En un mundo donde todos opinan sin haber probado, tú vas a saber. Es gratis tener ambos y elegir por experiencia.",
   "regla": "Ten los dos agentes a mano; la comparación honesta se hace probando, no leyendo."
  }
 },
 {
  "repo": "JuliusBrussee/caveman",
  "name": "caveman",
  "owner": "JuliusBrussee",
  "url": "https://github.com/JuliusBrussee/caveman",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Skill que recorta ~65% de tokens haciendo que el agente hable como cavernícola. Ahorro real, misma sustancia técnica.",
  "stars": 87314,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "# macOS · Linux · WSL · Git Bash\ncurl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash",
    "# Windows · PowerShell 5.1+\nirm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Habla como cavernícola, gasta 65% menos",
   "cuerpo": "Cada palabra que Claude escribe cuesta tokens, y los tokens se acaban. Esta skill lo pone a responder en modo cavernícola —corta artículos y relleno— y así recorta como 65% del gasto sin perder la sustancia técnica. La respuesta se ve rara al principio, pero dice lo mismo. Si estirar tu plan te importa, este truco se paga solo.",
   "regla": "Menos palabras, misma información: el relleno no te hace más listo, te vacía la cuenta."
  }
 },
 {
  "repo": "thedotmack/claude-mem",
  "name": "claude-mem",
  "owner": "thedotmack",
  "url": "https://github.com/thedotmack/claude-mem",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Memoria persistente entre sesiones: captura todo lo que hace tu agente y lo comprime en contexto útil.",
  "stars": 86627,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx claude-mem install",
    "npx claude-mem install --ide opencode"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Que tu agente no empiece amnésico cada mañana",
   "cuerpo": "Abres una sesión nueva y Claude no recuerda nada de ayer: ni el proyecto, ni tus decisiones, ni por qué hicieron las cosas así. Claude-mem le da memoria persistente: captura lo que pasó en cada sesión y lo comprime en contexto que sigue disponible mañana. Dejas de re-explicar el mismo contexto una y otra vez. La continuidad cambia todo.",
   "regla": "Un agente sin memoria te cobra el mismo contexto todos los días."
  }
 },
 {
  "repo": "Graphify-Labs/graphify",
  "name": "graphify",
  "owner": "Graphify-Labs",
  "url": "https://github.com/Graphify-Labs/graphify",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Convierte cualquier carpeta de código en un grafo que tu agente entiende. Compatible con Claude Code, Codex y Cursor.",
  "stars": 81318,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+",
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "sudo apt install python3.12 python3-pip pipx\n# or install uv:\ncurl -LsSf https://astral.sh/uv/install.sh | sh"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Para que tu agente entienda el proyecto completo, no solo el archivo",
   "cuerpo": "Cuando el código crece, el agente se pierde: ve el archivo que le abriste pero no cómo se conecta con el resto. Graphify convierte tu carpeta en un grafo que el agente sí entiende: qué llama a qué, qué depende de qué. Así deja de romper una cosa al arreglar otra. Funciona con Claude Code, Codex y Cursor.",
   "regla": "El agente no falla por tonto, falla porque solo ve una pieza del rompecabezas."
  }
 },
 {
  "repo": "DietrichGebert/ponytail",
  "name": "ponytail",
  "owner": "DietrichGebert",
  "url": "https://github.com/DietrichGebert/ponytail",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Hace que tu agente piense como el senior más perezoso de la sala: el mejor código es el que nunca se escribió.",
  "stars": 79252,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "node scripts/check-rule-copies.js\nnpm test"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "El mejor código es el que nunca escribes",
   "cuerpo": "Los agentes tienen un vicio: te tiran mil líneas cuando el problema se resolvía con tres. Ponytail hace que el tuyo piense como el senior más perezoso —del bueno—: el que antes de escribir se pregunta si de verdad hace falta. Menos código es menos que mantener, menos que romper, menos que entender después. La flojera bien entendida es ingeniería.",
   "regla": "Cada línea que no escribes es una línea que nunca te va a fallar."
  }
 },
 {
  "repo": "nexu-io/open-design",
  "name": "open-design",
  "owner": "nexu-io",
  "url": "https://github.com/nexu-io/open-design",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "App de escritorio local-first y open-source para que tu agente de código sea también tu diseñador.",
  "stars": 76832,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "# One-line install into the agent you're using:\nod mcp install <agent>\n# <agent> = claude | codex | cursor | copilot | openclaw | antigravity | gemini\n#         | pi | vibe | hermes | cline | kimi | trae | opencode\n\n# Hosted equivalent for curl-based setup:\ncurl -fsSL https://open-design.ai/install.sh | sh -s <agent>"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Tu agente de código, ahora también diseñando",
   "cuerpo": "Programar y diseñar suelen ser dos mundos y dos herramientas. Open-design los junta: una app de escritorio open-source y local-first donde tu agente de código también hace el diseño. Todo en tu máquina, sin subir nada a la nube. Es la alternativa abierta a las herramientas de diseño con IA que cobran suscripción.",
   "regla": "Local-first no es nostalgia: es que tu trabajo no depende del servidor de otro."
  }
 },
 {
  "repo": "addyosmani/agent-skills",
  "name": "agent-skills",
  "owner": "addyosmani",
  "url": "https://github.com/addyosmani/agent-skills",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Skills de ingeniería production-grade curadas por Addy Osmani (equipo de Google Chrome).",
  "stars": 75934,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills add addyosmani/agent-skills            # install all 24 skills\nnpx skills add addyosmani/agent-skills --list     # browse before installing",
    "/plugin marketplace add addyosmani/agent-skills\n/plugin install agent-skills@addy-agent-skills"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Skills de nivel producción, firmadas por Google Chrome",
   "cuerpo": "Hay skills de fin de semana y hay skills que aguantan un proyecto real. Estas son las segundas: ingeniería production-grade curada por Addy Osmani, del equipo de Google Chrome. Cuando quien las arma trabaja en uno de los software más usados del mundo, el estándar se nota. Para cuando ya no estás jugando.",
   "regla": "El estándar de quien las escribe es el techo de lo que vas a obtener."
  }
 },
 {
  "repo": "rtk-ai/rtk",
  "name": "rtk",
  "owner": "rtk-ai",
  "url": "https://github.com/rtk-ai/rtk",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Proxy CLI que reduce 60-90% el consumo de tokens en comandos de desarrollo. Un binario en Rust, cero dependencias.",
  "stars": 69869,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh",
    "rtk init -g                 # Install hook + RTK.md (recommended)\nrtk init -g --opencode      # OpenCode plugin (instead of Claude Code)\nrtk init -g --auto-patch    # Non-interactive (CI/CD)\nrtk init -g --hook-only     # Hook only, no RTK.md\nrtk init --show             # Verify installation"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Recorta hasta 90% de tokens en los comandos de siempre",
   "cuerpo": "Los comandos de desarrollo que tu agente corre todo el día —listar, buscar, revisar— generan montañas de texto que se comen tu presupuesto. RTK es un proxy que se mete en medio y comprime ese ruido antes de que llegue al modelo: 60 a 90% menos tokens en tareas comunes. Un solo binario en Rust, cero dependencias. Ahorro que ni sientes instalar.",
   "regla": "No pagas por pensar; pagas por el ruido que nadie limpia."
  }
 },
 {
  "repo": "D4Vinci/Scrapling",
  "name": "Scrapling",
  "owner": "D4Vinci",
  "url": "https://github.com/D4Vinci/Scrapling",
  "level": "intermedio",
  "cat": "datos",
  "desc": "Framework de web scraping adaptativo: sirve igual para una petición suelta que para un crawl completo.",
  "stars": 68909,
  "lang": null,
  "license": "BSD-3-Clause",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "pip install scrapling"
   ],
   "uso": "Prueba primero con un dataset pequeño que conozcas bien. Validar contra datos conocidos te dice si la herramienta hace lo que crees."
  },
  "narr": {
   "gancho": "Sacar datos de la web sin pelear con cada sitio",
   "cuerpo": "El scraping normal se rompe apenas la página cambia un poco. Scrapling es adaptativo: aguanta desde una petición suelta hasta un crawl a gran escala, y se ajusta cuando el sitio se mueve. Menos scripts que reparar cada semana. Si tu trabajo depende de datos que viven en la web, esta es la caña con la que no vuelves con las manos vacías.",
   "regla": "Un buen scraper no es el que funciona hoy, es el que sigue funcionando cuando el sitio cambia."
  }
 },
 {
  "repo": "ComposioHQ/awesome-claude-skills",
  "name": "awesome-claude-skills",
  "owner": "ComposioHQ",
  "url": "https://github.com/ComposioHQ/awesome-claude-skills",
  "level": "intermedio",
  "cat": "aprende",
  "desc": "Lista curada de skills, recursos y herramientas para personalizar tus flujos con Claude.",
  "stars": 67315,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Una terminal y ganas de romper cosas (con respaldo)"
   ],
   "cmds": [
    "claude --plugin-dir ./connect-apps-plugin"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "El catálogo para no perderte en el mundo de las skills",
   "cuerpo": "Hay tantas skills, plugins y herramientas para Claude que empezar es abrumador. Esta lista curada te da el mapa: qué existe, qué vale la pena, agrupado y ordenado. En vez de tropezar con repos al azar, arrancas con una selección que alguien ya filtró por ti. El punto de partida antes de armar tu propio arsenal.",
   "regla": "Antes de coleccionar, mira el catálogo de quien ya recorrió el terreno."
  }
 },
 {
  "repo": "shanraisshan/claude-code-best-practice",
  "name": "claude-code-best-practice",
  "owner": "shanraisshan",
  "url": "https://github.com/shanraisshan/claude-code-best-practice",
  "level": "principiante",
  "cat": "aprende",
  "desc": "De vibe coding a ingeniería agéntica: buenas prácticas ordenadas y accionables.",
  "stars": 62362,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Una terminal y ganas de romper cosas (con respaldo)"
   ],
   "cmds": [
    "claude\n/weather-orchestrator"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "Del \"vibe coding\" a construir de verdad",
   "cuerpo": "Al principio le pides cosas a la IA y sale lo que sale —puro vibe. Este repo te lleva del improviso a la ingeniería agéntica: buenas prácticas ordenadas, en pasos que puedes aplicar hoy. No es teoría densa, es el mapa de cómo pasar de jugar a producir. Ideal si sientes que ya deberías estar sacando más.",
   "regla": "El vibe coding te arranca; las buenas prácticas te sostienen."
  }
 },
 {
  "repo": "Fission-AI/OpenSpec",
  "name": "OpenSpec",
  "owner": "Fission-AI",
  "url": "https://github.com/Fission-AI/OpenSpec",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Desarrollo guiado por especificaciones (SDD) para asistentes de código IA.",
  "stars": 59610,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npm install -g @fission-ai/openspec@latest"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "La spec primero, para que el agente no adivine",
   "cuerpo": "Un asistente de código sin instrucciones claras rellena huecos como puede, y ahí nacen los errores. OpenSpec te ordena el desarrollo guiado por especificaciones: defines qué quieres con precisión y el agente construye contra eso, no contra su interpretación. Menos sorpresas, menos rehacer. La disciplina que separa un demo de un producto.",
   "regla": "El agente no lee tu mente; lee tu spec. Escríbela bien."
  }
 },
 {
  "repo": "upstash/context7",
  "name": "context7",
  "owner": "upstash",
  "url": "https://github.com/upstash/context7",
  "level": "intermedio",
  "cat": "mcp",
  "desc": "Documentación de código siempre actualizada para tus agentes. Se acabaron las APIs alucinadas.",
  "stars": 58835,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx ctx7 setup"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "El fin de las APIs que Claude se inventa",
   "cuerpo": "Te ha pasado: le pides código con una librería, te lo entrega precioso… y usa una función que no existe o que cambió hace tres versiones. Normal — el modelo aprendió de una foto vieja de internet. Context7 le pasa la documentación real y actualizada de la librería justo cuando la necesita, no la que recuerda de memoria. El resultado es código que compila a la primera, sin que tengas que ir a buscar el doc tú mismo.",
   "regla": "Si Claude alucina APIs, no le bajes expectativas: dale contexto fresco."
  }
 },
 {
  "repo": "crewAIInc/crewAI",
  "name": "crewAI",
  "owner": "crewAIInc",
  "url": "https://github.com/crewAIInc/crewAI",
  "level": "avanzado",
  "cat": "agentes",
  "desc": "Framework para orquestar agentes autónomos con roles que colaboran entre sí.",
  "stars": 55255,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "uv pip install crewai",
    "uv pip install 'crewai[tools]'"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Un agente solo se atasca; un equipo se reparte el trabajo",
   "cuerpo": "Cuando la tarea es grande —investigar, escribir, revisar, decidir— pedírsela toda a un solo agente es como pedirle a una persona que sea a la vez quien investiga, quien redacta y quien critica. Se enreda. CrewAI te deja armar varios agentes con roles claros que se pasan el trabajo entre ellos, como un equipo de verdad: tú defines quién hace qué y en qué orden, ellos colaboran. Es de los frameworks más usados para esto, y no por moda.",
   "regla": "Si tu prompt tiene tres «y luego» adentro, probablemente son tres agentes, no uno."
  }
 },
 {
  "repo": "remotion-dev/remotion",
  "name": "remotion",
  "owner": "remotion-dev",
  "url": "https://github.com/remotion-dev/remotion",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Crea videos programáticamente con React. La base sobre la que se construyen los editores IA.",
  "stars": 52688,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx create-video@latest"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Haz videos con código, no arrastrando clips",
   "cuerpo": "Editar video a mano no escala: cada versión es empezar casi de nuevo. Remotion te deja crear videos con React —programándolos— así que cambiar un dato regenera el video entero solo. Es la base sobre la que están construidos varios editores con IA. Si vienes de la web, ya sabes la mitad; la otra mitad es entender que un video también es código.",
   "regla": "Lo que programas una vez, lo regeneras mil; lo que arrastras a mano, lo repites mil."
  }
 },
 {
  "repo": "mvanhorn/last30days-skill",
  "name": "last30days-skill",
  "owner": "mvanhorn",
  "url": "https://github.com/mvanhorn/last30days-skill",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Investiga cualquier tema en Reddit, X, YouTube y Hacker News de los últimos 30 días y te lo sintetiza.",
  "stars": 51223,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills add mvanhorn/last30days-skill -g",
    "npx skills add mvanhorn/last30days-skill -g -a claude-code"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Qué se dijo del tema en los últimos 30 días, ya sintetizado",
   "cuerpo": "Investigar un tema hoy es abrir veinte pestañas entre Reddit, X, YouTube y Hacker News, y aún así perderte lo reciente. Esta skill rastrea todo eso de los últimos 30 días y te lo sintetiza en un solo lugar. En vez de bucear, recibes el resumen con las fuentes. Perfecta cuando necesitas ponerte al día rápido y de verdad.",
   "regla": "No leas veinte pestañas: pon al agente a leerlas y quédate con la síntesis."
  }
 },
 {
  "repo": "run-llama/llama_index",
  "name": "llama_index",
  "owner": "run-llama",
  "url": "https://github.com/run-llama/llama_index",
  "level": "avanzado",
  "cat": "agentes",
  "desc": "La plataforma líder para agentes documentales y OCR sobre tus propios datos.",
  "stars": 50750,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "# custom selection of integrations to work with core\npip install llama-index-core\npip install llama-index-llms-openai\npip install llama-index-llms-ollama\npip install llama-index-embeddings-huggingface"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Ponle tus documentos a la IA, bien puestos",
   "cuerpo": "Preguntarle a una IA sobre tus PDFs, contratos o manuales suena fácil hasta que lo intentas: se enreda, alucina, no encuentra. LlamaIndex es la plataforma líder para hacer esto en serio —agentes documentales y OCR sobre tus propios datos—. Es el paso de \"le pego el texto al chat\" a \"tengo un sistema que consulta mi archivo entero\". Para cuando los documentos son muchos.",
   "regla": "Pegar un PDF al chat es un truco; indexar tu archivo entero es un sistema."
  }
 },
 {
  "repo": "microsoft/VibeVoice",
  "name": "VibeVoice",
  "owner": "microsoft",
  "url": "https://github.com/microsoft/VibeVoice",
  "level": "principiante",
  "cat": "creatividad",
  "desc": "IA de voz open-source de frontera, desarrollada por Microsoft.",
  "stars": 50009,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/microsoft/VibeVoice.git"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Voz IA de frontera, gratis y de Microsoft",
   "cuerpo": "La voz sintética buena solía ser cara y cerrada. VibeVoice es open-source, de Microsoft, y está en la frontera de lo que se puede hacer hoy. Buen punto de partida si quieres experimentar con narración, doblaje o voces para tus proyectos sin abrir la cartera. Descárgalo y juega antes de pagar por alternativas.",
   "regla": "Antes de pagar por voz IA, prueba la que un gigante regaló open-source."
  }
 },
 {
  "repo": "anthropics/claude-cookbooks",
  "name": "claude-cookbooks",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/claude-cookbooks",
  "level": "avanzado",
  "cat": "aprende",
  "desc": "Los recetarios oficiales de Anthropic: notebooks con patrones probados para sacar más de Claude.",
  "stars": 47187,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/anthropics/claude-cookbooks.git"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "Los recetarios oficiales de los que hacen Claude",
   "cuerpo": "Nadie conoce Claude mejor que Anthropic, y aquí sueltan sus recetas: notebooks con patrones probados para sacarle de verdad. En vez de reinventar cómo hacer cada cosa, copias el patrón que ya validaron los que construyeron el modelo. Cuando dudes de la forma correcta de algo, empieza por aquí. Fuente directa, cero intermediarios.",
   "regla": "Cuando la duda es \"¿cómo se hace bien?\", pregúntale al que hizo la herramienta."
  }
 },
 {
  "repo": "pbakaus/impeccable",
  "name": "impeccable",
  "owner": "pbakaus",
  "url": "https://github.com/pbakaus/impeccable",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "El lenguaje de diseño que vuelve a tu agente mejor diseñador. Directo al harness.",
  "stars": 45098,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx impeccable install"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Un idioma de diseño para tu agente, directo al harness",
   "cuerpo": "Los agentes diseñan mal porque nadie les enseñó a diseñar. Impeccable es un lenguaje de diseño que se le mete al harness y le sube el gusto de base: proporciones, jerarquía, coherencia. No parcheas cada pieza, cambias cómo el agente entiende \"que se vea bien\". La diferencia se nota en todo lo que produce después.",
   "regla": "No corrijas cada diseño feo: enséñale al agente a no hacerlos."
  }
 },
 {
  "repo": "kepano/obsidian-skills",
  "name": "obsidian-skills",
  "owner": "kepano",
  "url": "https://github.com/kepano/obsidian-skills",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Skills para que tu agente domine Obsidian: Markdown, Bases y JSON Canvas. Del CEO de Obsidian.",
  "stars": 40581,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills add git@github.com:kepano/obsidian-skills.git",
    "npx skills add https://github.com/kepano/obsidian-skills"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Que tu agente maneje Obsidian como tú",
   "cuerpo": "Si vives en Obsidian, quieres que tu agente juegue en tu cancha: Markdown, Bases, JSON Canvas. Estas skills —del CEO de Obsidian— le enseñan a moverse en tus notas y formatos abiertos con soltura. Deja de ser algo aparte y pasa a trabajar dentro de tu segundo cerebro. Cuando la fuente es el propio creador, sabes que está bien hecho.",
   "regla": "La mejor automatización vive dentro de la herramienta donde ya piensas."
  }
 },
 {
  "repo": "jamiepine/voicebox",
  "name": "voicebox",
  "owner": "jamiepine",
  "url": "https://github.com/jamiepine/voicebox",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "El estudio de voz IA open-source: clona, dicta, crea.",
  "stars": 40043,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/jamiepine/voicebox.git\ncd voicebox\n\njust setup   # creates Python venv, installs all deps\njust dev     # starts backend + desktop app"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Un estudio de voz IA entero, open-source",
   "cuerpo": "Clonar tu voz, dictar, crear audio: antes eran tres servicios distintos con suscripción. Voicebox los junta en un estudio de voz IA open-source y gratis. Ideal para narrar contenido, prototipar o simplemente entender qué se puede hacer hoy con la voz. Todo en un solo lugar, sin cuota mensual.",
   "regla": "Antes de suscribirte a tres apps de voz, prueba la que las junta gratis."
  }
 },
 {
  "repo": "multica-ai/multica",
  "name": "multica",
  "owner": "multica-ai",
  "url": "https://github.com/multica-ai/multica",
  "level": "intermedio",
  "cat": "agentes",
  "desc": "Plataforma open-source de agentes gestionados: asigna tareas y da seguimiento como si fueran compañeros de equipo.",
  "stars": 39661,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Trata a tus agentes como compañeros, no como comandos",
   "cuerpo": "Lanzar un agente y perderle la pista no escala. Multica es una plataforma open-source de agentes gestionados: les asignas tareas, sigues su avance y los coordinas como si fueran gente de tu equipo. En vez de una orden suelta, tienes un tablero de trabajo. El salto de \"usar un agente\" a \"manejar varios sin volverte loco\".",
   "regla": "Un agente es una herramienta; varios sin gestión son un caos."
  }
 },
 {
  "repo": "vercel-labs/agent-browser",
  "name": "agent-browser",
  "owner": "vercel-labs",
  "url": "https://github.com/vercel-labs/agent-browser",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "CLI de automatización de navegador para agentes, por Vercel.",
  "stars": 38192,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npm install -g agent-browser\nagent-browser install  # Download Chrome from Chrome for Testing (first time only)",
    "npm install agent-browser\nagent-browser install"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Un navegador que tu agente maneja solo, por Vercel",
   "cuerpo": "Un montón de tareas viven en el navegador: llenar formularios, revisar páginas, sacar datos. Agent-browser —de Vercel— es una CLI para que tu agente maneje el navegador por su cuenta. Automatizas lo repetitivo de la web sin estar tú haciendo clics. Cuando el respaldo es Vercel, la calidad viene de fábrica.",
   "regla": "Si lo haces con el mouse todos los días, un agente puede hacerlo por ti."
  }
 },
 {
  "repo": "coreyhaines31/marketingskills",
  "name": "marketingskills",
  "owner": "coreyhaines31",
  "url": "https://github.com/coreyhaines31/marketingskills",
  "level": "intermedio",
  "cat": "negocio",
  "desc": "Skills de marketing para agentes: CRO, copywriting, SEO, analítica y growth engineering.",
  "stars": 37439,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "# Add the marketplace\n/plugin marketplace add coreyhaines31/marketingskills\n\n# Install all marketing skills\n/plugin install marketing-skills"
   ],
   "uso": "Corre la primera auditoría o análisis sobre un proyecto real tuyo. Los resultados genéricos no enseñan nada; los tuyos sí."
  },
  "narr": {
   "gancho": "Un equipo de marketing metido en tu agente",
   "cuerpo": "CRO, copywriting, SEO, analítica, growth: áreas por las que se paga carísimo y que normalmente no dominas todas. Estas skills le enseñan a tu agente esos oficios de marketing para que te asista con criterio, no con generalidades. No reemplaza a un experto, pero te levanta el piso muchísimo cuando trabajas solo. Marketing accionable, no teoría de blog.",
   "regla": "No necesitas dominar cada área de marketing; necesitas un agente que te asista en las que no."
  }
 },
 {
  "repo": "anthropics/prompt-eng-interactive-tutorial",
  "name": "prompt-eng-interactive-tutorial",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/prompt-eng-interactive-tutorial",
  "level": "intermedio",
  "cat": "aprende",
  "desc": "El tutorial interactivo oficial de prompt engineering de Anthropic. Imprescindible para empezar en serio.",
  "stars": 36973,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/anthropics/prompt-eng-interactive-tutorial.git"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "Aprende a pedirle bien, desde la fuente",
   "cuerpo": "El 80% de los malos resultados con IA son malos prompts, no mala IA. Este es el tutorial interactivo oficial de Anthropic para aprender prompt engineering en serio: interactivo, no un PDF que ojeas. Antes de instalar veinte herramientas, aprende a hablarle bien a la que ya tienes. Es la habilidad que multiplica todo lo demás.",
   "regla": "Antes de culpar a la IA, revisa cómo se lo pediste."
  }
 },
 {
  "repo": "microsoft/playwright-mcp",
  "name": "playwright-mcp",
  "owner": "microsoft",
  "url": "https://github.com/microsoft/playwright-mcp",
  "level": "principiante",
  "cat": "mcp",
  "desc": "Servidor MCP de Playwright: tu agente controla un navegador real.",
  "stars": 34895,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "{\n  \"mcpServers\": {\n    \"playwright\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"@playwright/mcp@latest\"\n      ]\n    }\n  }\n}",
    "\"amp.mcpServers\": {\n  \"playwright\": {\n    \"command\": \"npx\",\n    \"args\": [\n      \"@playwright/mcp@latest\"\n    ]\n  }\n}"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Dale a tu agente un navegador de verdad",
   "cuerpo": "A veces el agente necesita ver una web como la ves tú: hacer clic, llenar campos, revisar que algo cargó. Este servidor MCP de Playwright le da ese navegador real, controlado por él. Sirve para probar tu propio sitio, automatizar tareas web o sacar datos que solo aparecen al interactuar. Es de Microsoft y es de lo más sólido para esto.",
   "regla": "Hay cosas que el agente no puede leer: tiene que abrir el navegador y hacerlas."
  }
 },
 {
  "repo": "heygen-com/hyperframes",
  "name": "hyperframes",
  "owner": "heygen-com",
  "url": "https://github.com/heygen-com/hyperframes",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Escribe HTML, renderiza video. Pensado desde cero para agentes.",
  "stars": 34011,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills add heygen-com/hyperframes --full-depth --yes",
    "npx hyperframes init my-video\ncd my-video\nnpx hyperframes preview      # preview in browser with live reload\nnpx hyperframes render       # render to MP4"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Si sabes HTML, ya sabes hacer video",
   "cuerpo": "Hacer video suele pedir programas pesados y una curva de aprendizaje. Hyperframes le da la vuelta: escribes HTML y sale video, pensado desde cero para que lo maneje un agente. Reusas lo que ya sabes de web para producir algo que parecía de otro mundo. Ideal para generar video a escala sin abrir un editor.",
   "regla": "El video no tiene que ser otro oficio: puede ser el que ya sabes en otro formato."
  }
 },
 {
  "repo": "OpenBMB/VoxCPM",
  "name": "VoxCPM",
  "owner": "OpenBMB",
  "url": "https://github.com/OpenBMB/VoxCPM",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Texto a voz multilingüe sin tokenizer: clonación de voz realista y open-source.",
  "stars": 32937,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Python 3.10+",
    "Git instalado"
   ],
   "cmds": [
    "pip install voxcpm",
    "# Install from source (latest main — vllm-omni is rapidly evolving)\nuv pip install vllm==0.19.0 --torch-backend=auto\ngit clone https://github.com/vllm-project/vllm-omni.git && cd vllm-omni\nuv pip install -e ."
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Voz multilingüe realista, sin cadenas",
   "cuerpo": "La clonación de voz buena suele venir amarrada a un servicio de pago. VoxCPM es texto-a-voz multilingüe, sin tokenizer, con clonación realista y open-source. Lo tienes tú, en tu máquina, para experimentar con voces en varios idiomas sin cuota. Buena base para proyectos de audio donde la privacidad y el control importan.",
   "regla": "Voz realista y open-source: ya no tienes que elegir entre calidad y control."
  }
 },
 {
  "repo": "anthropics/claude-plugins-official",
  "name": "claude-plugins-official",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/claude-plugins-official",
  "level": "principiante",
  "cat": "skills",
  "desc": "El directorio oficial de plugins de Claude Code, gestionado por Anthropic.",
  "stars": 31884,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/anthropics/claude-plugins-official.git"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "El directorio oficial, para no instalar cualquier cosa",
   "cuerpo": "Internet está lleno de plugins de Claude de calidad desigual. Este es el directorio oficial, curado por Anthropic: plugins que pasaron un filtro de calidad. Cuando quieres extender Claude Code sin arriesgarte con código random, empiezas aquí. La confianza de que alguien responsable ya revisó antes que tú.",
   "regla": "Instala del directorio oficial primero; a lo salvaje solo cuando sepas revisar."
  }
 },
 {
  "repo": "vercel-labs/agent-skills",
  "name": "agent-skills",
  "owner": "vercel-labs",
  "url": "https://github.com/vercel-labs/agent-skills",
  "level": "principiante",
  "cat": "skills",
  "desc": "La colección oficial de skills de agentes de Vercel.",
  "stars": 28886,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills add vercel-labs/agent-skills"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Las skills oficiales de Vercel, listas para usar",
   "cuerpo": "Vercel construye herramientas que usan millones de devs, y aquí comparte su colección oficial de skills de agentes. Instalar lo que hace una empresa que vive del developer experience es apuesta segura para arrancar. Calidad de fábrica, mantenimiento serio, cero adivinar. Un buen bloque para tu base.",
   "regla": "Cuando una empresa seria abre su colección, tú arrancas con ventaja."
  }
 },
 {
  "repo": "davila7/claude-code-templates",
  "name": "claude-code-templates",
  "owner": "davila7",
  "url": "https://github.com/davila7/claude-code-templates",
  "level": "principiante",
  "cat": "herramientas",
  "desc": "CLI para configurar y monitorear Claude Code con plantillas listas para producción.",
  "stars": 28550,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx claude-code-templates@latest --analytics",
    "# Local access\nnpx claude-code-templates@latest --chats\n\n# Secure remote access via Cloudflare Tunnel\nnpx claude-code-templates@latest --chats --tunnel"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Configura y vigila Claude Code sin dolor",
   "cuerpo": "Montar Claude Code desde cero y no saber qué está haciendo por dentro frena a mucha gente. Esta CLI te da plantillas listas para producción y te deja monitorear qué pasa. En vez de pelear con la configuración, arrancas con algo probado y ves el motor funcionando. El atajo para pasar de instalado a productivo.",
   "regla": "No configures a ciegas: parte de una plantilla y observa qué hace."
  }
 },
 {
  "repo": "blader/humanizer",
  "name": "humanizer",
  "owner": "blader",
  "url": "https://github.com/blader/humanizer",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Elimina las marcas de texto generado por IA. Que tu escritura vuelva a sonar humana.",
  "stars": 28474,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/blader/humanizer.git"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Que tu texto deje de oler a IA",
   "cuerpo": "Un texto generado por IA se huele: frases planas, muletillas, ese ritmo raro. Humanizer detecta esas marcas y reescribe para que suene a persona. No es para engañar, es para que tu escritura no se sienta de molde. Si publicas contenido, esta es la diferencia entre \"esto lo hizo un bot\" y \"esto lo escribió alguien\".",
   "regla": "La IA te da el borrador; que suene humano es tu decisión, no la suya."
  }
 },
 {
  "repo": "ScrapeGraphAI/Scrapegraph-ai",
  "name": "Scrapegraph-ai",
  "owner": "ScrapeGraphAI",
  "url": "https://github.com/ScrapeGraphAI/Scrapegraph-ai",
  "level": "intermedio",
  "cat": "datos",
  "desc": "Scraper en Python potenciado por IA: describe qué quieres extraer y el grafo hace el resto.",
  "stars": 28230,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "pip install scrapegraphai\n\n# IMPORTANT (for fetching websites content)\nplaywright install"
   ],
   "uso": "Prueba primero con un dataset pequeño que conozcas bien. Validar contra datos conocidos te dice si la herramienta hace lo que crees."
  },
  "narr": {
   "gancho": "Dile qué datos quieres; el resto lo resuelve la IA",
   "cuerpo": "El scraping tradicional te obliga a decirle a la máquina exactamente dónde está cada dato, y a arreglarlo cuando el sitio cambia. Scrapegraph invierte eso: describes qué quieres extraer y la IA arma el grafo para sacarlo. Menos código frágil, más intención. Para cuando quieres los datos y no pelear con selectores.",
   "regla": "Di qué necesitas, no cómo raspar cada píxel de la página."
  }
 },
 {
  "repo": "eyaltoledano/claude-task-master",
  "name": "claude-task-master",
  "owner": "eyaltoledano",
  "url": "https://github.com/eyaltoledano/claude-task-master",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Sistema de gestión de tareas con IA que se integra en Cursor, Windsurf y compañía.",
  "stars": 27805,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "claude mcp add taskmaster-ai -- npx -y task-master-ai",
    "# Install globally\nnpm install -g task-master-ai\n\n# OR install locally within your project\nnpm install task-master-ai"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Descompón el proyecto gigante en tareas que la IA sí puede",
   "cuerpo": "Pedirle a un agente \"hazme la app\" es receta de desastre: se pierde. Task-master rompe el proyecto en tareas manejables y las gestiona, integrándose con Cursor, Windsurf y compañía. El agente avanza pieza por pieza en vez de ahogarse en todo a la vez. La estructura que convierte una idea grande en algo que se termina.",
   "regla": "La IA no falla con lo grande por incapaz, sino porque no lo partiste en pedazos."
  }
 },
 {
  "repo": "BloopAI/vibe-kanban",
  "name": "vibe-kanban",
  "owner": "BloopAI",
  "url": "https://github.com/BloopAI/vibe-kanban",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Kanban para orquestar varios agentes de código a la vez y multiplicar tu output.",
  "stars": 27320,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx vibe-kanban"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Pon a varios agentes a trabajar sin chocar",
   "cuerpo": "Un agente rinde; varios a la vez, si no los coordinas, se pisan. Vibe-kanban es un tablero para orquestar múltiples agentes de código en paralelo y multiplicar tu output real. Ves quién hace qué y avanzas en varios frentes sin volverte el cuello de botella. El salto de manejar uno a dirigir un equipo de agentes.",
   "regla": "Tu límite deja de ser cuánto codeas y pasa a ser cuántos agentes coordinas."
  }
 },
 {
  "repo": "JCodesMore/ai-website-cloner-template",
  "name": "ai-website-cloner-template",
  "owner": "JCodesMore",
  "url": "https://github.com/JCodesMore/ai-website-cloner-template",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Replica la estructura de cualquier web con un comando usando agentes de código.",
  "stars": 27209,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/YOUR-USERNAME/YOUR-NEW-REPOSITORY.git\n   cd YOUR-NEW-REPOSITORY",
    "npm install"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Clona la estructura de cualquier web con un comando",
   "cuerpo": "Cuando ves una web con una estructura que te encanta, reconstruirla a mano es tedioso. Esta plantilla usa agentes para replicar la estructura de un sitio con un solo comando. Ideal para aprender cómo está armado algo bueno o para arrancar tu proyecto desde una base que ya funciona. Aprender copiando y luego hacerlo tuyo.",
   "regla": "Aprende la estructura de lo bueno reconstruyéndola, no mirándola."
  }
 },
 {
  "repo": "openai/codex-plugin-cc",
  "name": "codex-plugin-cc",
  "owner": "openai",
  "url": "https://github.com/openai/codex-plugin-cc",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Usa Codex desde Claude Code para revisar código o delegar tareas. Dos cerebros, una terminal.",
  "stars": 27174,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "/plugin marketplace add openai/codex-plugin-cc",
    "/plugin install codex@openai-codex"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Dos cerebros de IA, una sola terminal",
   "cuerpo": "Claude y Codex piensan distinto, y a veces quieres los dos: que uno construya y el otro revise. Este plugin te deja usar Codex desde Claude Code para revisar código o delegar tareas. Un segundo par de ojos, de otra IA, sin salir de tu flujo. La revisión cruzada atrapa lo que un solo modelo deja pasar.",
   "regla": "Un segundo modelo revisando atrapa lo que el primero no vio."
  }
 },
 {
  "repo": "vercel-labs/skills",
  "name": "skills",
  "owner": "vercel-labs",
  "url": "https://github.com/vercel-labs/skills",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "npx skills: el gestor abierto para instalar skills en cualquier agente.",
  "stars": 25656,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills add vercel-labs/agent-skills",
    "npx skills use vercel-labs/agent-skills@web-design-guidelines | claude\nnpx skills use vercel-labs/agent-skills --skill web-design-guidelines --agent claude-code"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Instala skills con un npx, en cualquier agente",
   "cuerpo": "Meter una skill a mano —copiar carpetas, mover archivos— es fricción que te da flojera repetir. Esta herramienta de Vercel lo vuelve un simple npx skills, funcionando en cualquier agente. Menos pasos, más probar. Cuando instalar es fácil, terminas usando muchas más skills, que es de lo que se trata.",
   "regla": "Si instalar cuesta, no lo usas; que sea un comando y todo cambia."
  }
 },
 {
  "repo": "ahujasid/blender-mcp",
  "name": "blender-mcp",
  "owner": "ahujasid",
  "url": "https://github.com/ahujasid/blender-mcp",
  "level": "avanzado",
  "cat": "mcp",
  "desc": "Controla Blender desde cualquier LLM. Modelado 3D conversacional.",
  "stars": 23657,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)",
    "Python 3.10+"
   ],
   "cmds": [
    "pipx install blender-mcp\npipx ensurepath          # then restart your shell / client"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Modela en 3D hablándole a la IA",
   "cuerpo": "Blender es potentísimo y con una curva de aprendizaje brutal. Este MCP conecta Blender con cualquier LLM: le describes lo que quieres y el modelado 3D se vuelve conversación. No reemplaza saber Blender, pero baja muchísimo la barrera para empezar a crear en 3D. Le hablas, y las cosas empiezan a tomar forma.",
   "regla": "La herramienta difícil se vuelve accesible cuando puedes pedirle las cosas hablando."
  }
 },
 {
  "repo": "Anil-matcha/Open-Generative-AI",
  "name": "Open-Generative-AI",
  "owner": "Anil-matcha",
  "url": "https://github.com/Anil-matcha/Open-Generative-AI",
  "level": "avanzado",
  "cat": "creatividad",
  "desc": "Estudio gratuito de generación de imagen y video con más de 200 modelos. La alternativa abierta a las plataformas de pago.",
  "stars": 22949,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "# Build Linux installers (AppImage + .deb)\nnpm run electron:build:linux"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Imagen y video con 200+ modelos, sin pagar",
   "cuerpo": "Las plataformas de generación de imagen y video cobran, y limitan. Este estudio open-source junta más de 200 modelos, gratis, en un solo lugar. Puedes experimentar sin gastar y comparar modelos que normalmente están detrás de suscripciones distintas. La alternativa abierta para crear sin que la factura decida por ti.",
   "regla": "Antes de pagar por generar, prueba los 200 modelos que alguien juntó gratis."
  }
 },
 {
  "repo": "coleam00/Archon",
  "name": "Archon",
  "owner": "coleam00",
  "url": "https://github.com/coleam00/Archon",
  "level": "intermedio",
  "cat": "agentes",
  "desc": "Constructor de harness open-source: vuelve el desarrollo con IA determinista y repetible.",
  "stars": 22819,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "curl -fsSL https://archon.diy/install | bash",
    "irm https://archon.diy/install.ps1 | iex"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Programar con IA sin que sea una lotería",
   "cuerpo": "El problema del código con IA es que a veces sale y a veces no, sin saber por qué. Archon es un constructor de harness open-source que busca justo eso: hacerlo determinista y repetible. Menos \"salió de milagro\", más proceso que puedes confiar y volver a correr. Para cuando quieres resultados consistentes, no suerte.",
   "regla": "Si tu código con IA depende de la suerte, te falta proceso, no talento."
  }
 },
 {
  "repo": "Donchitos/Claude-Code-Game-Studios",
  "name": "Claude-Code-Game-Studios",
  "owner": "Donchitos",
  "url": "https://github.com/Donchitos/Claude-Code-Game-Studios",
  "level": "avanzado",
  "cat": "agentes",
  "desc": "Convierte Claude Code en un estudio de videojuegos completo: 49 agentes y 72 workflows coordinados.",
  "stars": 22794,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Donchitos/Claude-Code-Game-Studios.git my-game\n   cd my-game",
    "claude"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Un estudio de videojuegos, con 49 agentes coordinados",
   "cuerpo": "Hacer un juego pide muchas manos: diseño, arte, código, sonido. Este proyecto convierte Claude Code en un estudio completo: 49 agentes y 72 workflows que se coordinan entre sí. Es de lo más ambicioso de esta bóveda —nivel avanzado— pero muestra hasta dónde llega orquestar agentes. Un vistazo al futuro de crear solo lo que antes pedía un equipo.",
   "regla": "Lo que antes pedía un estudio entero hoy cabe en agentes bien coordinados."
  }
 },
 {
  "repo": "czlonkowski/n8n-mcp",
  "name": "n8n-mcp",
  "owner": "czlonkowski",
  "url": "https://github.com/czlonkowski/n8n-mcp",
  "level": "intermedio",
  "cat": "mcp",
  "desc": "MCP que construye workflows de n8n por ti, desde Claude Desktop, Claude Code o Cursor.",
  "stars": 22213,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/czlonkowski/n8n-mcp.git"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Que la IA te arme las automatizaciones de n8n",
   "cuerpo": "n8n conecta tus apps en flujos automáticos, pero armarlos nodo por nodo lleva tiempo. Este MCP deja que Claude construya esos workflows por ti, desde Desktop, Code o Cursor. Le describes qué quieres automatizar y él arma el flujo. El puente entre \"sería genial automatizar esto\" y tenerlo funcionando sin arrastrar cajitas.",
   "regla": "Describe la automatización que sueñas; deja que el agente conecte los nodos."
  }
 },
 {
  "repo": "anthropics/courses",
  "name": "courses",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/courses",
  "level": "intermedio",
  "cat": "aprende",
  "desc": "Los cursos educativos oficiales de Anthropic, en formato repositorio.",
  "stars": 22131,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/anthropics/courses.git"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "Los cursos oficiales de Anthropic, en un repo",
   "cuerpo": "Para aprender a trabajar con Claude, mejor que rumores es ir a la escuela oficial. Este repo son los cursos educativos de Anthropic, estructurados para llevarte de menos a más. Sin humo de influencer, sin atajos dudosos: el material de los que hacen el modelo. El lugar honesto para construir tu base.",
   "regla": "Para aprender la herramienta, empieza por la escuela de quien la construyó."
  }
 },
 {
  "repo": "alchaincyf/huashu-design",
  "name": "huashu-design",
  "owner": "alchaincyf",
  "url": "https://github.com/alchaincyf/huashu-design",
  "level": "principiante",
  "cat": "creatividad",
  "desc": "Skill de diseño HTML-nativo: prototipos de alta fidelidad, presentaciones y animaciones desde Claude Code.",
  "stars": 21164,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills add alchaincyf/huashu-design",
    "npx skills add alchaincyf/huashu-design"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Prototipos de alta fidelidad, sin salir de Claude",
   "cuerpo": "Pasar de idea a prototipo bonito suele pedir otra herramienta y otro flujo. Esta skill de diseño HTML-nativo te deja sacar prototipos de alta fidelidad, presentaciones y animaciones directo desde Claude Code. Piensas y prototipas en el mismo lugar. Ideal para mostrar una idea con cara de producto sin montar un stack de diseño.",
   "regla": "Prototipar donde ya trabajas mata la fricción de cambiar de herramienta."
  }
 },
 {
  "repo": "mksglu/context-mode",
  "name": "context-mode",
  "owner": "mksglu",
  "url": "https://github.com/mksglu/context-mode",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Optimiza la ventana de contexto: aísla el output de las herramientas (~98% de reducción) y persiste la memoria de sesión.",
  "stars": 18768,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "/plugin marketplace add mksglu/context-mode\n/plugin install context-mode@context-mode"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Deja de quemar contexto con el ruido de las herramientas",
   "cuerpo": "Cada vez que tu agente corre una herramienta, el resultado gigante se traga tu ventana de contexto y lo hace olvidar cosas útiles. Context-mode aísla ese output en un sandbox —hasta 98% menos ruido— y persiste la memoria de sesión. El agente se mantiene enfocado y con espacio para lo que importa. Más contexto útil, menos basura.",
   "regla": "El contexto es caro: no lo llenes con el vómito de cada comando."
  }
 },
 {
  "repo": "teng-lin/notebooklm-py",
  "name": "notebooklm-py",
  "owner": "teng-lin",
  "url": "https://github.com/teng-lin/notebooklm-py",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "API no oficial de NotebookLM en Python, con skill agéntica para explotarlo desde código.",
  "stars": 17495,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "uv tool install \"notebooklm-py[browser]\"   # or: pipx install \"notebooklm-py[browser]\"\nnotebooklm login                           # first run auto-downloads Chromium (~170 MB), then Google sign-in\nnotebooklm auth check --test --json        # verify: expect \"status\": \"ok\"",
    "python3 -m venv .venv && source .venv/bin/activate   # Windows: .venv\\Scripts\\activate\npip install \"notebooklm-py[browser]\""
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Automatiza NotebookLM desde código",
   "cuerpo": "NotebookLM de Google es buenísimo para trabajar con tus fuentes, pero es de clic manual. Esta API no oficial en Python, con skill agéntica, te deja manejarlo desde código: automatizar, integrar, escalar lo que harías a mano. Para cuando NotebookLM se te queda corto como app y lo quieres como pieza de tu flujo.",
   "regla": "Cuando una buena herramienta solo es de clic, automatizarla la multiplica."
  }
 },
 {
  "repo": "anthropics/claude-quickstarts",
  "name": "claude-quickstarts",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/claude-quickstarts",
  "level": "intermedio",
  "cat": "aprende",
  "desc": "Proyectos oficiales para arrancar aplicaciones desplegables con Claude en minutos.",
  "stars": 17198,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/anthropics/claude-quickstarts.git"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "De cero a app funcionando, con Claude, en minutos",
   "cuerpo": "La pantalla en blanco frena a cualquiera. Estos son proyectos oficiales de Anthropic para arrancar aplicaciones desplegables con Claude sin empezar del vacío. Clonas, corres, y ya tienes algo que funciona para modificar. La mejor forma de aprender a construir es partir de algo que respira, no de un archivo vacío.",
   "regla": "La pantalla en blanco es el enemigo; un quickstart que ya corre, tu mejor aliado."
  }
 },
 {
  "repo": "muratcankoylan/Agent-Skills-for-Context-Engineering",
  "name": "Agent-Skills-for-Context-Engineering",
  "owner": "muratcankoylan",
  "url": "https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering",
  "level": "intermedio",
  "cat": "aprende",
  "desc": "Skills de context engineering y arquitecturas multi-agente listas para producción.",
  "stars": 17043,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "/plugin marketplace add muratcankoylan/Agent-Skills-for-Context-Engineering",
    "/plugin install context-engineering@context-engineering-marketplace"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "El arte de darle a la IA justo el contexto que necesita",
   "cuerpo": "La diferencia entre un agente mediocre y uno excelente casi siempre es el contexto que recibe. Esta colección reúne skills de context engineering y arquitecturas multi-agente listas para producción. Es material de nivel para quien ya entendió que gestionar el contexto es la habilidad central. Cuando quieres pasar de usar agentes a arquitectarlos.",
   "regla": "No es qué modelo usas; es qué contexto le pones enfrente."
  }
 },
 {
  "repo": "browser-use/browser-harness",
  "name": "browser-harness",
  "owner": "browser-use",
  "url": "https://github.com/browser-use/browser-harness",
  "level": "avanzado",
  "cat": "agentes",
  "desc": "Harness de navegador auto-reparable: los LLMs completan cualquier tarea web.",
  "stars": 15855,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "Install or upgrade browser-harness to the latest stable version with uv using Python 3.12, register the skill from `browser-harness skill`, and connect it to my browser. Follow https://github.com/browser-use/browser-harness/blob/main/install.md if setup or connection fails."
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Un agente web que se arregla solo cuando algo se rompe",
   "cuerpo": "Los agentes de navegador se caen apenas la página cambia. Browser-harness es auto-reparable: cuando algo se rompe, se reajusta para completar la tarea igual. Menos babysitting, más resultados. Es de lo más robusto para automatizar tareas web complejas donde no puedes estar tú vigilando cada paso. Aguanta el mundo real.",
   "regla": "La web cambia; tu automatización tiene que aguantarlo sin que la rescates."
  }
 },
 {
  "repo": "yusufkaraaslan/Skill_Seekers",
  "name": "Skill_Seekers",
  "owner": "yusufkaraaslan",
  "url": "https://github.com/yusufkaraaslan/Skill_Seekers",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Convierte sitios de documentación, repos y PDFs en skills de Claude, con detección de conflictos.",
  "stars": 14414,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Python 3.10+"
   ],
   "cmds": [
    "# Install with Gemini support\npip install skill-seekers[gemini]\n\n# Install with OpenAI support\npip install skill-seekers[openai]\n\n# Install with MiniMax support\npip install skill-seekers[minimax]\n\n# Install with all LLM platforms\npip install skill-seekers[all-llms]",
    "# Generate the skill\n./scripts/bootstrap_skill.sh\n\n# Install to Claude Code\ncp -r output/skill-seekers ~/.claude/skills/"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Convierte cualquier documentación en una skill",
   "cuerpo": "Quieres que tu agente domine una herramienta nueva, pero su documentación vive dispersa en una web o un PDF. Skill_Seekers convierte sitios de docs, repos y PDFs en skills de Claude, y hasta detecta conflictos entre ellas. En vez de explicarle cada herramienta, le das su manual convertido en skill. Fábrica de conocimiento a la medida.",
   "regla": "Toda documentación que te importa puede volverse una skill que tu agente ya sabe."
  }
 },
 {
  "repo": "microsoft/playwright-cli",
  "name": "playwright-cli",
  "owner": "microsoft",
  "url": "https://github.com/microsoft/playwright-cli",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "CLI de Playwright: graba, genera código, inspecciona selectores y toma screenshots.",
  "stars": 11900,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npm install -g @playwright/cli@latest\nplaywright-cli --help",
    "npx --no-install playwright --version"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Graba lo que haces en el navegador y vuélvelo código",
   "cuerpo": "Escribir pruebas de navegador a mano es lento y aburrido. Esta CLI de Playwright te deja grabar lo que haces y generar el código solo, además de inspeccionar selectores y tomar screenshots. Haces la acción una vez y sale el script. De Microsoft, y es el atajo estándar para no escribir automatización de web línea por línea.",
   "regla": "Hazlo una vez grabando; deja que la herramienta escriba el código."
  }
 },
 {
  "repo": "Vinzent03/obsidian-git",
  "name": "obsidian-git",
  "owner": "Vinzent03",
  "url": "https://github.com/Vinzent03/obsidian-git",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Control de versiones Git dentro de Obsidian, con commit-and-sync automático.",
  "stars": 11507,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Vinzent03/obsidian-git.git"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Respaldo y versiones de tus notas, en automático",
   "cuerpo": "Tus notas de Obsidian son valiosas y una edición mala puede arruinar horas. Este plugin mete Git dentro de Obsidian con commit-and-sync automático: respaldo constante e historial para volver atrás. Dejas de temerle a perder trabajo o a sincronizar entre dispositivos. La red de seguridad que tu segundo cerebro merece.",
   "regla": "Lo que no versionas, lo puedes perder de un mal clic."
  }
 },
 {
  "repo": "rmyndharis/OpenWA",
  "name": "OpenWA",
  "owner": "rmyndharis",
  "url": "https://github.com/rmyndharis/OpenWA",
  "level": "avanzado",
  "cat": "herramientas",
  "desc": "Gateway de WhatsApp API gratuito, open-source y self-hosted.",
  "stars": 10958,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "curl -X POST http://localhost:2785/api/sessions/{sessionId}/webhooks \\\n  -H \"Content-Type: application/json\" \\\n  -H \"X-API-Key: YOUR_API_KEY\" \\\n  -d '{\n    \"url\": \"https://your-server.com/webhook\",\n    \"events\": [\"message.received\", \"session.status\"],\n    \"secret\": \"your-hmac-secret\"\n  }'"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Tu propio gateway de WhatsApp, sin pagar API",
   "cuerpo": "Conectar apps a WhatsApp por la vía oficial cuesta y tiene trabas. OpenWA es un gateway gratuito, open-source y self-hosted: lo montas tú y controlas todo. Ideal para automatizar mensajes, notificaciones o bots sin depender de un proveedor caro. Es avanzado de montar, pero te da autonomía total sobre el canal donde de verdad está tu gente.",
   "regla": "El canal donde vive tu gente no debería depender de la factura de un tercero."
  }
 },
 {
  "repo": "AgriciDaniel/claude-seo",
  "name": "claude-seo",
  "owner": "AgriciDaniel",
  "url": "https://github.com/AgriciDaniel/claude-seo",
  "level": "intermedio",
  "cat": "negocio",
  "desc": "Skill universal de SEO: 25 sub-skills y 18 sub-agentes que cubren SEO técnico, E-E-A-T, schema y GEO.",
  "stars": 10897,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "/plugin marketplace add AgriciDaniel/claude-seo\n/plugin install claude-seo@agricidaniel-claude-seo",
    "git clone --depth 1 https://github.com/AgriciDaniel/claude-seo.git\nbash claude-seo/install.sh"
   ],
   "uso": "Corre la primera auditoría o análisis sobre un proyecto real tuyo. Los resultados genéricos no enseñan nada; los tuyos sí."
  },
  "narr": {
   "gancho": "Una auditoría de SEO sin pagarle a una agencia",
   "cuerpo": "El SEO técnico se siente como una caja negra: sabes que importa pero no dónde están las fugas. Esta skill le da a Claude 25 sub-skills y 18 sub-agentes que revisan lo que revisaría un consultor —lo técnico, el E-E-A-T, el schema, el GEO para que te citen las IAs— y te devuelve qué arreglar y por qué. Córrela sobre un proyecto tuyo real: los informes genéricos no enseñan nada, el tuyo sí.",
   "regla": "No adivines por qué no rankeas: audítalo, y arréglalo."
  }
 },
 {
  "repo": "nidhinjs/prompt-master",
  "name": "prompt-master",
  "owner": "nidhinjs",
  "url": "https://github.com/nidhinjs/prompt-master",
  "level": "principiante",
  "cat": "skills",
  "desc": "Skill que escribe el prompt exacto para cualquier herramienta de IA. Cero tokens desperdiciados.",
  "stars": 10358,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "I need a prompt for Claude Code to build a REST API — ask me what you need to know"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Que otra IA te escriba el prompt perfecto",
   "cuerpo": "A veces sabes qué quieres pero no cómo pedirlo, y el resultado sale flojo. Prompt-master es una skill que escribe el prompt exacto para cualquier herramienta de IA, sin gastar tokens de más. Le dices tu intención y te devuelve la instrucción bien armada. El meta-truco: usar IA para hablarle mejor a la IA.",
   "regla": "Si no sabes cómo pedirlo, deja que una IA te escriba la petición."
  }
 },
 {
  "repo": "virgiliojr94/book-to-skill",
  "name": "book-to-skill",
  "owner": "virgiliojr94",
  "url": "https://github.com/virgiliojr94/book-to-skill",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Convierte cualquier libro técnico en PDF en una skill de Claude Code, lista para estudiar y consultar mientras trabajas.",
  "stars": 8350,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/virgiliojr94/book-to-skill.git"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Ese libro técnico, convertido en skill que consultas al trabajar",
   "cuerpo": "Compras el libro técnico, lo lees a medias y se queda en el estante. Book-to-skill convierte cualquier PDF técnico en una skill de Claude Code: lista para estudiar y para consultar mientras trabajas, sin volver a abrir el libro. El conocimiento deja de ser páginas muertas y pasa a estar donde lo usas. Tu biblioteca, viva y a la mano.",
   "regla": "Un libro en el estante no te sirve; convertido en skill, trabaja contigo."
  }
 },
 {
  "repo": "YouMind-OpenLab/awesome-gpt-image-2",
  "name": "awesome-gpt-image-2",
  "owner": "YouMind-OpenLab",
  "url": "https://github.com/YouMind-OpenLab/awesome-gpt-image-2",
  "level": "principiante",
  "cat": "creatividad",
  "desc": "Biblioteca masiva de prompts de generación de imagen con previews, actualizada a diario.",
  "stars": 8128,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/YouMind-OpenLab/awesome-gpt-image-2.git"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Miles de prompts de imagen, con la foto al lado",
   "cuerpo": "La generación de imágenes vive o muere por el prompt, y adivinar cansa. Esta biblioteca junta miles de prompts con su preview, actualizada a diario. Ves el resultado antes de escribir, copias el que te sirve y ajustas. En vez de pelear con la página en blanco, arrancas de ejemplos que ya funcionan. Atajo directo a mejores imágenes.",
   "regla": "No adivines el prompt de imagen: parte de uno que ya dio buena foto."
  }
 },
 {
  "repo": "emilkowalski/skills",
  "name": "skills",
  "owner": "emilkowalski",
  "url": "https://github.com/emilkowalski/skills",
  "level": "principiante",
  "cat": "creatividad",
  "desc": "Skills para design engineers, por Emil Kowalski. Animación e interacción con estándar alto.",
  "stars": 7069,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx skills@latest add emilkowalski/skills"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Animación e interacción con estándar de design engineer",
   "cuerpo": "Las animaciones web mediocres se notan y las buenas también —para bien—. Estas skills son de Emil Kowalski, referente en animación e interacción, con un estándar alto. Le dan a tu agente el criterio para que el movimiento se sienta pulido, no torpe. La distancia entre una interfaz que funciona y una que da gusto tocar.",
   "regla": "Una animación torpe se siente barata; el detalle es lo que se percibe caro."
  }
 },
 {
  "repo": "ChrisWiles/claude-code-showcase",
  "name": "claude-code-showcase",
  "owner": "ChrisWiles",
  "url": "https://github.com/ChrisWiles/claude-code-showcase",
  "level": "intermedio",
  "cat": "aprende",
  "desc": "Ejemplo completo de configuración de Claude Code: hooks, skills, agentes, comandos y GitHub Actions.",
  "stars": 5985,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "mkdir -p .claude/{agents,commands,hooks,skills}"
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "Ve una config completa de Claude Code, entera",
   "cuerpo": "Leer sobre hooks, skills, agentes y comandos por separado no te muestra cómo encajan. Este repo es un ejemplo completo con todo funcionando junto, incluidos GitHub Actions. Es el \"muéstrame uno de verdad\" que te falta cuando ya entendiste las piezas sueltas. La mejor forma de armar el tuyo es ver uno bien armado primero.",
   "regla": "Entender las piezas sueltas no basta: mira una config completa funcionando."
  }
 },
 {
  "repo": "nolly-studio/cult-ui",
  "name": "cult-ui",
  "owner": "nolly-studio",
  "url": "https://github.com/nolly-studio/cult-ui",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Componentes para design engineers: Tailwind, compatibles con shadcn y fáciles de extender.",
  "stars": 5805,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/nolly-studio/cult-ui.git"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Componentes bonitos, listos para tu proyecto",
   "cuerpo": "Construir componentes de interfaz desde cero es lento y casi siempre reinventas la rueda. Cult-ui te da componentes cuidados para design engineers: Tailwind, compatibles con shadcn y fáciles de extender. Copias, pegas y ajustas a tu marca. El trabajo pesado ya está hecho; tú pones el toque. Base bonita para no empezar en gris.",
   "regla": "No construyas el botón número mil desde cero: parte de uno que ya se ve bien."
  }
 },
 {
  "repo": "dlt-hub/dlt",
  "name": "dlt",
  "owner": "dlt-hub",
  "url": "https://github.com/dlt-hub/dlt",
  "level": "avanzado",
  "cat": "datos",
  "desc": "Librería Python open-source que vuelve trivial cargar datos desde cualquier fuente hacia cualquier destino.",
  "stars": 5584,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "pip install dlt"
   ],
   "uso": "Prueba primero con un dataset pequeño que conozcas bien. Validar contra datos conocidos te dice si la herramienta hace lo que crees."
  },
  "narr": {
   "gancho": "Mueve datos de A a B sin escribir el pegamento",
   "cuerpo": "Cargar datos de una API o base a tu almacén suele ser código-pegamento frágil que se rompe solo. dlt es una librería Python open-source que vuelve trivial ese movimiento, de casi cualquier fuente a casi cualquier destino. Menos scripts que reparar, más datos donde los necesitas. La plomería aburrida pero crítica, resuelta.",
   "regla": "El pegamento de datos que escribes a mano es justo lo que se rompe a las 3am."
  }
 },
 {
  "repo": "FlorianBruniaux/claude-code-ultimate-guide",
  "name": "claude-code-ultimate-guide",
  "owner": "FlorianBruniaux",
  "url": "https://github.com/FlorianBruniaux/claude-code-ultimate-guide",
  "level": "intermedio",
  "cat": "aprende",
  "desc": "Guía exhaustiva de Claude Code: workflows agénticos, hooks, skills, servidores MCP y quizzes de práctica.",
  "stars": 5393,
  "lang": null,
  "license": "CC-BY-SA-4.0",
  "how": {
   "req": [
    "Una terminal y ganas de romper cosas (con respaldo)"
   ],
   "cmds": [
    "claude \"Fetch and follow the onboarding instructions from: https://raw.githubusercontent.com/FlorianBruniaux/claude-code-ultimate-guide/main/tools/onboarding-prompt.md\""
   ],
   "uso": "No lo leas de corrido: abre el repo, elige un tema y reprodúcelo en tu máquina. Se aprende ejecutando, no scrolleando."
  },
  "narr": {
   "gancho": "La guía gorda de Claude Code, con quizzes y todo",
   "cuerpo": "Si quieres dominar Claude Code de punta a punta —workflows agénticos, hooks, skills, MCP— esta guía exhaustiva te lleva por todo, y hasta te evalúa con quizzes. No es una lectura de cinco minutos, es el material para sentarte a aprenderlo en serio. Cuando ya jugaste un rato y quieres pasar de usuario a experto de verdad.",
   "regla": "Jugar te da soltura; una guía completa te da dominio."
  }
 },
 {
  "repo": "mixedbread-ai/mgrep",
  "name": "mgrep",
  "owner": "mixedbread-ai",
  "url": "https://github.com/mixedbread-ai/mgrep",
  "level": "avanzado",
  "cat": "herramientas",
  "desc": "Grep semántico para todo: código, imágenes, PDFs. Búsqueda por significado desde la CLI.",
  "stars": 4294,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npm install -g @mixedbread/mgrep    # or pnpm / bun",
    "pnpm install\npnpm build        # or pnpm dev for a quick compile + run\npnpm format       # biome formatting + linting"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Busca por significado, no por palabra exacta",
   "cuerpo": "El grep de siempre encuentra texto idéntico; inútil cuando no recuerdas la palabra exacta. mgrep busca por significado en todo: código, imágenes, PDFs, desde la CLI. Le describes lo que buscas aunque no sepas el término preciso y lo encuentra. Es el buscador que entiende qué quieres decir, no solo qué escribiste.",
   "regla": "Deja de recordar la palabra exacta: busca por lo que significa."
  }
 },
 {
  "repo": "haris-musa/excel-mcp-server",
  "name": "excel-mcp-server",
  "owner": "haris-musa",
  "url": "https://github.com/haris-musa/excel-mcp-server",
  "level": "intermedio",
  "cat": "mcp",
  "desc": "Servidor MCP para manipular archivos Excel directamente desde tu agente.",
  "stars": 4005,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)"
   ],
   "cmds": [
    "uvx excel-mcp-server stdio",
    "{\n   \"mcpServers\": {\n      \"excel\": {\n         \"command\": \"uvx\",\n         \"args\": [\"excel-mcp-server\", \"stdio\"]\n      }\n   }\n}"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Que tu agente trabaje tus Excel de verdad",
   "cuerpo": "Analizar hojas de cálculo a mano es horas de clic y fórmula. Este servidor MCP le da a tu agente acceso directo a tus archivos Excel: leer, editar, manipular sin que tú abras la hoja. Le pides el análisis o el cambio y él lo hace sobre el archivo real. El puente entre tu agente y el formato donde de verdad viven tus números.",
   "regla": "Tus datos viven en Excel; dale a tu agente la llave para entrar."
  }
 },
 {
  "repo": "anthropics/anthropic-sdk-python",
  "name": "anthropic-sdk-python",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/anthropic-sdk-python",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "El SDK oficial de Anthropic para Python. La base de cualquier app sobre Claude.",
  "stars": 3725,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "pip install anthropic"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Construir sobre Claude empieza aquí, en Python",
   "cuerpo": "El día que pases de usar Claude a construir algo encima de él, este es el ladrillo base: el SDK oficial de Anthropic para Python. Es la fuente confiable, mantenida por los que hacen el modelo. Toda app seria sobre Claude en Python arranca de aquí. Cuando el proyecto es en serio, se parte de lo oficial.",
   "regla": "Para construir sobre Claude, arranca del SDK oficial, no de un wrapper random."
  }
 },
 {
  "repo": "crystaldba/postgres-mcp",
  "name": "postgres-mcp",
  "owner": "crystaldba",
  "url": "https://github.com/crystaldba/postgres-mcp",
  "level": "avanzado",
  "cat": "mcp",
  "desc": "Acceso configurable a Postgres y análisis de performance para ti y tus agentes.",
  "stars": 3030,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/crystaldba/postgres-mcp.git"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Habla con tu base Postgres, y que se optimice sola",
   "cuerpo": "Consultar y afinar Postgres pide saber SQL y de rendimiento. Este MCP le da a ti y a tus agentes acceso configurable a la base más análisis de performance: no solo consultas, también te dice dónde está lenta. El puente entre lenguaje natural y tu base de datos, con un consultor de rendimiento incluido. Nivel avanzado, valor alto.",
   "regla": "Tu base no solo debe responder: debe decirte por qué va lenta."
  }
 },
 {
  "repo": "supabase/mcp",
  "name": "mcp",
  "owner": "supabase",
  "url": "https://github.com/supabase/mcp",
  "level": "avanzado",
  "cat": "mcp",
  "desc": "Conecta Supabase con tus asistentes de IA. Base de datos conversacional.",
  "stars": 2795,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/supabase/mcp.git"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Tu backend de Supabase, en conversación",
   "cuerpo": "Supabase te da base de datos, auth y más, pero manejarlo es ir al panel o escribir código. Este MCP oficial conecta Supabase con tus asistentes de IA: le pides los cambios o consultas y él los hace. Tu backend deja de ser clics y se vuelve diálogo. Cuando el respaldo es el propio Supabase, sabes que está bien hecho.",
   "regla": "El mejor panel de control es el que le puedes pedir hablando."
  }
 },
 {
  "repo": "snyk/agent-scan",
  "name": "agent-scan",
  "owner": "snyk",
  "url": "https://github.com/snyk/agent-scan",
  "level": "avanzado",
  "cat": "herramientas",
  "desc": "Escáner de seguridad para agentes, servidores MCP y skills. Desarrollado por Snyk.",
  "stars": 2763,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "uv run pip install -e .\nuv run -m src.agent_scan.cli"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Revisa que tus agentes no sean un hueco de seguridad",
   "cuerpo": "Instalas skills y MCPs de todos lados, y cada uno es una puerta que podría estar mal cerrada. Agent-scan —de Snyk, referente en seguridad— escanea agentes, servidores MCP y skills en busca de vulnerabilidades. Antes de confiar en código ajeno, lo revisas. En un ecosistema donde instalas mucho de terceros, esto es higiene básica.",
   "regla": "Cada skill de terceros es una puerta; revisa que no la dejaron abierta."
  }
 },
 {
  "repo": "anthropics/anthropic-sdk-typescript",
  "name": "anthropic-sdk-typescript",
  "owner": "anthropics",
  "url": "https://github.com/anthropics/anthropic-sdk-typescript",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "El SDK oficial de Anthropic para TypeScript.",
  "stars": 2036,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npm install @anthropic-ai/sdk"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Claude en tu app de TypeScript, oficial",
   "cuerpo": "Si construyes en TypeScript y quieres a Claude adentro, este es el SDK oficial de Anthropic. Mantenido por la fuente, es la base sólida para cualquier app web o Node que use el modelo. Nada de wrappers dudosos: la herramienta que los propios creadores respaldan. El punto de partida correcto para el ecosistema JS.",
   "regla": "En TypeScript, construye sobre el SDK oficial y duerme tranquilo."
  }
 },
 {
  "repo": "apify/apify-mcp-server",
  "name": "apify-mcp-server",
  "owner": "apify",
  "url": "https://github.com/apify/apify-mcp-server",
  "level": "intermedio",
  "cat": "mcp",
  "desc": "Tus agentes extraen datos de redes sociales, buscadores, mapas y e-commerce vía MCP.",
  "stars": 1774,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)"
   ],
   "cmds": [
    "{\n  \"mcpServers\": {\n    \"skyfire\": {\n      \"url\": \"https://api.skyfire.xyz/mcp/sse\",\n      \"headers\": {\n        \"skyfire-api-key\": \"<YOUR_SKYFIRE_API_KEY>\"\n      }\n    },\n    \"apify\": {\n      \"url\": \"https://mcp.apify.com?payment=skyfire\"\n    }\n  }\n}"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Tus agentes sacando datos de media internet",
   "cuerpo": "Redes sociales, buscadores, mapas, e-commerce: datos valiosísimos, dispersos y difíciles de extraer. Este MCP de Apify le da a tus agentes la capacidad de sacarlos directo. En vez de montar scrapers para cada sitio, aprovechas la infraestructura de Apify vía tu agente. La manguera de datos web conectada a tu flujo de IA.",
   "regla": "Los datos que necesitas ya están en la web; solo falta el agente que los traiga."
  }
 },
 {
  "repo": "severity1/claude-code-prompt-improver",
  "name": "claude-code-prompt-improver",
  "owner": "severity1",
  "url": "https://github.com/severity1/claude-code-prompt-improver",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Hook que mejora tus prompts al vuelo: escribe vibras, obtén precisión.",
  "stars": 1654,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/severity1/claude-code-prompt-improver.git\ncd claude-code-prompt-improver",
    "claude plugin marketplace add /absolute/path/to/claude-code-prompt-improver/.dev-marketplace/.claude-plugin/marketplace.json"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Escribe vibras; que el hook las vuelva precisión",
   "cuerpo": "No siempre tienes ganas de redactar el prompt perfecto: escribes rápido y sale a medias. Este hook mejora tus prompts al vuelo, dentro de Claude Code: tú tiras la idea suelta y él la afina antes de que llegue al modelo. Menos esfuerzo, mejores resultados, sin cambiar tu forma de trabajar. El pulido automático que no sabías que necesitabas.",
   "regla": "Tira la vibra; deja que el hook la convierta en instrucción precisa."
  }
 },
 {
  "repo": "BayramAnnakov/claude-reflect",
  "name": "claude-reflect",
  "owner": "BayramAnnakov",
  "url": "https://github.com/BayramAnnakov/claude-reflect",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Sistema de auto-aprendizaje: captura tus correcciones y preferencias, y las sincroniza entre sesiones.",
  "stars": 1237,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "claude plugin uninstall claude-reflect@claude-reflect-marketplace"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Que tu agente recuerde cómo te gusta trabajar",
   "cuerpo": "Corriges a Claude lo mismo una y otra vez porque olvida tus preferencias entre sesiones. Claude-reflect captura tus correcciones, tu feedback y tus manías, y las sincroniza para la próxima. Deja de repetirte y empieza a acumular: cada corrección se vuelve permanente. Un agente que aprende de ti en lugar de resetearse cada día.",
   "regla": "Una corrección que el agente olvida es una corrección que darás mañana otra vez."
  }
 },
 {
  "repo": "affaan-m/agentshield",
  "name": "agentshield",
  "owner": "affaan-m",
  "url": "https://github.com/affaan-m/agentshield",
  "level": "avanzado",
  "cat": "herramientas",
  "desc": "Detecta vulnerabilidades en configuraciones de agentes, servidores MCP y permisos de herramientas.",
  "stars": 961,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "# Scan your Claude Code config (no install required)\nnpx ecc-agentshield scan\n\n# Or install globally\nnpm install -g ecc-agentshield\nagentshield scan"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Encuentra el hueco en tu agente antes que un atacante",
   "cuerpo": "Configuras agentes, MCPs y permisos, y no siempre ves dónde queda un flanco abierto. AgentShield escanea justo eso: vulnerabilidades en configuraciones de agentes, servidores MCP y permisos de herramientas. Te dice qué está expuesto antes de que alguien lo aproveche. Seguridad proactiva para un mundo donde tu agente toca cada vez más cosas.",
   "regla": "Los permisos de tu agente son su superficie de ataque; audítalos."
  }
 },
 {
  "repo": "jordanrendric/claude-video-vision",
  "name": "claude-video-vision",
  "owner": "jordanrendric",
  "url": "https://github.com/jordanrendric/claude-video-vision",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Dale ojos a Claude: extrae frames y entiende videos desde Claude Code.",
  "stars": 957,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando"
   ],
   "cmds": [
    "/plugin marketplace add https://github.com/jordanrendric/claude-video-vision",
    "/plugin install claude-video-vision"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Dale ojos a Claude para ver video",
   "cuerpo": "Claude entiende texto e imágenes, pero el video se le escapa. Esta skill le da vista: extrae frames y le deja entender lo que pasa en un video, desde Claude Code. Sirve para analizar grabaciones, resumir clips o revisar contenido visual sin que tú lo veas entero. Una capacidad nueva que abre tareas que antes eran imposibles para el agente.",
   "regla": "Lo que el agente no puede ver, no lo puede ayudar; dale ojos."
  }
 },
 {
  "repo": "davideast/stitch-mcp",
  "name": "stitch-mcp",
  "owner": "davideast",
  "url": "https://github.com/davideast/stitch-mcp",
  "level": "intermedio",
  "cat": "mcp",
  "desc": "Lleva diseños de UI generados en Google Stitch directo a tu flujo de desarrollo.",
  "stars": 929,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npx @_davideast/stitch-mcp <command>",
    "npm install -g @_davideast/stitch-mcp\nstitch-mcp <command>"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Del diseño en Stitch al código, sin copiar a mano",
   "cuerpo": "Generas una UI bonita en Google Stitch y luego viene lo tedioso: pasarla a tu proyecto. Este MCP mueve esos diseños directo a tu flujo de desarrollo, sin el copy-paste manual. El puente entre la idea visual y el código real. Menos fricción entre \"se ve bien en el diseño\" y \"está en mi app\".",
   "regla": "El diseño no debería morir en la herramienta de diseño: llévalo al código solo."
  }
 },
 {
  "repo": "browser-use/bux",
  "name": "bux",
  "owner": "browser-use",
  "url": "https://github.com/browser-use/bux",
  "level": "avanzado",
  "cat": "agentes",
  "desc": "Agente 24/7 de automatización de navegador estilo Playwright, con Browser Use Cloud.",
  "stars": 402,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "$ curl -fsSL https://raw.githubusercontent.com/browser-use/bux/main/install.sh \\\n    | sudo BROWSER_USE_API_KEY=bu_xxx bash",
    "telegram ──►  telegram_bot.py ─┐\n                                 ├──► claude -p  ──► browser-harness ──► BU Cloud\n  browser  ──►  ttyd ────────────┘         │            (cdp over wss)\n                                           ▼\n                                  /home/bux (persistent state)"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Un agente de navegador que trabaja 24/7",
   "cuerpo": "Algunas tareas web no terminan nunca: monitorear, repetir, vigilar. Bux es un agente de automatización de navegador estilo Playwright que corre 24/7 con Browser Use Cloud. Lo dejas trabajando y sigue sin ti. Para procesos web continuos donde no puedes —ni quieres— estar presente todo el tiempo. Nivel avanzado, autonomía real.",
   "regla": "Lo que se repite sin parar no lo hagas tú: ponle un agente que no duerma."
  }
 },
 {
  "repo": "zhongweili/nanobanana-mcp-server",
  "name": "nanobanana-mcp-server",
  "owner": "zhongweili",
  "url": "https://github.com/zhongweili/nanobanana-mcp-server",
  "level": "intermedio",
  "cat": "mcp",
  "desc": "Generación de imágenes vía Gemini con selección inteligente de modelo y salida en 4K.",
  "stars": 374,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code o Claude Desktop (soporte MCP)",
    "Python 3.10+"
   ],
   "cmds": [
    "uvx nanobanana-mcp-server@latest",
    "pip install nanobanana-mcp-server"
   ],
   "uso": "Verifica la conexión con `claude mcp list` (o en la config de Claude Desktop). Después solo pide la tarea: Claude decide cuándo llamar la herramienta."
  },
  "narr": {
   "gancho": "Genera imágenes en 4K desde tu agente, con Gemini",
   "cuerpo": "Quieres imágenes buenas sin salir de tu flujo ni pelear con qué modelo usar. Este MCP genera imágenes vía Gemini con selección inteligente de modelo y salida en 4K, directo desde tu agente. Le pides la imagen y él elige cómo hacerla bien. Creación visual de alta resolución integrada, sin cambiar de herramienta.",
   "regla": "La mejor herramienta de imagen es la que ya vive dentro de tu flujo."
  }
 },
 {
  "repo": "Hainrixz/whatsapp-agentkit",
  "name": "whatsapp-agentkit",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/whatsapp-agentkit",
  "level": "intermedio",
  "cat": "agentes",
  "desc": "Monta tu propio agente de WhatsApp con IA en menos de 30 minutos, sin saber programar. En español.",
  "stars": 344,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/whatsapp-agentkit.git\ncd whatsapp-agentkit\nbash start.sh",
    "claude\n# Dentro de Claude Code escribe:\n/build-agent"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Tu propio bot de WhatsApp en 30 minutos, sin código",
   "cuerpo": "Montar un agente de WhatsApp suena a proyecto de programador, y por eso mucha gente ni lo intenta. Este kit te lo arma en menos de 30 minutos sin que sepas programar, y en español. Ideal para atención, recordatorios o un asistente para tu negocio en el canal donde de verdad está tu gente. La barrera técnica, resuelta.",
   "regla": "No necesitas ser programador para tener un agente donde tus clientes ya escriben."
  }
 },
 {
  "repo": "Hainrixz/the-architect",
  "name": "the-architect",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/the-architect",
  "level": "intermedio",
  "cat": "agentes",
  "desc": "Meta-agente que diseña blueprints completos de software: describe qué quieres y te entrega el plano.",
  "stars": 330,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/the-architect.git"
   ],
   "uso": "Arranca con el ejemplo mínimo del README antes de personalizar. Los frameworks de agentes premian entender el flujo base primero."
  },
  "narr": {
   "gancho": "Describe lo que quieres; recibe el plano completo",
   "cuerpo": "Antes de programar viene lo difícil: decidir cómo se estructura todo. The-architect es un meta-agente que diseña blueprints completos de software: le cuentas qué quieres y te entrega el plano para construirlo. En vez de arrancar a ciegas, empiezas con un mapa pensado. La fase de arquitectura, que la mayoría se salta y luego paga cara.",
   "regla": "Los errores más caros no están en el código, están en el plano que no hiciste."
  }
 },
 {
  "repo": "Hainrixz/editor-pro-max",
  "name": "editor-pro-max",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/editor-pro-max",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Editor de video con IA construido sobre Remotion: describe el video en lenguaje natural y se edita solo.",
  "stars": 205,
  "lang": null,
  "license": null,
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/editor-pro-max.git\ncd editor-pro-max\nclaude\n/start",
    "TU                              CLAUDE CODE                    REMOTION\n\"Hazme un TikTok\"  ──>  Escribe composicion React  ──>  Renderiza a MP4\n                         usando 25 componentes             1080x1920 @30fps"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Describe el video con palabras y que se edite solo",
   "cuerpo": "Editar video es aprender un programa pesado y horas de timeline. Editor-pro-max, construido sobre Remotion, le da la vuelta: describes el video en lenguaje natural y se edita solo. Del guion hablado al resultado, sin arrastrar clips. Para creadores que tienen la idea clara pero no quieren —o no saben— pelear con el editor.",
   "regla": "Si ya sabes qué video quieres, describirlo debería bastar."
  }
 },
 {
  "repo": "Hainrixz/claude-webkit",
  "name": "claude-webkit",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/claude-webkit",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Construye una página web profesional en minutos, sin saber programar. En español.",
  "stars": 173,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "npm install -g @anthropic-ai/claude-code",
    "claude login"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Una web profesional en minutos, sin programar",
   "cuerpo": "Tener una página decente suele pedir saber código o pagarle a alguien. Claude-webkit te la construye en minutos sin que programes, y en español. Le dices qué quieres y sale algo presentable, listo para ajustar. Ideal para lanzar tu proyecto, negocio o portafolio sin quedarte trabado en la parte técnica. De idea a web, directo.",
   "regla": "Tu idea no debería esperar a que aprendas a programar para existir en la web."
  }
 },
 {
  "repo": "Hainrixz/cyber-neo",
  "name": "cyber-neo",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/cyber-neo",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Agente de ciberseguridad open-source: escanea tu proyecto contra el OWASP Top 10.",
  "stars": 167,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/cyber-neo.git"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Escanea tu proyecto contra los fallos que todos cometen",
   "cuerpo": "Los mismos huecos de seguridad —el OWASP Top 10— hunden proyecto tras proyecto porque nadie los revisa a tiempo. Cyber-neo es un agente de ciberseguridad open-source que escanea el tuyo justo contra esos. Te dice qué está mal antes de que sea un incidente. Higiene de seguridad accesible, sin contratar a un pentester para lo básico.",
   "regla": "Los mismos diez fallos hunden mil proyectos; revisa que no sean el tuyo."
  }
 },
 {
  "repo": "Hainrixz/maia-skill",
  "name": "maia-skill",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/maia-skill",
  "level": "intermedio",
  "cat": "negocio",
  "desc": "5 agentes analizan cripto, acciones, forex y commodities en paralelo, adaptados a tu perfil de riesgo. Para estudiar mercados, no para apostar.",
  "stars": 118,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)",
    "Git instalado"
   ],
   "cmds": [
    "# 1. Clone the repo\ngit clone https://github.com/Hainrixz/maia-skill.git\n\n# 2. Symlink skill into Claude Code\nmkdir -p ~/.claude/skills\nln -s \"$(pwd)/maia-skill/.claude/skills/investment-analysis\" ~/.claude/skills/investment-analysis\n\n# 3. Install dashboard dependencies\nnpm install --prefix maia-skill/dashboard",
    "# 1. Clonar el repo\ngit clone https://github.com/Hainrixz/maia-skill.git\n\n# 2. Enlazar el skill en Claude Code\nmkdir -p ~/.claude/skills\nln -s \"$(pwd)/maia-skill/.claude/skills/investment-analysis\" ~/.claude/skills/investment-analysis\n\n# 3. Instalar dependencias del dashboard\nnpm install --prefix maia-skill/dashboard"
   ],
   "uso": "Corre la primera auditoría o análisis sobre un proyecto real tuyo. Los resultados genéricos no enseñan nada; los tuyos sí."
  },
  "narr": {
   "gancho": "Cinco agentes leyendo los mercados en paralelo",
   "cuerpo": "Entender cripto, acciones, forex y commodities pide mirar muchas cosas a la vez. Maia pone 5 agentes a analizarlos en paralelo, adaptándose a tu perfil de riesgo. Ojo: es para estudiar y entender mercados, no una señal para apostar ni consejo financiero. Una herramienta para aprender a leer el terreno, con la cabeza fría.",
   "regla": "Úsala para entender el mercado, no para que te diga dónde poner tu dinero."
  }
 },
 {
  "repo": "Hainrixz/claude-banana",
  "name": "claude-banana",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/claude-banana",
  "level": "intermedio",
  "cat": "creatividad",
  "desc": "Convierte ideas sueltas en prompts de imagen precisos: fórmula de 7 componentes y más de 70 estilos creativos.",
  "stars": 82,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/claude-banana.git\ncd claude-banana",
    "claude"
   ],
   "uso": "Empieza con un ejemplo pequeño: un prompt, una imagen, un video corto. Itera desde ahí — el gusto se entrena iterando."
  },
  "narr": {
   "gancho": "Convierte una idea vaga en un prompt de imagen que sirve",
   "cuerpo": "Tienes la imagen en la cabeza pero el prompt te sale flojo y el resultado no pega. Claude-banana convierte ideas sueltas en prompts precisos con una fórmula de 7 componentes y más de 70 estilos. Le das la intención y te arma la instrucción que sí genera lo que imaginabas. El traductor entre tu cabeza y el generador de imágenes.",
   "regla": "La imagen no falla por el modelo: falla por el prompt vago que le diste."
  }
 },
 {
  "repo": "Hainrixz/humanizalo",
  "name": "humanizalo",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/humanizalo",
  "level": "principiante",
  "cat": "skills",
  "desc": "Detecta 40 patrones de escritura IA y reescribe el texto para que suene humano. Bilingüe y con auto-auditoría.",
  "stars": 78,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/humanizalo.git ~/.claude/skills/humanizalo"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Detecta las 40 marcas de \"esto lo escribió una IA\"",
   "cuerpo": "Hay 40 patrones que delatan un texto generado por IA, y probablemente no los ves. Humanízalo los detecta y reescribe para que suene a persona, en dos idiomas y con auto-auditoría que revisa su propio trabajo. No es para engañar, es para que tu contenido no se sienta de molde. Si publicas, esto separa lo genérico de lo tuyo.",
   "regla": "Si no ves las marcas de IA en tu texto, tus lectores sí las ven."
  }
 },
 {
  "repo": "Hainrixz/auto-crm",
  "name": "auto-crm",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/auto-crm",
  "level": "intermedio",
  "cat": "negocio",
  "desc": "CRM local con IA que se personaliza a tu negocio. 100% local, open-source.",
  "stars": 58,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Node.js 18+ (incluye npm/npx)",
    "Git instalado",
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "# Descargar contactos como CSV\ncurl http://localhost:3000/api/export?type=contacts -o contactos.csv\n\n# Descargar deals como CSV\ncurl http://localhost:3000/api/export?type=deals -o deals.csv",
    "git clone https://github.com/Hainrixz/auto-crm.git\ncd auto-crm && npm install\nnpm run dev"
   ],
   "uso": "Corre la primera auditoría o análisis sobre un proyecto real tuyo. Los resultados genéricos no enseñan nada; los tuyos sí."
  },
  "narr": {
   "gancho": "Un CRM que se amolda a tu negocio, en tu máquina",
   "cuerpo": "Los CRM grandes te obligan a trabajar a su manera y a subir tus datos a su nube. Auto-crm es un CRM local con IA que se personaliza a tu negocio: 100% en tu máquina, open-source. Tus clientes y tu información no salen de ahí. Para quien quiere organizar sus relaciones sin pagar suscripción ni ceder el control de sus datos.",
   "regla": "Tus clientes son tu activo; no los guardes en el servidor de otro."
  }
 },
 {
  "repo": "Hainrixz/skill-vault",
  "name": "skill-vault",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/skill-vault",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Tu biblioteca personal de skills: organiza, analiza y busca, con análisis de seguridad incluido.",
  "stars": 54,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/skill-vault.git\ncd skill-vault\nclaude"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Ordena tu colección de skills antes de que sea un caos",
   "cuerpo": "Coleccionas skills y llega el punto en que no sabes qué tienes ni cuál es segura. Skill-vault es tu biblioteca personal: organiza, analiza y busca tus skills, con análisis de seguridad incluido. Pasas del montón desordenado a un arsenal que controlas. Cuando ya tienes muchas, gestionarlas es tan importante como conseguirlas.",
   "regla": "Un arsenal que no puedes buscar ni auditar no es arsenal, es desorden."
  }
 },
 {
  "repo": "Hainrixz/claude-ads",
  "name": "claude-ads",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/claude-ads",
  "level": "avanzado",
  "cat": "negocio",
  "desc": "Auditoría y optimización de pauta multi-plataforma que se auto-actualiza: Google, Meta, TikTok.",
  "stars": 51,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Una terminal (macOS/Linux: bash · Windows: PowerShell)"
   ],
   "cmds": [
    "/plugin marketplace add Hainrixz/claude-ads\n/plugin install claude-ads@tododeia-claude-ads",
    "curl -fsSL https://raw.githubusercontent.com/Hainrixz/claude-ads/main/install.sh | bash"
   ],
   "uso": "Corre la primera auditoría o análisis sobre un proyecto real tuyo. Los resultados genéricos no enseñan nada; los tuyos sí."
  },
  "narr": {
   "gancho": "Auditoría de tu pauta en Google, Meta y TikTok",
   "cuerpo": "La pauta pagada se fuga plata en detalles que no ves: segmentación floja, creativos gastados, presupuesto mal repartido. Claude-ads audita y optimiza tu pauta multi-plataforma —Google, Meta, TikTok— y se auto-actualiza. Te dice dónde estás quemando dinero y qué mover. Como tener un consultor de ads revisándote la cuenta, sin la factura.",
   "regla": "Cada día sin auditar tu pauta es presupuesto fugándose sin que lo veas."
  }
 },
 {
  "repo": "Hainrixz/all-deploy",
  "name": "all-deploy",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/all-deploy",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Despliega cualquier web, API o agente a internet, con auditoría estricta antes de cada deploy.",
  "stars": 38,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/all-deploy.git ~/.claude/skills/all-deploy",
    "git clone https://github.com/Hainrixz/all-deploy.git ~/.claude/skills/all-deploy"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Publica tu proyecto a internet, con revisión antes",
   "cuerpo": "Desplegar asusta: un paso mal y rompes producción. All-deploy despliega cualquier web, API o agente a internet, pero con una auditoría estricta antes de cada deploy y un preview para ver qué va a pasar. Publicas con red de seguridad, no cruzando los dedos. El puente entre \"funciona en mi máquina\" y \"está en vivo\", sin el susto.",
   "regla": "Desplegar sin revisar es cruzar los dedos; audita antes y publica tranquilo."
  }
 },
 {
  "repo": "Hainrixz/claude-seo-ai",
  "name": "claude-seo-ai",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/claude-seo-ai",
  "level": "intermedio",
  "cat": "negocio",
  "desc": "Toolkit de SEO + búsqueda IA (GEO/AEO): auditoría con dos scores y fixer opcional.",
  "stars": 27,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "/plugin marketplace add Hainrixz/claude-seo-ai\n/plugin install claude-seo-ai@claude-seo-ai\n/reload-plugins",
    "npx skills add Hainrixz/claude-seo-ai"
   ],
   "uso": "Corre la primera auditoría o análisis sobre un proyecto real tuyo. Los resultados genéricos no enseñan nada; los tuyos sí."
  },
  "narr": {
   "gancho": "SEO para Google y para que te citen las IAs",
   "cuerpo": "El SEO ya no es solo rankear en Google: también es que ChatGPT y Perplexity te citen. Este toolkit audita ambas caras —SEO clásico y búsqueda IA (GEO/AEO)— con dos scores separados y un fixer opcional que aplica arreglos. Ves dónde flojeas en cada frente y lo corriges. La brújula para no quedarte fuera del buscador nuevo.",
   "regla": "Rankear en Google ya no basta; ahora también peleas por que la IA te mencione."
  }
 },
 {
  "repo": "Hainrixz/abogado-del-diablo",
  "name": "abogado-del-diablo",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/abogado-del-diablo",
  "level": "intermedio",
  "cat": "skills",
  "desc": "Pon a Claude en tu contra: crítica dura de tu idea, plan o código antes de que lo haga el mercado.",
  "stars": 27,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/abogado-del-diablo.git"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Que Claude destroce tu idea antes que el mercado",
   "cuerpo": "Todos nos enamoramos de nuestras ideas y dejamos de ver sus huecos. Abogado-del-diablo pone a Claude en tu contra: critica duro tu idea, plan o código para encontrar las fallas antes de que las encuentre la realidad. Duele un poco, pero es barato comparado con equivocarte en grande. El sparring honesto que tu círculo no siempre te da.",
   "regla": "Mejor que tu idea la rompa Claude hoy y no el mercado la próxima semana."
  }
 },
 {
  "repo": "Hainrixz/agente-pagokit",
  "name": "agente-pagokit",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/agente-pagokit",
  "level": "avanzado",
  "cat": "negocio",
  "desc": "Analiza tu proyecto, hace 3 preguntas y genera la integración de pagos completa.",
  "stars": 22,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "# 1. Clone the plugin\ngit clone https://github.com/Hainrixz/agente-pagokit ~/agente-pagokit\n\n# 2. From your project, launch Claude Code with the plugin loaded\ncd ~/your-project\nclaude --plugin-dir ~/agente-pagokit"
   ],
   "uso": "Corre la primera auditoría o análisis sobre un proyecto real tuyo. Los resultados genéricos no enseñan nada; los tuyos sí."
  },
  "narr": {
   "gancho": "Cobra en tu app sin pelear con la integración de pagos",
   "cuerpo": "Meter pagos a un proyecto es de lo más delicado y lo que más frena a la gente. Pagokit analiza tu proyecto, te hace 3 preguntas y genera la integración de pagos completa. Del \"no sé por dónde empezar a cobrar\" a tenerlo armado. Nivel avanzado, pero te salta la parte que suele congelar lanzamientos enteros. Empezar a cobrar, desbloqueado.",
   "regla": "La parte que más pospones —cobrar— es justo la que hace real tu proyecto."
  }
 },
 {
  "repo": "Hainrixz/claude-db",
  "name": "claude-db",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/claude-db",
  "level": "intermedio",
  "cat": "datos",
  "desc": "El experto en bases de datos multi-paradigma: diseña esquemas y audítalos con dos scores independientes.",
  "stars": 18,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Node.js 18+ (incluye npm/npx)"
   ],
   "cmds": [
    "/plugin marketplace add Hainrixz/claude-db\n/plugin install claude-db@claude-db\n/reload-plugins",
    "npx skills add Hainrixz/claude-db"
   ],
   "uso": "Prueba primero con un dataset pequeño que conozcas bien. Validar contra datos conocidos te dice si la herramienta hace lo que crees."
  },
  "narr": {
   "gancho": "Diseña tu base de datos con un experto al lado",
   "cuerpo": "Una base mal diseñada te persigue durante todo el proyecto. Claude-db es el experto multi-paradigma: te ayuda a diseñar el esquema y luego lo audita con dos scores independientes para decirte qué tan sólido está. Decisiones de datos con criterio, no a ojo. La diferencia entre una base que aguanta el crecimiento y una que toca rehacer.",
   "regla": "El esquema que eliges al inicio te acompaña —o te penaliza— todo el proyecto."
  }
 },
 {
  "repo": "Hainrixz/aprende-skill",
  "name": "aprende-skill",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/aprende-skill",
  "level": "principiante",
  "cat": "skills",
  "desc": "Tu agente aprende de sus errores: /aprende revisa la sesión y guarda las lecciones para la próxima.",
  "stars": 13,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/aprende-skill.git\ncp -r aprende-skill/skills/aprende ~/.claude/skills/\ncp -r aprende-skill/skills/learn ~/.claude/skills/   # English alias (optional)",
    "# Copy the handlers somewhere stable:\nmkdir -p ~/.claude/aprende-hooks\ncp aprende-skill/hooks-handlers/*.sh ~/.claude/aprende-hooks/\nchmod +x ~/.claude/aprende-hooks/*.sh"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "Que tu agente aprenda de los errores de hoy",
   "cuerpo": "Tu agente comete un error, lo corriges, y mañana lo repite porque no guardó la lección. Aprende-skill cambia eso: con /aprende, revisa la sesión y guarda lo aprendido para la próxima. Cada tropiezo se vuelve conocimiento acumulado en lugar de un déjà vu. La única forma de que trabajar con un agente mejore con el tiempo en serio.",
   "regla": "Un error del que no se aprende es un error que vas a repetir."
  }
 },
 {
  "repo": "Hainrixz/enpoint-agentkit",
  "name": "enpoint-agentkit",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/enpoint-agentkit",
  "level": "intermedio",
  "cat": "herramientas",
  "desc": "Abre endpoints REST de solo lectura en tu app sin ser experto: detecta tu stack y lo arma por ti.",
  "stars": 1,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Git instalado"
   ],
   "cmds": [
    "git clone https://github.com/Hainrixz/enpoint-agentkit.git"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Abre un endpoint de tu app sin ser backend",
   "cuerpo": "Exponer datos de tu app por una API suena a tema de programador senior. Enpoint-agentkit detecta tu stack y te arma un endpoint REST de solo lectura por ti, sin que seas experto. Del \"necesito que otra herramienta lea mis datos\" a tenerlo funcionando. Solo lectura, así que es seguro para empezar. La puerta técnica, abierta para no técnicos.",
   "regla": "Compartir tus datos por API no tiene que esperar a que aprendas backend."
  }
 },
 {
  "repo": "Hainrixz/claude-cmd",
  "name": "claude-cmd",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/claude-cmd",
  "level": "principiante",
  "cat": "herramientas",
  "desc": "Instala Claude Code en 1 clic en Mac y Windows, con ícono directo en tu escritorio.",
  "stars": 0,
  "lang": null,
  "license": "MIT",
  "how": {
   "req": [
    "Python 3.10+"
   ],
   "cmds": [
    "# 1) Genera claude-terminal.png (.icns no hace falta) y claude-terminal.ico + sus .b64\npython3 assets/make-icons.py assets/mascot-source.png assets --final A\n# 2) Inyecta los base64 en install-mac.command, install-linux.sh e install-windows.ps1\npython3 assets/embed-icons.py"
   ],
   "uso": "Corre el comando de ayuda (--help) para ver qué ofrece, y prueba el caso de uso más simple antes de integrarlo a tu flujo."
  },
  "narr": {
   "gancho": "Instala Claude Code en un clic, sin dramas de terminal",
   "cuerpo": "Para muchos, el primer muro es instalar la herramienta: comandos raros, errores crípticos. Claude-cmd instala Claude Code en un clic en Mac y Windows y te deja un ícono directo en el escritorio. Del \"no pasé de la instalación\" a estar dentro trabajando. El obstáculo que frena a los principiantes, quitado de en medio. Empezar, sin fricción.",
   "regla": "La mejor herramienta no sirve si te quedas atascado en instalarla."
  }
 },
 {
  "repo": "Hainrixz/claude-skill",
  "name": "claude-skill",
  "owner": "Hainrixz",
  "url": "https://github.com/Hainrixz/claude-skill",
  "level": "principiante",
  "cat": "skills",
  "desc": "Pregunta qué puede hacer Claude y dónde: un router de capacidades entre Chat, Code y Cowork.",
  "stars": 0,
  "lang": null,
  "license": "Apache-2.0",
  "how": {
   "req": [
    "Claude Code instalado y funcionando",
    "Python 3.10+"
   ],
   "cmds": [
    "# con skill-creator instalado:\npython3 -m scripts.package_skill /ruta/a/claude-skill/claud /ruta/a/claude-skill/dist"
   ],
   "uso": "Reinicia Claude Code y pide la tarea en lenguaje natural — la skill se activa sola cuando el contexto la pide. También puedes invocarla directo con /nombre-de-la-skill."
  },
  "narr": {
   "gancho": "¿Qué puede hacer Claude y dónde? Esta skill te lo dice",
   "cuerpo": "Claude vive en Chat, en Code, en Cowork, y no siempre sabes qué hacer en cuál. Claude-skill es un router de capacidades: le preguntas qué puede hacer y dónde, y te orienta a la superficie correcta. Deja de adivinar en qué herramienta cabe tu tarea. La brújula para no perderte en un ecosistema que crece rápido. Empieza sabiendo dónde parado.",
   "regla": "Antes de pelear con la tarea, sepa en cuál de las Claudes va."
  }
 }
];
