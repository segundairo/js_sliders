class githubUser {
   constructor()
   {
      this.clientId = 'Iv1.7b22e1338199b089';
      this.clientSecret = '4757204ce82edc732530236b77fb566f54a85890';
      this.url = 'https://api.github.com/users';
      this.repo_sort = 'created: asc';
      this.repo_count = 10;
}
   async getUser(user) {
      const profileResponse = await fetch(`${this.url}/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
      const profileRepos = await fetch(`${this.url}/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
      const profile = await profileResponse.json();
      const repos = await profileRepos.json();      
            
      return {
         profile,
         repos
      };
   }
}
