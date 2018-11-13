const task = document.getElementById('task');
const filter = document.getElementById('filter');
const list = document.querySelector('.collection');
const form = document.querySelector('#task-form');

loadAllEventHandlers();

function loadAllEventHandlers(){
    form.addEventListener('submit', addTask);
}

function addTask(e){
    
    e.preventDefault();
}
