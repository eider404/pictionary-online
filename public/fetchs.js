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


function Comprobar(){
    let form = document.querySelector( '#form-comprobar' )

    const obj = {}
    new FormData( form ).forEach( ( value, key ) => obj[ key ] = value )
    
    fetch( `http://localhost:3000/verificar-animal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( obj )
        })
        .then(res => res.json())
        .then( data =>{
            if(data.messaje == 'Correcto'){
                document.querySelector("#animalGenerado").innerHTML= `
                    ${data.data} es ${data.messaje}
                `;
                document.querySelector("#mensaje").style.color="#4BB543";
            }else{
                document.querySelector("#animalGenerado").innerHTML= `
                    ${data.data} es ${data.messaje}
                `;
                document.querySelector("#mensaje").style.color="#891a1a";
            }
        })
        .catch(err => console.log(err));
}