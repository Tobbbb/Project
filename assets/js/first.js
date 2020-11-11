/* alert myFunc; = function(){
    "Hello World!";
}
console.log(myFunc); */

/*var y = 5;
console.log(y)

var myFunc = function (){
    var x = 4;
    console.log(x);
}
myFunc();

var myFunct = function(num){
    if (num % 2 == 0){
        console.log("even number");
    }
    else{
        console.log("Odd Number");
    }
}

myFunct(13); 

/*var arr = [1,3,5,7,9];
for(i=0; i<arr.length; i++){
    console.log(arr[i]);
} */
/*var student = {
    name: "Tobi",
    age: 40,
    address: "3, lawanson street",
    likes: "cooking"
};
for (i in student){
    console.log(i+ " : " +student[i]);
} */

// F to C
// (0F - 32) x 5/9 = 17.78c;
// C to F
// (0c x 9/5) + 32 = 32F

var fC = function(far){
    var cel = Math.round((far - 32) * (5/9));
    console.log(cel + "Celsius");
}
fC(58);

var cF = function(cel){
    var far = Math.round((cel * 9/5) + 32);
    console.log(far + "Fahrenheit");
}
cF(82); 

/* var age = 5;

while (age < 10) {
    console.log("Your Age Is Less Than 10");
    age++;
}

document.write("You Are Now Over 10"); 

// OBJECTS

/*var myStudent = new Object();
myStudent.name = "Tobi";
myStudent.age = "40";
myStudent.qualification = "Degree";

myStudent.fullName = function(){
    console.log(myStudent.name + " " + myStudent.age + " " + myStudent.qualification)
}
myStudent.fullName(); */


/* var i = 0;
while(i < 3){
    console.log(i + " " + "is" +" " + "the" +" "+ i + "number");
    i++;
} */

/*var students = {
    name: "stella",
    age: "38",
    height: "5ft",
    fullName : function(){
        console.log(students.name + " " + students.age + " " + students.height)
    }
}
students.fullName(); */
/*var myStudent = new Object();
myStudent.name = "stella";
myStudent.age = "38 years";
myStudent.height = "5ft";

myStudent.fullName = function(){
    console.log(myStudent.name + " " + myStudent.age + " " + myStudent.height)
} 
myStudent.fullName(); */

