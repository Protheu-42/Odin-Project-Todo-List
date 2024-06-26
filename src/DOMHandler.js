import CreateTask from "./taskManager";
import * as projectManager from "./projectManager";
import navbarDomLoader from "./navbarDOMLoader";
import newTaskPageDomLoader from "./newTaskPageDOMLoader";
import { taskPageLoad } from "./taskPageLoad";
import { format } from "date-fns";
import { setTaskProprieties, remove } from "./helper";

export default function DOMhandler() {
    navbarDomLoader(projectManager);
    const NavLinksHandler = (function () {
        const navbar = document.querySelector('#navbar')
        const newTaskBtnsNodelist = document.querySelectorAll('.new-task-btn'); // Select all New task Buttons in Projects
        const tasksNodelist = navbar.querySelectorAll('li'); // Select all Tasks to be able to be able to link
        //New Task event Listener
        for (let i = 0; i < newTaskBtnsNodelist.length; i++){
            let projectId = newTaskBtnsNodelist[i].parentNode.id
            newTaskBtnsNodelist[i].addEventListener('click', () => {
                newTaskPageDomLoader(projectManager.projectsList[projectId], CreateTask); // Later implement a way to direct to the created page
            })            
        }

        //Page Display event Lister
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
    })()
};

