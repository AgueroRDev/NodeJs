const express = require('express')
const app = express()
const ditto = require('./pokemon/ditto.json')

app.disable('x-powered-by') // quitar header de express

const PORT = process.env.PORT ?? 1234

app.use((req,res,next)=>{
    if(req.method === 'POST') return next()
    if(req.headers['content-type']!= 'aplication/json') return next()

    let body = ''
    req.on('data',chunk=>{
        body += chunk.toString()
    })
    req.on('end',()=>{
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        req.body = data
    })
    next()  // no olvidar el next 
})
app.get('/pokemon/ditto',(req,res)=>{
    res.json(ditto)
})

app.post('/pokemon',(req,res)=>{
    res.status(201).json(req.body)
})

app.listen(PORT,()=>{
    console.log('Server Listening on http://localhost:1234');
})