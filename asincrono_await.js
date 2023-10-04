const axios = require('axios')
const url = `https://api.api-onepiece.com/fruits` 

const personajes = async() => {
    const response = await axios.get(url)
    let arreglo = response.data
    arreglo.forEach((frutas) => {
        console.log(frutas.french_name)
        console.log("========")
}
)
}

personajes()