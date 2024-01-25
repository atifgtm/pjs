let username =promt(("ENTER YOUR NAME"));
let math =parent(prompt("ENTER YOUR MATH NUBER"));
let maths = promt (promt("ENTER math   NAME"));
let eng = promt (promt("ENTER YOUR NAME"));
let urdu = promt (prompt("ENTER YOUR NAME"));
let islam = promt (prompt("ENTER YOUR NAME"));
let pst = promt (prompt("ENTER YOUR NAME"));

let obtainedmarks =math + eng + urdu + islam + pst;
let per = obtainedmarks/500*100
console.log(per);

if(per >=100 && per<=90){
    console.log("your grade is A+1")
} 
else if (per >=80 && per<=90){
    console .log("your grade is A+")
}

else if (per >=70 && per<=80){
    console .log("your grade is A")
}

else if (per >=60 && per<=70){
    console .log("your grade is B")
}

else if (per >=50 && per<=60){
    console .log("your grade is C")
}
else if (per >=40 && per<=50){
    console .log("your grade is pass")
}

else if (per >=30 && per<=40){
    console .log("your grade is fail")
}




