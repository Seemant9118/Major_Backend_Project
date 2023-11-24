const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const productRouters = require('./Routers/productRoute');
const { errorHandler, notFound } = require('./middleware/errorHandler');


dotenv.config();
const app = express();
dbConnect();


const PORT = process.env.PORT || 5000;  

//middlewares
app.use(express.json());


//product route
app.use('/api/product', productRouters);

//error handler middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server successfully listening on ${PORT}`);
})


