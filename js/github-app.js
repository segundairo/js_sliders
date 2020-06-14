const github = new githubUser();
const ui = new UI();
 
const searchText = document.getElementById('seachText');

searchText.addEventListener('keyup', function (e) {
   const username = e.target.value.trim();
   if (username !== '') {
      github.getUser(username. toLowerCase())
         .then(data => {
            if (data.profile.message !== 'Not Found') {
               // show profile
               ui.showProfile(data.profile);             
               ui.showRepos(data.repos);
            } else {
               // show not found
               ui.showMessage('RECORD NOT FOUND!', 'alert danger');               
            }
         })
         .catch(error => console.log(error));
   } else {
       // clear profile
      ui.clearProfile();
   }
});





