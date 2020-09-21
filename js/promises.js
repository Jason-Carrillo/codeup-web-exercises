const githubID = fetch('https://api.github.com/users', {headers: {'Authorization': githubAPI}});

githubID.then(response => response.json().then(data => console.log(data))
)


