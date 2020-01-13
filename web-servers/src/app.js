const express= require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const publicDir = path.join(__dirname,'../public')
const templateDir  = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.use(express.static(publicDir))

app.set('view engine','hbs')
app.set('views',templateDir)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Akshay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Akshay'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        message:'for help search google.com',
        title:'Help',
        name:'Akshay'
    })
})
app.get('/weather',(req,res) => {
    res.send({
        forecast: 'Its snowing',
        location:'Jammu'     
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title:'404',
        name:'Akshay',
        errorMsg:'Help article not found'
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title:'404',
        name:'Akshay',
        errorMsg:'Page not found'
    })
})

app.listen(3000,()=>{console.log('server is up on port 3000')})