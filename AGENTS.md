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
- La primera versión pública incluye portada, Carta, Conócenos y una página de Reserva para pedidos por WhatsApp al 616 232 057. El formulario de recogida sigue en desarrollo y no debe exponerse públicamente.
- La carta es real: 20 gildas en `data/products.ts` (nombre, ingredientes y alérgenos según las fichas de la usuaria), con fotos en `public/images/gildas/`. Aceitunas y bebidas quedan fuera hasta tener fotos reales. No inventar dirección, contacto ni horarios. La historia de Conócenos es el texto real de la marca: no reescribir su contenido, solo corregir ortografía y escribir siempre «Ojú» (no «OJÚ»).
- Hasta conectar el envío de pedidos, el formulario solo prepara un resumen y nunca confirma una reserva real.

## Correcciones de diseño
- Los productos son ilustraciones editoriales semirrealistas: volumen con degradados suaves, brillos especulares, sombras de contacto y texturas sutiles. Evitar tanto el acabado plano/caricaturesco como el fotorrealismo o 3D.
- Cada producto debe distinguirse por rasgos reales, no solo por un detalle pequeño: tipo de aceituna (manzanilla entera frente a partida), recipiente (cuenco vidriado frente a cazuela de barro), pescado (anchoa curada frente a boquerón blanco) y acompañamientos.
- En componentes renderizados en servidor y cliente, no generar atributos con `**`, `Math.pow` ni funciones trigonométricas sin redondear: cada motor JS puede dar decimales distintos y provoca errores de hidratación. Usar multiplicaciones y redondear.
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

- Fotos de producto: usar las fotos retocadas de las fichas (`Gildas-guia.zip`) recortadas en cuadrado sin el título ni el texto de ingredientes; se ven mejor y son homogéneas. Los originales de `Gildas.zip` se descartaron por el acabado menos cuidado. Fotos cuadradas, gilda centrada, esquinas redondeadas y directamente sobre la albariza.
- Alérgenos: usar las denominaciones del anexo II del Reglamento (UE) 1169/2011 (Leche, no «Lácteos»; Frutos de cáscara, no «Frutos secos»; el pulpo es Moluscos, no Pescado). Los iconos siempre con leyenda y nombre accesible. No quitar ni añadir alérgenos sin confirmación de la marca: dependen de las etiquetas reales de cada proveedor.
- La ilustración SVG se mantiene solo en el hero de portada; en carta, carrusel y reserva se usan las fotos.

## Simplificación visual
- En Carta, mostrar títulos de sección sin números ni frases auxiliares. No repetir la categoría encima de cada artículo.
- La cinta de productos comparte el ancho y los márgenes del texto de la página; en ella solo aparecen ilustración y nombre. Los ingredientes se consultan en Carta.
- El hero no lleva botón a Carta ni sello «Mucho sur. Mucho sabor.».
- Eliminar del carrusel el texto «Una muestra de nuestra futura carta…».
- Contacto debe ser explícito («Contacta con nosotros»), con fondo verde de marca y texto albariza.
- Evitar recursos «de plantilla»: botones en píldora (`rounded-full`), frases de relleno bajo los titulares, guiones o rayas decorativas delante de etiquetas, filas de datos con separadores horizontales y tarjetas con arco.
- Botones rectangulares, con contorno fino y sin relleno; se rellenan al pasar el cursor. Cuando se active el formulario de recogida, su envío irá relleno por ser la acción principal.
- Los títulos de sección deben distinguirse claramente de los nombres de artículo (tamaño y color), nunca casi iguales.
- Alinear los elementos decorativos (como la onda) con el texto al que acompañan; no dejarlos sueltos en el lado opuesto.
- Los enlaces de texto («Toda la carta →») van sin subrayado; el subrayado aparece solo al pasar el cursor.
- No utilizar soles como decoración. Reutilizar el motivo original de aceitunas que forma el punto de la j del logo.

## Lecciones de la primera versión publicable
- Para el PNG del logo, declarar en `next/image` sus dimensiones intrínsecas reales (1429 × 1101) y dejar que CSS ajuste el ancho con altura automática; dimensiones aproximadas pueden provocar el aviso de proporciones de Next.js.
- La calle facilitada como «Pozo Amargillo» figura en el callejero como «Pozo Amarguillo». Mostrar la dirección como «Calle Pozo Amarguillo, 15–17, Sanlúcar de Barrameda (Cádiz)» y conservar sin inventar los datos de contacto proporcionados por la marca.
- En Conócenos, usar la foto real `Gildas Belén-233.jpg` de varias gildas preparadas, en formato vertical 4:5; no mostrar una foto de las fundadoras ni repetir el logotipo en ese hueco.
- Instagram de la marca: @ojugildas. Mostrar el enlace solo junto al teléfono y correo en Contacto; no añadirlo al pie ni al menú principal.
- El hueco de la foto del local en portada debe decir solo «Próximamente»; evitar textos que describan el lugar donde irá la foto.
- El carrusel de portada lleva el titular «¿Cuál es la tuya?» en una sola línea también a 320 px; no volver a «Lo bueno, para compartir» ni forzar un salto de línea.
- Reserva pública debe tener una composición sencilla y protagonista: un titular, un texto breve y un solo enlace al 616 232 057 por WhatsApp. En el botón, mostrar icono y número sin repetir la palabra «WhatsApp»; evitar segundo titular, onda y enlace secundario.
- Reserva mantiene el fondo albariza, sin bloque verde. Eliminar la etiqueta «Pedidos para recoger» y no indicar que el pedido deba recogerse en tienda: la marca también podría repartirlo. Componer el título a ancho completo y situar debajo texto y botón.
- En Reserva, titular «Pide tu aperitivo» sin punto. La primera pantalla no debe mostrar el footer; centrar el contenido más abajo con espaciado equilibrado y no añadir hojas decorativas.
- Reserva pública enlaza al WhatsApp del 616 232 057 y explica que los pedidos se acuerdan por ese canal. Mantener el formulario de prueba en `features/reservations/` sin mostrarlo; no reintroducir el carrito inactivo.

## Publicación estática y SEO
- El dominio canónico confirmado es `https://ojugildas.com`; metadatos y sitemap lo comparten desde `data/site.ts`.
- Cloudflare Pages publica `out/` con `output: "export"` e imágenes locales sin optimizador de servidor. Ejecutar `npm run build` (no solo `next build`): `postbuild` genera la CSP con hashes de los scripts exportados y respeta el límite de 2000 caracteres por línea de `_headers`.
- Mantener las cabeceras en `public/_headers`, incluyendo `noindex` para dominios `pages.dev`. No usar nonces fijos ni habilitar JavaScript inline indiscriminadamente. GSAP necesita estilos inline.
- Los originales de imprenta van fuera de `public/` (en `design/source-assets/`); todo lo que se guarda en `public/` se publica.
- Verificar instalación reproducible y auditoría separando producción y desarrollo; no degradar ESLint ni usar `npm audit fix --force` para ocultar una vulnerabilidad transitiva sin parche.
- El favicon (`app/icon.svg`) es circular, no rectangular: `viewBox` cuadrado y un `<circle>` albariza con margen suficiente para la hoja del logo. Comprobarlo también renderizado a 32 px.
