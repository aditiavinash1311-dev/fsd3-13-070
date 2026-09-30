import { products } from "./data.js";
import express from 'express';

const app= express();

app.get("/",(req,res)=>{
    res.send(`<h1>home page</h1>
        <a href='/api/products'>browser products</a>`);
});

app.get("/api/products",(req,res)=>{
        const modiProducts = products.map(
            ({ reviews , description, ...rest}) =>rest,
        );
        res.status(200).json({
            count:modiProducts.length, data:modiProducts
        });
});

app.get("/api/products/:id",(res,req)=>{
    const{id}= req.params;
    const product=products.find((item)=>item.id===Number(id));
    if(product){
        res.status(200).json({status:found,data:product});
    }else
    res
    .status(404)
    .json({status:false,msg:`product not found with id: $(id)`});
});

app.use((req,res)=>{
    res.status(404).send("route not fround");
});
app.listen(3333,()=>console.log("prg4 is running..."));