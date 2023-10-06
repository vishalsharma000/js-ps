const user = {
    username: "sumit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

//function one() {
//    let username = "sumit"
//    console.log(this.username);
//}

//one()

//const one = function() {
//    let username = "sumit"
//    console.log(this.username);
//}

const one = () => {
    let username = "sumit"
    console.log(this)
}

//one()

//const addTwo = (num1, num2) => {
//    return num1 + num2
//}

//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "sumit"})

console.log(addTwo(3, 5))

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()