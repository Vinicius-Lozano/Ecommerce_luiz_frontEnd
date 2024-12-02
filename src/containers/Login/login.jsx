import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/img_login01.webp';
import googleIcon from '../../assets/google_icon.png';
import './login.css';
import '../../global.css';

function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-2 p-3 bg-white shadow-lg box-area d-flex justify-content-center" style={{width: '100%', maxWidth: '1200px'}}>
                <div className="col-md-5 rounded-3 d-flex p-8 me-5 justify-content-center align-items-center flex-column left-box bg-custom-blue">
                    <div className="featured-image">
                       <img src={Logo} className="img-fluid" style={{ maxwidth: '400px'}}/> 
                    </div>
                    <p className="text-shirik text-white fs-3">Faça o login.</p>
                    <small className="text-shirik text-white text-wrap text-center fs-5 mb-3">Faça o login ou crie uma conta</small>
                </div>
                <div className="col-md-5 right-box">
                    <div className="row align-items-center">
                        <div className="header-text mb-4">
                            <h1 className="text-lorab fs-1">Bem-vindo!</h1>
                            <p className="text-lorab fs-4">Que bom vê-lo novamente.</p>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="E-mail"/>
                        </div>
                        <div className="input-group mb-1">
                            <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Senha"/>
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
                            <small>Não tem conta? <Link to={"/registro"}>Cadastre-se.</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;