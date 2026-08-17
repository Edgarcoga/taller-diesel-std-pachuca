# Servicios Técnicos Diésel STD — Sitio Web

## Estructura del Proyecto

```
├── index.html              ← Página principal
├── css/
│   └── styles.css          ← Diseño completo (paleta, componentes, responsive)
├── js/
│   └── main.js             ← Animaciones, menú móvil, contadores, lightbox
├── images/
│   ├── gallery/            ← Fotos del taller y equipamiento
│   ├── services/           ← Imágenes por cada servicio
│   ├── cases/              ← Fotos antes/después de reparaciones
│   └── branding/           ← Logo, favicon, imagen para redes sociales
├── media/
│   └── inbox/              ← Recepción de fotos y videos originales
├── blog/
│   └── README.md           ← Instrucciones para crear artículos
└── README.md               ← Este archivo
```

## Entrega de fotos y videos

Coloca los originales en `media/inbox/photos/` y `media/inbox/videos/`. También se puede usar Google Drive únicamente para transferir los archivos; los enlaces de Drive no deben insertarse directamente en el sitio publicado. Consulta `media/README.md` para ver el flujo completo de optimización y publicación.

## Publicar en GitHub Pages

El repositorio ya incluye el flujo `.github/workflows/deploy-pages.yml`. Cada cambio enviado a la rama `master` publica el sitio automáticamente.

La primera vez, en GitHub abre **Settings → Pages**, selecciona **GitHub Actions** como fuente de publicación y espera a que termine el flujo llamado **Deploy static site to GitHub Pages**. La dirección publicada será `https://edgarcoga.github.io/taller-diesel-std-pachuca/`.

No se deben subir videos ni archivos originales al repositorio: GitHub Pages sirve el HTML, CSS, JavaScript e imágenes; Cloudinary entrega los videos desde su CDN.

## Videos con Cloudinary

`js/cloudinary-video.js` ya está cargado en la página y crea un reproductor optimizado cuando se agregue un contenedor como este donde se quiera mostrar el video:

```html
<div class="hero__media"
     data-cloudinary-video="std-pachuca/hero-taller-01"
     data-cloudinary-cloud="TU_CLOUD_NAME"
     data-cloudinary-poster="std-pachuca/hero-taller-01"
     data-cloudinary-autoplay="true"
     data-cloudinary-controls="false"
     data-cloudinary-label="Recorrido por el laboratorio STD Pachuca"></div>
```

Pasos por cada video:

1. Sube un MP4 corto a la carpeta `std-pachuca/` en Cloudinary y copia su **Public ID** (no la URL completa).
2. Sustituye `TU_CLOUD_NAME` por el nombre de nube de Cloudinary y el `data-cloudinary-video` por el Public ID.
3. Si es un video de portada, mantén `autoplay="true"`, sin audio y de 10–20 segundos. Para un video informativo, omite ese atributo y deja los controles activos.

El módulo limita la entrega a 1280 px y usa `q_auto` + `f_auto`: Cloudinary adapta calidad y formato al navegador. La clave API y el API secret nunca se agregan al HTML ni al repositorio. Para subir manualmente desde el panel de Cloudinary no se requieren en el sitio.

---

## Cómo Modificar el Sitio

## Datos vigentes del negocio

- Teléfono: `771 718 2219`
- WhatsApp: `+52 1 771 128 8281`
- Correo: `std_pachuca@yahoo.com.mx`
- Dirección: `Blvd. Luis Donaldo Colosio 107, San Cayetano el Bordo, 42084 Pachuca de Soto, Hgo.`
- Horario: lunes a viernes 9:00–19:00; sábado 9:00–15:00; domingo cerrado
- Experiencia: 30 años

### Cambiar el mapa de Google Maps
1. Abre Google Maps y busca tu negocio.
2. Clic en "Compartir" → "Insertar mapa".
3. Copia el código `<iframe>` y pégalo en la sección `#contacto` del `index.html`.

### Logotipo
El logotipo vigente está guardado en `images/branding/logo.png` y se utiliza en la cabecera, el pie de página y como favicon provisional.

### Agregar imágenes a la galería
1. Guarda las fotos en `images/gallery/` (formato JPG o WebP recomendado).
2. En cada `<div class="gallery__item">`, reemplaza el placeholder por:
   ```html
   <img src="images/gallery/tu-foto.jpg" alt="Descripción de la foto">
   ```
3. Agrega `data-src="images/gallery/tu-foto.jpg"` al `<div>` para que funcione el lightbox.

### Agregar imágenes a Casos de Éxito
1. Guarda las fotos en `images/cases/`.
2. En cada `<div class="case-card__img">`, reemplaza el placeholder por:
   ```html
   <img src="images/cases/tu-foto-antes.jpg" alt="Antes de la reparación">
   ```

### Cambiar estadísticas
En la sección de stats, modifica los atributos `data-target`:
```html
<div class="stat__number" data-target="30" data-suffix="+">0</div>
```

### Cambiar horarios
Busca "Lun – Vie" en `index.html` y modifica el texto. También actualiza el schema.org (el bloque JSON-LD en el `<head>`).

---

## SEO: Cosas Importantes

- **Google My Business**: Registra el negocio en Google Maps con la misma información del sitio web.
- **Schema.org**: El JSON-LD ya incluye la dirección, teléfono, correo, redes y horarios vigentes.
- **Dominio y coordenadas**: Agrega la URL canónica, `og:url` y las coordenadas GPS cuando estos datos estén confirmados.
- **Meta tags**: Ya incluidos con keywords locales (Pachuca, Hidalgo, diésel, inyectores, turbos).
- **Imágenes**: Siempre usa atributos `alt` descriptivos con keywords en las fotos.

---

## Tecnologías

- HTML5 semántico
- CSS3 (variables, grid, flexbox, animations)
- JavaScript vanilla (sin frameworks)
- Google Fonts (Inter, Roboto)
- Sin dependencias externas
