const express = require('express');
const router = express.Router();
const bodyParser = require ('body-parser');


router.get('/Carlos',(req,res)=>{
    const valores ={
        numBoleto: req.query.numBoleto,
        destino: req.query.destino,
        nombreCliente: req.query.nombreCliente,
        edad: req.query.edad,
        tipoBoleto: req.query.tipo,
        precioBoleto: req.query.precioBoleto,
        subtotal: req.query.subtotal,
        impuesto: req.query.impuesto,
        descuento: req.query.descuento,
        total: req.query.total

    }
    res.render('formulario.html',valores)

})

router.post('/Carlos',(req,res)=>{
    const valores ={
        numBoleto: req.body.numBoleto,
        destino: req.body.destino,
        nombreCliente: req.body.nombreCliente,
        edad: req.body.edad,
        tipoBoleto: req.body.tipo,
        precioBoleto: req.body.precioBoleto,
        subtotal: req.body.subtotal,
        impuesto: req.body.impuesto,
        descuento: req.body.descuento,
        total: req.body.total

    }
    res.render('formulario.html', valores)
})



module.exports=router;
