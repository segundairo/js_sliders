// document.querySelector('.btn-text').addEventListener('click', function () {
//    const xhr = new XMLHttpRequest();

//    // OPEN
//    xhr.open('GET', 'data.txt', true);

//    xhr.onload = function () {
//       if (this.status === 200) {
//          output = document.getElementById('output');
//          output.innerHTML = ` 
//             <p>${this.responseText}</p>
//          `;

//          output.className = 'output';

//       }
//    }

//    xhr.send();
   
// });

document.querySelector('.btn-one').addEventListener('click', function () {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', 'customer.json', true);
   
   xhr.onload = function () {
      if (this.status === 200) {
         const customer = JSON.parse(this.responseText);
         output = document.querySelector('#output');
         output.innerHTML = `
            ${customer.firstname} ${customer.lastname}
         `;

      }
   }

   xhr.send();
});


document.querySelector('.btn-two').addEventListener('click', function () {
   const xhr = new XMLHttpRequest();
 

   // load json

   xhr.open('GET', 'customers.json', true);  
   xhr.onload = function () {
   
      if (this.status === 200) {
         let output = '';
         results = JSON.parse(this.responseText);
         const display = document.getElementById('output');
         results.forEach(result => {
            output += ` <ul>
            <li>${result.id}</li>  
            <li>${result.title}</li>  
            <li>${result.body}</li>  
            </ul>`;               
         });
         output += `
         <h3>Total items = ${results.length}</h3>
         `
         display.innerHTML = output;
      }

   }

   xhr.send();
});