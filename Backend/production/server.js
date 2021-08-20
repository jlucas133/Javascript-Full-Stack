const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.method);        //método q o servidor ta chamando
    console.log(req.url);           //url q está sendo chamada
    res.statusCode = 200;           //status code que deu tudo 
    res.end('<h1>Hello World</h1>');      //devolve um html


});

server.listen(3000, () => {            //server iniciado na porta de desenvolvimento 3000
    console.log('Servidor Ativo');
})