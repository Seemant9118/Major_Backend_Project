const express = require('express');
const app = express();
const PORT = 5000;

app.get('/',(req,res) => {
    res.send("Backend Project Setup Successfully")
}) .listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
});


