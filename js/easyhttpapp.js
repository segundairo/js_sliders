const http = new easyHTTP();
// // GET ALL POSTS

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//    if (err) {
//       console.log(err);
//    } else {
//       console.log(response);
//    }
   
// });

// GET SINGLE POST



// http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
//    if (err) {
//       console.log(err);
//    } else {
//       console.log(post);
//    }
// });

const data = {
   title: "The Custom Post",
   body : "Body of the custom post"
}
// POST method

// http.post("https://jsonplaceholder.typicode.com/posts", data, function (err, post) {
//    if (err) {
//       console.log(err);
//    } else {
//       console.log(post);
//    }
// });

// http.put("https://jsonplaceholder.typicode.com/posts/5", data, function (err, post) {
//    if (err) {
//       console.log(err);
//    } else {
//       console.log(post);
//    }
// });

http.delete("https://jsonplaceholder.typicode.com/posts/5", function (err, message) {
   if (err) {
      console.log(err);
   } else {
      console.log(message);
   }
});

