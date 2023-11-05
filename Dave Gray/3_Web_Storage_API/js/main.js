
// Web Storage API

// Not part of the DOM - refers to the Window API 
// Available to JS via the global variable: window
// We don not have to type window. It is implied:


// 1) ///////////////////////////////////////////////////

// window.alert("ok 1")
// alert("ok 2")

// window.alert(window.location)
// alert(location)

// 2) /////////////////// sessionStorage  1 ////////////////////////////////

// const myObject = {
//     name : "Elyor",
//     hobbies : ["eat", "sleep", "code"],
//     logName : function() {
//         console.log(this.name);
//     }
// };

// sessionStorage.setItem("mySessionStorage", myObject);
// const mySessionData = sessionStorage.getItem("mySessionStorage");
// console.log(mySessionData);

// 3) /////////////////// sessionStorage 2   ////////////////////////////////
// const myObject = {
//     name : "Elyor",
//     hobbies : ["eat", "sleep", "code"],
//     logName : function() {
//         console.log(this.name);
//     }
// };

// sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));
// const mySessionDataSend = sessionStorage.getItem("mySessionStorage");
// console.log(mySessionDataSend);

// // const mySessionDataReceive = JSON.parse(sessionStorage.getItem("mySessionStorage"));
// const mySessionDataReceive = JSON.parse(mySessionDataSend);
// console.log(mySessionDataReceive);

// 4) /////////////////// localStorage 2   ////////////////////////////////

// const myObject = {
//     name : "Elyor",
//     hobbies : ["eat", "sleep", "code"],
//     logName : function() {
//         console.log(this.name);
//     }
// };

// localStorage.setItem("myLocalStorage", JSON.stringify(myObject));
// const myLocalDataSend = localStorage.getItem("myLocalStorage");
// console.log(myLocalDataSend);

// const myLocalDataReceive = JSON.parse(localStorage.getItem("myLocalStorage"));
// console.log(myLocalDataReceive);
