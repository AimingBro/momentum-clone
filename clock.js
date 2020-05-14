const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1")

function padTimeWithZero(num){
	return ('00' + num).slice(-2);
}

function getTime(){
	const date = new Date();
	const minutes = padTimeWithZero(date.getMinutes());
	const hours = String(date.getHours()).padStart(2,0);
	const seconds = padTimeWithZero(date.getSeconds());
	clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
	setInterval(getTime, 1000);
}

init();
