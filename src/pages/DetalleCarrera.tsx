import { useParams, Link } from 'react-router-dom';
import { carreras, facultades } from '../data/university';

export default function DetalleCarrera() {
  const { slug } = useParams<{ slug: string }>();
  const carrera = carreras.find(c => c.slug === slug);

  if (!carrera) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Carrera no encontrada</h2>
          <p className="text-gray-600 mb-4">La carrera que buscas no existe o no está disponible.</p>
          <Link to="/carreras" className="text-blue-700 hover:text-blue-900 font-medium">
            <i className="fas fa-arrow-left mr-2"></i>Volver a carreras
          </Link>
        </div>
      </div>
    );
  }

  const facultad = facultades.find(f => f.id === carrera.facultad_id);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/carreras" className="text-blue-200 hover:text-white text-sm mb-4 inline-block">
            <i className="fas fa-arrow-left mr-1"></i>Volver a carreras
          </Link>
          <h1 className="text-4xl font-bold mb-2">{carrera.nombre}</h1>
          <p className="text-blue-100">{facultad?.nombre}</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              <i className="fas fa-clock mr-1"></i>{carrera.duracion_semestres} semestres
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              <i className="fas fa-certificate mr-1"></i>Grado de Bachiller
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              <i className="fas fa-check-circle mr-1"></i>Activa
            </span>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-10">
            {/* Descripción */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-blue-700"></i>Descripción
              </h2>
              <p className="text-gray-700 leading-relaxed">{carrera.descripcion}</p>
            </div>

            {/* Perfil profesional */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fas fa-user-graduate text-blue-700"></i>Perfil del Egresado
              </h2>
              <p className="text-gray-700 leading-relaxed">{carrera.perfil_profesional}</p>
            </div>

            {/* Competencias */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fas fa-award text-blue-700"></i>Competencias
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {carrera.competencias.map((comp, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <i className="fas fa-check text-blue-700"></i>
                    <span className="text-gray-800">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campo laboral */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fas fa-briefcase text-blue-700"></i>Campo Laboral
              </h2>
              <p className="text-gray-700 leading-relaxed">{carrera.campo_laboral}</p>
            </div>

            {/* Plan de estudios */}
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fas fa-book text-blue-700"></i>Plan de Estudios
              </h2>
              <p className="text-gray-600 mb-4">El plan de estudios de {carrera.nombre} tiene una duración de {carrera.duracion_semestres} semestres académicos.</p>
              <div className="bg-white p-4 rounded-lg border border-dashed border-gray-300 text-center">
                <i className="fas fa-file-pdf text-red-500 text-2xl mb-2"></i>
                <p className="text-gray-600 text-sm">Documento del plan de estudios disponible para descarga</p>
                <button className="mt-2 text-blue-700 hover:text-blue-900 font-medium text-sm">
                  <i className="fas fa-download mr-1"></i>Descargar plan de estudios
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
