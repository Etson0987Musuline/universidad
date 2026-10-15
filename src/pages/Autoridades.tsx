import { autoridades } from '../data/university';

export default function Autoridades() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Autoridades Universitarias</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Conoce a las personas que lideran nuestra institución.</p>
        </div>
      </section>

      {/* Autoridades */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {autoridades.map(aut => (
              <div key={aut.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user-tie text-blue-700 text-5xl opacity-60"></i>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{aut.nombre}</h3>
                    <p className="text-blue-700 font-medium mt-1">{aut.cargo}</p>
                    <p className="text-sm text-gray-500 mt-1"><i className="fas fa-calendar mr-1"></i>Desde: {new Date(aut.fecha_inicio).toLocaleDateString('es-PE', { year: 'numeric', month: 'long' })}</p>
                    <p className="text-gray-600 text-sm mt-3">{aut.biografia}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organigrama */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Estructura de Gobierno</h2>
          <div className="space-y-4">
            <div className="bg-blue-800 text-white p-4 rounded-lg inline-block">
              <i className="fas fa-crown mr-2"></i>Asamblea Universitaria
            </div>
            <div className="flex justify-center"><i className="fas fa-arrow-down text-gray-400 text-2xl"></i></div>
            <div className="bg-blue-700 text-white p-4 rounded-lg inline-block">
              <i className="fas fa-user mr-2"></i>Rectorado
            </div>
            <div className="flex justify-center"><i className="fas fa-arrow-down text-gray-400 text-2xl"></i></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <i className="fas fa-book mr-2"></i>Vicerrectorado Académico
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <i className="fas fa-microscope mr-2"></i>Vicerrectorado de Investigación
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <i className="fas fa-clipboard mr-2"></i>Secretaría General
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
