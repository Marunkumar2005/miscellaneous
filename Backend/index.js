const express=require("express");
const app=express();
const port=8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,password}=req.query;

    res.send(`standard get request ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send("standard post request");
});


app.listen(port,()=>{
    console.log(`listeninng to port ${port}`);

});