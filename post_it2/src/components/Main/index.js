import React from "react";
import {BiMeteor,BiCode,BiHome,BiRightArrow,BiArrowFromLeft} from 'react-icons/bi';
import {HiOutlineChevronRight} from 'react-icons/hi';
import {VscAdd,VscChevronRight} from 'react-icons/vsc';
import Post_It from "../post_it_card";
import './style.css';
import {useState} from 'react';
import { TiArrowLeftOutline,TiArrowRightOutline} from "react-icons/ti";


export default function Main(props){
    let Posts = [{id:0,titulo:'a',corpo:'corpo'}]
    const [Page,SetPage] = useState(0);

    function HandeClick(){
        document.getElementById('sidebar').classList.toggle('sidebar-opened')
        document.getElementById('circle').classList.toggle('sidebar')
    }
    function OpenAddConteinerPost(){
        document.getElementById('add_container').style.display = 'grid';
    }
    function addPost(){
        let titulo = window.document.getElementById('titulo_add').value;
        let corpo = window.document.getElementById('couteudo_add')
        
        Posts.push({id:Math.random(),titulo:titulo,corpo:corpo});
        
        
    }

    function getPosts(){
      
    }
    return(
            <div className="all_Main">
                <div className="sidebar-closed" id="sidebar" >
                    <div className="sidebar_icon"><BiHome e width="2em" height="100"/>Home</div>
                    <div className="sidebar_icon"><BiCode/>Code</div>
                    <div className="sidebar_icon"><BiMeteor/>Contatos</div>
                    <div className="circle-animation" id="circle" onClick={HandeClick}><BiRightArrow/></div>
            </div>

            <div className="content" id="content">
                <div className="content-grid" id="content_grid">
                    
                    {Posts.map((object,i)=>{
                        return (<Post_It titulo={object.titulo} conteudo = {object.corpo}/>);
                    })}
                </div>

            </div>
            
            <div className="add_post_it" onClick={OpenAddConteinerPost}>
                <VscAdd/>
                
            </div>
            <div class="add_new_post_open" id="add_container">
                        <div id="close" className="close_add_post" onClick={()=>{document.getElementById('add_container').style.display = 'none'}} >X</div>
                        <section><h3>Titulo</h3></section>
                        <input type="text" id="titulo_add"></input>
                        <section><h4>Conteudo</h4></section>
                        <input type="text" id="conteudo_add"></input>
                        <button onClick={addPost}><h3>Adicionar</h3></button>
                </div>
        </div>
    );


}