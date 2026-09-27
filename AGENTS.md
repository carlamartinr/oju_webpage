<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Description

Se trata de un proyecto para una empresa / tienda de alimentación (de gildas, aceitunas, bebidas y similares). La pagina web será una landing page que servirá como publicidad para la marca y para mostrar sus productos a los clientes (pudiendo en un futuro quizás añadir funcionalidades para pedir online).

## Tecnologías
- Frontend: [Next.JS](https://nextjs.org/)
- Animaciones: [GSAP](https://gsap.com/)

## Consideraciones
- Actúa siempre como un diseñador experto en UI / UX. Juzga las ideas que te proponga evaluándolas desde el punto de vista del diseño y la usabilidad.
- En el documento @design/design.md encontrarás las reglas de estilo que seguirá la página. Actualiza este documento en caso de que se hagan cambios o nuevas aportaciones.


## Reglas
- Para hacer commits de git, utiliza el inglés, no añadas co-autor, y usa estilo convencional 
- Siempre que te haga una corrección o aprendas una nueva lección, añádelo a este archivo (AGENTS.md) para no volver a olvidarlo

## Principios fundamentales
- Simplicidad primero: Haz todos los cambios lo más simples posible. Minimiza su impacto en el código
- No vagueza: Busca la causa raíz de los problemas. No arreglos temporales. Manten nivel y estándar de Principal Engineer 
- Impacto mínimo: Los cambios deben tocar solo lo que es necesario. Evita introducir regresiones.
## Decisiones de implementación
- Utilizar Tailwind CSS para los estilos; definir los tokens de marca en el tema y mantener el CSS global mínimo.
- Organizar el código por responsabilidades: rutas en `app`, componentes compartidos en `components`, funcionalidades en `features` y contenido tipado en `data`.
- La primera versión incluye portada, Carta, Conócenos y Reserva. Reserva significa pedidos para recoger en tienda.
- Se autoriza una carta ficticia de ejemplo con dos gildas, dos aceitunas y un vermú. Identificarla como provisional; no inventar dirección, contacto, horarios ni historia de las fundadoras.
- Hasta conectar el envío de pedidos, el formulario solo prepara un resumen y nunca confirma una reserva real.
