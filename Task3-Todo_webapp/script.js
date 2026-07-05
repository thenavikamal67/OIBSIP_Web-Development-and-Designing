const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function getCurrentDateTime() {

    return new Date().toLocaleString();

}

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {

        alert("Please enter a task.");

        return;
    }

    createPendingTask(task);

    input.value = "";
}

function createPendingTask(taskText) {

    const li = document.createElement("li");

    const task = document.createElement("div");
    task.className = "task-text";
    task.innerText = taskText;

    const time = document.createElement("div");
    time.className = "time";
    time.innerText = "Added: " + getCurrentDateTime();

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttons";

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "complete";

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(task);
    li.appendChild(time);
    li.appendChild(buttonDiv);

    pendingList.appendChild(li);

    completeBtn.onclick = function () {

        moveToCompleted(li, task.innerText);

    };

    editBtn.onclick = function () {

        let newTask = prompt("Edit Task", task.innerText);

        if (newTask != null && newTask.trim() !== "") {

            task.innerText = newTask;

        }

    };

    deleteBtn.onclick = function () {

        li.remove();

    };

}

function moveToCompleted(oldTask, text) {

    oldTask.remove();

    const li = document.createElement("li");

    const task = document.createElement("div");
    task.className = "task-text";
    task.innerText = text;

    const time = document.createElement("div");
    time.className = "time";

    time.innerHTML =
        "Completed: " + getCurrentDateTime();

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttons";

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(task);
    li.appendChild(time);
    li.appendChild(buttonDiv);

    completedList.appendChild(li);

    editBtn.onclick = function () {

        let newTask = prompt("Edit Task", task.innerText);

        if (newTask != null && newTask.trim() !== "") {

            task.innerText = newTask;

        }

    };

    deleteBtn.onclick = function () {

        li.remove();

    };

}
