const todoForm = document.querySelector(".js-todoForm"),
    toDoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos"

function paintToDo(text) { 
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function init() {
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit)
}

init();