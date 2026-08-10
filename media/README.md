# Recepción de fotos y videos

Esta carpeta sirve para recibir los archivos originales antes de prepararlos para la página web.

## Cómo entregar material

1. Coloca fotografías originales en la subcarpeta correspondiente de `media/inbox/photos/`.
2. Coloca videos originales en `media/inbox/videos/`.
3. Conserva la máxima calidad disponible; no los comprimas por WhatsApp.
4. Usa nombres descriptivos cuando sea posible, por ejemplo `banco-pruebas-inyectores-01.jpg`.
5. Incluye una nota si una imagen corresponde a un caso de éxito, un servicio o la galería.

También puedes compartir una carpeta de Google Drive para transferir archivos. Los archivos deben descargarse e incorporarse al proyecto; no se deben usar enlaces de Drive directamente en la página publicada.

## Material previsto por sección

### Portada

Carpeta: `media/inbox/photos/hero/`

- Opción A: de 3 a 5 fotografías horizontales del banco de pruebas, inyectores, bombas, turbos y trabajo en proceso.
- Opción B: video horizontal de 10 a 20 segundos en `media/inbox/videos/`, sin audio obligatorio y con tomas estables.
- Formato recomendado: 16:9, mínimo 1920 × 1080 px.

### Tradición y evolución

Carpeta: `media/inbox/photos/workshop/`

- Una fotografía del taller anterior y otra del taller actual.
- Conviene que tengan un encuadre parecido y la misma orientación.
- Se mostrarán con un comparador deslizable antes/ahora.

### Servicios

Carpeta: `media/inbox/photos/services/`

- Una fotografía horizontal por servicio: diagnóstico, inyectores, turbos, bombas, motores y mantenimiento.
- Formato recomendado: proporción 3:2 y mínimo 1600 × 1067 px.
- La imagen debe mostrar trabajo real, no fotografías descargadas de internet.

### Casos de éxito

Carpeta: `media/inbox/photos/cases/`

- Dos fotografías por caso: antes y después.
- Ambas deben tomarse desde el mismo ángulo, distancia y orientación.
- Usa nombres relacionados, por ejemplo `inyector-bosch-01-antes.jpg` y `inyector-bosch-01-despues.jpg`.

### Galería general

Carpeta: `media/inbox/photos/gallery/`

- Instalaciones, maquinaria, herramientas, personal trabajando y componentes.
- Combina planos generales y acercamientos.

## Preparación para publicación

- Las fotografías seleccionadas se recortarán y convertirán a WebP o AVIF.
- Se generarán tamaños distintos para celular y escritorio.
- Los archivos finales irán a `images/gallery/`, `images/services/`, `images/cases/` o `images/branding/`.
- Los videos se comprimirán a MP4/WebM o se publicarán mediante un servicio de video, según su duración y peso.
- Los originales permanecerán separados de los archivos optimizados.

No publicar fotografías con placas, rostros o datos personales sin autorización.

## Maqueta provisional actual

La página utiliza copias WebP de 38 archivos seleccionados. Los originales de `media/inbox/` no se modifican. La selección y los nombres de salida están documentados en `scripts/prepare_demo_media.py`; cuando el cliente cambie fotografías, se puede actualizar ese mapa y volver a generar las copias optimizadas.

La portada y la sección de evolución usan transiciones automáticas. La galería y los casos de éxito funcionan como carruseles horizontales con flechas, desplazamiento táctil y avance automático. Los casos pueden contener un comparador antes/después o una sola fotografía con descripción.
