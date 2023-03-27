const {Router} = require("express")
const routes = Router()

const animales = require("./animales")

let animal = "abeja";


routes.get('/random-animal',(req, res)=>{
    const numeroAleatorio = Math.floor(Math.random() * 87);
    animal = animales[numeroAleatorio-1]; //-1 pora que no sea 87(no existe el animal 87) y para que utilize el array [0]

    res.status(200).json({data: animal, messaje: "animal cambiado de forma random"})
});

routes.post('/nuevo-animal',(req, res)=>{
    let newAnimal = req.body

    if(!newAnimal.name){
        res.status(401).json({data: newAnimal, messaje: "Campos son obligatorios"})
    }
    
    animal = newAnimal.name

    res.status(200).json({data: newAnimal, messaje: "animal cambiado"})
});


routes.post('/verificar-animal',(req, res)=>{
    const word = req.body;
    
    if(!word.name){
        return res.status(401).json({data: word, messaje: "Campos son obligatorios"})
    }

    if(word.name == animal){
        return res.status(200).json({data: word.name, messaje: "Correcto"})
    }else{
        return res.status(401).json({data: word.name, messaje: "Incorrecto"})
    }
})



module.exports = routes
