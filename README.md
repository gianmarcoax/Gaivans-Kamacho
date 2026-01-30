# Rent a Car Vilcas - Frontend Astro + Tailwind CSS

Frontend moderno para empresa de alquiler de vehículos, construido con Astro y Tailwind CSS.

![Astro](https://img.shields.io/badge/Astro-4.x-ff5d01?style=flat-square&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=flat-square&logo=tailwindcss)

## 🚀 Características

- ✅ Diseño moderno y responsive
- ✅ Carrusel de imágenes interactivo
- ✅ Animaciones al scroll (reveal effects)
- ✅ Menú hamburguesa para móvil
- ✅ Formulario de contacto
- ✅ Botón flotante de WhatsApp
- ✅ Optimizado para SEO

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/rentacar-astro.git

# Entrar al directorio
cd rentacar-astro

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor en `localhost:4321` |
| `npm run build` | Genera build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |

## 📁 Estructura

```
src/
├── components/     # Componentes Astro
├── data/          # Datos JSON (mock data)
├── layouts/       # Layout base
├── pages/         # Páginas del sitio
└── styles/        # Estilos CSS globales
```

## ⚙️ Configuración

Edita el archivo `src/data/site-data.json` para personalizar:
- Información de la empresa
- Slides del carrusel
- Catálogo de vehículos
- Datos de contacto
- Link de WhatsApp

## 🚀 Despliegue en Railway

1. Conecta tu repositorio de GitHub a Railway
2. Railway detectará automáticamente que es un proyecto Astro
3. Se desplegará automáticamente con cada push

## 🔮 Próximos Pasos (Supabase)

Para conectar con Supabase:

1. Instalar cliente: `npm install @supabase/supabase-js`
2. Crear archivo `src/lib/supabase.ts`
3. Reemplazar datos mock por queries a Supabase

## 📄 Licencia

MIT © Rent a Car Vilcas
