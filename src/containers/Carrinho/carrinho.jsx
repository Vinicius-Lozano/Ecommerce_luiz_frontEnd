import { Link } from "react-router-dom";
import MenuComponent from "../../components/menu";
import { useContext } from "react";
import { CarrinhoContext } from "../../context/carrinhoContext";

const Carrinho = () => {
    const {carrinho, delCarrinho, limparCarrinho } = useContext(CarrinhoContext);
    const total = carrinho.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
      );
    return (
        <>
            <div className="container">
                
                {carrinho.length === 0 ? (
                    <p>Seu carrinho está vazio.</p>
                ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>Sub-total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {carrinho.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>{item.preco.toFixed(2)}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{(item.preco * item.quantidade).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => delCarrinho(item.id)}>
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan={3}>Total a Pagar</th>
                                    <th colSpan={2}>R$ {total.toFixed(2)}</th>
                                </tr>
                            </tfoot>
                        </table>
                        )}
                    <button className="btn btn-danger ml-10" onClick={limparCarrinho}>
                        <i className="bi bi-trash3"></i> Limpar Carrinho
                    </button>
            </div>
        </>
    );
}

export default Carrinho;