const http = new customHTTP()
const url = "https://jsonplaceholder.typicode.com/posts";

const data = {
   title: "John Doe",
   body: "Custom Post",
};

http.get(url)
   .then(res => console.log(res))
   .catch(err => console.log(err));


http.post(url, data)
   .then(res => console.log(res))
   .catch(err => console.log(err));



   // http.put(url, data)
   // .then(res => console.log(res))
   // .catch(err => console.log(err));

   // http.delete(url)
   // .then(data => console.log(data))
   // .catch(err => console.log(err));

// console.clear();



