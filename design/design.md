
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
- Dirección editorial: mucho espacio, titulares grandes y compactos, líneas finas, imágenes recortadas, arcos suaves y botones redondos. El azul aparece en acentos y contacto.
- Eslogan propuesto: «El sur se come a bocados». Tono cercano andaluz, sin exagerar expresiones ni atribuir hechos no confirmados a la marca.
- Ilustraciones de producto generadas con volumen y fondo transparente; imágenes locales optimizadas por Next.js. Animación de entrada y carrusel con GSAP, respetando movimiento reducido.
- Carrusel con controles, pausa manual y pausa durante interacción. En móvil admite desplazamiento táctil.
- Carrito presentado como futura funcionalidad, sin acción de compra ficticia.
- Carta provisional autorizada: La clásica, La salerosa, Al limón, Aliño del sur y Vermú de la casa. Los ingredientes y formatos son de ejemplo, sin precios ni disponibilidad inventados.
- Datos del local, contacto y fotografías reales pendientes; no se inventarán personas, dirección, horarios ni historia.
- Reserva es recogida de productos. Primera versión: selección y resumen local sin envío, pago, almacenamiento ni confirmación real.
