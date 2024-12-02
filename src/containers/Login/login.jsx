import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from '../../assets/img_login01.webp';
import './login.css';
import '../../global.css';

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !senha) {
            setError("Por favor, preencha todos os campos.");
            return;
        }
        
        try {
            const response = await axios.get("http://localhost:3000/clientes", {
                params: { email, senha }
            });

            if (response.data.length > 0) {
                alert("Login bem-sucedido!");
                navigate("/"); 
            } else {
                setError("E-mail ou senha inválidos."); 
            }
        } catch (error) {
            console.error("Erro durante a autenticação:", error);
            setError("Erro ao tentar fazer login. Tente novamente."); 
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-2 p-3 bg-white shadow-lg box-area d-flex justify-content-center" style={{ width: '100%', maxWidth: '1200px' }}>
                <div className="col-md-5 rounded-3 d-flex p-8 me-5 justify-content-center align-items-center flex-column left-box bg-custom-blue">
                    <div className="featured-image">
                        <img src={Logo} className="img-fluid" style={{ maxWidth: '400px' }} />
                    </div>
                    <p className="text-shirik text-white fs-3">Faça o login.</p>
                    <small className="text-shirik text-white text-wrap text-center fs-5 mb-3">Faça o login ou crie uma conta</small>
                </div>
                <div className="col-md-5 right-box">
                    <form action="#" onSubmit={handleLogin}>
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h1 className="text-lorab fs-1">Bem-vindo!</h1>
                                <p className="text-lorab fs-4">Que bom vê-lo novamente.</p>
                            </div>

                            {/* Exibe a mensagem de erro, se existir */}
                            {error && <div className="alert alert-danger">{error}</div>}

                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-mail"
                                />
                            </div>

                            <div className="input-group mb-1">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    id="senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="Senha"
                                />
                            </div>

                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Lembre-se de mim.</small></label>
                                </div>

                                <div className="forgot">
                                    <small><a href="#">Esqueci a senha.</a></small>
                                </div>
                            </div>

                            <div className="input-group mb-3 d-flex justify-content-center">
                                <button className="btn btn-lg btn-primary w-75 fs-6">Login</button>
                            </div>

                            <div className="row p-5">
                                <small>Não tem conta? <Link to={"/registro"}>Cadastre-se.</Link></small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
