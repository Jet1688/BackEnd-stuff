const express = require('express');
const app = express()


// app.use((req, res)=>{
//     console.log("we got new request")
//     // res.send({color: 'red'})
// })
app.get('/r/:planes/:postId', (req, res)=>{
    const {planes, postId} = req.params
    res.send("you are one " + {planes})
    
})
app.post('/f16', (req, res)=>{
    console.log("f16 request")
    res.send("fuuuuuh")})

app.get('/search', (req, res)=>{
    const {q} = req.query;
    res.send(`aaa you q qqis ${q}`)
})

    app.listen(3000, ()=>{
    console.log("listening on port 300")
})
