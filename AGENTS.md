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
- Los productos son ilustraciones editoriales semirrealistas: volumen con degradados suaves, brillos especulares, sombras de contacto y texturas sutiles. Evitar tanto el acabado plano/caricaturesco como el fotorrealismo o 3D.
- Cada producto debe distinguirse por rasgos reales, no solo por un detalle pequeño: tipo de aceituna (manzanilla entera frente a partida), recipiente (cuenco vidriado frente a cazuela de barro), pescado (anchoa curada frente a boquerón blanco) y acompañamientos.
- Los degradados SVG usan ids únicos (`useSvgIds`), porque las ilustraciones se repiten en la misma página.
- Los componentes de ingrediente deben ser autónomos (`fill="none"` en su grupo raíz): no pueden depender de atributos heredados del SVG que los contiene.
- El movimiento de portada es sutil y centralizado en `HomeMotion` (GSAP + ScrollTrigger, dentro de `matchMedia` de movimiento reducido): revelados únicos y nada en bucle.
- No usar mosaicos ni cenefas de azulejos en la portada; el encanto se aporta con animación y con el bodegón del hero.
- Hero: plato visto desde arriba, detrás de la gilda, y la gilda apoyada en él (sombra de contacto), no flotando. Sin aceite.
- Hojas de olivo como estampado tono sobre tono (estilo del packaging), repartidas por el espacio y nunca sobre el plato. Los recortes solo por los laterales de pantalla.
- No poner ingredientes decorativos en el bloque «Menos prisa. Más aperitivo.». No numerar pasos ni títulos («01», «02»).
- En el carrusel, los nombres de producto van centrados.
- Si una sombra duplica los elementos animados, sincronizar el `stagger` por índice dentro de cada copia.
- En GSAP, `immediateRender: false` de un `fromTo` va en el objeto de destino (segundo); si no, el estado inicial se pinta desde el principio. Verificar las animaciones con fotogramas en tiempo real (CDP), porque el headless con tiempo virtual no avanza GSAP.
- Usar componentes SVG reutilizables por ingrediente para montar la gilda del hero con GSAP: primero el palillo y después los ingredientes. Mantener el resultado completo con movimiento reducido.
- El carrusel es una cinta continua e infinita, a velocidad constante, sin paradas entre productos, sin pausa al hover y sin botones de pausa/activación ni flechas. Con movimiento reducido debe poder recorrerse estáticamente.
- No usar tarjetas blancas ni paneles claros detrás de los productos; las ilustraciones se presentan directamente sobre el fondo de la página.
- El logo real `public/oju.png` debe verse claramente a la izquierda del Navbar; navegación ligeramente mayor (18 px en escritorio) y adaptable en móvil.
- Al comprobar el logo, validar también la carga real en móvil; se sirve el PNG original sin optimización dinámica para evitar la demora observada al generar tamaños nuevos.
- En Next.js 16, si se usa desplazamiento suave global, añadir `data-scroll-behavior="smooth"` a `html` para que las transiciones de ruta restablezcan correctamente el desplazamiento.
- Revisar formularios también a 320 px: los `fieldset` necesitan `min-w-0` y los controles de cantidad deben pasar a una segunda fila cuando el espacio es reducido.

## Simplificación visual
- En Carta, mostrar títulos de sección sin números ni frases auxiliares. No repetir la categoría encima de cada artículo.
- La cinta de productos comparte el ancho y los márgenes del texto de la página; en ella solo aparecen ilustración y nombre. Los ingredientes se consultan en Carta.
- El hero no lleva botón a Carta ni sello «Mucho sur. Mucho sabor.».
- Eliminar del carrusel el texto «Una muestra de nuestra futura carta…».
- Contacto debe ser explícito («Contacta con nosotros»), con fondo verde de marca y texto albariza.
- No utilizar soles como decoración. Reutilizar el motivo original de aceitunas que forma el punto de la j del logo.
