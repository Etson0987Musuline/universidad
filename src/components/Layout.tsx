import { Outlet, Link, useLocation } from 'react-router-dom';
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
      {/* Top Bar */}
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

      {/* Header */}
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

          {/* Mobile menu button */}
          <button
            className="md:hidden text-blue-900 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t px-4 py-2 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-700 hover:bg-blue-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
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
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600">
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600">
                  <i className="fab fa-twitter text-sm"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600">
                  <i className="fab fa-youtube text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
          <p>© 2026 {institucion.nombre}. Todos los derechos reservados.</p>
          <p className="mt-2">
            <Link to="/descargar" className="text-blue-400 hover:text-blue-300">
              <i className="fas fa-download mr-1"></i>Descargar código fuente del proyecto
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
