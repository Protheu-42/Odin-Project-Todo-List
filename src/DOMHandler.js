import CreateTask from "./taskManager";
import * as projectManager from "./projectManager";
import navbarDomLoader from "./navbarDOMLoader";
import newTaskPageDomLoader from "./newTaskPageDOMLoader";
import { taskPageLoad } from "./taskPageLoad";
import projectDisplayDOMLoader from "./projectDisplayDOMLoader";
import { format } from "date-fns";
import { setTaskProprieties, remove, reloadDOM } from "./helper";

export default function DOMhandler() {
    navbarDomLoader(projectManager);
    const NavLinksHandler = (function () {
        const navbar = document.querySelector('#navbar');
        const projectNavbarNodelist = document.querySelectorAll('.project-title');
        const newTaskBtnsNodelist = document.querySelectorAll('.new-task-btn'); // Select all New task Buttons in Projects
        const tasksNodelist = navbar.querySelectorAll('li'); // Select all Tasks to be able to be able to link
        //New Task event Listener
        for (let i = 0; i < newTaskBtnsNodelist.length; i++){
            let projectId = newTaskBtnsNodelist[i].parentNode.firstChild.id // change this, is not the parent anymore
            newTaskBtnsNodelist[i].addEventListener('click', () => {
                console.log(projectId)
                newTaskPageDomLoader(projectManager.projectsList[projectId], CreateTask); 
            })            
        }

        //Task Display event Listener
        for (let i = 0; i < tasksNodelist.length; i++) {
            tasksNodelist[i].addEventListener('click', () => {
                const projectId = tasksNodelist[i].id.charAt(0);
                const taskId = tasksNodelist[i].id.charAt(1);
                const currentProject = projectManager.projectsList[projectId]
                const currentTask = projectManager.projectsList[projectId].getList()[taskId];
                const formatedDate = format(currentTask.getDueDate(), 'yyyy-MM-dd');
                taskPageLoad(currentTask.getTitle(), currentTask.getDescription(), currentTask.getPriority(), formatedDate, remove(currentProject, taskId), setTaskProprieties(currentTask));
            })
        }

        //Project Display event Listener
        for (let i = 0; i < projectNavbarNodelist.length; i++){
            projectNavbarNodelist[i].addEventListener('click', () => {
                const projectId = projectNavbarNodelist[i].id
                const currentProject = projectManager.projectsList[projectId]
                const taskList = projectManager.projectsList[projectId].getList()
                projectDisplayDOMLoader(currentProject, taskList, projectId);
            })
        }
    })()
};

const newProjectInteraction = (function() {
    const newProjectBtn = document.querySelector('#new-project-btn');
    const dialog = document.querySelector('dialog');
    const closeDialogBtn = document.querySelector('#save-new-project + button');
    const newProjectName = document.querySelector('#new-project-name');
    const saveNewProjectBtn = document.querySelector('#save-new-project');
    newProjectBtn.addEventListener('click', () => {
        dialog.showModal();
    });
    closeDialogBtn.addEventListener('click', () => {
        dialog.close();
    })
    saveNewProjectBtn.addEventListener('click', () => {
        projectManager.createAndSaveProject(newProjectName.value);
        dialog.close();
        DOMhandler()
    })
})()
