/* Code for to-do list app */

const todoItems = document.querySelector('#todos');
const todoBox = document.querySelector('#todo-box');

// Add todos on Enter
todoItems.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (todoItems.value != "") {
            addTodo(todoItems.value);
            todoItems.value = "";
        }
    }
});

// Function to save todos to localstorage
const saveTodos = () => {
    const todos = document.querySelectorAll(".list-group-item");
    const data = [];
    todos.forEach(todo => {
        if (todo.classList.contains("text-decoration-line-through")) {
            data.push({ "text": todo.innerText, "mark": "text-decoration-line-through" });
        } else {
            data.push({ "text": todo.innerText });
        }
    });
    if (data.length === 0) {
        localStorage.removeItem("todos");
    } else {
        localStorage.setItem("todos", JSON.stringify(data));
    }
};

// Function to add todos
const addTodo = (todo, mark) => {
    const listItem = document.createElement("li");
    const classLists = ["list-group-item", "d-flex", "justify-content-between", "align-items-start", "font-xs-18"];
    classLists.forEach(classes => {
        listItem.classList.add(classes);
        listItem.classList.add(mark);
    });
    listItem.innerHTML = `
            ${todo}
            <i class="delete fa-solid fa-times fa-lg text-dark p-3 cursor-pointer"></i>`;
    todoBox.appendChild(listItem);

    // Code to mark todo as done
    listItem.addEventListener('click', () => {
        listItem.classList.toggle("text-decoration-line-through");
        saveTodos();
    });

    // Code to delete todo
    listItem.querySelector('.delete').addEventListener('click', () => {
        listItem.remove();
        saveTodos();
    });

    saveTodos();
};

// Initial fuction on load to get item from localstorage
(
    function () {
        const lsTodos = JSON.parse(localStorage.getItem("todos"));
        if (lsTodos !== null) {
            lsTodos.forEach(todo => {
                if (todo.mark) {
                    addTodo(todo.text, todo.mark)
                } else {
                    addTodo(todo.text);
                }
            });
        }
    }
)()