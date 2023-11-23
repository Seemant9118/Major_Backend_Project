const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');


dotenv.config();
const app = express();
dbConnect();


const PORT = process.env.PORT || 5000;  


app.use(express.json());




app.listen(PORT, ()=>{
    console.log(`Server successfully listening on ${PORT}`);
})


