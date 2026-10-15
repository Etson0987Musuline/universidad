import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { projectFiles } from '../data/projectFiles';

export default function DownloadZip() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState('');

  const handleDownload = async () => {
    setLoading(true);
    setProgress('Creando archivo ZIP...');

    try {
      const zip = new JSZip();

      // Agregar todos los archivos del proyecto
      for (const file of projectFiles) {
        zip.file(file.path, file.content);
      }

      setProgress('Comprimiendo archivos...');
      
      // Generar el blob del ZIP
      const blob = await zip.generateAsync({ 
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 9 }
      });

      setProgress('Descargando...');
      
      // Guardar el archivo
      saveAs(blob, 'universidad-web-portal.zip');
      
      setProgress('¡Descarga completada!');
      setTimeout(() => {
        setProgress('');
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error al crear el ZIP:', error);
      setProgress('Error al crear el archivo');
      setTimeout(() => {
        setProgress('');
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-file-archive text-white text-3xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Descargar Proyecto Completo
          </h1>
          <p className="text-gray-600">
            Portal Web Institucional Universitario - Código Fuente Completo
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">
            <i className="fas fa-info-circle mr-2"></i>Contenido del archivo ZIP:
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✓ 16 archivos de código fuente (React + TypeScript)</li>
            <li>✓ Configuración de Vite y Tailwind CSS</li>
            <li>✓ Sistema de rutas completo</li>
            <li>✓ Datos de ejemplo (universidad, carreras, noticias)</li>
            <li>✓ Componentes responsive y accesibles</li>
            <li>✓ README con instrucciones de instalación</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            <i className="fas fa-terminal mr-2"></i>Instrucciones rápidas:
          </h3>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
            <li>Extrae el archivo ZIP</li>
            <li>Ejecuta <code className="bg-gray-200 px-2 py-0.5 rounded">npm install</code></li>
            <li>Ejecuta <code className="bg-gray-200 px-2 py-0.5 rounded">npm run dev</code></li>
            <li>Abre <code className="bg-gray-200 px-2 py-0.5 rounded">http://localhost:5173</code></li>
          </ol>
        </div>

        <button
          onClick={handleDownload}
          disabled={loading}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {loading ? (
            <span>
              <i className="fas fa-spinner fa-spin mr-2"></i>
              {progress}
            </span>
          ) : (
            <span>
              <i className="fas fa-download mr-2"></i>
              Descargar ZIP
            </span>
          )}
        </button>

        {progress && !loading && (
          <div className="mt-4 text-center text-green-600 font-medium">
            <i className="fas fa-check-circle mr-2"></i>
            {progress}
          </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Tecnologías: React 18 + TypeScript + Vite + Tailwind CSS + React Router</p>
        </div>
      </div>
    </div>
  );
}
