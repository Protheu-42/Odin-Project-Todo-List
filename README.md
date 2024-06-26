# Odin-Project-Todo-List

// NAVBAR
<div>
    <div class="project-title">My Projects <button type="button" class="new-task-btn">+</button></div>
    <ul>
        <li>My First Task</li>
        <li>One, Two, Three</li>
    </ul>
</div>
<div>
    <div class="project-title">I tired <button type="button" class="new-task-btn">+</button></div>
    <ul>
        <li>Sleep</li>
        <li>Give up list, and Drink Coffee</li>
    </ul>
</div>

// NEW TASK PAGE
<form>
    <h1>Create New Task</h1>
    <label for="title">Title</label>
    <input type="text" name="title" id="title">
    <label for="description">Description</label>
    <input type="text" name="description" id="description">
    <label for="priority">Priority <span>?</span></label>
    <input type="number" name="priority" id="priority" min="1" max="3">
    <label for="dueDate">Due Date</label>
    <input type="date" name="dueDate" id="dueDate">
    <button type="button">Save</button>
</form>

// Display TASK
<form id="task-display-edit">
                <input type="text" name="title" id="title" placeholder="Title">
                <input type="text" name="description" id="description" placeholder="Description">
                <div>
                    <input type="number" name="priority" id="priority" min="1" max="3" placeholder="3"> <span> *1 being most important and 3 minor importancy</span>
                </div>
                <input type="date" name="dueDate" id="dueDate" placeholder="06/06/2024">
                <div>
                    <button type="button">Save</button>
                    <button type="button" class="delete-btn">Delete</button>
                </div>
            </form>