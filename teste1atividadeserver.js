// servidor.js

const ip = 'localhost';
const porta = 3000;
http.createServer(function (req, resp) {
   resp.end('<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>');
}).listen(porta, ip);