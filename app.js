const task = document.getElementById('task');
const filter = document.getElementById('filter');
const list = document.querySelector('.collection');
const form = document.querySelector('#task-form');

loadAllEventHandlers();

function loadAllEventHandlers(){
    form.addEventListener('submit', addTask);
}

function addTask(e){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task.value));
    const a = document.createElement('a');
    a.className ='delete-item secondary-content';
    a.innerHTML = '<i class="fa fa-trash"></i>';
    li.appendChild(a);
    list.appendChild(li);
    e.preventDefault();
}
