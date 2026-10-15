import { useState } from 'react';
import { institucion } from '../data/university';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', correo: '', asunto: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [errores, setErrores] = useState<Record<string, string>>({});

  const validar = () => {
    const errs: Record<string, string> = {};
    if (!form.nombre.trim()) errs.nombre = 'El nombre es obligatorio';
    if (!form.correo.trim()) errs.correo = 'El correo es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) errs.correo = 'Ingrese un correo válido';
    if (!form.asunto.trim()) errs.asunto = 'El asunto es obligatorio';
    if (!form.mensaje.trim()) errs.mensaje = 'El mensaje es obligatorio';
    else if (form.mensaje.trim().length < 10) errs.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validar();
    if (Object.keys(errs).length > 0) {
      setErrores(errs);
      return;
    }
    setErrores({});
    setEnviado(true);
    setForm({ nombre: '', correo: '', asunto: '', mensaje: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Comunícate con nosotros. Estamos para ayudarte.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-blue-700"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">{institucion.direccion}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-blue-700"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">{institucion.telefono}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-blue-700"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Correo electrónico</h3>
                    <p className="text-gray-600">{institucion.correo}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-blue-700"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horario de atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sábados: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Mapa placeholder */}
              <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <i className="fas fa-map-marked-alt text-4xl mb-2"></i>
                  <p>Mapa de ubicación</p>
                  <p className="text-sm">{institucion.direccion}</p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
              {enviado && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                  <i className="fas fa-check-circle mr-2"></i>
                  Tu mensaje ha sido enviado correctamente. Nos comunicaremos contigo pronto.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={e => setForm({ ...form, nombre: e.target.value })}
                    className={`w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errores.nombre ? 'border-red-400' : 'border-gray-300'}`}
                    placeholder="Ingresa tu nombre"
                  />
                  {errores.nombre && <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
                  <input
                    type="email"
                    value={form.correo}
                    onChange={e => setForm({ ...form, correo: e.target.value })}
                    className={`w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errores.correo ? 'border-red-400' : 'border-gray-300'}`}
                    placeholder="correo@ejemplo.com"
                  />
                  {errores.correo && <p className="text-red-500 text-sm mt-1">{errores.correo}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Asunto *</label>
                  <input
                    type="text"
                    value={form.asunto}
                    onChange={e => setForm({ ...form, asunto: e.target.value })}
                    className={`w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errores.asunto ? 'border-red-400' : 'border-gray-300'}`}
                    placeholder="Motivo de tu consulta"
                  />
                  {errores.asunto && <p className="text-red-500 text-sm mt-1">{errores.asunto}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                  <textarea
                    rows={5}
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    className={`w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errores.mensaje ? 'border-red-400' : 'border-gray-300'}`}
                    placeholder="Escribe tu mensaje aquí..."
                  />
                  {errores.mensaje && <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                  <i className="fas fa-paper-plane mr-2"></i>Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
