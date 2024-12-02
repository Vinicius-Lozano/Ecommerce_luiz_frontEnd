import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProdutoService from '../../services/produtoService';
import ProdutoItem from '../../components/produtoItem';
import { CarrinhoContext } from '../../context/carrinhoContext';

const Home = () => {
    const { addCarrinho } = useContext(CarrinhoContext);

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProdutos = async () => {
        try {
            const produtosTemp = await ProdutoService.getAll();
            // Garantir que a resposta seja um array
            if (Array.isArray(produtosTemp)) {
                setProdutos(produtosTemp);
            } else {
                setProdutos([]); // Caso a resposta não seja um array, inicializar com array vazio
            }
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            setProdutos([]); // Caso ocorra erro, inicializar com array vazio
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
                </ol>
            </nav>
            <div className="row mt-2">
                {loading ? (
                    <h2>Carregando produtos...</h2>
                ) : produtos.length === 0 ? (
                    <h2>Nenhum produto foi encontrado.</h2>
                ) : (
                    produtos.map((produto) => (
                        <div key={produto.id} className='col-4'>
                            <ProdutoItem produto={produto} handleClick={() => addCarrinho(produto)} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;