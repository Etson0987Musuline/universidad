import { useState, useMemo } from 'react';
import { documentos, categorias_documentos } from '../data/university';

export default function Documentos() {
  const [categoria, setCategoria] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const documentosFiltrados = useMemo(() => {
    return documentos.filter(d => {
      const matchCategoria = categoria === 'Todas' || d.categoria === categoria;
      const matchBusqueda = d.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        d.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      return d.publicado && matchCategoria && matchBusqueda;
    });
  }, [categoria, busqueda]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Documentos Institucionales</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Accede a reglamentos, prospectos, documentos oficiales y más.</p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b sticky top-[60px] z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categorias_documentos.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    categoria === cat
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {documentosFiltrados.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-folder-open text-gray-300 text-5xl mb-4"></i>
              <p className="text-gray-500 text-lg">No se encontraron documentos con los criterios seleccionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documentosFiltrados.map(doc => (
                <div key={doc.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-file-pdf text-red-600 text-xl"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{doc.categoria}</span>
                      <h3 className="font-semibold text-gray-900 mt-2 truncate">{doc.titulo}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{doc.descripcion}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t">
                        <span className="text-xs text-gray-500">
                          <i className="fas fa-calendar mr-1"></i>
                          {new Date(doc.fecha_documento).toLocaleDateString('es-PE')}
                        </span>
                        <button className="text-blue-700 hover:text-blue-900 text-sm font-medium">
                          <i className="fas fa-download mr-1"></i>Descargar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
