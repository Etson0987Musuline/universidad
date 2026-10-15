import { Link } from 'react-router-dom';
import { facultades, carreras } from '../data/university';

export default function Facultades() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Facultades</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Conoce nuestra organización académica y las facultades que conforman la universidad.</p>
        </div>
      </section>

      {/* Facultades */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {facultades.map(f => {
              const carrerasFac = carreras.filter(c => c.facultad_id === f.id && c.activa);
              return (
                <div key={f.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-building text-white text-xl"></i>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{f.nombre}</h2>
                        <p className="text-gray-600 mt-1">{f.descripcion}</p>
                        <p className="text-sm text-gray-500 mt-2"><i className="fas fa-user-tie mr-1"></i>Decano: {f.decano}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Carreras profesionales</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {carrerasFac.map(c => (
                        <Link
                          key={c.id}
                          to={`/carreras/${c.slug}`}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <i className="fas fa-graduation-cap text-blue-600"></i>
                          <span className="text-gray-800 group-hover:text-blue-800 font-medium">{c.nombre}</span>
                          <i className="fas fa-chevron-right text-gray-400 ml-auto text-sm"></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
