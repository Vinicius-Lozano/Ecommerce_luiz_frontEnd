import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProdutoService from "../services/produtoService";

const ProdutoDetalhes = () => {
    const { id } = useParams(); 
    const [produto, setProduto] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        ProdutoService.get(id)
            .then((data) => {
                setProduto(data); 
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Erro ao carregar o produto:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <h2>Carregando produto...</h2>; 
    }

    if (!produto) {
        return <h2>Produto não encontrado.</h2>; 
    }

    return (
        <div className="container mt-5">
            <h1>{produto.nome}</h1>
            <img
                src={
                    produto.imagem.startsWith("http")
                        ? produto.imagem
                        : `/assets/imgs/${produto.imagem || "default.jpg"}`
                }
                alt={produto.nome}
                className="img-fluid"
                style={{ width: "100%", maxWidth: "400px", height: "auto", objectFit: "cover" }}
            />
            <p className="mt-3">
                <strong>Preço:</strong> R$ {Number(produto.preco).toFixed(2)}
            </p>
            <p>
                <strong>Estoque:</strong> {produto.estoque}
            </p>
            <Link to="/produtos" className="btn btn-primary">
                Voltar para produtos
            </Link>
        </div>
    );
};

export default ProdutoDetalhes;
