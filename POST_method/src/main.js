const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); //BODY::RAW::JSON
app.use(express.urlencoded({extended:true})); //BODY::URL ENCODED

const dbadduser =  require("./db_add_user");
/*const q = require("./db_add_user");
const d = require("./db_add_user");*/


app.post("/addUser", async(req, res) =>{
    try{
        const input =  req.body;
        await dbadduser.addUser(input);
        res.json({message:"Success post"});
    }catch(err){
        res.json({message:"failure post"});
    }
});

app.post("/auth-user",async(req,res)=>{
    try{
        const input = req.body;

        await dbadduser.authenticateUser(input);
        res.json({operation:true});
    } catch(err){
        res.json({operation:false});
    }
});

app.post("/update-pwd",async(req,res)=>{
    try{
        const input = req.body;
        await dbadduser.forgetPass(input);
        res.json({message:"Success"});
    }catch(err){
        res.json({message:"Failure"});
    }
});

app.post("/postque", async (req, res)=>{
    try{
        const inputquery=req.query;
        const input=req.body;
        await dbadduser.addQue(input);
        res.json({msg:"success"});
    }catch(err){
            res.json({msg:"Failure"});
    }
});

app.get("/disque", async (req, res)=>{
    try{
        const input=req.query;
        const result=await dbadduser.disQue(input);
        res.json(result);
    }catch(err){
        res.json({msg:"Failure"});
    }
});

app.listen(3000);