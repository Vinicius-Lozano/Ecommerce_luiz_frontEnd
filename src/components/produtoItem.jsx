const ProdutoItem = ({produto, handleClick}) => {
    
    const imagem = `/assets/imgs/${produto.imagem}`;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imagem} className="card-img-top img-fluid" alt={produto.nome} style={{height: '270px', objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">R$ {produto.preco.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={handleClick}>Adicionar ao Carrinho</button>
            </div>
        </div>
    );
}

export default ProdutoItem;