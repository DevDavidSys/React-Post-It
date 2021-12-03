import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import React,{useState} from 'react';
import Post_It from './components/post_it_card';
function App() {

  

  return (
    <div className="all">
      <div>
        <Main/>
        {/*
        <h1 onClick={HandleClick}>Aumentar</h1>
        <div>{PostsRender}</div>*/}
      </div>


    </div>
  );
}

export default App;
