import { useState } from 'react';
import { convocatorias, documentos } from '../data/university';

export default function Admision() {
  const [convocatoriaActiva, setConvocatoriaActiva] = useState(convocatorias[0]?.id);
  const selected = convocatorias.find(c => c.id === convocatoriaActiva);
  const docsAdmision = documentos.filter(d => d.categoria === 'Admisión' && d.publicado);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Admisión</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Conoce los procesos de admisión vigentes, requisitos y documentación necesaria.</p>
        </div>
      </section>

      {/* Convocatorias */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <i className="fas fa-bullhorn text-blue-700 mr-2"></i>Convocatorias vigentes
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {convocatorias.filter(c => c.estado === 'publicada').map(c => (
              <button
                key={c.id}
                onClick={() => setConvocatoriaActiva(c.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  convocatoriaActiva === c.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c.modalidad}
              </button>
            ))}
          </div>

          {selected && (
            <div className="bg-gray-50 rounded-xl p-6 border">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{selected.titulo}</h3>
                  <p className="text-gray-600 mt-2">{selected.descripcion}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Modalidad</span>
                      <p className="font-medium text-gray-900">{selected.modalidad}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Estado</span>
                      <p className="font-medium text-green-700 capitalize">{selected.estado}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Fecha de inicio</span>
                      <p className="font-medium text-gray-900">{new Date(selected.fecha_inicio).toLocaleDateString('es-PE')}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Fecha de fin</span>
                      <p className="font-medium text-gray-900">{new Date(selected.fecha_fin).toLocaleDateString('es-PE')}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-80">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    <i className="fas fa-list-check text-blue-700 mr-2"></i>Requisitos
                  </h4>
                  <ul className="space-y-2">
                    {selected.requisitos.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <i className="fas fa-check-circle text-green-600 mt-0.5 flex-shrink-0"></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Documentos de admisión */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <i className="fas fa-file-download text-blue-700 mr-2"></i>Documentos de admisión
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {docsAdmision.map(doc => (
              <div key={doc.id} className="bg-white p-5 rounded-lg border hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-file-pdf text-red-600 text-xl"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{doc.titulo}</h3>
                    <p className="text-sm text-gray-600 mt-1">{doc.descripcion}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-500">{new Date(doc.fecha_documento).toLocaleDateString('es-PE')}</span>
                      <button className="text-blue-700 hover:text-blue-900 text-sm font-medium">
                        <i className="fas fa-download mr-1"></i>Descargar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <i className="fas fa-search text-blue-700 text-4xl mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Consulta de resultados</h2>
            <p className="text-gray-600 mb-6">Consulta los resultados de los procesos de admisión publicados.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Ingresa tu DNI o código de postulante"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-800 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-900 transition-colors">
                Consultar
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              <i className="fas fa-lock mr-1"></i>Los resultados se muestran únicamente cuando han sido publicados oficialmente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
