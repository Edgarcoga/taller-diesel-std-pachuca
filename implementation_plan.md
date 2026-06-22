# Sitio Web Profesional — Servicios Técnicos Diésel (STD) Pachuca

Página web corporativa de alta credibilidad para un laboratorio diésel en Pachuca, Hidalgo. El sitio no vende online; su propósito es generar confianza, autoridad técnica y captar clientes B2B/B2C a través de SEO local.

## Propuesta de Diseño

| Aspecto | Decisión |
|---|---|
| **Paleta de color** | Fondo oscuro carbón (`#0D1117`) + acentos dorado/ámbar (`#D4A843`) + blanco puro para texto. Transmite seriedad industrial y premium |
| **Tipografía** | **Inter** (headings) + **Roboto** (body) — Google Fonts, limpias y corporativas |
| **Estilo visual** | Glassmorphism sutil en tarjetas, gradientes oscuros, bordes metálicos. Inspiración industrial/técnica |
| **Animaciones** | Fade-in al scroll (IntersectionObserver), hover en tarjetas de servicios, contador animado de estadísticas, parallax sutil en hero |
| **Responsive** | Mobile-first. Menú hamburguesa en móvil. Grid fluido |
| **Imágenes** | Placeholders SVG profesionales + carpeta `images/` lista para fotos reales |

## Estructura del Proyecto (Escalable)

```
Pagina y catalogo Taller disel/
├── index.html                  ← Página principal (single-page con secciones)
├── css/
│   └── styles.css              ← Todo el diseño (variables CSS, componentes)
├── js/
│   └── main.js                 ← Animaciones, menú móvil, scroll suave
├── images/
│   ├── gallery/                ← Fotos de la galería (JPG/WebP)
│   ├── services/               ← Imágenes por servicio
│   ├── cases/                  ← Antes/después de casos de éxito
│   └── branding/               ← Logo, favicon, og-image
├── blog/
│   └── README.md               ← Instrucciones para agregar artículos/posts
└── README.md                   ← Documentación general del proyecto
```

> [!TIP]
> La estructura de carpetas permite que en el futuro se agreguen fotos reales, posts de blog, y nuevos servicios sin modificar la arquitectura base.

## Secciones de la Página

### 1. Header / Navegación
- Logo + nombre "Servicios Técnicos Diésel"
- Menú: Inicio · Servicios · Galería · Casos de Éxito · Contacto
- Menú hamburguesa responsive
- Sticky en scroll

### 2. Hero Section
- Título impactante: "Precisión y Confianza en Cada Componente Diésel"
- Subtítulo con keywords SEO locales
- Botones CTA: "Ver Servicios" + "Contactar por WhatsApp"
- Fondo con gradiente oscuro + patrón técnico sutil

### 3. Estadísticas / Credibilidad
- Contadores animados: Años de experiencia, Componentes reparados, Clientes satisfechos, Marcas atendidas
- Efecto de conteo al entrar en viewport

### 4. Servicios (Catálogo Técnico)
- Grid de tarjetas con efecto hover glassmorphism
  - Diagnóstico por Escáner
  - Laboratorio de Inyectores (Caterpillar, Bosch, Delphi)
  - Reparación de Turbos
  - Bombas de Inyección
  - Motores Diésel / Gasolina / Híbridos
  - Sistemas Caterpillar C9
- Cada tarjeta: ícono SVG + título + descripción técnica breve

### 5. Galería de Equipamiento
- Grid masonry de imágenes (placeholders inicialmente)
- Lightbox al hacer clic
- Mostrar maquinaria: banco de pruebas, escáner, herramientas especializadas

### 6. Casos de Éxito (Antes/Después)
- Slider con comparación visual
- Descripción del problema y la solución aplicada
- Placeholders listos para fotos reales

### 7. Marcas / Clientes
- Logos de marcas atendidas (Caterpillar, Bosch, Delphi, Cummins, etc.)
- Efecto de marquee/carrusel infinito

### 8. Contacto
- Información directa: teléfono, WhatsApp (botón flotante), email
- Mapa Google Maps embebido (Pachuca, Hidalgo)
- Horario de servicio
- Formulario simple de contacto

### 9. Footer
- Links rápidos
- Dirección completa
- Redes sociales
- Copyright

## SEO Local Implementado

```html
<!-- Meta tags optimizados -->
<title>Servicios Técnicos Diésel Pachuca | Reparación de Inyectores, Turbos y Bombas</title>
<meta name="description" content="Laboratorio diésel en Pachuca, Hidalgo. 
Diagnóstico, reparación de inyectores, turbos, bombas de inyección. 
Caterpillar, Bosch, Delphi. Taller diésel cerca de ti.">

<!-- Schema.org LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Servicios Técnicos Diésel STD Pachuca",
  "address": { "addressLocality": "Pachuca", "addressRegion": "Hidalgo" },
  ...
}
</script>
```

### Palabras Clave Objetivo
| Keyword | Ubicación en la web |
|---|---|
| Taller diésel Pachuca | Title, H1, meta description |
| Reparación de inyectores Pachuca | Servicio card, H2, alt text |
| Reparación de turbo Pachuca | Servicio card, H2, contenido |
| Laboratorio diésel Pachuca | Title, schema, footer |
| Bombas de inyección Pachuca | Servicio card, H2, contenido |
| Caterpillar C9 Pachuca | Servicio dedicado, contenido |

## Archivos a Crear

### Core
| Archivo | Descripción |
|---|---|
| [NEW] `index.html` | Página principal con todas las secciones, meta SEO, schema.org |
| [NEW] `css/styles.css` | Sistema de diseño completo: variables, reset, componentes, responsive |
| [NEW] `js/main.js` | Scroll animations, menú mobile, contadores, lightbox galería |

### Estructura de Contenido
| Archivo | Descripción |
|---|---|
| [NEW] `blog/README.md` | Guía para agregar artículos de blog/posts en el futuro |
| [NEW] `README.md` | Documentación del proyecto, cómo modificar contenido |

### Carpetas de Imágenes
| Carpeta | Propósito |
|---|---|
| [NEW] `images/gallery/` | Fotos de equipamiento y taller |
| [NEW] `images/services/` | Imágenes específicas por servicio |
| [NEW] `images/cases/` | Fotos antes/después |
| [NEW] `images/branding/` | Logo, favicon, open graph image |

## Verificación

### Manual
- Abrir `index.html` en navegador y verificar todas las secciones
- Probar responsive en distintos tamaños (mobile, tablet, desktop)
- Verificar que todos los links de navegación funcionan (scroll suave)
- Verificar botón WhatsApp
- Comprobar animaciones al hacer scroll

### SEO
- Validar meta tags y schema.org
- Verificar heading hierarchy (un solo H1)
- Verificar alt text en imágenes
