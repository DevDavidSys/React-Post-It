import React from "react";
import {BiRightArrow,BiArrowFromLeft} from 'react-icons/bi';
import './style.css';
import {useState} from 'react';


export default function Main(props){
        
    function handleClick(){
        
            document.getElementById('sidebar').classList.toggle('sidebar-opened');
                document.getElementById('circle_animation').innerHTML = <BiArrowFromLeft/>
            
            
}
    return(
            <div className="all_Main">
                <div className="sidebar-closed" id="sidebar" >
                    <div className="sidebar_icon"><BiRightArrow/></div>
                    <div className="sidebar_icon"><BiRightArrow/></div>
                    <div className="sidebar_icon"><BiRightArrow/></div>
                    <div className="sidebar_icon"><BiRightArrow/></div>
                    <div className="sidebar_icon"><BiRightArrow/></div>
                    <div className="sidebar_icon"><BiRightArrow/></div>
                    <div className="circle-animation"  onClick={handleClick}><BiRightArrow/></div>
                </div>

            <div className="content-grid">

            </div>
        </div>
    );


}