const http = new Easyhttp();

const data = {
   email: "segundairo",
   name: "Segun Dairo",
   phone: "080000354"
}

// http.get('https://jsonplaceholder.typicode.com/users/3')
//    .then(data => console.log(data))
//    .catch(err => console.log(err));


http.post('https://jsonplaceholder.typicode.com/users', data)
   .then(data => console.log(data))
   .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/3', data)
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

// http.delete('https://jsonplaceholder.typicode.com/users/7', data)
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

// console.clear()