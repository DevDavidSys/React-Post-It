import React from "react";
import './style.css';
import {TiDeleteOutline} from "react-icons/ti";
export default function Post_It(props){

    function DeletePost(){
    }

    function ShowClose(a){
        
    
    }
    return(
    
        <div className="post_it_card" >
            <div className="close"><TiDeleteOutline size={24}/>A</div>
            <h1 onClick={DeletePost} className="close" >X</h1>
            <h1>{props.titulo}</h1>

            <p>{props.conteudo}</p>
        </div>
    );
}