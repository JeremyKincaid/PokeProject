const baseURL = 'https://pokeapi.co/api/v2/'
let url;

//making DOM objects more js friendly
const form = document.querySelector('form');
const searchTerm = document.getElementById('searchTerm');
const imageContainer = document.getElementById('imageContainer');
const circle = document.getElementById('circle');

const name = document.getElementById('name');
const type = document.getElementById('type');
const img = document.getElementById('pokePic');

//calculating height based on width to maintain aspect ratio
let circleWidth = window.getComputedStyle(circle).getPropertyValue('width');
console.log(circleWidth);
circle.style = `min-height: ${circleWidth}`;

//form submission event listener
form.addEventListener('submit', getInfo);

//fetch info from API
function getInfo(e) {
    e.preventDefault();
    url = baseURL + 'pokemon/' + searchTerm.value.toLowerCase();
    console.log('URL:', url);

    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function (json) {
            displayInfo(json);
        })
        .catch(error => {
            alert('No pokemon matched your search');
            console.log(error);
        })
}

//Display API info on page
function displayInfo(json) {
    img.src = json.sprites.front_default;
    img.alt = json.species.name;

    name.textContent = `Name: ${json.species.name.toUpperCase()}`

    let types = json.types;
    let typesText = types[0].type.name;
    if (types.length > 0) {
        for (i = 1; i < types.length; i++) {
            typesText += `, ${types[i].type.name}`;
        }
    }
    type.textContent = `Type: ${typesText}`
}