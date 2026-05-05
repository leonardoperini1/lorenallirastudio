## Plano de Desenvolvimento

### 1. Hero — animação de fundo no Mobile
- A classe `.wind-bg` já roda em todas as larguras (sem media query que a desabilite, exceto `prefers-reduced-motion`). Vou:
  - Garantir que `Hero.tsx` mantém `wind-bg` na imagem.
  - Adicionar `will-change: transform` e `backface-visibility: hidden` reforçados em CSS para compatibilidade iOS Safari (que às vezes ignora animação dentro de container com `overflow-hidden` + `min-h-[110vh]`).
  - Forçar `animation-play-state: running` na regra `.wind-bg` para garantir execução em mobile.

### 2. Portfólio — Mídia (MP4 / GIF) com controle manual
Atualmente apenas faixas de áudio (.mp3) são controladas; itens com cover `.mp4` (`p2`) e `.gif` (`p3`) são renderizados como `<img>` estáticos via `AudioCard`.

- Criar novo componente `MediaCard.tsx` (ou estender `AudioCard`) que detecta tipo de cover:
  - `.mp4` → renderiza `<video>` com `loop muted playsInline preload="metadata"` e botão Play/Pause sobreposto. Sem autoplay. Loop seamless garantido por `loop` nativo + `preload="auto"` para evitar gap.
  - `.gif` → renderiza `<img>` parado (primeiro frame via `<video>` poster não funciona com GIF). Solução: usar `<img>` carregado mas **pausado** sobrepondo um frame estático PNG/poster até o usuário clicar em Play. Como GIFs não podem ser pausados via JS, a abordagem prática é:
    - Mostrar um poster estático (primeiro frame em jpg) por padrão.
    - Ao clicar Play, trocar `src` para o GIF animado.
    - Ao clicar Pause, voltar para o poster.
  - `.jpg` → comportamento atual.
- Em `Portfolio.tsx`, passar a prop `cover` mantendo a extensão; o card decide o renderer.
- Para o item `casamento` (mp4 com áudio sincronizado): manter o `<audio>` existente E o `<video>` mudo; ambos iniciam no mesmo clique. Loop seamless: usar `audio.loop = true` + `video.loop = true` e disparar `play()` em ambos sincronizados. (Se houver drift perceptível, ouvir `ended` do áudio e fazer `video.currentTime = 0; video.play()`.)
- Regra: autoplay apenas se for visualmente "loop infinito sem percepção de reinício" — caso contrário controle manual. Decisão: **todos os MP4/GIF começam pausados com botão Play**. (Sem autoplay.)
- Para gerar o poster do GIF: extrair o primeiro frame do `portfolio-3.gif` para `portfolio-3-poster.jpg` em `src/assets/`.

### 3. Pricing — Plano Intermezzo
Em `Pricing.tsx`:
- Remover `lg:scale-[1.04]` e `shadow-[0_24px_60px_…]` do card featured. Aplicar a mesma classe base dos demais (`bg-card border border-border/60 shadow-[0_4px_24px_-12px_…]`).
- Manter o badge "★ Mais escolhido" no topo.
- Manter o botão "Quero o Intermezzo" (já é `btn-primary`; ok).
- Adicionar item `"Playback instrumental"` na lista `features` do plano Intermezzo.
- Garantir que conteúdo interno (texto/check icons) não dependa mais de `p.featured` — usar a variante padrão para texto/checks.

### 4. Nova seção Promo — Dia das Mães
- Criar `src/components/site/MothersDayPromo.tsx`:
  - Layout em destaque (card grande centralizado, banner) com headline "50% de desconto no plano Prelúdio" e subcopy curta.
  - CTA `QUERO O PRELÚDIO` → `waLink("Olá, gostaria de saber mais sobre o plano Prelúdio para presentear minha mãe")`.
  - Padding `py-[100px]`, paleta consistente (usar `bg-muted/40` ou gradient existente).
- Inserir em `src/routes/index.tsx` logo após `<Pricing />` e antes de `<Testimonials />`.

### 5. Final CTA — remover e-mail
Em `FinalCTA.tsx`: remover o `<a href="mailto:…">` (botão secundário). Manter apenas o CTA "Reservar música".

### 6. Footer — substituir lista Contato por ícones
Em `Footer.tsx`:
- Remover a coluna "Contato" textual (label + lista WhatsApp/email).
- Substituir por dois ícones lado a lado (`MessageCircle` ou ícone WhatsApp custom + `Mail` do lucide-react), tamanho `32x32px`.
  - WhatsApp → `<a href={waLink()} target="_blank">` com SVG WhatsApp inline (lucide não tem WhatsApp nativo; usar SVG inline simples) tamanho 32.
  - E-mail → `<a href="mailto:personalizesuatrilha@gmail.com">` com `<Mail size={32}/>`.
- Manter o restante do footer (logo, navegação, copyright).

### Arquivos afetados
- `src/styles.css` (reforço da animação)
- `src/components/site/Hero.tsx` (revalidar)
- `src/components/site/AudioCard.tsx` (suporte a video/gif) ou novo `MediaCard.tsx`
- `src/components/site/Portfolio.tsx`
- `src/components/site/Pricing.tsx`
- `src/components/site/MothersDayPromo.tsx` (novo)
- `src/components/site/FinalCTA.tsx`
- `src/components/site/Footer.tsx`
- `src/routes/index.tsx`
- `src/assets/portfolio-3-poster.jpg` (gerado a partir do GIF)

Confirma que posso executar?