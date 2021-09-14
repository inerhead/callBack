let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url1 = 'https://rickandmortyapi.com/api/character/';


function fetchData(URL, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(event) {

        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                let error = new Error(`Error: ${ URL}`);
                callback(error, null);
            }
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();

}

function place(error, placeCharacter) {
    if (error) {
        return console.log(error);
    } else {
        const location = placeCharacter.name;
        console.log(`location: ${location}`);
    }
}


function getCharacter(error, character) {
    if (error) {
        return console.log(error);
    } else {
        //console.log(character);
        const firstCharacter = character.results[0].id;

        const url2 = character.results[0].origin.url;
        console.log(`Character id: ${url2}`);
        fetchData(url2, place);
    }
}

fetchData(url1, getCharacter);