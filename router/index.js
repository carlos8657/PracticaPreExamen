const express = require('express');
const router = express.Router();
const bodyParser = require ('body-parser');

router.get('/formulario',(req,res)=>{
    const valores ={
        valor:req.query.valor,
        pInicial:req.query.pInicial,
        plazos: req.query.plazos
    }
    res.render('cotizacion.html',valores)

})

router.post('/formulario',(req,res)=>{
    const valores ={
        valor:req.body.valor,
        pInicial:req.body.pInicial,
        plazos: req.body.plazos
    }
    res.render('cotizacion.html',valores)
})

module.exports=router;


