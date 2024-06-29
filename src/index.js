import './style.css';
import DOMHandler from './DOMHandler';
import { createAndSaveProject, projectsList} from './projectManager';
import CreateTask from './taskManager';


export const saveProjects = function () {
    for (let i = 0; i < projectsList.length; i++) {
        const JSONProject = {
            title: projectsList[i].getTitle(),
            toDoList: []
        };
    
        for (let j = 0; j < projectsList[i].getList().length; j++) {
            const task = {
                title: projectsList[i].getList()[j].getTitle(),
                description: projectsList[i].getList()[j].getDescription(),
                priority: projectsList[i].getList()[j].getPriority(),
                dueDate: projectsList[i].getList()[j].getDueDate()
            }
            JSONProject.toDoList.push(task)
        }
        localStorage.setItem(i.toString(), JSON.stringify(JSONProject));
    }    
}

export const loadProjects = function () {
    projectsList = [];
    for (let i = 0; i < localStorage.length; i++) {
        const project = JSON.parse(localStorage.getItem(i.toString()))
        createAndSaveProject(project.title);
        for (let j = 0; j < project.toDoList.length; j++) {
            const task = CreateTask(project.toDoList[j].title, project.toDoList[j].description, project.toDoList[j].dueDate, project.toDoList[j].priority);
            projectsList[i].addTask(task)      
        }    
    }    
}

if (localStorage.length > 0) {
    loadProjects()
}


export const deleteProjectFromLocalStorage = function (projectId) {
    localStorage.removeItem(projectId.toString());
}

DOMHandler();

// const project = JSON.parse(localStorage.getItem('0'))

// console.log(project.toDoList.length)