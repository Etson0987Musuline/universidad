import { useState, useMemo } from 'react';
import { noticias, categorias_noticias } from '../data/university';

export default function Noticias() {
  const [categoria, setCategoria] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');
  const [noticiaExpandida, setNoticiaExpandida] = useState<number | null>(null);

  const noticiasFiltradas = useMemo(() => {
    return noticias.filter(n => {
      const matchCategoria = categoria === 'Todas' || n.categorias.includes(categoria);
      const matchBusqueda = n.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        n.resumen.toLowerCase().includes(busqueda.toLowerCase());
      return n.estado === 'publicada' && matchCategoria && matchBusqueda;
    });
  }, [categoria, busqueda]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Noticias y Comunicados</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Mantente informado sobre las últimas novedades de nuestra comunidad universitaria.</p>
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
                placeholder="Buscar noticias..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categorias_noticias.map(cat => (
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

      {/* Noticias */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {noticiasFiltradas.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-newspaper text-gray-300 text-5xl mb-4"></i>
              <p className="text-gray-500 text-lg">No se encontraron noticias con los criterios seleccionados.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {noticiasFiltradas.map(n => (
                <article key={n.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-newspaper text-white text-4xl opacity-50"></i>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {n.categorias.map((cat, i) => (
                          <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{cat}</span>
                        ))}
                        {n.destacada && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            <i className="fas fa-star mr-1"></i>Destacada
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">{n.titulo}</h2>
                      <p className="text-gray-600 text-sm mb-3">
                        <i className="fas fa-user mr-1"></i>{n.autor} · <i className="fas fa-calendar mr-1"></i>{new Date(n.fecha_publicacion).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p className="text-gray-700">{n.resumen}</p>
                      {noticiaExpandida === n.id && (
                        <div className="mt-4 text-gray-700 whitespace-pre-line border-t pt-4">
                          {n.contenido}
                        </div>
                      )}
                      <button
                        onClick={() => setNoticiaExpandida(noticiaExpandida === n.id ? null : n.id)}
                        className="mt-4 text-blue-700 hover:text-blue-900 font-medium text-sm"
                      >
                        {noticiaExpandida === n.id ? (
                          <><i className="fas fa-chevron-up mr-1"></i>Ver menos</>
                        ) : (
                          <><i className="fas fa-chevron-down mr-1"></i>Leer más</>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
