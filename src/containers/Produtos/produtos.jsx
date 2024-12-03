import React, { useState } from "react";
import axios from "axios";

function CadastroProduto() {
    const [produto, setProduto] = useState({
        nome: "",
        preco: "",
        estoque: "",
        imagem: "" 
    });

    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        if (!produto.nome || !produto.preco || !produto.estoque || !produto.imagem) {
            setErro("Todos os campos são obrigatórios.");
            setSucesso("");
            return;
        }

        try {
            
            await axios.post("http://localhost:3000/produtos", produto); 
            setSucesso("Produto cadastrado com sucesso!");
            setErro("");
            setProduto({ nome: "", preco: "", estoque: "", imagem: "" }); 
        } catch (error) {
            setErro("Erro ao cadastrar o produto. Tente novamente.");
            setSucesso("");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Cadastro de Produto</h2>
            
            
            {erro && <div className="alert alert-danger">{erro}</div>}
            {sucesso && <div className="alert alert-success">{sucesso}</div>}

            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={produto.nome}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="preco" className="form-label">Preço</label>
                    <input
                        type="number"
                        className="form-control"
                        id="preco"
                        name="preco"
                        value={produto.preco}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="estoque" className="form-label">Estoque</label>
                    <input
                        type="number"
                        className="form-control"
                        id="estoque"
                        name="estoque"
                        value={produto.estoque}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="imagem" className="form-label">URL da Imagem</label>
                    <input
                        type="text"
                        className="form-control"
                        id="imagem"
                        name="imagem"
                        value={produto.imagem}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroProduto;