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
