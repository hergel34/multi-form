
const Page1E1 = document.getElementById('Page1');
const Page2E1 = document.getElementById('Page2');
const Page3E1 = document.getElementById('Page3');
const Page4E1 = document.getElementById('Page4');
const Page5E1 = document.getElementById('Page5');


const submitBtnE1 = document.getElementById('submit-btn');
const goBackE1 = document.getElementById('go-btn');
const nextE1 = document.getElementById('next-btn');
const goBack2E1 = document.getElementById('go-back');

const step1E1 = document.getElementById('step1');
const step2E1 = document.getElementById('step2');
const step3E1 = document.getElementById('step3');
const step4E1 = document.getElementById('step4');

const goPage4 = document.getElementById('go-to-page4');
const backPage4 = document.getElementById('back-to-page4');
const confirmE1 = document.getElementById('Confirm');


submitBtnE1.addEventListener("click", function(e) {

    Page1E1.classList.add('hide');
    Page2E1.classList.add('active');
    step1E1.classList.add('hide1');
    step2E1.classList.remove('hide1');

    e.preventDefault()

})

goBackE1.addEventListener("click", function(e) {
    Page1E1.classList.remove('hide');
    Page2E1.classList.remove('active');
    step1E1.classList.remove('hide1');
    step2E1.classList.add('hide1');

    e.preventDefault()

})

goPage4.addEventListener("click", () => {
    Page3E1.classList.remove('active');
    Page4E1.classList.add('active');
    step3E1.classList.add('hide1');
    step4E1.classList.remove('hide1');
})

nextE1.addEventListener("click", function(e) {

    Page2E1.classList.remove('active');
    Page3E1.classList.add('active');
    step2E1.classList.add('hide1');
    step3E1.classList.remove('hide1');
    
    e.preventDefault()
})


goBack2E1.addEventListener('click', function(e) {
    Page2E1.classList.add('active');
    Page3E1.classList.remove('active');
    step3E1.classList.add('hide1');
    step2E1.classList.remove('hide1');

    e.preventDefault()
})

backPage4.addEventListener('click', () => {
    Page3E1.classList.add('active');
    Page4E1.classList.remove('active');
    step3E1.classList.remove('hide1');
    step4E1.classList.add('hide1');
})

confirmE1.addEventListener('click', () => {
    Page4E1.classList.remove('active');
    Page5E1.classList.add('active');
    step4E1.classList.add('hide1');
})



let toggle = document.querySelector(".toggle");
let text = document.querySelector(".text");
let text1 = document.querySelector(".text1");

const toggleE1 = document.getElementById('toggle-btn');
let monthlyE1 = document.querySelectorAll(".monthly");
let monthly1E1 = document.querySelectorAll(".monthly1");

let planE1 = document.getElementById("plans");
let testE1 = document.getElementById("test1");
let testE2 = document.getElementById("test2");
let testE3 = document.getElementById("test3");



let m = document.getElementById("monthly-value");
// let y = document.getElementById("yearly-value");
let total = document.getElementById("total-monthly");
let sum;
let arcade;
let advance;
let pro;

var selectplanM = ["Arcade(Monthly)", "Advance(Monthly", "Pro(Monthly)"];
var selectplanY = ["Arcade(Yearly)", "Advance(Yearly)", "Pro(Yearly)"];
var month = ["9", "12", "15"];
var year = ["90", "120", "150"];



var a;
var b;

a = "Arcade"
b = "Advance";

c = 50;
d = 11;

var arcadeM, arcadeY, advanceM, advanceY, proM, proY;  


// document.getElementById("test").innerHTML = "9";
var monthly11;

arcadeM = 9;
arcadeY = 90;
advanceM = 12;
advanceY = 120;
proM = 15;
proY = 150;
let mo = "(Monthly)";
let yr = "(Yearly)";


// testE1.innerHTML = "+$" + e + "/mo";


sum = c + d;

total.innerText = "+$" + sum + "/mo";

// document.getElementById("total-monthly").innerText = "+$" + z + "/mo" ;

var value1 = "1";
var value2 = "2";
var value1;
var value2;


