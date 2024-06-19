export const projectsList = [];

export function createNewProject(title) {
    const toDoList = [];

    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle; 

    const getList = () => toDoList;

    const addTask = (task) => toDoList.push(task);

    const deleteTask = (index) => toDoList.splice(index, 1);

    return {
        getTitle, setTitle, getList, addTask, deleteTask
    }
}

export function addProjectToList(project , list = projectsList) {
    list.push(project);
}

export function createAndSaveProject(title) {
    const newProject = createNewProject(title);
    addProjectToList(newProject);
}
