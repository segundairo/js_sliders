const posts = [
   {
      "ID": 1,
      "Title": "Greenleaf",
      "Duration": 120
   },
   {
      "ID": 2,
      "Title": "Money Heist",
      "Duration": 180
   }
]

function createPost(post, callback) {
   setTimeout(() => {
      posts.push(post);
      callback();
   }, 2000);
}

function getPosts() {
   setTimeout(() => {
      let output = '';
      posts.forEach((post) => {
         output += ` 
         <ul>
            <li>${post.ID}</li>
            <li>${post.Title}</li>
            <li>${post.Duration}</li>
         </ul>
         `
      })
      document.body.innerHTML = output;
   }, 1000);
}

createPost({ "ID": 3, "Title": "Vagabond", "Duration": 135 }, getPosts);

