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
├── blog/
│   └── README.md           ← Instrucciones para crear artículos
└── README.md               ← Este archivo
```

---

## Cómo Modificar el Sitio

### Cambiar número de WhatsApp
Busca y reemplaza `52XXXXXXXXXX` en `index.html` con tu número real (sin espacios ni guiones).
Ejemplo: `5217711234567`

### Cambiar teléfono y correo
Busca `+52 (771) XXX-XXXX` y `contacto@stdpachuca.com` en `index.html`.

### Cambiar dirección
Busca `Pachuca de Soto, Hidalgo, México` y reemplázala con la dirección completa.

### Cambiar el mapa de Google Maps
1. Abre Google Maps y busca tu negocio.
2. Clic en "Compartir" → "Insertar mapa".
3. Copia el código `<iframe>` y pégalo en la sección `#contacto` del `index.html`.

### Agregar logo
1. Guarda tu logo en `images/branding/logo.png`.
2. En `index.html`, reemplaza el `<div class="header__logo-icon">STD</div>` por:
   ```html
   <img src="images/branding/logo.png" alt="Logo STD" width="44" height="44">
   ```

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
<div class="stat__number" data-target="15" data-suffix="+">0</div>
```

### Cambiar horarios
Busca "Lun – Vie" en `index.html` y modifica el texto. También actualiza el schema.org (el bloque JSON-LD en el `<head>`).

---

## SEO: Cosas Importantes

- **Google My Business**: Registra el negocio en Google Maps con la misma información del sitio web.
- **Schema.org**: El JSON-LD ya está incluido en el `<head>`. Actualiza la dirección, teléfono y coordenadas GPS reales.
- **Meta tags**: Ya incluidos con keywords locales (Pachuca, Hidalgo, diésel, inyectores, turbos).
- **Imágenes**: Siempre usa atributos `alt` descriptivos con keywords en las fotos.

---

## Tecnologías

- HTML5 semántico
- CSS3 (variables, grid, flexbox, animations)
- JavaScript vanilla (sin frameworks)
- Google Fonts (Inter, Roboto)
- Sin dependencias externas
