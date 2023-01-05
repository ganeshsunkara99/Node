import express from 'express'
const port='8080'
const app=express()
app.get('/',(req,res)=>{
    res.send('HI ')
})
app.get('/h',(req,res)=>{
    res.send('HI g ')
})
app.listen(port,()=>{
    console.log(`server is listen at at ${port}` )
})