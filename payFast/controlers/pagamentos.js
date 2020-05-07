module.exports = function(app){
    app.get('/pagamentos', function(req, resp){
        console.log('Recebida requisicao de teste');
        resp.send('OK');
    });
    
    app.post('/pagamentos/pagamento', function(req, resp) {

        req.assert("forma_de_pagamento", 
            "Forma de pagamento eh obrigatorio").notEmpty();
        
        req.assert("valor", 
            "Valor eh obrigatorio e deve ser um decimal" ).notEmpty().isFloat();

        var erros = req.validationErrors();
        if(erros) {
            console.log('Erros de validacao encontrados');
            resp.status(400).send(erros);
            return;
        }

        var pagamento = req.body;
        console.log('processando uma requisicao de novo pagamento');

        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(error, resultado) {
            if(error){
                console.log('erro ao inserir no banco:' + error);
                resp.status(400).send(error);
            } else { 
                console.log('pagamento criado');
                resp.json(pagamento);
            }
        });


    });
}

