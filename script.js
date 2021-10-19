const form = document.querySelector('#toDoForm')
const list = document.querySelector('#toDoList')


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = form.elements.task;
    if(!taskInput.value){
        alert("Opps, there is nothing to do. Please enter some task.")
    } else {
        addTask(taskInput.value)
    };
    taskInput.value = "";
})


const addTask = (task) => {
    const div = document.createElement('div');
    // Create new task
    const newTask = document.createElement('li');
    div.append(newTask);
    newTask.append(task);
    // Done button for every task
    const doneBut = document.createElement('button');
    doneBut.innerHTML = "<i class='fas fa-check'></i>";
    doneBut.classList.add('done-btn');
    doneBut.addEventListener('click', doneTask);
    div.appendChild(doneBut);
    // Delete button for every task
    const delBut = document.createElement('button');
    delBut.innerHTML = "<i class='fas fa-trash'></i>";
    delBut.classList.add('del-btn');
    delBut.addEventListener('click', delTask);
    div.appendChild(delBut);
    // Append div to ul
    list.append(div);
}

function delTask() {
    let li = this.parentNode;
    li.remove();
}

function doneTask() {
    let li = this.parentNode;
    li.classList.add('done');
}
