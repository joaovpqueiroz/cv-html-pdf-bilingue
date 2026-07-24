# João Queiroz - Currículo bilíngue em HTML e PDF

Currículo profissional bilíngue, responsivo e preparado para impressão, desenvolvido com Next.js e TypeScript.

## Links

- Currículo: <https://joaovpqueiroz.github.io/cv-html-pdf-bilingue/>
- Portfólio e marca profissional: <https://joaoqueiroz.dev>
- LinkedIn: <https://www.linkedin.com/in/joaovpqueiroz/>
- GitHub: <https://github.com/joaovpqueiroz>

## Funcionalidades

- Conteúdo em português e inglês a partir de uma fonte tipada.
- Alternância de idioma diretamente na interface.
- Layout responsivo para desktop e dispositivos móveis.
- Impressão e exportação para PDF em formato A4.
- Metadata e imagem Open Graph personalizadas.
- Exportação estática compatível com GitHub Pages.
- Publicação automatizada com GitHub Actions.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GitHub Actions
- GitHub Pages

## Desenvolvimento local

```bash
npm ci
npm run dev
```

Para validar a versão de produção:

```bash
npm run lint
npm run build
```

O build estático é gerado no diretório `out`.

## Estrutura

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── opengraph-image.tsx
│   └── page.tsx
├── components/cv/
├── content/cv.ts
└── types/cv.ts
```

O conteúdo profissional fica centralizado em `src/content/cv.ts`. Os componentes de apresentação permanecem separados em `src/components/cv`.

## Créditos

Este projeto foi desenvolvido a partir do repositório original [GHEPT/cv-html-pdf-bilingue](https://github.com/GHEPT/cv-html-pdf-bilingue). A estrutura foi adaptada e o conteúdo foi personalizado para o currículo e a identidade profissional de João Queiroz.
