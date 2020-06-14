// const ul = document.querySelector('ul.task__list');
// const li = document.createElement('li');
// li.classList.add('task__items');
// const item = document.createElement('a');
// item.className = 'list__item';
// const btn = document.createElement('a');
// btn.className= 'btn btn-delete';
// const itemText = document.createTextNode('DOM List Item');
// const btnText = document.createTextNode('X');

// item.appendChild(itemText);

// btn.appendChild(btnText);

// li.appendChild(item);
// li.appendChild(btn);
// ul.appendChild(li);

// const liclone = li.cloneNode(true);
// liclone.firstElementChild.textContent = 'Clone Text';
// liclone.lastElementChild.textContent = 'XX';
// console.log(liclone.firstElementChild.textContent);
// console.log(liclone.lastElementChild.textContent);

// ul.appendChild(liclone);

// replace DOM element

// const oldTitle = document.querySelector('.heading-primary');
// const newTitle = document.createElement('h2');
// newTitle.id = 'heading-primary';
// newTitle.appendChild(document.createTextNode('Title from DOM'));

// console.log(oldTitle.parentElement);

// const pReplace = document.querySelector('.task__history');
// oldTitle.parentElement.replaceChild(newTitle, oldTitle);

// Remove element

// const ul = document.querySelector('ul');

// ul.removeChild(ul.firstElementChild);

// Get and set element attributes;

// const a = document.querySelector('.btn.btn-delete');
// a.setAttribute('href', 'http://www.google.com');
// console.log(a.attributes);

// const clearAll = document.querySelector(".task__history");

// clearAll.addEventListener("mousemove", function (e) {
//   e.preventDefault;
//   console.log("Hello World");
//   console.log();
//    console.log(e.target.className);
//    clearAll.firstElementChild.textContent=`Offset X: ${e.offsetX}, Offset X: ${e.offsetY}`
//   document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// });

// remove an element from the dom

document.querySelector(".task__history").addEventListener("click", deleteTask);

function deleteTask(e) {
  e.preventDefault();
  const delItem = e.target.classList;
  if (delItem.contains("btn-delete")) {
    e.target.parentElement.remove();
  }
}

// localStorage.setItem('name', 'Segun');
// localStorage.setItem('city', 'Lagos');

// const name = localStorage.getItem('name');
// const city = localStorage.getItem('city');
// console.log(name);
// console.log(city);
// const firstName = sessionStorage.setItem('firstName', 'Olusegun');

// add new task

// document.querySelector('form').addEventListener('submit', function (e) {
//    e.preventDefault();
//    const newTask = document.querySelector('.new-task').value;

//    if (newTask.trim()) {
//       const ul = document.querySelector('.task__list');
//       const newList = document.createElement('li');

//       const newItem = document.createElement('a');
//       const newBtn = document.createElement('a');
//       newList.className = 'task__items';

//       newItem.className = 'list__item';
//       newBtn.className = 'btn btn-delete';

//       newItem.appendChild(document.createTextNode(newTask));
//       newBtn.appendChild(document.createTextNode('X'));

//       newList.appendChild(newItem);
//       newList.appendChild(newBtn);

//       ul.appendChild(newList);
//    }
//    document.querySelector('.new-task').value = '';
// });

// store to local storage

document.forms[0].addEventListener("click", function (e) {
  e.preventDefault();
   const task = document.querySelector(".new-task").value.trim();
  if (task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
     }
     
     tasks.push(task);
 
    localStorage.setItem("tasks", JSON.stringify(tasks));
     alert("Task succesfully added.");
     document.querySelector(".new-task").value = '';
  } 
});
