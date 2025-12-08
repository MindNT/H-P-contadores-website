# H&P Contadores - Website

Proyecto React con Tailwind CSS configurado según especificaciones de Figma.

## 🚀 Tecnologías

- **React 18** con TypeScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **SWC** - Compilador JavaScript/TypeScript súper rápido

## 📐 Especificaciones de Diseño

El proyecto está configurado con las siguientes variables de diseño basadas en Figma:

- **Dimensiones del contenedor**: 1512px × 982px
- **Background**: #FFFFFF
- **Borde**: 1px solid #000000

Todas las variables están definidas en `src/constants/design-tokens.ts`.

## 📁 Estructura del Proyecto

```
src/
├── assets/           # Imágenes, iconos, fuentes
├── components/       # Componentes reutilizables
│   ├── ui/          # Componentes base (buttons, inputs, cards)
│   ├── layout/      # Componentes de layout (Header, Footer, Container)
│   └── common/      # Componentes comunes (Loading, ErrorBoundary)
├── pages/           # Páginas/vistas principales
├── hooks/           # Custom hooks
├── utils/           # Funciones utilitarias
├── services/        # Servicios API
├── context/         # Context API providers
├── styles/          # Estilos globales
└── constants/       # Constantes y configuraciones
    └── design-tokens.ts  # Tokens de diseño de Figma
```

## 🎨 Sistema de Diseño

### Colores
Los colores están configurados en `tailwind.config.js`:
- `primary-background`: #FFFFFF
- `border`: #000000

### Componentes

#### Container
Componente principal que implementa las dimensiones de Figma:

```tsx
import { Container } from './components/layout';

<Container>
  {/* Tu contenido aquí */}
</Container>
```

### Variables CSS
Todas las variables CSS están definidas en `src/index.css` usando custom properties:

```css
--color-background: #FFFFFF;
--color-border: #000000;
--container-width: 1512px;
--container-height: 982px;
```

## 🛠️ Comandos

### Desarrollo
```bash
npm run dev
```

### Build de Producción
```bash
npm run build
```

### Preview de Producción
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## 📝 Convenciones de Código

- **TypeScript**: Todos los archivos nuevos deben usar TypeScript (.tsx/.ts)
- **Componentes**: PascalCase para nombres de componentes
- **Estilos**: Usar clases de Tailwind siempre que sea posible
- **Imports**: Usar imports absolutos desde `src/`
