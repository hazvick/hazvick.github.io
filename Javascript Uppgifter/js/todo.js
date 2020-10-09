// declare variables
const newTodo = document.querySelector("#newTodo");
const newTodoInput = document.querySelector("#newTodoInput");
const todoList = document.querySelector("#todoList");

// sets focus on the "add Todo" input bar
newTodoInput.focus();

// implementation of eventlistener
newTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(newTodoInput.value);
});

// function for adding to the todo list
function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText}<button class="delBtn" onclick="deleteTodo(this)">Delete</button></li>`
  );
  newTodo.reset();
}

// function for removing from the todo list
function deleteTodo(element) {
  element.parentElement.remove();
  newTodoInput.focus();
}