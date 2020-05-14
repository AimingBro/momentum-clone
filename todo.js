const toDoForm = document.querySelector(".js-toDoForm"),
	  toDoInput = toDoForm.querySelector("input"),
	  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDOs';

const toDos = [];

function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event){
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const deleteIndex = toDos.findIndex(toDo => toDo.id === parseInt(li.id,10));
	const delteToDo = toDos.filter(toDo => toDo.id === parseInt(li.id,10));
	toDos.splice(deleteIndex,1);
	saveToDos();
}

function paintToDo(text){
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;

	li.id = newId;
	delBtn.innerText = "✖";
	delBtn.addEventListener("click", deleteToDo);
	span.innerText = '  ' + text;
	li.appendChild(delBtn);
	li.appendChild(span);
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id:   newId
	}
	toDos.push(toDoObj);
}

function handleSubmit(event){
	event.preventDefault();
	const curruntValue = toDoInput.value;
	paintToDo(curruntValue);
	saveToDos();
	toDoInput.value = "";
}

function loadToDos(){
	const toDos = localStorage.getItem(TODOS_LS);
	if(toDos){
		const toDoObj = JSON.parse(toDos);
		toDoObj.forEach(toDo => paintToDo(toDo.text));
	}
}

function init(){
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}

init();
