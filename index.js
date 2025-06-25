const express = require('express')
const app = express()
const home = '/'
const port = 4000
const htmlPage = '/html'

const allStudents = [
    {name: 'solomon', class:'100lvl', school:'sqi'},
    {name: 'Emmanuel', class:'200lvl', school:'school'},
    {name: 'benjamin', class:'300lvl', school:'LAUTECH'}

]
// app.get(home, (req, res) => {
//     res.send('welcome to Node')
// })

app.get('/dashboard', (req, res) => {
    res.send('welcome to the fucking dashboard')
})
app.get(htmlPage, (req, res) => {
    console.log('is it working')
    res.sendFile(`${__dirname}/index.html`)
})
app.get(home, (req, res) => {
    try{
        res.status(201).json({message: allStudents})
    }
    catch(error) {
        res.status(503).json({message: error})
    }
})

app.listen(port, () => {
    console.log('this is so nice');  
})