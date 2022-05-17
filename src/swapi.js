const axios = require('axios')
const url_base = 'https://swapi.py4e.com/api/'

  module.exports.getFilms = async (event) => {
      try {
        const url = url_base + 'films'
        const response = await axios.get(url);
    
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
          };      
      } catch (error) {
        console.log(error)  
      }
  }

  module.exports.getFilm = async (event) => {
    try {
        const id = event.pathParameters.id
        const url = url_base + 'films/' + id 
        const response = await axios.get(url);

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };    
    } catch (err) {
        console.log(err)
    }
  }

  module.exports.getPeopleAll = async (event) => {
    try {
      const url = url_base + 'people'
      const response = await axios.get(url);
  
      return {
          statusCode: 200,
          body: JSON.stringify(response.data),
        };      
    } catch (error) {
      console.log(error)  
    }
}

module.exports.getPeople = async (event) => {
    try {
        const id = event.pathParameters.id
        const url = url_base + 'people/' + id 
        const response = await axios.get(url);

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.log(error)  
    }
  }

  