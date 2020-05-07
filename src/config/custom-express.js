require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//Middleware para lidar com as remoções
app.use('/estatico', express.static('src/app/public'));



//Middleware para retornar as requisições
app.use(bodyParser.urlencoded({
    extended: true
}));

//Middleware para lidar com a reescrita de métodos HTTP
app.use(methodOverride(function(req, resp) {
    if(req.body && typeof req.body === 'object' && '_method' in req.body) {
        //look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;