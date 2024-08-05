const express = require('express');
const router = require('./routes/blogs');
const app = express();
const PORT = 3000;

app.use('/',router);
const server =app.listen(PORT,(req, res)=>{
    console.log("Server is Running");
});