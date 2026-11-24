async function getGitHubUser() {
  // read our JSON
  let response = await fetch("https://javascript.info/article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // wait 3 seconds
  //await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  console.log(githubUser);
}

getGitHubUser();
