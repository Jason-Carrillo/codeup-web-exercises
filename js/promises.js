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
        let i = 0;

        while (i < data.length) {
            if (data[i].type === "PushEvent") {
                break;
            }
            i++;
        }
        console.log(data[i].created_at);
    });
}

console.log(lastCommit("Jason-Carrillo"))