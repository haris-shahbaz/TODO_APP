let add_btn = document.getElementById("add_btn");
let save_Btn = document.getElementById("save_btn");
let delete_All = document.getElementById("deleteAll");
let edit_btn = null;


save_Btn.style.display = "none";
delete_All.style.display = "none";

function addTodoBtn() {
    let todoInput = document.getElementById("todoInput");
    let getValue = todoInput.value;
    todoInput.value = "";

    let todo_li = document.createElement("li");
    todo_li.innerText = getValue;

    todo_list.appendChild(todo_li);
    delete_All.style.display = "inline-block";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    todo_li.appendChild(editBtn);

    editBtn.addEventListener("click", function () {
        let edit_text = todo_li.childNodes[0].nodeValue;
        todoInput.value = edit_text;
        save_Btn.style.display = "inline-block";
        add_btn.style.display = "none";
        edit_btn = todo_li;
    })

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    todo_li.appendChild(deletebtn);

    deletebtn.addEventListener("click", function () {
        todo_li.remove();
    })

    save_Btn.addEventListener("click", function () {
        add_btn.style.display = "inline-block";
        save_Btn.style.display = "none";
        edit_btn.childNodes[0].nodeValue = todoInput.value;
    })

    delete_All.addEventListener("click", function () {
        if (todo_list.children.length > 0) {
            todo_list.innerHTML = null;
        }
        delete_All.style.display = "none";
    })
}