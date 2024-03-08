const http = require('node:http'); // PROTOCOLO HTTTP
const fs = require('node:fs');

const desiredPort = process.env.PORT ?? 1234

const processReq = (req,res)=>{
    if (req.url === '/') {
        res.statusCode = 200 // Ok
        res.setHeader('Content-Type','text/html')
        res.end("Hola Gatete")
    }else if(req.url ==='/pink'){
        fs.readFile('./Dark.png',(err,data)=>{
            if(err){
                res.statusCode = 500 // Error
                res.end("Error 500")
            }else{
                res.setHeader('Content-Type','image/png')
                res.end(data)
            }
        }) 

    }else if(req.url==='/contacto'){
        res.statusCode = 200 //ok
        res.end('<h1>SOY LA PAG CONTACTO </h1>')
    }else {
        res.statusCode = 404 //Not Found
        res.end('<h1> 404 PRRRO </h1>')
    }
    
}
const server = http.createServer(processReq)

server.listen(desiredPort,()=>{
    console.log(`Server Escuchando en el Puerto http://localhost:${desiredPort}`);
})