import { attributeSetter, clearContentPage, reloadDOM } from "./helper";

export function taskPageLoad(titleInput, descriptionInput, priorityInput, dueDateInput,  remove ,setTaskProprieties) {
    const contentDiv = document.querySelector('#content');

     // Making sure that is a clear Start
    clearContentPage();

    const formEditDisplay = document.createElement('form');
    formEditDisplay.id = 'task-display-edit';
    
    const title = document.createElement('input');
    attributeSetter(title, {'type': 'text', 'name': 'title', 'id': 'title', 'value': titleInput});
    
    const description = document.createElement('input');
    attributeSetter(description, {'type': 'text', 'name': 'description', 'id': 'description', 'value': descriptionInput});
    
    const priorityDiv = document.createElement('div');
    const priority = document.createElement('input');
    attributeSetter(priority, {'type': 'number', 'name': 'priority', 'id': 'priority', 'min': '1', 'max': '3', 'value': priorityInput});
    const priorityDescription = document.createElement('span');
    priorityDescription.textContent = '*1 being most important and 3 minor importancy';
    
    const dueDate = document.createElement('input');
    attributeSetter(dueDate, {'type': 'date', 'name': 'dueDate', 'id': 'dueDate', 'value': dueDateInput});
    
    const btnsDiv = document.createElement('div');
    const saveBtn = document.createElement('button');
    attributeSetter(saveBtn, {'type' :'button'});
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => {
        setTaskProprieties.setTaskTitle(title.value);
        setTaskProprieties.setTaskDescription(description.value);
        setTaskProprieties.setTaskPriority(priority.value);
        setTaskProprieties.setTaskDueDate(dueDate.value);
        reloadDOM();
        clearContentPage()
    })


    const deleteBtn = document.createElement('button');
    attributeSetter(deleteBtn, {'type': 'button', 'class': 'delete-btn'});
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        remove.deleteTask()
        reloadDOM();
        clearContentPage();
    })
    
    contentDiv.appendChild(formEditDisplay);
    formEditDisplay.appendChild(title);
    formEditDisplay.appendChild(description);
    formEditDisplay.appendChild(priorityDiv);
    priorityDiv.appendChild(priority);
    priorityDiv.appendChild(priorityDescription);
    formEditDisplay.appendChild(dueDate);
    formEditDisplay.appendChild(btnsDiv);
    btnsDiv.appendChild(saveBtn);
    btnsDiv.appendChild(deleteBtn);
}