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
  }
 }
];
