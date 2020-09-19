const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let languageUsers = users.filter((user) => user.languages.length > 2);

console.log(languageUsers)

let emailUsers = users.map((user) => user.email)

console.log(emailUsers);

let averageYears = users.reduce((accumulation, user) => {
   let totalYears = user.yearsOfExperience + accumulation
    return totalYears
}, 0);


console.log(averageYears/users.length);

let longestEmail = users.reduce((acc, user) => {

    if(user.email.length > acc.length){
        return user.email
    } else {
        return acc
    }

}, "");

console.log(longestEmail)

let userNames = users.reduce((account, name, index, array)=> {
    if (index === 0){
        return name.name;
    } else if (index === array.length - 1 ){
        return account + ", and " + name.name;
    } else {
        return account + ", " + name.name;
    }
}, "");

console.log(userNames);
