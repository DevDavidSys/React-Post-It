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
    function getPosts(){
        
    }

    return(
            <div className="all_Main">
                <div className="add_post_it"><VscAdd/></div>
                <div className="sidebar-closed" id="sidebar" >
                    <div className="sidebar_icon"><BiHome e width="2em" height="100"/>Home</div>
                    <div className="sidebar_icon"><BiCode/>Code</div>
                    <div className="sidebar_icon"><BiMeteor/>Contatos</div>
                    <div className="circle-animation" id="circle" onClick={HandeClick}><BiRightArrow/></div>
                </div>

            <div className="content" id="content">
                <div className="arrow"><TiArrowLeftOutline width="100px"/></div>
                <div className="content-grid" id="content_grid">
                    <Post_It titulo="oi" conteudo="oi"/>
                    <Post_It titulo="oi" conteudo="oi"/>
                    <Post_It titulo="oi" conteudo="oi"/>
                    
                    <Post_It titulo="oi" conteudo="oi"/>
                    <Post_It titulo="oi" conteudo="oi"/>
                    <Post_It titulo="oi" conteudo="oi"/>
                    <Post_It titulo="oi" conteudo="oi"/>
                    <Post_It titulo="oi" conteudo="oi"/>
                    <Post_It titulo="oi" conteudo="oi"/>

                </div>
                <div className="arrow"> <TiArrowRightOutline/></div>
            </div>
            
        </div>
    );


}