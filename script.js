const baseURL = 'https://pokeapi.co/api/v2/'
let url;

const fetchButton = document.querySelector('button');
const imageContainer = document.getElementById('imageContainer');

fetchButton.addEventListener('click', getImage);

function getImage(e){
    e.preventDefault();
    let random = getRandomInt(1, 893);
    url = baseURL + '/pokemon/' + random;
    console.log('URL:', url);

    fetch(url)
        .then(function(result){
            return result.json();
        })
        .then(function(json){
            displayImage(json);
        })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }