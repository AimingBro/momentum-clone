const weather = document.querySelector(".js-weather");

const API_KEY = "780e9e0795d53aab21e0447287e38b4a";
const COORDS = 'coords';

function getWeather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	).then((respose) => respose.json()
	).then((json) => weather.innerText = `${json.main.temp} @ ${json.name}`)

}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
}

function handleGeoError(){
	console.log('can\'t access geo location')
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
	askForCoords();
	const loadedCords = JSON.parse(localStorage.getItem(COORDS));
	getWeather(loadedCords.latitude, loadedCords.longitude);
}

function init(){
	loadCoords();
}

init();
