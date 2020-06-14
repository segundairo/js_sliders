
document.querySelector('.btn-one').addEventListener('click', () => {
   fetch('../data.txt')
      .then((res) => {
         return(res.text());
      })
      .then(data => {
         document.getElementById('output').innerHTML = data; 
      })
      .then(err => {
         console.log(err);
      });
});

document.querySelector('.btn-two').addEventListener('click', () => {
   fetch('../customers.json')
      .then((res) => {
         return(res.json());
      })
      .then(data => {
         let output = '';
         data.forEach(post => {
            output += `
               <ul>
                  <li>${post.title}</li>
                  <li>${post.body}</li>
               </ul>
            `
         });
         document.getElementById('output').innerHTML = output;
      })
      .then(err => {
         console.log(err);
      });
});

document.querySelector('.btn-three').addEventListener('click', () => {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
         return(res.json());
      })
      .then(data => {
         let output = '';
         data.forEach(post => {
            output += `
               <ul>
                  <li>${post.id}</li>
                  <li>${post.title}</li>
                  <li>${post.body}</li>
               </ul>
            `
         });

         output += `<h3>Total posts returned is ${data.length}</h3>`;
         document.getElementById('output').innerHTML = output;
      })
      .then(err => {
         console.log(err);
      });
});
