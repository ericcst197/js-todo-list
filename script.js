const form = document.querySelector('#toDoForm')
const list = document.querySelector('#toDoList')


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = form.elements.task;
    addTask(taskInput.value);
    taskInput.value = "";
})


const addTask = (task) => {
    const div = document.createElement('div');
    const newTask = document.createElement('li');

    // Done button for every task
    const doneBut = document.createElement('button');
    doneBut.addEventListener('click', doneTask);
    doneBut.append(document.createTextNode("Done"));

    // Delete button for every task
    const delBut = document.createElement('button');
    delBut.addEventListener('click',delTask);
    delBut.appendChild(document.createTextNode("Delete"));

    list.append(div);
    div.append(newTask, doneBut, delBut);
    newTask.append(task);
}

function delTask() {
    let li = this.parentNode;
    li.remove();
}

function doneTask() {
    let li = this.parentNode.list;
    li.classlist.add("done");
}
    