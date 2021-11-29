import React from "react";
import './style.css';
export default function Post_It(props){

    return(
        <div className="post_it_card">
            {props.titulo}

            <p>{props.conteudo}</p>

        </div>
    );
}