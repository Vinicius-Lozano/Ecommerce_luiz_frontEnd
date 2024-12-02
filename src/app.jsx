import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './containers/home';
import Login from './containers/login/login';
import Registro from './containers/Registro/registro';
import Carrinho from './containers/Carrinho/carrinho';
import Produtos from './containers/Produtos/produtos';

function App() {
  console.log('Componente App renderizado');
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="d-flex gap-3">
                <Link className="btn btn-primary" to="/produtos">Produtos</Link>
                <Link className="btn btn-primary" to="/carrinho">Carrinho</Link>
                <Link className="btn btn-success" to="/login">Login</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;