import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { carreras, facultades } from '../data/university';

export default function Carreras() {
  const [busqueda, setBusqueda] = useState('');
  const [facultadFiltro, setFacultadFiltro] = useState('todas');

  const carrerasFiltradas = useMemo(() => {
    return carreras.filter(c => {
      const matchTexto = c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      const matchFacultad = facultadFiltro === 'todas' || c.facultad_id === Number(facultadFiltro);
      return c.activa && matchTexto && matchFacultad;
    });
  }, [busqueda, facultadFiltro]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Carreras Profesionales</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Explora nuestra oferta académica y encuentra la carrera ideal para ti.</p>
        </div>
      </section>

      {/* Búsqueda y filtros */}
      <section className="py-8 bg-white border-b sticky top-[60px] z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Buscar carreras por nombre..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={facultadFiltro}
              onChange={e => setFacultadFiltro(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="todas">Todas las facultades</option>
              {facultades.map(f => (
                <option key={f.id} value={f.id}>{f.nombre}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-600 mb-6">
            {carrerasFiltradas.length} {carrerasFiltradas.length === 1 ? 'carrera encontrada' : 'carreras encontradas'}
          </p>

          {carrerasFiltradas.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-search text-gray-300 text-5xl mb-4"></i>
              <p className="text-gray-500 text-lg">No se encontraron carreras con los criterios seleccionados.</p>
              <button
                onClick={() => { setBusqueda(''); setFacultadFiltro('todas'); }}
                className="mt-4 text-blue-700 hover:text-blue-900 font-medium"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {carrerasFiltradas.map(c => {
                const fac = facultades.find(f => f.id === c.facultad_id);
                return (
                  <Link
                    key={c.id}
                    to={`/carreras/${c.slug}`}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-graduation-cap text-blue-700"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-800">{c.nombre}</h3>
                        <p className="text-sm text-blue-600 mt-1">{fac?.nombre}</p>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{c.descripcion}</p>
                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                          <span><i className="fas fa-clock mr-1"></i>{c.duracion_semestres} semestres</span>
                          <span><i className="fas fa-award mr-1"></i>{c.competencias.length} competencias</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
