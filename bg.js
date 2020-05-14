const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imgNumber){
	const image = new Image();
	image.src = `images/pic${imgNumber}.jpg`;
	image.classList.add("bgImage")
	body.prepend(image);
}
function getRandomNumber(){
	const number = Math.floor(Math.random() * IMG_NUMBER);
	return number;
}

function init(){
	const imgNumber = getRandomNumber() + 1;
	paintImage(imgNumber);
}

init();
