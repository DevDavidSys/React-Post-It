import React from "react";
import {AiOutlineReload} from 'react-icons/ai'
import {BiMeteor,BiCode,BiHome,BiRightArrow,BiArrowFromLeft} from 'react-icons/bi';
import {HiOutlineChevronRight} from 'react-icons/hi';
import {VscAdd,VscChevronRight} from 'react-icons/vsc';
import Post from "../post_it_card";
import './style.css';
import {useState,useEffect} from 'react';
import { TiArrowLeftOutline,TiArrowRightOutline,TiDeleteOutline} from "react-icons/ti";
import Post_It from "../post_it_card";

import api from '../../services/API/api';


export default function Main(props){
    let posts = [];
    
    const [RenderPosts,SetRenderPosts] = useState(posts);
    const [Titulo,SetTitulo] = useState(null);
    const [Conteudo,SetConteudo] = useState(null);
    
    
    function DeletePost(){

        console.log('Deletar');
    }

    
    function HandeClick(){
       // document.getElementById('sidebar').classList.toggle('sidebar-opened')
        //document.getElementById('circle').classList.toggle('sidebar')
    }
    function OpenAddConteinerPost() {
        document.getElementById('add_container').style.display = 'grid';
    }

    async function getPosts() {

        await api.get('http://localhost:4000/getPosts').then(res=>{
          
            document.getElementById('content').innerHTML = '';
            return res.data
        }).then(res=>{
            res.forEach(element => {
                document.getElementById('content').innerHTML += `
                <div class ="post_it_card">
                    <h1>${element.titulo}</h1>
                    <p>${element.conteudo}</p>
                </div>`;
            });
        })
      }
    
    async function addPostIt(){
        let data = {
            titulo:Titulo,
            conteudo:Conteudo,
         }
         let json = JSON.stringify(data);
        const res = await api.post('http://localhost:4000/addPostIt', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        
        }).then(res=>{
            if(res){

                getPosts();
            }
            else{
                console.log('erro, nao adicionado');
            }
        });
        
    }
    return(
        
            <div className="all_Main">
                <div className="sidebar opened" id="sidebar" >
                    <div className="sidebar_icon"><BiHome e width="2em" height="100"/><p>Home</p></div>
                    <div className="sidebar_icon"><BiCode/><p>Home</p></div>
                    <div className="sidebar_icon"><BiMeteor/><p>Home</p></div>
                    <div className="circle-animation" id="circle" onClick={HandeClick}><BiRightArrow/></div>
            </div>


            <div className="content" id="content">
                <div className="content-grid" id="content_grid">
                    {RenderPosts}
                </div>

            </div>
            

            
            <div className="icons_div">
                <div className="add_post_it" onClick={getPosts}>
                    <AiOutlineReload/>
                </div>
                <div className="add_post_it" onClick={OpenAddConteinerPost}>
                    <VscAdd/>
                </div>
            </div>
            <div className="add_new_post_open" id="add_container">
                    <div id="close" className="close_add_post" onClick={()=>{document.getElementById('add_container').style.display = 'none'}} ><TiDeleteOutline size={24} /></div>
                    <section><h3>Titulo</h3></section>
                    <input type="text" id="titulo_add"  onChange={e=>SetTitulo(e.target.value)} value={Titulo}></input>
                    <section><h4>Conteudo</h4></section>
                    <input type="text" id="conteudo_add" onChange={e=>{SetConteudo(e.target.value)}} value={Conteudo} ></input>
                    <button onClick={addPostIt}><h3>Adicionar</h3></button>
            
            </div>
        </div>
    );


}