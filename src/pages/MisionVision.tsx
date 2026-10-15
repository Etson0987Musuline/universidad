import { institucion } from '../data/university';

export default function MisionVision() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Misión, Visión y Valores</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Conoce el propósito institucional y los principios que guían nuestra labor académica.</p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center mb-5">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Misión</h2>
              <p className="text-gray-700 leading-relaxed">{institucion.mision}</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100">
              <div className="w-14 h-14 bg-indigo-700 rounded-lg flex items-center justify-center mb-5">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visión</h2>
              <p className="text-gray-700 leading-relaxed">{institucion.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {institucion.valores.map((valor, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-star text-blue-700"></i>
                </div>
                <p className="font-medium text-gray-900">{valor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Objetivos Institucionales</h2>
          <div className="space-y-4">
            {institucion.objetivos.map((obj, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-gray-700">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
