const app = require('./src/config/custom-express')

//Criando o servidor web com o express
app.listen(3000, function(){
    console.log(`servidor rodando na porta 3000`)
});






/* const http = require('http'); // importar um modulo do node

//criando o servidor, dizer qual a porta que ele funcionará
const servidor = http.createServer(function (req, resp){ 
    //essa funcao so eh executada quando houver uma requisicao do cliente
    let html = '';
    if(req.url  == '/')
    {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código, testando o servidor</h1>
            </body>
        </html>
        `;
    }
    else if (req.url == '/livros')
    {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de livros</h1>
            </body>
        </html>
        `;
    }

    //outros else-if para os demais casos
    
    resp.end(html);
});
servidor.listen(3000);

//O que fazer com uma requisição? */
