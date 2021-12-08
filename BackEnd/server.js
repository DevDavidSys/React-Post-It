const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
let posts = [];

app.use(express.json());
app.use(cors())
app.get('/getPosts',(req,res)=>{
    res.type('json');
    res.send(JSON.stringify(posts));
    
    
});

app.post('/addPostIt',(req,res)=>{
    try{
        let id = Math.random();

        posts.push({id:id,conteudo:req.body.conteudo,titulo:req.body.titulo});
        console.log(posts)
        res.send(true);
        
    }
    catch{
        res.send('erro na aquisição');
    }
});



app.listen(4000,()=>{
    console.log('Rodando na porta 4000');
})
