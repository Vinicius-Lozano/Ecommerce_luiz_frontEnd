import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProdutoService from "../services/produtoService";

const MenuComponent = () => {
    const [searchText, setSearchText] = useState(""); 
    const [produtosFiltrados, setProdutosFiltrados] = useState([]); 

    useEffect(() => {
        
        if (searchText.trim() !== "") {
            ProdutoService.getAll().then((produtos) => {
                const resultados = produtos.filter((produto) =>
                    produto.nome.toLowerCase().includes(searchText.toLowerCase()) 
                );
                setProdutosFiltrados(resultados); 
            });
        } else {
            setProdutosFiltrados([]); 
        }
    }, [searchText]); 

    const handleInputChange = (e) => {
        setSearchText(e.target.value); 
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-custom-blueLight">
            <div className="container-fluid">
                <Link className="navbar-brand text-shirik" to="/">
                    Eletro Fino <i className="bi bi-house"></i>
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
                                value={searchText}
                                onChange={handleInputChange} 
                            />
                            
                            {produtosFiltrados.length > 0 && searchText.trim() !== "" && (
                                <ul className="dropdown-menu show position-absolute w-100 mt-5" style={{ zIndex: "1000" }}>
                                    {produtosFiltrados.map((produto) => (
                                        <li key={produto.id}>
                                            <Link
                                                to={`/produtos/${produto.id}`}
                                                className="dropdown-item d-flex align-items-center"
                                            >
                                                <img
                                                    src={
                                                        produto.imagem.startsWith("http")
                                                            ? produto.imagem
                                                            : `/assets/imgs/${produto.imagem || "default.jpg"}`
                                                    }
                                                    alt={produto.nome}
                                                    style={{
                                                        width: "30px",
                                                        height: "30px",
                                                        objectFit: "cover",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                {produto.nome}
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