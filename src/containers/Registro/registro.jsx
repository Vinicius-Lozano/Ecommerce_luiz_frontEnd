import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/img_login01.webp';
import googleIcon from '../../assets/google_icon.png';
import axios from "axios";
import './registro.css';
import '../../global.css';

function Registro() {
    const [formData, setFormData] = useState ({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        repetirSenha: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.senha !== formData.repetirSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/clientes", {
                nome: formData.nome,
                email: formData.email,
                telefone: formData.telefone,
                senha: formData.senha
            });
            alert("Cliente cadastrado com sucesso");
            console.log("Resposta da API:", response.data);        
        } catch (error) {
            console.error("Erro no cadastrado do cliente:", error);
            alert("Erro no cadastrado do cliente");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-2 p-3 bg-white shadow-lg box-area d-flex justify-content-center" style={{width: '100%', maxWidth: '1200px'}}>
                <div className="col-md-5 rounded-3 d-flex p-8 me-5 justify-content-center align-items-center flex-column left-box bg-custom-blue">
                    <div className="featured-image">
                       <img src={Logo} className="img-fluid" style={{ maxwidth: '400px'}}/> 
                    </div>
                    <p className="text-shirik text-white fs-3">Crie Sua Conta.</p>
                    <small className="text-shirik text-white text-wrap text-center fs-5 mb-3">Faça o login ou crie uma conta</small>
                </div>
                <div className="col-md-5 right-box">
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="row align-items-center">

                            <div className="header-text mb-4">
                                <h1 className="text-lorab fs-1">Crie Sua Conta!</h1>
                                <p className="text-lorab fs-4"></p>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className="form-control form-control-lg bg-light fs-6" placeholder="Nome Completo"/>
                            </div>

                            <div className="input-group mb-3">
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-control-lg bg-light fs-6" placeholder="E-mail"/>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} className="form-control form-control-lg bg-light fs-6" placeholder="Telefone"/>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} className="form-control form-control-lg bg-light fs-6" placeholder="Senha"/>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password" id="repetirSenha" name="repetirSenha" value={formData.repetirSenha} onChange={handleChange} className="form-control form-control-lg bg-light fs-6" placeholder="Repetir Senha"/>
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
                            <div className="input-group mb-3 d-flex justify-content-center">
                                <button className="btn btn-lg btn-light w-75 fs-6"><img src={googleIcon} className="me-2" style={{width: '30px'}}/>Entrar com Google</button>
                            </div>
                            <div className="row p-5">
                                <small>Já tem conta? <Link to={"/login"}>Faça o login.</Link></small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registro;