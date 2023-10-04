const axios = require('axios');
const url = `https://rickandmortyapi.com/api/character` 

//ejecutar transacion async
axios.get( url )
    .then( (respuesta) => {
        console.log(respuesta.data.results)
    })
    .catch((error) => {
        console.log(error)
    })