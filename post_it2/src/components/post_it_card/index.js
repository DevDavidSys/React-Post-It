import React from "react";
import './style.css';
export default function Post_It(props){

    function DeletePost(){
    }

    function ShowClose(a){
        
    
    }
    return(
    
        <div className="post_it_card" >
            <h1 onClick={DeletePost} className="close" >X</h1>
            <h1>{props.titulo}</h1>

            <p>{props.conteudo}</p>
            

        </div>
    );
}