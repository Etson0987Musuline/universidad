import { institucion } from '../data/university';

export default function Historia() {
  const hitos = [
    { year: "1962", title: "Fundación", desc: "La universidad inicia sus actividades académicas con tres facultades: Ciencias, Letras y Derecho." },
    { year: "1967", title: "Primera promoción", desc: "Se gradúa la primera promoción de egresados, marcando un hito en la educación superior regional." },
    { year: "1975", title: "Expansión académica", desc: "Se incorporan nuevas facultades y se crean los primeros programas de posgrado." },
    { year: "1985", title: "Investigación", desc: "Se construyen los primeros laboratorios de investigación y se establecen convenios internacionales." },
    { year: "1995", title: "Modernización", desc: "Se moderniza la infraestructura tecnológica y se implementan programas de educación a distancia." },
    { year: "2005", title: "Acreditación", desc: "Se obtienen las primeras acreditaciones internacionales de programas académicos." },
    { year: "2015", title: "Crecimiento", desc: "La universidad supera los 20,000 estudiantes y fortalece su producción científica." },
    { year: "2026", title: "Liderazgo", desc: "Consolidada como referente académico con más de 25,000 estudiantes y presencia nacional." }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Reseña Histórica</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Conoce la trayectoria de nuestra universidad, desde su fundación hasta la actualidad.</p>
        </div>
      </section>

      {/* Historia completa */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            {institucion.historia.split('\n\n').map((parrafo, i) => (
              <p key={i} className="mb-6 leading-relaxed">{parrafo}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Hitos Institucionales</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
            {hitos.map((hito, i) => (
              <div key={i} className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <span className="text-blue-700 font-bold text-lg">{hito.year}</span>
                    <h3 className="text-gray-900 font-semibold mt-1">{hito.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{hito.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-700 rounded-full transform -translate-x-1/2 border-2 border-white shadow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
