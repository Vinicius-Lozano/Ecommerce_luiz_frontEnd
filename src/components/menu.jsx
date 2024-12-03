import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProdutoService from "../services/produtoService";

const MenuComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            ProdutoService.getAll().then((produtos) => {
                const resultados = produtos.filter((produto) =>
                    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setProdutosFiltrados(resultados);
            });
        } else {
            setProdutosFiltrados([]);
        }
    }, [searchTerm]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-custom-blueLight">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Home <i className="bi bi-house"></i>
                </Link>
                <div className="d-flex gap-3">
                    <div className="d-flex gap-3">
                        <Link className="btn btn-primary" to="/produtos">
                            Produtos
                        </Link>
                        <Link className="btn btn-primary" to="/carrinho">
                            Carrinho
                        </Link>
                        <Link className="btn btn-primary" to="/buscacep">
                            Busca CEP
                        </Link>
                        <Link className="btn btn-success" to="/login">
                            Login
                        </Link>
                    </div>

                    <div className="dropdown">
                        <form className="d-flex position-relative">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar produto..."
                                aria-label="Search"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            {produtosFiltrados.length > 0 && (
                                <ul
                                    className="dropdown-menu show position-absolute"
                                    style={{ zIndex: 1000, width: "100%" }}
                                >
                                    {produtosFiltrados.map((produto) => (
                                        <li key={produto.id}>
                                            <Link
                                                className="dropdown-item"
                                                to={`/produtos/${produto.id}`}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={
                                                            produto.imagem.startsWith("http")
                                                                ? produto.imagem
                                                                : `/assets/imgs/${produto.imagem || "default.jpg"}`
                                                        }
                                                        alt={produto.nome}
                                                        style={{
                                                            width: "50px",
                                                            height: "50px",
                                                            objectFit: "cover",
                                                            marginRight: "10px",
                                                        }}
                                                    />
                                                    <span>{produto.nome}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MenuComponent;