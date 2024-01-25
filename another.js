let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "HELLO WORLD"
elem[0].style.backgroundColor ="yellow";
elem[0].style.height ="400px";
elem[0].style.textAlign ="center";
elem[0].style.fontSize ="40px";

let newInp = document.createElement('input');
newInp.className = "form-control mt-3";
elem[0].appendChild(newInp);

newInp.addEventListener('keyup', myFun);
    function myFun(){
        console.log("FUNTION IMPLEMENT ON INPUT FEILD");
    }

let newBtn = document.createElement('butten');

elem[0].appendChild(newBtn);
newBtn.innerHTML ="CLICK HERE";
newBtn.className = "btn btn-dark mt-5";
newBtn.style.display ="block";
newBtn.style.backgoundcolor ="black";
newBtn.style.color ="red";
newBtn.style.borderRadius ="100px"
newBtn.style.fontSize = "24px";
newBtn.style.letterSpacing ="14px";
newBtn.style.margin ="0px auto";


newBtn.addEventListener('click' , pencil)
    function pencil(){
        console.log("The Button Is Clicked!");
        newBtn.textContent ="wow!";
        newInp.value =""
    }



    