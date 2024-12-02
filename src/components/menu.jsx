import { Link } from "react-router-dom";

const MenuComponent = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-custom-blueLight">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Home<i className="bi bi-house"></i></Link>

                <div className="d-flex gap-3">

                    <div className="d-flex gap-3">
                        <Link className="btn btn-primary" to="/produtos">Produtos</Link>
                        <Link className="btn btn-primary" to="/carrinho">Carrinho</Link>
                        <Link className="btn btn-primary" to="/buscacep">Busca CEP</Link>
                        <Link className="btn btn-success" to="/login">Login</Link>
                    </div>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </div>
        </nav>
    );
}

export default MenuComponent;