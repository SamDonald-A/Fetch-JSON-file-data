
function fetchTasks() {
    fetch('task.json')
        .then(response => response.json())
        .then(data => {
            tasks = data;
            renderTasks();
        })
        .catch(error => console.error('Error fetching tasks:', error));
}
fetchTasks();


function renderTasks() {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = ''; // Clear previous tasks
    
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.dataset.title = task.title;
        taskElement.innerHTML = `
            <div class="task-card">
            <h3>${task.title}</h3>
            <p class="discription">${task.description}</p>
            </div>
            <div class="task-out">
            <div>
            <button class="editButton" onclick="editTask('${task.title}')">Edit</button>
            <button class="deleteButton" onclick="deleteTask('${task.title}')"><i class="fa-solid fa-trash"></i></button>
            </div>
            <p class="deadline"> <strong> Deadline: </strong> ${task.deadline}</p>
            </div>
        `;
        taskListContainer.appendChild(taskElement);
    });
}
renderTasks();

function editTask(title) {
    // Find the task in the tasks array based on its title
    const taskToEdit = tasks.find(task => task.title === title);

    // Prompt the user to edit task details
    const newTitle = prompt('Enter new title:', taskToEdit.title);
    const newDescription = prompt('Enter new description:', taskToEdit.description);
    const newDeadline = prompt('Enter new deadline:', taskToEdit.deadline);

    // Update task details
    if (newTitle !== null) {
        taskToEdit.title = newTitle;
    }
    if (newDescription !== null) {
        taskToEdit.description = newDescription;
    }
    if (newDeadline !== null) {
        taskToEdit.deadline = newDeadline;
    }

    // Render tasks again to reflect changes in the UI
    renderTasks();
}

const url = "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`Sunrise time: ${data.astronomy[0].sunrise}`);
        console.log(`Moon phase: ${data.astronomy[0].moonphase}`);
    })
    .catch(error => console.log(error));