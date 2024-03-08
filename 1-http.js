const {findAvaiblePort} = require('./12-Puerto-Disponible')
const http = require('node:http')

console.log(process.env);

const server = http.createServer((req,res)=>{
    console.log('request received')
    res.end("HOLITAS GATO PANDAAA ")
})

findAvaiblePort(4000).then(port =>{
    server.listen(port,()=>{
        console.log(`EL SERVER ESTA CORRIENDO EN http://localhost:${server.address().port}`);
    })
})

