const textArea = document.querySelector(".textarea");
// console.log(textArea.value);
const button = document.querySelector(".buttoninput");

const todoList = document.querySelector(".todolist");

button.addEventListener("click", addToDoListItem);
function addToDoListItem(){
    console.log("Added!");
    console.log(textArea.value);

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("itemall")
    const item = document.createElement("p");
    item.innerHTML = textArea.value;
    item.classList.add("item");
    toDoDiv.appendChild(item);
    if(textArea.value == ''){
        alert('Plese enter Text!');
        return alert;
    }

    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    deleteButton.classList.add("trash-button");

    toDoDiv.appendChild(deleteButton);


    todoList.appendChild(toDoDiv);

    textArea.value = '';

    console.log(toDoDiv);
}
todoList.addEventListener("click", deleteItem);
function deleteItem(e){
    const item = e.target;
    console.log(item);

    if(item.classList[0] === "trash-button"){
        const parent = item.parentNode;
        parent.remove();
    }
}