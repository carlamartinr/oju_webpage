# Ojú

Web de gildas y aperitivos en Sanlúcar de Barrameda. Dominio: https://ojugildas.com.

## Desarrollo y comprobaciones

Usar Node 24 (`.nvmrc`) e instalar desde el lockfile:

```bash
npm ci
npm run dev
```

```bash
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
```

`npm run check` ejecuta lint, tipos y compilación. No se permiten avisos de ESLint.
Si el entorno restringe los puertos internos de Turbopack, utilizar
`npm run build -- --webpack`. La comprobación de tipos sigue activa.

## Publicar en Cloudflare Pages

1. Conectar el repositorio en Workers & Pages → Pages.
2. Seleccionar la rama de producción y el preset Next.js (Static HTML Export).
3. Usar Node 24, comando **`npm run lint && npm run build`**, salida **`out`** y raíz del repositorio.
4. No sustituir el comando por `npx next build`: el script npm ejecuta también `postbuild`, que genera la CSP.
5. Asociar `ojugildas.com` en Custom domains; configurar HTTPS y redirigir `www` al dominio raíz en Cloudflare. Conservar los registros DNS del correo.
6. Revisar páginas, rutas directas, 404, imágenes, WhatsApp y cabeceras en el dominio real. Dar de alta `/sitemap.xml` en Search Console.

No hay servidor Next en producción ni se usa `next start`. El formulario experimental permanece fuera de las rutas públicas; Reserva enlaza a WhatsApp.

Las cabeceras de `public/_headers` incluyen protección frente a incrustación, MIME sniffing y permisos innecesarios; HSTS se limita al host actual (sin `includeSubDomains` ni preload). Las URL de Pages y de sus previews llevan `noindex`; esto no restringe el acceso. Usar Cloudflare Access si una preview debe ser privada.

`scripts/security-headers.mjs` calcula los hashes de los scripts inline de cada exportación y escribe la CSP en `out/_headers`. JavaScript solo desde el propio origen o con hash permitido; no se permite `eval` ni manejadores inline. Los estilos inline se permiten por Next y GSAP. La compilación falla si se supera el límite de línea de Cloudflare. No habilitar inyecciones de scripts (Rocket Loader, analítica o Zaraz) sin revisar CSP y privacidad.

El archivo `/opengraph-image` se genera como PNG estático; `_headers` declara su tipo MIME. Las fotos ya están optimizadas y se sirven sin el optimizador dinámico de Next.

## SEO y contenido

- `data/site.ts`: dominio canónico y metadatos por página.
- `app/sitemap.ts` y `app/robots.ts`: archivos estáticos de rastreo.
- `app/opengraph-image.tsx`: imagen para enlaces compartidos.
- `app/page.tsx`: datos estructurados del negocio, solo con información confirmada.
- `data/products.ts`: carta real de 20 gildas, ingredientes y alérgenos.
- `design/design.md`: reglas visuales; `design/source-assets/`: originales que no se publican.

No se han incorporado rastreadores. Antes de publicar siguen pendientes el aviso legal y la política de privacidad con los datos reales del titular, y verificar cookies y cabeceras en Cloudflare.

## Auditoría de dependencias

Revisión del 18 de octubre de 2026: Next y eslint-config-next alineados en 16.4.2.
`npm audit --omit=dev` devuelve cero vulnerabilidades. La auditoría completa detecta
cinco entradas altas de una misma cadena de desarrollo: eslint-config-next →
@next/eslint-plugin-next → fast-glob → micromatch → braces.

[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) afecta a
patrones de llaves anidados en braces y no tiene versión corregida en la fecha
de revisión. No se ejecuta en la web estática publicada; evitar patrones no
fiables en las herramientas de desarrollo y revisar el aviso al actualizar.
La degradación sugerida por `npm audit fix --force` rompe la alineación con Next
y reintroduce dependencias antiguas: no usarla.
