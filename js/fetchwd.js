const item = {
  email: "segundairo",
  first_name: "Laitan",
  last_name: "Dairo",
};
class userAPI {
  constructor() {
    this.url = "https://reqres.in/api/users";
  }
  getUser() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  storeUser(item) {
    return new Promise((resolve, reject) => {
      fetch(this.url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  async addUser(item) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    return data;
  }
}

const user = new userAPI();

// user
//   .getUser()
//   .then((res) => res)
//   .then((data) => {
//     data.data.forEach((item) => {
//       console.log(item);
//     });
//   })
//   .catch((err) => err);

//   user.storeUser(item)
//   .then((res) => res)
//   .then((data) => console.log(data))
//   .catch((err) => err);

  user.addUser(item)
  .then((res) => res)
  .then((data) => console.log(data))
  .catch((err) => err);
