const express=require("express")
const app=express()
const cors=require("cors")
const port=4050;
const emp={id:1,name:"user",position:"manager"}
const students=require("./data.js")
app.use(cors())
app.get("/",(req,res)=>{
	res.send("hi am server")
})
app.get("/user",(req,res)=>{
	res.send("lalita the topperooo")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server is started"))