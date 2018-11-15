//Init UI variables
const task = document.getElementById('task');
const filter = document.getElementById('filter');
const list = document.querySelector('.collection');
const form = document.querySelector('#task-form');
const clearTasks = document.querySelector('.clear-task');

//Load All event Listeners
loadAllEventHandlers();

function loadAllEventHandlers(){
    //Dom Load Event
    document.addEventListener('DOMContentLoaded',getTasksFromLocalStorage);
    //Add Task
    form.addEventListener('submit', addTask);
    //Delete Task
    list.addEventListener('click', deleteTask);
    //Filter Tasks
    filter.addEventListener('keyup', filterTasks);
    //Clear Tasks
    clearTasks.addEventListener('click', clearTaskList);

}
//Add Task
function addTask(e){
    if(task === ''){
        alert('Please Enter Task')
    }else{
        //Create li
        const li = document.createElement('li');
        //Add Class
        li.className = 'collection-item';
        //Created text node then appended to li
        li.appendChild(document.createTextNode(task.value));
        //Create link
        const a = document.createElement('a');
        a.className ='delete-item secondary-content';
        //Created icon
        a.innerHTML = '<i class="fa fa-trash"></i>';
        //Append link to li
        li.appendChild(a);
        //Append li to task list
        list.appendChild(li);
        //Store task into local storage
        storeTaskInLocalStorage(task.value);
        //Clear input
        task.value == '';
        e.preventDefault();
    }
}
//Store Tasks in LS
function storeTaskInLocalStorage(task){
    let tasks;
    //LS can only store strings so we have to parse it to json
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//Get Tasks from Local Storage
function getTasksFromLocalStorage(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //Note: We use a foreach here to loop through tasks because its an array
    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const a = document.createElement('a');
        a.className ='delete-item secondary-content';
        a.innerHTML = '<i class="fa fa-trash"></i>';
        li.appendChild(a);
        list.appendChild(li);
    });
}
//Delete Task
function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
        //Delete from LS
        deleteTaskFromLocalStorage();
    }
}
//Delete tasks from local Storage
function deleteTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            //We can get the index by putting it as a second parameter in the foreach statement
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//Filter Tasks
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
//Clear Tasks List
function clearTaskList(){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    clearTasksFromLocalStorage();
}
//Clear Tasks in Local Storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}
