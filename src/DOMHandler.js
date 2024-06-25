import CreateTask from "./taskManager";
import * as projectManager from "./projectManager";
import navbarDomLoader from "./navbarDOMLoader";
import newTaskPageDomLoader from "./newTaskPageDOMLoader";



export default function DOMhandler() {
    console.log(projectManager.projectsList[0].getList()[0]);
    navbarDomLoader(projectManager)
    const NavLinksHandler = (function () {
        const newTaskBtnsNodelist = document.querySelectorAll('.new-task-btn');
        for (let i = 0; i < newTaskBtnsNodelist.length; i++){
            let projectId = newTaskBtnsNodelist[i].parentNode.id
            newTaskBtnsNodelist[i].addEventListener('click', () => {
                console.log(projectId);
                newTaskPageDomLoader(projectManager.projectsList[projectId], CreateTask); // Later implement a way to direct to the created page
            })            
        }
    })()
};