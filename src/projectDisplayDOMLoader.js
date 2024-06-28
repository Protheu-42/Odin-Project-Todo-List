import { attributeSetter, clearContentPage, loadTaskHandler, remove, setTaskProprieties, projectHelper, reloadDOM } from "./helper";

import { format } from "date-fns";

export default function projectDisplayDOMLoader(project, taskList, projectId) {
    const contentDiv = document.querySelector('#content');
    clearContentPage()

    const formProjectDisplay = document.createElement('form');
    formProjectDisplay.id = 'project-display-page';

    const titleDiv = document.createElement('div');
    const titleInput = document.createElement('input');
    attributeSetter(titleInput, {'type': 'text', 'name': 'title', 'id': 'title', 'value': project.getTitle()});

    const changeNameBtn = document.createElement('button');
    attributeSetter(changeNameBtn, {'type': 'button', 'id':'change-project-name'});
    changeNameBtn.textContent = 'Change Project Name';
    changeNameBtn.addEventListener('click', () => {
        projectHelper().changeProjectTitle(project, titleInput.value)
        reloadDOM()
    })

    const deleteProjectBtn = document.createElement('button');
    attributeSetter(deleteProjectBtn, {'type': 'button', 'id':'delete-project'})
    deleteProjectBtn.textContent = 'Delete Project';
    deleteProjectBtn.addEventListener('click', () => {
        projectHelper().removeProject(projectId);
        reloadDOM()
    })

    const taskUl = document.createElement('ul');
    //make a for loop and create a li for each task bellow

    contentDiv.appendChild(formProjectDisplay);
    formProjectDisplay.appendChild(titleDiv);
    titleDiv.appendChild(titleInput);
    titleDiv.appendChild(changeNameBtn);
    titleDiv.appendChild(deleteProjectBtn);
    formProjectDisplay.appendChild(taskUl);

    for (let i = 0; i < taskList.length; i++) {
        const task = document.createElement('li');
        task.textContent = taskList[i].getTitle();
        task.addEventListener('click', () => {
            loadTaskHandler(taskList[i].getTitle(), taskList[i].getDescription(), taskList[i].getPriority(), format(taskList[i].getDueDate(), 'yyyy-MM-dd'), remove(project, i),  setTaskProprieties(taskList[i]))
        })
        taskUl.appendChild(task)
    }
}