document.getElementById("per-month1").innerHTML = "+$" + value1 + "/mo";
document.getElementById("per-month2").innerText = "+$2/mo";
let x = document.getElementById('per-month3');
    x.innerText = "+$2/mo";    



    function Animatedtoggle() {
    toggle.classList.toggle("active"); 

            // label color change
    if(toggle.classList.contains("active")) {
        text.classList.add("active");
        text1.classList.add("active");

        // document.getElementById("mo-yr").innerHTML = yr;  
        // document.getElementById("mo-yr2").innerHTML = "(per year)";
    }
    else {
        text.classList.remove("active");
        text1.classList.remove("active");

        // document.getElementById("mo-yr").innerHTML = mo;
        // document.getElementById("mo-y2").innerHTML = "(per month)";

    }
        // 2 months-free pop up
    for (i = 0; i < monthly1E1.length, i < monthly1E1.length; i++)

    if(toggle.classList.contains("active")) {
        monthly1E1[i].classList.add('active');
       }
    else {
        monthly1E1[i].classList.remove('active');
    }
            // per month or year plan

     if (toggle.classList.contains("active")) {
        testE1.innerText = "+$" + arcadeY + "/yr";
        testE2.innerText = "+$" + advanceY + "/yr";
        testE3.innerText = "+$" + proY + "/yr";

    }
    else {
        testE1.innerText = "+$" + arcadeM + "/mo";
        testE2.innerText = "+$" + advanceM + "/mo";
        testE3.innerText = "+$" + proM + "/mo";
    }
         // check box value

    if (toggle.classList.contains("active")) {
        document.getElementById("per-month1").innerText = "+$10/yr";
        document.getElementById("per-month2").innerText = "+$20/yr";
        document.getElementById("per-month3").innerText = "+$20/yr";

    }
    else {
        document.getElementById('per-month1').innerText = "+$1/mo";
        document.getElementById('per-month2').innerText = "+$" + value2 + "/mo";
        document.getElementById('per-month3').innerText = "+$" + value2 + "/mo";
    }


           
}

//   toggleE1.addEventListener('click', function() {
         
//     for (i = 0; i < monthly1E1.length, i < monthlyE1.length; i++)

//        if(toggle.classList.contains("active")) {
//         monthlyE1[i].classList.add('active');
//         monthly1E1[i].classList.add('active');
//        }
//        else {
//         monthly1E1[i].classList.remove('active');
//         monthlyE1[i].classList.remove('active');
//        }     
    
//   })

// Selection for monthly-plan
let arcade1 = document.querySelector(".arcade");
let advance1 = document.querySelector(".advance");
let pro1 = document.querySelector(".pro")

function option1() {
    arcade1.classList.add("active");
    advance1.classList.remove("active");
    pro1.classList.remove("active"); 

}


function option2() {
    advance1.classList.add("active");
    arcade1.classList.remove("active");
    pro1.classList.remove("active"); 

}

function option3() {
    pro1.classList.add("active");
    advance1.classList.remove("active");
    arcade1.classList.remove("active");
}



var changeE1 = document.getElementById('change');

let checkboxE1 = document.getElementById('checkbtn1');
let checkboxE2 = document.getElementById('checkbtn2');
let checkboxE3 = document.getElementById('checkbtn3');


let oneE1 = document.querySelector(".one");
let twoE1 = document.querySelector(".two");
let threeE1 = document.querySelector(".three");


function check1() {
    if (checkboxE1.checked == true) 
        {
        oneE1.classList.add("active");
    }
    else {
        oneE1.classList.remove("active");
    }
}

function check2() {
    if (checkboxE2.checked == true) 
        {
        twoE1.classList.add("active");
    }
    else {
        twoE1.classList.remove("active");
    }
}

function check3() {
    if (checkboxE3.checked == true) 
        {
        threeE1.classList.add("active");
    }
    else {
        threeE1.classList.remove("active");
    }
}

changeE1.addEventListener("click", () => {
    Page2E1.classList.add('active');
    Page4E1.classList.remove('active');
    step2E1.classList.remove('hide1');
    step4E1.classList.add('hide1');
})





  