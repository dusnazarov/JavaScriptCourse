// 1) /////////////////////////
// const anotherObj = {
//     alive: true,
//     answer: 42,
//     hobbies: ["Eat", "Sleep", "Code"],
//     beverage: {
//         morning : "Coffee",
//         afternoon: "Iced Tea"

//     },
//     action: function() {
//         return `Time for ${this.beverage.morning}`
//     }
// };

// // console.log(anotherObj.alive)
// // console.log(anotherObj.hobbies[0])
// // console.log(anotherObj.beverage)
// // console.log(anotherObj.beverage["morning"])
// console.log(anotherObj.action())

// 2) /////////////////////////////////////////////
// const vehicle = {
//     wheels : 4,
//     engine: function() {
//         return "Vrrooom !"
//     }
// }

// const truck = Object.create(vehicle);
// truck.doors = 2;
// // console.log(truck);
// // console.log(truck.wheels);  // Inheritance
// // console.log(truck.engine());

// const car = Object.create(vehicle)
// car.doors = 4;
// car.engine = function() {
//     return "Woooosh!"
    
// }
// // console.log(car.engine());

// const tesla = Object.create(car);
// console.log(tesla.wheels);
// console.log(tesla.engine());

// tesla.engine = function () {
//     return "Shhhhh ..."
// }
// console.log(tesla.engine());

// 3) /////////////////////////////////////////////

// const band = {
//     vocals: "Robert Plant",
//     guitar: "Jimmy Page",
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };

// console.log(Object.keys(band));
// console.log(Object.values(band));

// 4) /////////////////////////////////////////////
// const band = {
//     vocals: "Robert Plant",
//     guitar: "Jimmy Page",
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };

// for (let job in band) {
//     console.log(`On ${job}, it's ${band[job]}`);
// }

// 5) ///////////  destruction objects   ////////////////////
// const band = {
//     vocals: "Robert Plant",
//     guitar: "Jimmy Page",
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };

// const {vocals : myVocals, guitar : myGuitar, bass : myBass, drums : myDrums  } = band;

// console.log(myVocals)
// console.log(myDrums)



// 6) ///////////  destruction objects   ////////////////////
// const band = {
//     vocals: "Robert Plant",
//     guitar: "Jimmy Page",
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };

// const {vocals, guitar, bass, drums } = band;

// console.log(vocals)
// console.log(drums)

// 7) ///////////  props   ////////////////////
// const props = {
//     first_name :"Elyor",
//     last_name: "Dusnazarov",
//     email:'elyor.dusnazarov@gmail.com',
//     phone:"946407526"
// }

// console.log(`my first name is ${props.first_name}`)


// 8) /////////// destruction objects  ////////////////////
// const props = {
//     first_name :"Elyor",
//     last_name: "Dusnazarov",
//     email:'elyor.dusnazarov@gmail.com',
//     phone:"946407526"
// }


// const {first_name, last_name, email, phone } = props
// // console.log(`my first name is ${props.first_name}`)
// console.log(`my first name is ${ first_name }`)



// const users = [
//     // {
//     //     id:"1",
//     //     first_name :"Dave",
//     //     last_name: "Davison",
//     //     email:'davis@gmail.com',
//     //     phone:"92072215"
//     // },
//     // {
//     //     id:"2",
//     //     first_name :"Jopne",
//     //     last_name: "DJpnson",
//     //     email:'johnv@gmail.com',
//     //     phone:"94258826"
//     // },
//     // {
//     //     id:"3",
//     //     first_name :"Ronald",
//     //     last_name: "Jemesson",
//     //     email:'henederson@gmil.com',
//     //     phone:"941555626"
//     // },
//     // {
//     //     id:"4",
//     //     first_name :"Soly",
//     //     last_name: "Jopson",
//     //     email:'jpopson@gmail.com',
//     //     phone:"23334556"
//     // },
//     // {
//     //     id:"5",
//     //     first_name :"Vandam",
//     //     last_name: "Vadimovich",
//     //     email:'vandam@gmail.com',
//     //     phone:"9422586656"
//     // }
// ]

// console.log(parseInt(users.length))
// // console.log(users[users.length - 1])
// // console.log(parseInt(users[users.length - 1].id) + 1)


// const id = users.length ? parseInt(users[users.length - 1].id) + 1 : 1;

// console.log(id)




// 6) ///////////  destruction objects   ////////////////////
// const band = {
//     vocals: "Robert Plant",
//     guitar: "Jimmy Page",
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };




    // const input = (vocals, guitar) =>{
    //     console.log([vocals])
    //     console.log([guitar])

    // }
    // input(vocals="Robert Plant", guitar="Jimmy Page" )



const {vocals, guitar, bass, drums } = band;

console.log(band.vocals)
// console.log(drums)

// band = (vocals="Robert Plant", guitar="Jimmy Page", bass="John Paul")





// const input = (type, placeholder, name) => {    
//     console.log({type})
//     console.log({placeholder})
//     console.log({name}) 

//     // console.log([type])
//     // console.log([placeholder])
//     // console.log([name]) 
// }
// // const {type, placeholder, name} = input  

// input(type="text", placeholder="Top Text", name="TopText" )


meme = {
    topText: "elyor",
    bottomText: "shuhrat"    
}

console.log(meme.topText)