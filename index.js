const http = require('http')
const PORT = 3000
const DEFAULT_HEADER = {'Content-Type': 'aplication'}
const handler = (request, response) => {
    const {url, method} = request
    const [first, route, id] = url.split('/')
    request.queryString = {id: isNaN(id) ? id : Number(id)} 
   
    const key = `${route}: ${method.toLowerCase()}`

    response.writeHead(200,DEFAULT_HEADER)
    response.end('opa')
}

http.createServer(handler).listen(PORT, () => console.log('server running at ',PORT))