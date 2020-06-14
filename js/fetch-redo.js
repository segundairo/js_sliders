// const data = {
//   title:
//     "CUSTOM POST",
//   body: "quia et suscipit\nsuscipit recusandae consequunturddfdfd expedita et cum\n"
// };

const data = {
   name: "John Doe",
  username: "johndoe",
   email: "johnd@gmail.com"
};

function getData() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

function postData(url, data) {
  return new Promise((resolve, reject) => {
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch((error) => reject(error));
  });
}

function putData(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

function deleteData(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => resolve('Resource Deleted'))
      .catch((err) => reject(err));
  });
}
const url = "https://jsonplaceholder.typicode.com/users/1";

// getData(url)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// postData(url, data)
//    .then(data => console.log(data))
//   .catch(error => console.log(error));
   

// putData(url, data)
// .then(data => console.log(data))
//   .catch(error => console.log(error));



deleteData(url)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// console.clear();


