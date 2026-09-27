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

## Correcciones de diseño
- Los productos deben ser ilustraciones de trazos orgánicos, colores planos y brillos pintados, similares a la referencia del usuario; evitar el acabado fotorealista o 3D realista.
- Usar componentes SVG reutilizables por ingrediente para montar la gilda del hero con GSAP: primero el palillo y después los ingredientes. Mantener el resultado completo con movimiento reducido.
- El carrusel es una cinta continua e infinita, a velocidad constante, sin paradas entre productos, sin pausa al hover y sin botones de pausa/activación ni flechas. Con movimiento reducido debe poder recorrerse estáticamente.
- No usar tarjetas blancas ni paneles claros detrás de los productos; las ilustraciones se presentan directamente sobre el fondo de la página.
- El logo real `public/oju.png` debe verse claramente a la izquierda del Navbar; navegación ligeramente mayor (18 px en escritorio) y adaptable en móvil.
- Al comprobar el logo, validar también la carga real en móvil; se sirve el PNG original sin optimización dinámica para evitar la demora observada al generar tamaños nuevos.
- En Next.js 16, si se usa desplazamiento suave global, añadir `data-scroll-behavior="smooth"` a `html` para que las transiciones de ruta restablezcan correctamente el desplazamiento.
- Revisar formularios también a 320 px: los `fieldset` necesitan `min-w-0` y los controles de cantidad deben pasar a una segunda fila cuando el espacio es reducido.
