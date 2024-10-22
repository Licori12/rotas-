import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';      // Importa a página Home
import Sobre from './pages/Sobre';    // Importa a página Sobre
import Contato from './pages/Contato'; // Importa a página Contato
import Erro from './pages/Erro';      // Importa a página Erro
import Produto from './pages/Produto'; // Importa a página Produto

import Header from './components/Header';  // Importa o componente Header

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />  {/* Exibe o Header em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/erro" element={<Erro />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
