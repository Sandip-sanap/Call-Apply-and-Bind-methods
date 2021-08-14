//call () and apply () executes the function immediately, whereas bind () returns a new function. the object/value on which the function executes depends on the this value defined by the context.

// Method :-call()>>
//The call() method calls the function with a given this value and allows passing in arguments one by one separating them with commas:

let student = {
    FirstName: "Sandip",
    LastName: "Sanap",
    }
let mentor = {
    FirstName: "Ragav",
    LastName: "kumar",
}
function printFullname (rating) {
    console.log(this.FirstName + " " + this.LastName + " teaching skill :" + rating);
}
printFullname.call(student,5);// this is metod call()
printFullname.call(student,5);// this is metod call()


// Method Apply:
//The apply() method calls the function with a given this value and allows passing in arguments as an array (or an array-like object).
let student = {
    FirstName: "Sandip",
    LastName: "Sanap",
    }
let mentor = {
    FirstName: "Ragav",
    LastName: "kumar",
}
function printFullname (rating,score) {
    console.log(this.FirstName + " " + this.LastName + " teaching skill :" + rating + " and the score is "+score);
}
printFullname.apply(student,[4,7]);
printFullname.apply(mentor,[5,10]);//this is methos Apply()

//Methos Bind
//The bind() method returns a new function and allows passing in a this array and any number of arguments.

let student = {
    FirstName: "Sandip",
    LastName: "Sanap",
    }
let mentor = {
    FirstName: "Ragav",
    LastName: "kumar",
}
function printFullname (rating,score) {
    console.log(this.FirstName + " " + this.LastName + " teaching skill :" + rating + " and the score is "+score);
}
let NewFun1=printFullname.bind(student);
NewFun1(4,7);
let NewFun2=printFullname.bind(mentor);
NewFun2(5,10);// this is method Bind()























// /The bind() method takes an object as an first arguments and creates a new function
// let TrainingCentre={
//     Name:"Guvi",
//     content:"the tech deserve you",
// }
