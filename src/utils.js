import request from 'request';

const baseURL = "https://rickandmortyapi.com/api/"

const list = function(argv){

// SEARCH BY NAME    
if(argv.search){
    request ({url: `${baseURL}character/?name=${argv.search}&page=${argv.page}`, json: true}, (error, response) => {
        response.body.results.forEach(element => {
            console.log(`${element.id}: ${element.name}`)
        })
    })
}else  
// SEARCH BY STATUS
if(argv.status){
    if(argv.status === "alive"){
        request ({url: `${baseURL}character/?status=alive&page=${argv.page}`, json: true}, (error, response) => {
            response.body.results.forEach(element => {
                console.log(`${element.id}: ${element.name}`)
            })
        })
    }

    if(argv.status === "dead"){
        request ({url: `${baseURL}character/?status=dead&page=${argv.page}`, json: true}, (error, response) => {
            response.body.results.forEach(element => {
                console.log(`${element.id}: ${element.name}`)
            })
        })
    }

    
}else{
 // SEARCH LIST    
request ({url: `${baseURL}character/?page=${argv.page}`, json: true}, (error, response) => {
    response.body.results.forEach(element => {
        console.log(`${element.id}: ${element.name}`)
        
    })
    
    
});

}
}
//SEARCH BY ID
const view = function(argv){
request ({url: `${baseURL}character/${argv.id}`, json: true}, (error, response) => {
    console.log(`ID: ${response.body.id}`);
    console.log(`Name: ${response.body.name}`);
    console.log(`Status: ${response.body.status}`);
    console.log(`Spieces: ${response.body.species}`);
    console.log(`Gender: ${response.body.gender}`);
    console.log(`Origin: ${response.body.origin.name}`);
    console.log(`Location: ${response.body.location.name}`);

})
}

export {list, view}