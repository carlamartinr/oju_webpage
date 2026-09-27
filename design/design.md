
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
- Reserva es recogida de productos. Primera versión: selección y resumen local sin envío, pago, almacenamiento ni confirmación real.

## Revisión de ilustración y movimiento
- Hero: la gilda se monta al entrar. Aparece el palillo y se deslizan los ingredientes de abajo arriba en secuencia solapada, con desaceleración suave y sin rebotes. El estado final permanece estable.
- Las ilustraciones se apoyan directamente sobre albariza, sin tarjetas blancas ni fondos arqueados. Se conservan las líneas finas y la jerarquía de producto/ingredientes.
- Logo original visible a la izquierda (120 px en escritorio / 80 px en móvil). Navegación a 18 px en escritorio y 14–16 px en móvil.
- Las imágenes generadas de la primera exploración quedan archivadas en `public/images/products/`, pero ya no se usan en la interfaz. Los SVG vivos están en `components/illustrations/`.

## Revisión de jerarquía y marca
- Carta: encabezados de categoría sin numeración ni frases laterales; artículos con nombre e ingredientes, sin repetir la categoría.
- Carrusel: mismo contenedor `max-w-7xl` y márgenes `px-6 md:px-12` que el resto de la página. Solo ilustración y nombre; el enlace «Toda la carta» permite ampliar información. Se elimina el aviso de muestra bajo la cinta.
- Hero sin enlace a Carta ni sello circular «Mucho sur. Mucho sabor.».
- Contacto verde (#152D0B), texto albariza y encabezado directo «Contacta con nosotros».
- Los soles se sustituyen por el motivo de aceitunas original del logo, mostrado mediante una máscara SVG del PNG existente para conservar su silueta.
