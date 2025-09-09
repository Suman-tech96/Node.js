const mongoose=require('mongoose');
const express=require('express');
const app=express();
const port=8000;
const path=require('path');
const StaticRouter=require('./routers/StaticRouter')

mongoose.connect('mongodb://localhost:27017/ssr')
.then(()=>{
    console.log("Connected to MongoDB successfully");
}).catch(err=>{
    console.log("Error connecting to MongoDB:", err);
})

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.use('/',StaticRouter);

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})