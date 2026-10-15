import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Historia from './pages/Historia';
import MisionVision from './pages/MisionVision';
import Autoridades from './pages/Autoridades';
import Contacto from './pages/Contacto';
import Facultades from './pages/Facultades';
import Carreras from './pages/Carreras';
import DetalleCarrera from './pages/DetalleCarrera';
import Admision from './pages/Admision';
import Noticias from './pages/Noticias';
import Documentos from './pages/Documentos';
import DownloadZip from './pages/DownloadZip';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/descargar" element={<DownloadZip />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="mision-vision" element={<MisionVision />} />
          <Route path="autoridades" element={<Autoridades />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="facultades" element={<Facultades />} />
          <Route path="carreras" element={<Carreras />} />
          <Route path="carreras/:slug" element={<DetalleCarrera />} />
          <Route path="admision" element={<Admision />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="documentos" element={<Documentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
