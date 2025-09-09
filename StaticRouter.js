const express=require('express');
const StaticRouter=express.Router();
StaticRouter.get('/',(req,res)=>{
    res.render('index');
});
StaticRouter.get('/about',(req,res)=>{
    res.render('about');
});
StaticRouter.get('/contact',(req,res)=>{
    res.render('contact');
})

module.exports=StaticRouter;