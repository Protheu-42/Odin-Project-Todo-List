import DOMhandler from "./DOMHandler";
import CreateTask from "./taskManager";
import { taskPageLoad } from "./taskPageLoad";
import { deleteProject } from "./projectManager";
import { format } from "date-fns";

export function attributeSetter(element, attributes) {
    for(let key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

export function clearContentPage() {
    const contentDiv = document.querySelector('#content');
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

export function reloadDOM() {
    DOMhandler()
};

// Task Related
export const standardTask = CreateTask('My First Task', 'Put your description here', new Date(2024, 6, 26), 1)


export function setTaskProprieties(currentTask) {
    const setTaskTitle = (title) => {
        currentTask.setTitle(title);
    };

    const setTaskDescription = (description) => {
        currentTask.setDescription(description);
    };

    const setTaskPriority = (priority) => {
        currentTask.setPriority(priority);
    };

    const setTaskDueDate = (dueDate) => {
        currentTask.setDueDate(dueDate);
    };
    return {
        setTaskTitle, setTaskDescription, setTaskPriority, setTaskDueDate
    }
} 

export function remove (currentProject, taskId) {
    const deleteTask = () => {
        currentProject.deleteTask(taskId);
    }; 

    return {
        deleteTask
    }
}

export function loadTaskHandler(title, description, priority, dueDateInput, remove, setTaskProprieties) {      
    taskPageLoad(title, description, priority, dueDateInput, remove, setTaskProprieties);
}

// Project related

export function projectHelper () {
    const changeProjectTitle = (project, newname) => {
        project.setTitle(newname)
    }

    const removeProject = (projectId) => {
        deleteProject(projectId)
    }

    return {
        changeProjectTitle, removeProject
    }
}