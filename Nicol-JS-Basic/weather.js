const weather=document.querySelector(".js-weather");

const API_KEY="d40abfe54b880317276ac5171460fabf";
const COORDS='coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (Response){
        return Response.json();
    }).then(function(json){
        const temperature=json.main.temp;
        const place=json.name;
        weather.innerText=`${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(postion){
    const latitude=postion.coords.latitude;
    const longitude= postion.coords.longitude;
    const coordsObj={
        latitude,       //latitude: latitude,
        longitude       //longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Canr access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }
    else{
        const parsedCoords=JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();