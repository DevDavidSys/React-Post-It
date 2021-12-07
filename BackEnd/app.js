const express = require('express');
const app = express();
const routes = express.Router();


app.use(express.json())
app.get('/',(req,res)=>{
    res.send('oi')
})

    
module.exports = app;
