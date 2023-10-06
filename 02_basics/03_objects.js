// singleton
// Object.create

// object literals

const mySum = Symbol("Key1")

const JsUser = {
    name: "Sumit",
    "full name": "Sumit Sharma",
    age: 18,
    [mySum]: "mykey1",
    location: "Jaipur",
    email: "abcd@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Saturday"]
}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser[mySum]);

JsUser.email = "dcba@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "jhgf@email.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
