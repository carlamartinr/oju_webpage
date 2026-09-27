# Ojú

Web de Ojú, una marca andaluza de gildas, aceitunas y aperitivos.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

## Verificación

```bash
npm run lint
npm run build
```

Las reglas visuales están en `design/design.md`.

## Organización

- `app/`: rutas y metadatos.
- `components/`: navegación y elementos visuales compartidos.
- `features/home/`: secciones y carrusel de la portada.
- `features/catalog/`: presentación de productos.
- `features/reservations/`: selección, validación y resumen de recogida.
- `data/products.ts`: carta ficticia tipada, centralizada para carta y reservas.
- `components/illustrations/`: ilustraciones SVG por ingredientes, compartidas entre portada, carta y reserva.
- `public/images/products/`: exploración visual inicial archivada; ya no se usa en la interfaz. Prompts en `design/assets/prompts.md`.

Tailwind CSS define los estilos y tokens. Archivo Black se sirve localmente con Fontsource. GSAP gestiona el montaje de la gilda y la cinta infinita, respetando movimiento reducido.

## Estado de la primera versión

Portada, Carta, Conócenos y Reserva implementadas. El formulario es una demostración local: no envía, almacena ni confirma pedidos. No hay pagos, carrito de compra ni backend. Productos y formatos son ejemplos; faltan carta real, precios, contacto, dirección, horarios, fotografías e historia de las fundadoras.

En entornos que bloquean los puertos internos de Turbopack se puede verificar con `npm run build -- --webpack` y desarrollar con `npm run dev -- --webpack`.
