import React from "react";
import './style.css';
import logo from '../../assets/diamon.png'

export default function Login(){
    return(

        <div className="all_login">
            <form className="form_login">
                <div className="img_logo">
                    <img src={logo}/>
                </div>
                <div>
                    <h1>Member Login</h1>
                    
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <div className="submit">
                        <input type="submit" >
                            
                        </input>
                    </div>
                    <h6 className="forget"><a>Esqueci minha Senha</a></h6>
                    <a>Criar Conta</a>
                </div>
            </form>


        </div>
    );


}