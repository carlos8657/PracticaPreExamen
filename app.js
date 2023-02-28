var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 500;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.status(200).send({
		message: 'Escuchando el puerto 500'
	});
});

app.listen(port,()=>{
    console.log('Inciado el puerto 500');
})


