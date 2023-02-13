// Seleção de elementos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

const searchInput = document.querySelector("#search-input");
const filterInputSelect = document.querySelector("#filter-select");

let oldInputValue;

// Funções

const createElementTodo = (text, status) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    if(status === 'done'){
        todo.classList.add("done");
    }

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

}

const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todoAll")) || [];
    return todos;
  };

const saveTodoLocalStorage = (text, status) => {
    const todoAll = getTodosLocalStorage();
    todoAll.push({"title": text, "status": status});
    localStorage.setItem("todoAll", JSON.stringify(todoAll));
}

const editStatusTodoLocalStorage = (text, status) => {
    const todoAll = getTodosLocalStorage();

    const statusTitle = status ? 'done': 'todo';
    todoAll.map((todo) => {
        if(todo.title === text){
            todo.status = statusTitle;
            return todo;
        }else{
            return todo;
        }
    })
    localStorage.setItem("todoAll", JSON.stringify(todoAll))
}

const editTitleTodoLocalStorage = (oldText, newText) => {
    const todoAll = getTodosLocalStorage();

    todoAll.map((todo) => {
        if(todo.title === oldText){
            todo.title = newText;
            return todo;
        }else{
            return todo;
        }
    })
    localStorage.setItem("todoAll", JSON.stringify(todoAll))
}

const deleteTodoLocalStorage = (text) => {
    const todoAll = getTodosLocalStorage();

    const newTodo = todoAll.filter((todo) => {
        if(todo.title !== text){
            return todo;
        }
    })
    localStorage.setItem("todoAll", JSON.stringify(newTodo))
}


const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    })

    editTitleTodoLocalStorage(oldInputValue, text);
}

const mountTodoList = () => {
    const todoAll = getTodosLocalStorage();

    todoAll.forEach((todo) => {
        createElementTodo(todo.title, todo.status)
    });
}

const searchTodo = (text) => {
    todoList.innerHTML = '';

    if(text === ''){
        mountTodoList();
    }else{
        const todoAll = getTodosLocalStorage();
    
        todoAll.forEach((todo) => {
            if(todo.title.includes(text.toLowerCase())){
                createElementTodo(todo.title, todo.status);
            }
        });
    }
}

const filterTodo = (text) => {
    todoList.innerHTML = '';

    if(text === 'all'){
        mountTodoList();
    }else{
        const todoAll = getTodosLocalStorage();
    
        todoAll.forEach((todo) => {
            if(todo.status === text){
                createElementTodo(todo.title, todo.status);
            }
        });
    }
}

// Eventos

window.addEventListener("load", () => {
    mountTodoList();
})

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputValue = todoInput.value;

    if(inputValue){
        createElementTodo(inputValue);
        saveTodoLocalStorage(inputValue, 'todo');
        todoInput.value = "";
        todoInput.focus();
    }
})

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div"); // div mais proxima dele
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done"); // add/remove se existir classe
        
        const titleTodo = parentEl.querySelector("h3").innerText;
        const statusTodo = parentEl.classList.contains("done");
        editStatusTodoLocalStorage(titleTodo,  statusTodo);

    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
        const title = parentEl.querySelector("h3").innerText
        
        deleteTodoLocalStorage(title);
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }

})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();    
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue){
        updateTodo(editInputValue);
    }

    toggleForms();
})

searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value;
    searchTodo(searchValue);
})

filterInputSelect.addEventListener("click", () => {
    const searchValue = filterInputSelect.value;
    filterTodo(searchValue);
})