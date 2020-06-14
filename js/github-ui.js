class UI {
  constructor() {
     this.profile = document.querySelector(".profile");     
     this.repos = document.querySelector('.repos');
   }
 
  showProfile(user) {      
    this.profile.innerHTML = `
      <div class="profile__img">
         <div class="profile__photo">
            <img src="${user.avatar_url}" alt="profile avatar">
         </div>
         <a href="${user.html_url}" target="_blank" class="btn btn-primary">View Profile</a>
      </div>
      <div class="profile__content">
         <ul class="profile_stats">
            <li class="bg-primary">Public Repos ${user.public_repos}</li>
            <li class="bg-dark">Public Gits ${user.public_gists}</li>
            <li class="bg-orange">Followers ${user.followers}</li>
            <li class="bg-green">Following ${user.following}</li>
         </ul>
         <ul class="profile__info">
            <li><span>Company:</span> ${user.company}</li>
            <li><span>Website</span> ${user.blog}</li>
            <li><span>Location:</span> ${user.location}</li>
            <li><span>Member Since:</span> ${user.created_at}</li>
         </ul>
      </div>
      `;
   }

   showRepos(repos) {
         const repoUI = document.querySelector('.repos');
         let output = '';
         repos.forEach(repo => {
            output +=  `
               <div class='repo'>
                  <a href='${repo.git_url}' target='_blank'><p>${repo.description}</p></a>
                  <ul>
                  <li class='bg-primary'>Stars ${repo.stargazers_count}</li>
                  <li class='bg-green'>Watchers ${repo.watchers}</li>
                  <li class='bg-orange'>Forks ${repo.forks}</li>
                  </ul>
               </div>
            `;
         });
         repoUI.innerHTML = `
               <div class='heading-repo'>
                  ${output}
               </div>
         `;         
   }
   
  showMessage(message, msgType) {
     this.clearAlert();
      const parent = document.querySelector(".search-container");
      const before = document.querySelector(".searchBox");      
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = message;
      div.className = msgType;
      div.appendChild(p);
      parent.insertBefore(div, before);
      setTimeout(() => {
         this.clearAlert();
      }, 2000);
   }
   

   clearProfile() {
      this.profile.innerHTML = "";
      this.repos.innerHTML = "";
   }


   clearAlert() {
      const alert = document.querySelector('.alert');
      if (alert) {
         alert.remove();
      }
   }

}
