let mydata = {
    name : "peter",
    city :"karachi",
    age : 54,
    salary : 1000,
    grade : "c"
}

//two method of getting data from an object
//first method
console.log(mydata["city"]);
console.log(mydata["age"]);

//second methed
console.log(mydata.salary);
console.log(mydata.grade);
console.log(mydata);
//getting data with using loop 

for(let i in mydata){
    console.log(i , myData[i]);
}

//ARITHMETIC OPERATIONS
//LOGICAL OPERATIONS

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("and opteration");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(!false || false);


//comparison
//>greater than
//<less then 
//>=greater then equaql to
//=< less then equal to


//  == it means equal
// === equal type che

let q = 70;
q+=10;
console.log(q);
// post increment
 console.log(q+1); //q - q+1  70+1 => 71
console.log(q);// 71

//pre increment
console.log(++q);// ++q  71 +1

//descrement
let e = 50;
console.log(e);  // q= e-1 50-1 =>
console.log(e-1);