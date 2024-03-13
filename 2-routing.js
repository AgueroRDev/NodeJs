const http = require('node:http')

const ditto = require('./pokemon/ditto.json')

const processReq = (req, res) => {

    const { method, url } = req


    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json;charset=utf-8')
                    return res.end(JSON.stringify(ditto))



                default:
                    res.setHeader('Content-Type', 'text/html;charset=utf-8')
                  res.end('<h1>4 0 4</h1>')

                } 

        case 'POST':
            switch (url) {
                case '/pokemon':{
                    let body = ''
                    req.on('data', chunk => {
                        body += chunk.toString()
                    })
                }
                    req.on('end', () => {
                        const data = JSON.parse(body)
                        res.setHeader('Content-Type', 'application/json;charset=utf-8')
                        res.end(JSON.stringify(data))
                    })
                    break

            }

    }

}



const server = http.createServer(processReq)

server.listen(1234, () => {
    console.log('Server Listening on http://localhost:1234');
})