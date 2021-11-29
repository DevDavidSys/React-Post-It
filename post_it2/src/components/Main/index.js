import React from "react";
import {BiMeteor,BiCode,BiHome,BiRightArrow,BiArrowFromLeft} from 'react-icons/bi';
import {HiOutlineChevronRight} from 'react-icons/hi';
import {VscAdd,VscChevronRight} from 'react-icons/vsc';
import Post_It from "../post_it_card";
import './style.css';
import {useState} from 'react';


export default function Main(props){
    let Postit = [{titulo:'a',corpo:'corpo'},]
    const [Page,SetPage] = useState(0);

    function HandeClick(){
        document.getElementById('sidebar').classList.toggle('sidebar-opened')
        document.getElementById('circle').classList.toggle('sidebar')
    }
     

    return(
            <div className="all_Main">
                <div className="add_post_it"><VscAdd/></div>
                <div className="sidebar-closed" id="sidebar" >
                    <div className="sidebar_icon"><BiHome e width="100" height="100"/>OI</div>
                    <div className="sidebar_icon"><BiCode/></div>
                    <div className="sidebar_icon"><BiMeteor/></div>
                    <div className="circle-animation" id="circle" onClick={HandeClick}><BiRightArrow/></div>
                </div>

            <div className="content-grid">
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                <Post_It titulo="Head" conteudo ="Conteudo"/>
                
            </div>
            
            
        </div>
    );


}