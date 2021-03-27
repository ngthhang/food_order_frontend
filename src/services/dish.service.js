const axios = require('axios');

export default class DishService{
    getDishByType(type){
        axios.get(`http://localhost:8000/dish/${type}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}