export default function populateNavbar(projectManager) {
    navbarClear();
    const navbar = document.querySelector('#navbar');
    const projectsList = projectManager.projectsList;
    renderProjects(navbar, projectsList);
    renderTasks(projectsList);
}

function renderProjects(navbar, projectsList) {
    for (let i = 0; i < projectsList.length; i++) {
        const outerDiv = document.createElement('div');
        outerDiv.classList.add('project-card');
        const projectTitleDiv = document.createElement('div');
        projectTitleDiv.classList.add('project-title');
        projectTitleDiv.id = i;
        projectTitleDiv.textContent = projectsList[i].getTitle();
        const newTaskBtn = document.createElement('button');
        newTaskBtn.setAttribute('type', 'button');
        newTaskBtn.classList.add('new-task-btn');
        newTaskBtn.textContent = '+';

        outerDiv.appendChild(projectTitleDiv);
        projectTitleDiv.appendChild(newTaskBtn);

        navbar.appendChild(outerDiv);
    }
}

function renderTasks(projectsList) {   
    // Query a NodeList of ".project-title" , and make loop to render all tasks using they id as key
    const projectNodeList = document.querySelectorAll('.project-title');
    for (let i = 0; i < projectNodeList.length; i++) {
        const taskList = document.createElement('ul');
        let currentProject = projectsList[i]
        for (let j = 0; j < currentProject.getList().length; j++){
            const task = document.createElement('li');
            task.textContent = currentProject.getList()[j].getTitle()
            task.id = `${i}${j}`
            taskList.appendChild(task);
        }
        projectNodeList[i].parentNode.appendChild(taskList);
        currentProject = undefined;
    }
}

export function navbarClear() {
    const navbar = document.querySelector('#navbar');
    for (let i = 0; i < navbar.childNodes.length; i++) {
        if (navbar.childNodes[i].className === 'project-card') {
            navbar.removeChild(navbar.childNodes[i]);
        }
    }
}