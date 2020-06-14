// UI Initialization

const ul = document.querySelector(".task__list");
const form = document.querySelector(".tast__form");
const filter = document.querySelector(".filter__input");
const inputText = document.querySelector(".new-task");
const btnClear = document.querySelector(".btn-clear");

// load all event listeners
LoadEventListeners();

function LoadEventListeners() {
   // Load all tasks from local storage
   document.addEventListener('DOMContentLoaded', loadTasks);
  // Add new task item
  form.addEventListener("submit", AddTask);
  // Delete single task item
   ul.addEventListener("click", delTask);
   
   // clears all task items
   btnClear.addEventListener('click', delAllItems);

   // search for items
   filter.addEventListener('keyup', filterItem);

}

function loadTasks() {
   // This function loads all the task items from the local storage
   let tasks;
   if (localStorage.getItem("tasks") === null) {
     tasks = [];
   } else {
     tasks = JSON.parse(localStorage.getItem("tasks"));
   }
   tasks.forEach(function (task) {
      let li = document.createElement("li");
      let linkBtn = document.createElement("a");
      let listLink = document.createElement("a");
      listLink.className = "list__item";
      listLink.appendChild(document.createTextNode(task));
      linkBtn.className = "btn btn-delete";
      linkBtn.appendChild(document.createTextNode("X"));
      li.className = "task__items";
      li.appendChild(listLink);
      li.appendChild(linkBtn);
      ul.appendChild(li);
   });
}

function AddTask(e) {
  // This function creates a new task item from scratch and adds it to the DOM

  if (inputText.value.trim() !== "") {
    let li = document.createElement("li");
    let linkBtn = document.createElement("a");
    let listLink = document.createElement("a");
    listLink.className = "list__item";
    listLink.appendChild(document.createTextNode(inputText.value));
    linkBtn.className = "btn btn-delete";
    linkBtn.appendChild(document.createTextNode("X"));
    li.className = "task__items";
    li.appendChild(listLink);
    li.appendChild(linkBtn);
    ul.appendChild(li);

    // Add item to localStorage
    storeTaskInLocalStorage(inputText.value);

    e.preventDefault();
    alert("Task added successfully");
  }
  inputText.value = "";
}

function storeTaskInLocalStorage(task) {
   // This function stores data permanently in local storage
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
}


function delTask(e)
{
   // This function deletes a single task from the task list
  if (e.target.classList.contains("btn-delete")) {
     if (confirm("Do you really want to delete this item?")) {
        e.target.parentElement.remove();
      //   update local storage record
        
        delTaskFromLocalStorage(e.target.previousElementSibling);

    }
  }
}

function delTaskFromLocalStorage(item) {
   let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
   tasks.forEach(function(task, index){
      if (item.textContent === task) {
         tasks.splice(index, 1);
         }
   });
   localStorage.setItem('tasks', JSON.stringify(tasks));
}

function delAllItems() {
   while (ul.firstElementChild) {
      ul.firstElementChild.remove();
   }
   localStorage.setItem();
}

function filterItem(e) {
   const lis = document.querySelectorAll('.task__items');
   const item = e.target.value.toLowerCase();
   lis.forEach(function (li) {
      listItem = li.firstElementChild.textContent.toLowerCase();
      if (listItem.indexOf(item) != -1) {
         li.style.display = 'flex';
      }
      else {
         li.style.display = 'none';
      }
   });

}