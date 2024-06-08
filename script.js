const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const list = document.querySelector(".list-tasks")
const darkMode = document.getElementById('darkMode')
const logo = document.getElementById('LogoSmart')
const lightMode = document.getElementById('lightMode')

function classAdd() {
    document.body.classList.add("bodyEscuro");
    logo.src = "./assets/LetraBRANCAsemfundo.png"
}

function classDelete () {
    document.body.classList.toggle("bodyEscuro");
    logo.src = "./assets/Letrapretasemfundo.png"
}

let listItens = []

function addTask() {

    if (input.value.trim() === "") {
        alert("Digite uma tarefa.");
        return;
    }

    listItens.push({
        task: input.value,
        completed: false
    })



    input.value = ""

    showTask()
}

function deleteItem(index) {
    listItens.splice(index, 1)
    showTask()
}

function taskCompleted(index) {
    listItens[index].completed = !listItens[index].completed
    showTask()
}

function showTask() {
    let newLi = ""

    listItens.forEach((task, index) => {

        newLi = newLi + `

        <li class="task ${task.completed && "done"}">
            <img class="" src="./assets/checked.png" alt="Feito" onclick="taskCompleted(${index})">
            <p>${task.task}</p>
            <img src="./assets/trash.png" alt="Deletar" onclick="deleteItem(${index})">
        </li>
        `
    })

    list.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(listItens))
}

function reloadTasks() {
    const localStorageTasks = localStorage.getItem('list')

    if (localStorageTasks) {
        listItens = JSON.parse(localStorageTasks)
    }

    showTask()
}
reloadTasks()
button.addEventListener("click", addTask)
darkMode.addEventListener("click", classAdd)
lightMode.addEventListener("click", classDelete)