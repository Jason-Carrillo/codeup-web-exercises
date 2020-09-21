function lastCommit(name){
    fetch(`https://api.github.com/users/${name}/events`, {headers: {'Authorization': githubAPI}})
        .then(response => response.json())
        .then(data => {
            return data;})
        .then(data => {
            console.log(data);
            for (i = 0; i < data.length; i++) {
                if (data[i].type === "PushEvent") {
                    console.log(data.length);
                    break;
                }
            }
            console.log("Last commit date: " + data[i].created_at);
        });
}

console.log(lastCommit("Jason-Carrillo"))