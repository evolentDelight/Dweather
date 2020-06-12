const fetch = require('node-fetch');

async function Soptions(city){
    await fetch('https://www.metaweather.com/api/location/search/?query=' + String(city))
    .then((response) => response.json())
    .then((json) => {return json});
}