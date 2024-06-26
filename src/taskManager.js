export default function CreateTask(title, description, dueDate, priority) {
    const getTitle = () => title;    
    const setTitle = (newTitle) => title = newTitle;
    
    const getDescription = () => description;
    const setDescription = (newDescription) => description = newDescription; 

    const getPriority = () => priority;
    const setPriority = (newPriority) => priority = newPriority; 

    const getDueDate = () => dueDate;
    const setDueDate = (newDueDate) => dueDate = newDueDate;

    return {
        getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority
    }
}