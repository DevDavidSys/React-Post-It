import React from "react";
import './style.css';
export default function Post_It(props){

    return(
        <div className="post_it_card">

            <h1>{props.titulo}</h1>

            <p>{props.conteudo}</p>
            

        </div>
    );
}