import { Link } from 'react-router-dom';
import { institucion, noticias, facultades, convocatorias } from '../data/university';

export default function Home() {
  const noticiasDestacadas = noticias.filter(n => n.destacada && n.estado === 'publicada').slice(0, 3);
  const convocatoriasActivas = convocatorias.filter(c => c.estado === 'publicada');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {institucion.nombre}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Formando profesionales con excelencia, ética y compromiso social desde 1962.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admision" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <i className="fas fa-graduation-cap mr-2"></i>Proceso de Admisión
              </Link>
              <Link to="/carreras" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                <i className="fas fa-book mr-2"></i>Ver Carreras
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-800">25,000+</div>
              <div className="text-gray-600 mt-1">Estudiantes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-800">1,200+</div>
              <div className="text-gray-600 mt-1">Docentes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-800">6</div>
              <div className="text-gray-600 mt-1">Facultades</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-800">10</div>
              <div className="text-gray-600 mt-1">Carreras</div>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias destacadas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Noticias Destacadas</h2>
            <Link to="/noticias" className="text-blue-700 hover:text-blue-900 font-medium">
              Ver todas <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticiasDestacadas.map(noticia => (
              <article key={noticia.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <i className="fas fa-newspaper text-white text-5xl opacity-50"></i>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{noticia.categorias[0]}</span>
                    <span className="text-xs text-gray-500">{noticia.fecha_publicacion}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{noticia.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-3">{noticia.resumen}</p>
                  <span className="text-blue-700 text-sm font-medium hover:text-blue-900 cursor-pointer">
                    Leer más <i className="fas fa-arrow-right ml-1"></i>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facultades */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Nuestras Facultades</h2>
            <Link to="/facultades" className="text-blue-700 hover:text-blue-900 font-medium">
              Ver todas <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultades.map(f => (
              <div key={f.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-building text-blue-700 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.nombre}</h3>
                <p className="text-gray-600 text-sm mb-3">{f.descripcion}</p>
                <p className="text-xs text-gray-500"><i className="fas fa-user-tie mr-1"></i>Decano: {f.decano}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admisión CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Proceso de Admisión 2026-I</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            ¡Forma parte de nuestra comunidad universitaria! Consulta las modalidades, requisitos y cronograma del proceso de admisión.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {convocatoriasActivas.map(c => (
              <Link key={c.id} to="/admision" className="bg-white/10 border border-white/30 px-5 py-3 rounded-lg hover:bg-white/20 transition-colors">
                <i className="fas fa-file-alt mr-2"></i>{c.modalidad}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enlaces rápidos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Accesos rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/documentos" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md text-center transition-shadow">
              <i className="fas fa-file-pdf text-red-500 text-3xl mb-3"></i>
              <p className="font-medium text-gray-900">Documentos</p>
            </Link>
            <Link to="/admision" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md text-center transition-shadow">
              <i className="fas fa-user-graduate text-green-500 text-3xl mb-3"></i>
              <p className="font-medium text-gray-900">Admisión</p>
            </Link>
            <Link to="/carreras" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md text-center transition-shadow">
              <i className="fas fa-book-open text-purple-500 text-3xl mb-3"></i>
              <p className="font-medium text-gray-900">Carreras</p>
            </Link>
            <Link to="/contacto" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md text-center transition-shadow">
              <i className="fas fa-headset text-blue-500 text-3xl mb-3"></i>
              <p className="font-medium text-gray-900">Contacto</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
