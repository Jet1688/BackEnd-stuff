const express = require ('express')
const app = express()
const path = require('path')
app.set('views', path.join(__dirname, '/views'))
const giveMeAJoke = require('give-me-a-joke')

app.set('view engine', 'ejs')
app.get('/', (req, res) =>{
    res.render('home.ejs')
})
app.get('/r/:subreddit', (req, res) =>{
    const {subreddit} = req.params
    res.render('subreddit', {subreddit})
})
app.get('/rander', (req,res)=>{
    const jo = Math.floor(Math.random()*10)
 res.render('render',{jo})
})

app.listen(3000, ()=>{
    console.log("listening to port 3000")
})