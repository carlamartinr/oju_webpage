## Marca

- El nombre de la marca será siempre `Ojú`
- La marca es andaluza (cadiz). Así que se pueden introducir guiños en el texto o las expresiones para que quede profesional y natural (creando imagen de marca).
- En @inspo-marca.jpeg puedes encontrar algunas fotos de inspiracion de la marca. La foto que aparece de la web no es el diseño que queremos tener, **no la tengas en cuenta**.

## Estilo

- Fuente: [Archivo Black](https://fonts.google.com/specimen/Archivo+Black?query=archivo+black&preview.script=Latn)
- Logo: Puedes encontrar el logo de la marca en @public/oju.png

## Colores

- Verde: #152D0B
- Azul: #0D3866
- Albariza: #EDE7D9

## Diseño inicial

- Página principal:
  Un header (sin fondo) donde aparezca: el logo de la marca a la izquierda, una barra de navegacion con: Carta, Conócenos, Reserva y a la derecha un carrito para futuras posibles compras.
  En el cuerpo: Un texto a la izquierda con un eslogan o una frase que pueda representar la marca y a la derecha una imagen de una gilda.
  Debajo una sección de Conoce nuestros productos con un carrusel con imagenes de productos (gildas distintas) que van rotando.
  Debajo una seccion de Donde estamos | Donde encontrarnos donde aparezca a la izquierda una imagen del local y a la derecha su información, direccion, enlace a la aplicacion de mapas, etc.
  Debajo una seccion de contacto donde aparezca el telefono y el correo.

- Página de carta
  Estara dividida por las diferentes secciones: Gildas, Aceitunas, Bebidas y en cada una de ellas aparecerán imagenes de todas los componentes de la carta y debajo un breve texto indicando su nombre y composicion (ingredientes)

- Página de Conocenos
  Tendra una imagen a la izquierda de las fundadoras y a la derecha un cuadro de texto con informaion de ellas. Se podra ampliar con mas imagenes debajo (alternando a la izquierda, a la derecha, a la izquierda, ...) y mas texto al lado de ellos, por ejemplo de donde provienen, el por que de la marca, nombre, etc.

- Página de reservas
  Tendra un formulario de Identificacion para guardar los datos de pedido (nombre, apellidos, numero de telefono, seleccion de productos, fecha de recogida,...)

## Diseño gildas, aceitunas y otros productos

El diseño de los productos como gildas o aceitunas será animado, no serán fotos reales. Es muy importante que queden profesionales (no animaciones demasiado exageradas o que parezcan de dibujos animados), es parte de la imágen de marca y es esencial que sea profesional y altamente estético.

## Primera implementación · septiembre 2026

- Estilos con Tailwind CSS y tokens de color centralizados. Archivo Black en titulares; Arial/Helvetica en texto continuo para mejorar la legibilidad.
- Dirección editorial: mucho espacio, titulares grandes y compactos, líneas finas, imágenes recortadas, arcos suaves y botones redondos. El azul aparece en acentos; contacto utiliza el verde de marca.
- Eslogan propuesto: «El sur se come a bocados». Tono cercano andaluz, sin exagerar expresiones ni atribuir hechos no confirmados a la marca.
- Ilustraciones SVG originales y reutilizables: formas orgánicas, verdes oliva, sombras planas y brillos pintados, siguiendo la referencia ilustrada del usuario. Sin realismo fotográfico. Gildas, aceitunas y vermú comparten el mismo lenguaje visual.
- Cinta de productos continua, infinita y a velocidad constante, sin controles ni pausas al pasar el cursor. Dos grupos idénticos permiten un bucle sin salto. Con movimiento reducido se muestra un único grupo desplazable manualmente.
- Carrito presentado como futura funcionalidad, sin acción de compra ficticia.
- Carta provisional autorizada: La clásica, La salerosa, Al limón, Aliño del sur y Vermú de la casa. Los ingredientes y formatos son de ejemplo, sin precios ni disponibilidad inventados.
- Datos del local, contacto y fotografías reales pendientes; no se inventarán personas, dirección, horarios ni historia.
- El formulario experimental de Reserva preparaba una selección y un resumen local sin envío, pago, almacenamiento ni confirmación real; se conserva fuera de la página pública.

## Revisión de ilustración y movimiento

- Hero: la gilda se monta al entrar. Aparece el palillo y se deslizan los ingredientes de abajo arriba en secuencia solapada, con desaceleración suave y sin rebotes. El estado final permanece estable.
- Las ilustraciones se apoyan directamente sobre albariza, sin tarjetas blancas ni fondos arqueados. Se conservan las líneas finas y la jerarquía de producto/ingredientes.
- Logo original visible a la izquierda (120 px en escritorio / 80 px en móvil). Navegación a 18 px en escritorio y 14–16 px en móvil.
- Las imágenes generadas de la primera exploración se eliminaron. Los SVG vivos están en `components/illustrations/`.

## Revisión de jerarquía y marca

- Carta: encabezados de categoría sin numeración ni frases laterales; artículos con nombre e ingredientes, sin repetir la categoría.
- Carrusel: mismo contenedor `max-w-7xl` y márgenes `px-6 md:px-12` que el resto de la página. Solo ilustración y nombre; el enlace «Toda la carta» permite ampliar información. Se elimina el aviso de muestra bajo la cinta.
- Hero sin enlace a Carta ni sello circular «Mucho sur. Mucho sabor.».
- Contacto verde (#152D0B), texto albariza y encabezado directo «Contacta con nosotros». Sin etiqueta superior.
- Los soles se sustituyen por el motivo de aceitunas original del logo, mostrado mediante una máscara SVG del PNG existente para conservar su silueta.

## Revisión de realismo · septiembre 2026

- Las ilustraciones pasan a un estilo editorial semirrealista: luz desde arriba a la izquierda, degradados de volumen, brillos especulares, sombras de contacto suaves y texturas discretas (lenticelas de la aceituna, pliegues de la piparra). Sin fotorrealismo ni 3D.
- Diferenciación por producto:
  - La clásica: anchoa curada de tono marrón rojizo.
  - La salerosa: boquerón blanco con piel plateada y tira de pimiento asado.
  - Al limón: aceitunas manzanilla enteras y verde claro, rodajas de limón, piel y tomillo, en cuenco vidriado claro con banda azul de marca.
  - Aliño del sur: aceitunas partidas de tono caqui con la grieta visible, pimiento rojo, ajo y tomillo, en cazuela de barro.
  - Vermú: vaso con reflejos, hielo translúcido, rodaja de naranja y aceituna en palillo.

## Portada con más carácter · septiembre 2026

- Hero como bodegón cenital: plato de loza crema con filete azul de marca detrás de la gilda (`components/illustrations/serving-plate.tsx`). La gilda está apoyada, no flota: una copia de su silueta, oscurecida y desenfocada, hace de sombra de contacto y se monta a la vez. Sin aceite ni vaivén.
- Estampado de olivo tono sobre tono (`components/illustrations/olive-branch.tsx`), inspirado en el packaging: hojas planas grandes, unas rellenas y otras en línea, con nervios y alguna aceituna, en verde oliva al 7 % sobre albariza. Ramas repartidas por el espacio libre del hero, nunca sobre el plato, y cortadas solo por los laterales de la pantalla (nunca contra el header ni contra la sección siguiente). Aparecen con un fundido suave.
- Bloque «Menos prisa. Más aperitivo.» sin ingredientes decorativos.
- Carrusel: nombres de producto centrados bajo la ilustración.
- Reserva: títulos de los pasos del formulario sin numeración.
- Titulares de secciones inferiores aparecen con un leve desplazamiento vertical al hacer scroll (una sola vez). Con movimiento reducido todo queda estático y visible.
- Descartado: zócalo de azulejos, ingredientes flotantes, gota y charco de aceite, ramitas realistas junto al plato.

## Fotografía de producto · octubre 2026

- Carta, carrusel y reserva usan fotos reales de las gildas; el hero de portada mantiene la ilustración animada.
- Fotos cuadradas (`public/images/gildas/<id>.jpg`) recortadas de las fichas retocadas, entre el título y el texto de ingredientes, con la gilda centrada. Esquinas redondeadas (`rounded-2xl`) y un leve zoom al pasar el cursor (solo con movimiento permitido).
- Se prefieren las fichas a los originales sin retocar: luz, color y encuadre más cuidados y homogéneos entre productos.
- Carta: una sección «Gildas» con 20 productos en el orden de las fichas, en rejilla de 1/2/4 columnas. Cada artículo muestra foto, nombre, ingredientes separados por «·» y alérgenos como pictogramas circulares con sus colores habituales (`components/ui/allergen-icon.tsx`: pescado azul, leche marrón, frutos de cáscara rojo, moluscos turquesa), siempre con su nombre accesible y leyenda. Al final de la sección, leyenda «Alérgenos» con icono y significado, y aviso para consultar alergias. Sin numeración.
- Carrusel: selección de nueve gildas variadas (`featured`), solo foto y nombre.
- Reserva: miniatura circular de la foto, ingredientes y pictogramas de alérgenos bajo el nombre (en venta a distancia deben verse antes de completar el pedido).

## Depuración de recursos «de plantilla» · octubre 2026

- Hero: sin frase secundaria ni etiqueta con raya. Bajo el titular, solo «Gildas y aceitunas del sur.» en texto normal.
- Carrusel: sin etiqueta superior. «Toda la carta →» sin subrayado; aparece al pasar el cursor, con un leve desplazamiento de la flecha.
- El titular del carrusel es «¿Cuál es la tuya?»: invita a explorar las gildas y se mantiene en una sola línea desde 320 px. En móvil baja a 30 px para conservar la composición.
- «Menos prisa. Más aperitivo.»: sin párrafo de apoyo.
- Botones (`ButtonLink`): rectangulares, contorno fino al 60 %, sin relleno; al pasar el cursor se rellenan (verde sobre albariza, albariza sobre verde). Compactos: texto y flecha juntos, sin hueco intermedio. El envío de Reserva es el único botón relleno. Controles de cantidad cuadrados. El carrito del header es solo el icono, sin círculo.
- Dónde encontrarnos: titular «Dónde encontrarnos», con «Tu próxima buena parada» encima en cursiva azul recta, sin girar. Dirección y horario en dos columnas, sin líneas separadoras.
- Hueco de foto (`PhotoPlaceholder`): rectángulo con esquinas `rounded-2xl` (como las fotos de producto), fondo verde al 6 % y el motivo de aceitunas; 4:3 en portada, 4:5 en Conócenos. Sin arco, borde ni logotipo de texto.
- Carta: cabecera sin etiqueta superior, párrafo ni línea separadora. Titular «¿Qué te pide el cuerpo?» y la onda azul debajo, alineada a la izquierda con el titular. El título de sección «Nuestras Gildas» va grande y en azul de marca (`text-4xl`/`md:text-5xl`); los nombres de producto, más pequeños (`text-lg`/`md:text-xl`) y en verde, para que la jerarquía sea evidente.

## Conócenos con historia real · octubre 2026

- Texto real de la marca («Nuestra historia, nuestra esencia»), sin reescribir su contenido; solo se corrigen mayúsculas y signos («Ojú», «¡Ojú!», «Pruébalas»).
- Estructura: titular «Nuestra historia, nuestra esencia.»; foto real de varias gildas Ojú preparadas a la izquierda con el origen («Dos décadas entre aceitunas.»); banda azul «Y así nació Ojú.» con el significado del nombre y la filosofía junto al motivo de aceitunas; cierre centrado «Dos mujeres, una historia compartida y un sueño por cumplir.», invitación, «Pruébalas y entenderás por qué decimos ¡Ojú!» en cursiva azul girada y botón a Carta.
- La imagen de Conócenos procede de `Gildas Belén-233.jpg`, optimizada a 1200 × 1800 px y presentada en 4:5. Muestra variedad y elaboración real sin repetir el logotipo ni usar un retrato de las fundadoras.
- Se elimina el aviso provisional sobre la historia de las fundadoras.

## Logo vectorial · octubre 2026

- Versiones vectoriales para imprenta (toldos, carteles) en `design/logo/`: `oju-solo`, `oju-gildas-y-aceitunas` y `oju-gildas-y-aceitunas-sin-onda` (sin la onda azul), en PDF y SVG. Calcadas con potrace desde las exportaciones de Canva de 6250 px (los PDF de Canva solo contenían una imagen), con fondo transparente y colores planos de marca (verde #152D0B, azul #0D3866 en la onda).
- En la versión con lema, el texto y la onda se centran en el eje de «Ojú»; en el diseño de Canva el lema estaba desplazado un 7 % a la derecha.
- El texto del lema va convertido en trazados, no es editable.

## Datos de contacto · octubre 2026

- Dirección pública: Calle Pozo Amarguillo, 15–17, Sanlúcar de Barrameda (Cádiz). El nombre oficial de la calle lleva «u» en «Amarguillo».
- Teléfono: 616 232 057. Correo: info@ojugildas.com. En la portada ambos son enlaces directos para llamar o escribir; la dirección enlaza a mapas.
- Instagram: @ojugildas como tercer dato en Contacto. No incluir su enlace en el pie ni en el menú principal.
- El horario, los precios y la disponibilidad siguen pendientes de confirmar. El formulario experimental conserva una dirección orientativa de recogida, pero la página pública no anuncia una modalidad de entrega concreta.
- En el hueco de la foto del local de la portada, mostrar solo «Próximamente» hasta disponer de la fotografía.

## Alcance público de la primera versión · octubre 2026

- Publicar portada, Carta, Conócenos y Reserva. La ruta `/reserva` es una página editorial de contacto para pedidos por WhatsApp al 616 232 057, con icono y número visibles; no muestra el formulario ni permite pedir dentro de la web.
- Recuperar el enlace Reserva en el menú y «Hacer un pedido» desde Carta. Conservar el formulario de recogida en `features/reservations/` para más adelante y mantener oculto el carrito inactivo.
- Reserva mantiene el fondo albariza del resto de la web. «Pide tu aperitivo» ocupa la anchura como único titular, sin punto final y con «aperitivo» en azul de marca; debajo se alinean una explicación breve y la única acción, icono de WhatsApp más número 616 232 057. En móvil se apilan. Sin etiqueta superior, segundo titular, onda ni enlace secundario. No prometer solo recogida: también puede haber reparto a domicilio.
- La sección de Reserva se extiende lo suficiente para que el pie no aparezca antes de desplazarse. El contenido queda centrado algo más abajo, con espaciado vertical equilibrado. Sin hojas decorativas: no aportaban a esta composición.

## Identidad en buscadores y enlaces compartidos · octubre 2026

- Títulos y descripciones específicos por página, con el nombre Ojú y contexto local de Sanlúcar de Barrameda. Dominio canónico: `https://ojugildas.com`. Portada: «Gildas y aceitunas en Sanlúcar de Barrameda | Ojú» (49 caracteres, bajo el corte de ~60 de Google). Las aceitunas solo se nombran en Carta cuando tengan productos allí.
- Imagen social horizontal de 1200 × 630: logo original sobre albariza a la izquierda y fotografía real de gildas a la derecha. Se genera durante la compilación y no requiere servidor ni servicios externos.
- Favicon basado en la versión vectorial del logo real de `design/logo/oju-solo.svg`, sustituyendo la letra provisional. Formato circular: lienzo cuadrado con un círculo albariza centrado en el logo y fondo transparente fuera de él; nunca rectangular.
- Datos estructurados del negocio limitados a dirección, contacto e identidad ya confirmados; sin precios, horarios ni valoraciones inventados.
