class customHTTP {
   async get(url) {
      const response = await fetch(url);
      const result = await response.json();
      return result;
   }

   async post(url, data) {
      const response = await fetch(url, {
         method: 'POST', // or 'PUT'
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
   }

   async put(url, data) {
      const response = await fetch(url, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
   }

   async delete(url) {
      const response = await fetch(url, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json'
         }
      });
      const result = await "DELETED";
      return result;
   }
}

