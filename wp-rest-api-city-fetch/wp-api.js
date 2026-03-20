const BASE_URL = 'https://milanielec1dev.wpenginepowered.com/wp-json/wp/v2';

fetch(`${BASE_URL}/city`).then((res)=>res.json()).then((data)=>console.log(data))