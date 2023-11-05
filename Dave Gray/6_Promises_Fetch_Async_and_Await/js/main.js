
// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// Promises
// 3 states: Pending, Fulfilled, Rejected



// 1) /////////////////////////////////
// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved the promise!");        
//     } else {
//         reject("No! rejected the promise.")
//     }
// });

// console.log(myPromise);

// 2) /////////////////////////////////
// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved the promise!");        
//     } else {
//         reject("No! rejected the promise.")
//     }
// });

// console.log(myPromise);

// myPromise.then(value => {
//     console.log(value)
// });


// 3) /////////////////////////////////
// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved the promise!");        
//     } else {
//         reject("No! rejected the promise.")
//     }
// });

// console.log(myPromise);

// myPromise.then(value => {
//     return value + 1
// })
// .then(newValue => {
//     console.log(newValue);
// });

// 4) /////////////////////////////////
// const myPromise = new Promise((resolve, reject) => {
//     const error = true;
//     if (!error) {
//         resolve("Yes! resolved the promise!");        
//     } else {
//         reject("No! rejected the promise.")
//     }
// });

// console.log(myPromise);

// myPromise.then(value => {
//     return value + 1
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.error(err);
// })

// // 1) /////////////////////////////////
// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved the promise!");        
//     } else {
//         reject("No! rejected the promise.")
//     }
// });

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("myNextPromise resolved!");

//     }, 5000);
// });

// myNextPromise.then(value => {
//     console.log(value);
// });

// myPromise.then(value => {
//     console.log(value);
// });

// 1) ////////// pending //////////
// pending
// const users = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(users)

// 2) ////////// pending //////////

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })

// 3) ////////// pending //////////

// const users = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         data.forEach(user => {
//             console.log(user);
//         })       
//     });

// 1) //////////  Async / Await /////////
// const myUsers = {
//     userList: []
// }

// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const jsonUserData = await response.json();
//     console.log(jsonUserData);
//     return jsonUserData;
// }

// myCoolFunction();

// 2) //////////  Async / Await /////////
// const myUsers = {
//     userList: []
// }

// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const jsonUserData = await response.json();   
//     return jsonUserData;
// }

// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     console.log(data);
// }
// anotherFunc();


// 3) //////////  Async / Await /////////

// const myUsers = {
//     userList: []
// }

// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const jsonUserData = await response.json();   
//     return jsonUserData;
// }

// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);
// }
// anotherFunc();
// console.log(myUsers.userList)



// 4) //////////  Async / Await /////////
// const getAllUserTitles = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const jsonUserData = await response.json();  
    
//     const userTitleArray = jsonUserData.map(user => {
//         return user.title;
//     });
//     console.log(userTitleArray);
// }
// getAllUserTitles();


// 1) //////////  2nd parametr of Fetch is a object /////////
const getDadJoke = async () => {

    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData.joke);
}    
    getDadJoke()
