const task = document.getElementById('task');
const filter = document.getElementById('filter');
const list = document.querySelector('.collection');
const form = document.querySelector('#task-form');
const clearTasks = document.querySelector('.clear-task');

loadAllEventHandlers();

function loadAllEventHandlers(){
    form.addEventListener('submit', addTask);
    list.addEventListener('click', deleteTask);
    filter.addEventListener('keyup', filterTasks);
    clearTasks.addEventListener('click', clearTaskList);

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
function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}
function clearTaskList(){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}
