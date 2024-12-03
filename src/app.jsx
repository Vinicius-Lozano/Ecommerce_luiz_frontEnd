import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CarrinhoProvider } from './context/carrinhoContext';
import MenuComponent from './components/menu';
import Home from './containers/home';
import Login from './containers/Login/login';
import Registro from './containers/Registro/registro';
import Carrinho from './containers/Carrinho/carrinho';
import Produtos from './containers/Produtos/produtos';
import ProdutoDetalhes from "./components/PodutoDetalhes";

function App() {
  console.log('Componente App renderizado');
  return (
    <CarrinhoProvider>
      <Router>
        <div>
          
        <MenuComponent />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<ProdutoDetalhes />} />
          </Routes>
        </div>
      </Router>
    </CarrinhoProvider>
  );
}

export default App;