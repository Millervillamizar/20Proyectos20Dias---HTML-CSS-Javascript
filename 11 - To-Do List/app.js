// Select HTML elements.
const input = document.getElementById('task-input');
const button = document.querySelector('button');
const taskList = document.getElementById('task-list');

button.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    addTask();
  }
});

// Create and add a task to the task list in the DOM.
function addTask() {
  if (input.value) {
    // Create a task.
    let newTask = document.createElement('div');
    newTask.classList.add('task');

    // User-entered text.
    let text = document.createElement('p');
    text.innerText = input.value;
    newTask.appendChild(text);

    // Create and add an icon container.
    let icons = document.createElement('div');
    icons.classList.add('icons');
    newTask.appendChild(icons);

    // Create and add icons.
    let complete = document.createElement('i');
    complete.classList.add('bi', 'bi-check-circle-fill', 'icon-complete');
    complete.addEventListener('click', completeTask);

    let remove = document.createElement('i');
    remove.classList.add('bi', 'bi-trash3-fill', 'icon-delete');
    remove.addEventListener('click', removeTask);

    icons.append(complete, remove);

    // Add the task to the list.
    taskList.appendChild(newTask);
  } else {
    alert('Please enter a task.');
  }
}

// Mark a task as completed.
function completeTask(e) {
  let task = e.target.parentNode.parentNode;
  task.classList.toggle('completed');
}

// Remove a task from the DOM.
function removeTask(e) {
  let task = e.target.parentNode.parentNode;
  task.remove();
}
