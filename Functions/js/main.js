// 1) ////////////////////////////////////
// const users = [
//     {
//         id:"1",
//         first_name :"Dave",
//         last_name: "Davison",
//         email:'davis@gmail.com',
//         phone:"92072215"
//     },
//     {
//         id:"2",
//         first_name :"Jopne",
//         last_name: "DJpnson",
//         email:'johnv@gmail.com',
//         phone:"94258826"
//     },
//     {
//         id:"3",
//         first_name :"Ronald",
//         last_name: "Jemesson",
//         email:'henederson@gmil.com',
//         phone:"941555626"
//     }
   
// ]

// const mappingFunc = () => {
//     users.map((user) => console.log(user.first_name))
// };
// mappingFunc(); 


// 2)  ////////////////////////////////////
// function mappingFunc() {

//     const users = [
//         {
//             id:"1",
//             first_name :"Dave",
//             last_name: "Davison",
//             email:'davis@gmail.com',
//             phone:"92072215"
//         },
//         {
//             id:"2",
//             first_name :"Jopne",
//             last_name: "DJpnson",
//             email:'johnv@gmail.com',
//             phone:"94258826"
//         },
//         {
//             id:"3",
//             first_name :"Ronald",
//             last_name: "Jemesson",
//             email:'henederson@gmil.com',
//             phone:"941555626"
//         },
      
//     ]

//     return (
//         users.map((user) => console.log(user.first_name))
//     );
// };
// mappingFunc();

// 3)  ////////////////////////////////////
// function mappingFunc() {

//     const users = [
//         {
//             id:"1",
//             first_name :"Dave",
//             last_name: "Davison",
//             email:'davis@gmail.com',
//             phone:"92072215"
//         },
//         {
//             id:"2",
//             first_name :"Jopne",
//             last_name: "DJpnson",
//             email:'johnv@gmail.com',
//             phone:"94258826"
//         },
//         {
//             id:"3",
//             first_name :"Ronald",
//             last_name: "Jemesson",
//             email:'henederson@gmil.com',
//             phone:"941555626"
//         },
//         {
//             id:"4",
//             first_name :"Soly",
//             last_name: "Jopson",
//             email:'jpopson@gmail.com',
//             phone:"23334556"
//         },
//         {
//             id:"5",
//             first_name :"Vandam",
//             last_name: "Vadimovich",
//             email:'vandam@gmail.com',
//             phone:"9422586656"
//         }
//     ];

//     // const myMapFunc = () => {
//     //     users.map((user) => console.log(user.first_name))
//     // };

//     function myMapFunc(){
//         users.map((user) => console.log(user.first_name))

//     };

//     return (
//        myMapFunc()
//     );
// };
// mappingFunc();

// 4) ////////////////////////////////////
// modulni ishlatish uchun index.html fayilga buni <script type="module" src="js/main.js"></script> qo'shib qo'yish kerak  /////////////
import users from './data.js'

const mappingFunc = () => {
    users.map((user) => console.log(user.first_name))
};
mappingFunc(); 




















