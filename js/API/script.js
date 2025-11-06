fetch('https://swapi.dev/api/people/1/')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })