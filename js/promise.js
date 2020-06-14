const posts =
   [
      {
   id: 1,
   title: "Made in Nigeria",
   body: 'The best of all things good and beautiful'
},
      {
   id: 2,
   title: "The beautiful ones are yet to be born",
   body: "story for the gods"
}
   ]

const post = {
   id: 3,
   title: "His Highness", 
   body: "A royalty indulging in vices"
}
   

function createPost(data) {
   return new Promise(function (resolve, reject) {
      setTimeout(() => {
         const err = false;
         if (err === true) {
            reject("An error has occurred!");            
         } else {
            posts.push(data);
            resolve();
         }
      }, 2000);

   });
}



function getPosts() {
   setTimeout(() => {
      let output = '';
      posts.forEach(post => {
         output += `
            <ul>
            <li>${post.id}</li>
               <li>${post.title}</li>
               <li>${post.body}</li>
            </ul>
            `;
      })
      document.body.innerHTML = output;
   }, 1000);
}

createPost(post)
   .then(getPosts)
   .catch(function (err) {
      console.log(err);
   });
