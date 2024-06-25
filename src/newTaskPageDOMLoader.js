import DOMhandler from "./DOMHandler";

export default function newTaskPageDomLoader(project, CreateTask){
    const currentProject = project;
    const contentDiv = document.querySelector("#content");

    // Making sure that is a clear Start
    clearAllPage();

    const formContainer = document.createElement('form');
    const formTitle = document.createElement('h1');
    formTitle.textContent = 'Create New Task';

    const taskTitleLabel = document.createElement('label');
    attributeSetter(taskTitleLabel, {'for': 'title'});
    taskTitleLabel.textContent = 'Title';
    const taskTitleInput = document.createElement('input');
    attributeSetter(taskTitleInput, {'type': 'text', 'name': 'title', 'id': 'title'})

    const descriptionLabel = document.createElement('label');
    attributeSetter(descriptionLabel, {'for': 'description'});
    descriptionLabel.textContent = 'Description';
    const descriptionInput = document.createElement('input');
    attributeSetter(descriptionInput, {'type': 'text', 'name': 'description', 'id': 'description'})

    const priorityLabel = document.createElement('label');
    attributeSetter(priorityLabel, {'for': 'priority'});
    priorityLabel.textContent = 'Priority';
    const priorityInput = document.createElement('input');
    attributeSetter(priorityInput, {'type': 'number', 'name': 'priority', 'id': 'priority'});

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    const dueDate = document.createElement('input');
    attributeSetter(dueDate, {'type': 'date', 'name': 'dueDate', 'id': 'dueDate'});

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    attributeSetter(saveBtn, {'type': 'button'});
    saveBtn.addEventListener('click', () => {
        console.log('working')
        const newTask = CreateTask(taskTitleInput.value, descriptionInput.value, priorityInput.value, dueDate.value);
        currentProject.addTask(newTask);
        clearAllInputs();
        for (let i = 0; i < currentProject.getList().length; i++) {
            console.log(currentProject.getList()[i].getTitle());
            return DOMhandler();  
        }
        // direct to the page of the task
    })

    contentDiv.appendChild(formContainer);
    formContainer.appendChild(formTitle);
    formContainer.appendChild(taskTitleLabel);
    formContainer.appendChild(taskTitleInput);
    formContainer.appendChild(descriptionLabel);
    formContainer.appendChild(descriptionInput);
    formContainer.appendChild(priorityLabel);
    formContainer.appendChild(priorityInput);
    formContainer.appendChild(dueDateLabel);
    formContainer.appendChild(dueDate);
    formContainer.appendChild(saveBtn);

    function clearAllInputs() {
        taskTitleInput.value = '';
        descriptionInput.value = '';
        priorityInput.value = '';
        dueDate.value = '';
    }
    
    function clearAllPage() {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

}

function attributeSetter(element, attributes) {
    for(let key in attributes){
        element.setAttribute(key, attributes[key])
    }
}
