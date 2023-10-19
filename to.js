const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', addTodo);

function addTodo(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText === '') return;

  const todoItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTodo);

  const label = document.createElement('label');
  label.textContent = todoText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTodo);

  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);

  todoInput.value = '';
}

function toggleTodo(event) {
  const label = event.target.nextElementSibling;
  label.style.textDecoration = event.target.checked ? 'line-through' : 'none';
}

function deleteTodo() {
  const todoItem = this.parentElement;
  todoList.removeChild(todoItem);
}
