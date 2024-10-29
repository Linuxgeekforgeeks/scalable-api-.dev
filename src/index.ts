const express=require("express")



const app=express();
const port=4000

app.get("/hello",(req,res)=>{
    res.send("This testing the api")
})



app.listen(port,()=>{
    console.log("Our Server is running on the port "+port)
})