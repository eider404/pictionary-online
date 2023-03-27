function GenerarAnimal(){
    fetch( `http://localhost:3000/random-animal`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then( data =>{
            document.querySelector("#animalGenerado").innerHTML= data.data;
        })
        .catch(err => console.log(err));
}