/* import './App.css';
import Login from './components/Login';*/
import Main from './components/Main';

 
import Post_It from './components/post_it_card';

import React,{useState} from 'react';

function App() {

  const[posts,Setposts] = useState()
  
  

  return (
    <div className="all">
      <Main/>
    </div>
  );
}

export default App;
