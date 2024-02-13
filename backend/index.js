
const { todo }=require("./db");
const { createTodo }=require("./type");
const { updateTodo }=require("./type");
const express=require('express')
const app=express();

app.use(express.json());
app.post("/todo",async (req,res)=>{
    const data=req.body;
    const resp=createTodo.safeParse(data);
    if(!resp.success){
        res.status(411).json({msg: " Sorry you entered the wrong input "});
        return;
    }
    const title=data.title; // dont use resp.title not works
    const description=data.description;
    await todo.create({
        title,
        description,
        completed: false
    });
    res.json({msg: "Todo created"});

});
app.post("/updateTodo",async (req,res)=>{
    const data=req.body;
   
    
    await todo.updateOne({
        _id: req.headers.id,
        title: data.title,
        description: data.description,
        completed: data.status
    })
    res.json({msg: "You are right!"});
})

app.use("/todos",async function(req,res){
    const title=req.headers.title
    const data=await todo.find();
    res.status(200).json({data});
})
app.listen(3000);