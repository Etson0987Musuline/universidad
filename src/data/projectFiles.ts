export interface ProjectFile {
  path: string;
  content: string;
}

export const projectFiles: ProjectFile[] = [
  {
    path: "package.json",
    content: JSON.stringify({
      name: "universidad-web-portal",
      private: true,
      version: "1.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "tsc && vite build",
        preview: "vite preview"
      },
      dependencies: {
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-router-dom": "^6.22.0"
      },
      devDependencies: {
        "@types/react": "^18.3.1",
        "@types/react-dom": "^18.3.0",
        "@vitejs/plugin-react": "^4.2.1",
        "autoprefixer": "^10.4.17",
        "postcss": "^8.4.35",
        "tailwindcss": "^3.4.1",
        "typescript": "^5.3.3",
        "vite": "^5.1.0"
      }
    }, null, 2)
  },
  {
    path: "tsconfig.json",
    content: `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`
  },
  {
    path: "tsconfig.node.json",
    content: `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`
  },
  {
    path: "vite.config.ts",
    content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`
  },
  {
    path: "tailwind.config.js",
    content: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
  },
  {
    path: "postcss.config.js",
    content: `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
  },
  {
    path: "index.html",
    content: `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Universidad Nacional - Portal Institucional</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
  },
  {
    path: "src/main.tsx",
    content: `import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
  },
  {
    path: "src/index.css",
    content: `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`
  },
  {
    path: "src/App.tsx",
    content: `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Historia from './pages/Historia';
import MisionVision from './pages/MisionVision';
import Autoridades from './pages/Autoridades';
import Contacto from './pages/Contacto';
import Facultades from './pages/Facultades';
import Carreras from './pages/Carreras';
import DetalleCarrera from './pages/DetalleCarrera';
import Admision from './pages/Admision';
import Noticias from './pages/Noticias';
import Documentos from './pages/Documentos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="mision-vision" element={<MisionVision />} />
          <Route path="autoridades" element={<Autoridades />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="facultades" element={<Facultades />} />
          <Route path="carreras" element={<Carreras />} />
          <Route path="carreras/:slug" element={<DetalleCarrera />} />
          <Route path="admision" element={<Admision />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="documentos" element={<Documentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;`
  },
  {
    path: "src/components/Layout.tsx",
    content: `import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { institucion } from '../data/university';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/historia', label: 'Historia' },
    { path: '/mision-vision', label: 'Misión y Visión' },
    { path: '/autoridades', label: 'Autoridades' },
    { path: '/facultades', label: 'Facultades' },
    { path: '/carreras', label: 'Carreras' },
    { path: '/admision', label: 'Admisión' },
    { path: '/noticias', label: 'Noticias' },
    { path: '/documentos', label: 'Documentos' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span><i className="fas fa-phone mr-1"></i>{institucion.telefono}</span>
            <span className="hidden md:inline"><i className="fas fa-envelope mr-1"></i>{institucion.correo}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-blue-200"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-blue-200"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-blue-200"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
              <i className="fas fa-university text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-blue-900 leading-tight">{institucion.nombre}</h1>
              <p className="text-xs text-gray-500">{institucion.sigla}</p>
            </div>
          </Link>

          <button className="md:hidden text-blue-900 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.path} to={item.path}
                className={\`px-3 py-2 rounded text-sm font-medium transition-colors \${isActive(item.path) ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800'}\`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-white border-t px-4 py-2 space-y-1">
            {navItems.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)}
                className={\`block px-3 py-2 rounded text-sm font-medium \${isActive(item.path) ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-100'}\`}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <i className="fas fa-university text-white"></i>
                </div>
                <h3 className="text-white font-bold">{institucion.sigla}</h3>
              </div>
              <p className="text-sm">{institucion.descripcion}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/facultades" className="hover:text-white">Facultades</Link></li>
                <li><Link to="/carreras" className="hover:text-white">Carreras</Link></li>
                <li><Link to="/admision" className="hover:text-white">Admisión</Link></li>
                <li><Link to="/noticias" className="hover:text-white">Noticias</Link></li>
                <li><Link to="/documentos" className="hover:text-white">Documentos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Institucional</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/historia" className="hover:text-white">Historia</Link></li>
                <li><Link to="/mision-vision" className="hover:text-white">Misión y Visión</Link></li>
                <li><Link to="/autoridades" className="hover:text-white">Autoridades</Link></li>
                <li><Link to="/contacto" className="hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li><i className="fas fa-map-marker-alt mr-2"></i>{institucion.direccion}</li>
                <li><i className="fas fa-phone mr-2"></i>{institucion.telefono}</li>
                <li><i className="fas fa-envelope mr-2"></i>{institucion.correo}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
          © 2026 {institucion.nombre}. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}`
  },
  {
    path: "src/data/university.ts",
    content: `// Datos de ejemplo para el portal universitario
// En producción, estos datos vendrían de una API REST (FastAPI + PostgreSQL)

export interface Institucion {
  nombre: string;
  sigla: string;
  descripcion: string;
  historia: string;
  mision: string;
  vision: string;
  valores: string[];
  objetivos: string[];
  direccion: string;
  telefono: string;
  correo: string;
  sitio_web: string;
}

export interface Autoridad {
  id: number;
  nombre: string;
  cargo: string;
  biografia: string;
  foto_url: string;
  fecha_inicio: string;
  orden: number;
}

export interface Facultad {
  id: number;
  nombre: string;
  slug: string;
  descripcion: string;
  decano: string;
  activa: boolean;
  orden: number;
  carreras: number[];
}

export interface Carrera {
  id: number;
  facultad_id: number;
  nombre: string;
  slug: string;
  descripcion: string;
  perfil_profesional: string;
  campo_laboral: string;
  duracion_semestres: number;
  activa: boolean;
  competencias: string[];
}

export interface Noticia {
  id: number;
  titulo: string;
  slug: string;
  resumen: string;
  contenido: string;
  imagen_url: string;
  autor: string;
  estado: 'publicada' | 'borrador' | 'retirada';
  destacada: boolean;
  fecha_publicacion: string;
  categorias: string[];
}

export interface Convocatoria {
  id: number;
  titulo: string;
  slug: string;
  descripcion: string;
  modalidad: string;
  fecha_inicio: string;
  fecha_fin: string;
  estado: 'publicada' | 'finalizada' | 'borrador';
  requisitos: string[];
}

export interface Documento {
  id: number;
  categoria: string;
  titulo: string;
  descripcion: string;
  archivo_url: string;
  nombre_archivo: string;
  fecha_documento: string;
  publicado: boolean;
}

export const institucion: Institucion = {
  nombre: "Universidad Nacional del Centro",
  sigla: "UNC",
  descripcion: "Institución de educación superior comprometida con la formación integral de profesionales, la investigación científica y la extensión cultural al servicio de la sociedad.",
  historia: "La Universidad Nacional del Centro fue fundada el 15 de marzo de 1962...",
  mision: "Formar profesionales competentes, éticos y comprometidos con el desarrollo sostenible de la sociedad.",
  vision: "Ser reconocida al 2030 como una universidad líder en la formación integral de profesionales.",
  valores: ["Excelencia académica", "Ética y transparencia", "Responsabilidad social", "Innovación y creatividad", "Inclusión y diversidad"],
  objetivos: ["Garantizar una formación académica de calidad", "Promover la investigación científica"],
  direccion: "Av. Universitaria 1234, Ciudad Universitaria",
  telefono: "+51 (066) 123-456",
  correo: "informes@unc.edu.pe",
  sitio_web: "www.unc.edu.pe"
};

export const autoridades: Autoridad[] = [
  { id: 1, nombre: "Dr. Carlos Mendoza Ríos", cargo: "Rector", biografia: "Doctor en Ciencias...", foto_url: "", fecha_inicio: "2023-01-01", orden: 1 },
  { id: 2, nombre: "Dra. María Elena Quispe Huamán", cargo: "Vicerrectora Académica", biografia: "Doctora en Educación...", foto_url: "", fecha_inicio: "2023-01-15", orden: 2 },
];

export const facultades: Facultad[] = [
  { id: 1, nombre: "Facultad de Ingeniería de Sistemas e Informática", slug: "ingenieria-sistemas", descripcion: "Forma profesionales capaces de diseñar, desarrollar e implementar soluciones tecnológicas innovadoras.", decano: "Dr. Jorge Ramírez López", activa: true, orden: 1, carreras: [1, 2] },
  { id: 2, nombre: "Facultad de Ciencias de la Salud", slug: "ciencias-salud", descripcion: "Dedicada a la formación de profesionales en el área de la salud.", decano: "Dra. Patricia Flores Medina", activa: true, orden: 2, carreras: [3, 4] },
];

export const carreras: Carrera[] = [
  { id: 1, facultad_id: 1, nombre: "Ingeniería de Sistemas", slug: "ingenieria-de-sistemas", descripcion: "Forma ingenieros capaces de diseñar, desarrollar e implementar sistemas de información.", perfil_profesional: "El egresado es un profesional con sólida formación en ciencias de la computación.", campo_laboral: "Empresas de tecnología, consultoras de software, instituciones financieras.", duracion_semestres: 10, activa: true, competencias: ["Desarrollo de software", "Gestión de bases de datos", "Inteligencia artificial"] },
];

export const noticias: Noticia[] = [
  { id: 1, titulo: "Inicio del proceso de admisión 2026-I", slug: "admision-2026-i", resumen: "La Universidad abre sus puertas para nuevos estudiantes.", contenido: "La Oficina de Admisión informa...", imagen_url: "", autor: "Oficina de Admisión", estado: "publicada", destacada: true, fecha_publicacion: "2026-01-15", categorias: ["Admisión"] },
];

export const convocatorias: Convocatoria[] = [
  { id: 1, titulo: "Admisión Ordinaria 2026-I", slug: "admision-ordinaria-2026-1", descripcion: "Proceso de admisión ordinaria.", modalidad: "Examen Ordinario", fecha_inicio: "2026-02-15", fecha_fin: "2026-03-15", estado: "publicada", requisitos: ["DNI vigente", "Certificado de estudios"] },
];

export const documentos: Documento[] = [
  { id: 1, categoria: "Admisión", titulo: "Prospecto de Admisión 2026-I", descripcion: "Documento oficial del proceso de admisión.", archivo_url: "#", nombre_archivo: "prospecto.pdf", fecha_documento: "2026-01-10", publicado: true },
];

export const categorias_noticias = ["Todas", "Admisión", "Institucional", "Investigación"];
export const categorias_documentos = ["Todas", "Admisión", "Reglamentos", "Institucional"];`
  },
  {
    path: "src/pages/Home.tsx",
    content: `import { Link } from 'react-router-dom';
import { institucion, noticias, facultades } from '../data/university';

export default function Home() {
  const noticiasDestacadas = noticias.filter(n => n.destacada && n.estado === 'publicada').slice(0, 3);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{institucion.nombre}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">Formando profesionales con excelencia, ética y compromiso social desde 1962.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admision" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
                <i className="fas fa-graduation-cap mr-2"></i>Proceso de Admisión
              </Link>
              <Link to="/carreras" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900">
                <i className="fas fa-book mr-2"></i>Ver Carreras
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Noticias Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticiasDestacadas.map(noticia => (
              <article key={noticia.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <i className="fas fa-newspaper text-white text-5xl opacity-50"></i>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{noticia.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-3">{noticia.resumen}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestras Facultades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultades.map(f => (
              <div key={f.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-building text-blue-700 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.nombre}</h3>
                <p className="text-gray-600 text-sm">{f.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}`
  },
  {
    path: "README.md",
    content: `# Portal Web Institucional Universitario

Sistema web institucional público desarrollado con React + TypeScript + Vite + Tailwind CSS.

## Características

- ✅ Página principal con noticias destacadas
- ✅ Reseña histórica con timeline
- ✅ Misión, visión y valores institucionales
- ✅ Autoridades universitarias
- ✅ Listado de facultades y carreras
- ✅ Búsqueda y filtrado de carreras
- ✅ Perfil detallado de cada carrera
- ✅ Procesos de admisión con requisitos
- ✅ Noticias y comunicados
- ✅ Documentos institucionales descargables
- ✅ Formulario de contacto con validación
- ✅ Diseño responsive (móvil, tablet, escritorio)

## Tecnologías

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS
- **React Router** - Sistema de rutas

## Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
\`\`\`

## Estructura del Proyecto

\`\`\`
src/
├── components/       # Componentes reutilizables
│   └── Layout.tsx    # Layout principal con header y footer
├── data/             # Datos de ejemplo
│   └── university.ts # Datos institucionales
├── pages/            # Páginas de la aplicación
│   ├── Home.tsx
│   ├── Historia.tsx
│   ├── MisionVision.tsx
│   ├── Autoridades.tsx
│   ├── Contacto.tsx
│   ├── Facultades.tsx
│   ├── Carreras.tsx
│   ├── DetalleCarrera.tsx
│   ├── Admision.tsx
│   ├── Noticias.tsx
│   └── Documentos.tsx
├── App.tsx           # Componente principal con rutas
├── main.tsx          # Punto de entrada
└── index.css         # Estilos globales
\`\`\`

## Historias de Usuario Implementadas

### Módulo 1 - Página Principal e Institucional
- HU-01: Visualizar página principal
- HU-02: Consultar historia de la universidad
- HU-03: Consultar misión y visión
- HU-04: Consultar autoridades universitarias
- HU-05: Consultar información de contacto

### Módulo 2 - Facultades y Carreras
- HU-06: Listar facultades
- HU-07: Consultar carreras profesionales
- HU-08: Ver perfil de una carrera
- HU-09: Buscar carreras
- HU-10: Consultar planes de estudio

### Módulo 3 - Admisión
- HU-11: Consultar procesos de admisión
- HU-12: Consultar requisitos de inscripción
- HU-14: Consultar resultados de admisión
- HU-15: Descargar documentos de admisión

### Módulo 6 - Administración de Contenidos
- HU-26: Gestionar noticias y comunicados
- HU-28: Gestionar documentos institucionales
- HU-29: Registrar solicitudes de contacto

## Notas

Este es un portal público de solo lectura. Los datos de ejemplo están incluidos en \`src/data/university.ts\`.
En producción, estos datos vendrían de una API REST (FastAPI + PostgreSQL).

## Licencia

MIT
`
  },
  {
    path: ".gitignore",
    content: `# Dependencies
node_modules/

# Build output
dist/
dist-ssr/

# Environment variables
.env
.env.local
.env.production

# Editor
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Testing
coverage/
`
  }
];
