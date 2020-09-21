function gitData(url) {
    return fetch(url,
        {headers: {'Authorization': githubAPI}})
        .then(response => response.json());
}

function lastCommit(name){
gitData(`https://api.github.com/users/${name}/events`)
    .then(data => {
        return data;
    })
    .then(data => {
        console.log(data);

        for (i = 0; i < data.length; i++) {
            if (data[i].type === "PushEvent") {
                break;
            }
        }
        console.log(data[i].created_at);
    });
}

console.log(lastCommit("Jason-Carrillo"))