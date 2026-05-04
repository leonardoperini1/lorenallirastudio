# Plano — FlowerWindEffect (Hero da Lorena LLira)

## Objetivo
Substituir o background da seção Hero por um elemento figurativo: a rosa (`hero-rose.jpg`) centralizada no lado direito do grid, com duas camadas de animação combinadas — vento idle + repulsão ao cursor — usando `framer-motion`.

## Entregáveis
1. Nova dependência: `framer-motion`.
2. Novo componente: `src/components/site/FlowerWindEffect.tsx`.
3. Hero refatorado: `src/components/site/Hero.tsx` (texto à esquerda, flor à direita, sem background full-bleed).

---

## 1. Instalação
```
bun add framer-motion
```

## 2. Componente `FlowerWindEffect.tsx`

**Localização:** `src/components/site/FlowerWindEffect.tsx`

**Props:** nenhuma (componente autocontido; importa `hero-rose.jpg` direto).

**Estrutura JSX:**
```text
<div ref={containerRef} className="relative w-full h-full overflow-hidden flex items-center justify-center">
  <motion.img
    src={heroRose}
    alt="Rosa pintada feita de partituras musicais"
    style={{ x, y, rotate }}
    className="w-full h-full object-contain select-none pointer-events-none"
    draggable={false}
  />
</div>
```

### Camada 1 — Vento idle (MotionValues independentes)
- `windY = useMotionValue(0)` → animado com `animate(windY, [-5, 5, -5], { duration: 4, repeat: Infinity, ease: "easeInOut" })`.
- `windRotate = useMotionValue(0)` → `animate(windRotate, [-1, 1, -1], { duration: 6, repeat: Infinity, ease: "easeInOut" })`.
- Durações dessincronizadas (4s vs 6s) → movimento orgânico, não pendular.
- Disparado dentro de `useEffect` no mount; cleanup com `.stop()`.

### Camada 2 — Repulsão do mouse (viewport-wide)
- `mouseX = useMotionValue(0)`, `mouseY = useMotionValue(0)`.
- `mouseSpringX = useSpring(mouseX, { stiffness: 100, damping: 20 })`, idem Y.
- Listener `window.addEventListener("mousemove", handler)`:
  - Calcula centro do container via `containerRef.current.getBoundingClientRect()`.
  - Vetor `dx = centerX - clientX`, `dy = centerY - clientY` (sinal invertido = repulsão).
  - Normaliza pela diagonal da viewport e multiplica por `MAX_OFFSET = 25`.
  - Faz clamp em `[-25, 25]` para garantir sutileza mesmo perto do elemento.
  - `mouseX.set(...)`, `mouseY.set(...)`.
- `mouseleave` no `document` → reseta para `0` (spring cuida da inércia de retorno).

### Composição (chave do "sem anular")
```text
const x = useTransform([mouseSpringX], ([mx]) => mx);              // só mouse no eixo X
const y = useTransform([windY, mouseSpringY], ([w, m]) => w + m);  // soma vento + mouse
const rotate = windRotate;                                          // só vento
```
Cada eixo tem sua própria fonte; a soma via `useTransform` garante que ambas convivam.

### Guards de acessibilidade / responsividade
- `useReducedMotion()` do framer-motion → se `true`, **não** dispara animações nem listener; renderiza imagem estática.
- `matchMedia("(hover: none)")` → se `true` (touch devices), pula apenas o listener de mouse; mantém vento idle.
- Cleanup completo no unmount (controles de `animate`, `removeEventListener`).

## 3. Refatorar `Hero.tsx`

Mudanças mínimas, preservando identidade visual:

- Remover o bloco `<div className="absolute inset-0 -z-10 ...">` com a `<img>` de fundo + dois gradientes.
- Manter `section` com `min-h-[110vh] lg:min-h-screen`, mas trocar fundo por um gradiente sutil do tema (ou simplesmente o `background` do site, que já tem grain e radial gradients via `body`).
- Grid existente: `lg:grid-cols-12`.
  - Coluna de texto: `lg:col-span-7` (era 8/7) — mantém eyebrow, h1, parágrafo, CTAs e estatísticas.
  - Coluna da flor: `lg:col-span-5` — substitui o `<div className="hidden lg:block ..." />` vazio por:
    ```text
    <div className="hidden lg:block lg:col-span-5 h-[600px] xl:h-[700px]">
      <FlowerWindEffect />
    </div>
    ```
- Em mobile/tablet (`< lg`), a flor não aparece no grid (mantém leitura limpa do texto, coerente com o layout atual que já escondia a coluna direita).

## 4. Critérios de aceite
- Build passa sem erros de TS.
- Em desktop com mouse: rosa flutua sutilmente (vento) e responde com leve "fuga" ao cursor, retornando com inércia de mola.
- Em mobile: apenas vento idle, sem listeners.
- Com `prefers-reduced-motion: reduce`: imagem totalmente estática.
- Texto do Hero, CTAs, estatísticas e eyebrow permanecem intactos.
- Nenhum outro componente do site é alterado.

## 5. Arquivos tocados
- `package.json` / `bun.lock` (via `bun add framer-motion`)
- `src/components/site/FlowerWindEffect.tsx` (novo)
- `src/components/site/Hero.tsx` (editado)
