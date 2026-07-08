console.log("Running project Neural DSP site")


/*****************
 Main code
 ****************/
var classArray = ["Archetype Gojira", "Archetype Petrucci", "Archetype Abasi"];
var cart = [];
 /****************
  Functions
  ****************/    
function showForm() {      
    document.getElementById("pocketMoneyForm").style.display = "block";
}

function getPocketMoneyInput() {
    console.log("getPocketMoneyInput works");
    const POCKETMONEY_FIELD = document.getElementById("pocketMoneyInput");
    const userPocketMoney = Number(POCKETMONEY_FIELD.value);
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const archetypeGojiraPrice = 256;
    OUTPUT.innerHTML += "<div class='positionText7'><p>Your amount is $" + userPocketMoney + "</div></p>";
         
    if (userPocketMoney >= archetypeGojiraPrice) {
        var change = calculateChange(userPocketMoney, archetypeGojiraPrice);

        OUTPUT.innerHTML += "<p><div class='positionText13'>You will get $" + change + " change</p></div>";

    } else {
        OUTPUT.innerHTML += "<p><div class='positionText14'>You can't afford Archetype Gojira</p></div>";
    }
}

function calculateChange(_money, _price) {

    var change = _money - _price;

    return change;
    var change = calculateChange(userPocketMoney, 256);

    OUTPUT.innerHTML += "<div class='positionText7'><p>You will get $" + change + " change</p></div>";

}

function countDownDays(){

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
countDownDate.setDate(countDownDate.getDate() + 14);
countDownDate = countDownDate.getTime();

var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
OUTPUT.innerHTML = "<div class='positionText15'> <p>" +days + "d " + hours + "h " + minutes + "m " + seconds + "s <p></div>";

  if (distance < 0) {
    clearInterval(x);
    OUTPUT.innerHTML = "Buy Archetype Gojira";
  }
}, 1000);

}
    


function addToCart() {
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  const item = "Archetype Gojira";

  cart.push(item);

  OUTPUT.innerHTML += "<div class='positionText23'>You have just added " + item + " to your cart</div><br><br>";
  console.log("You have just added " + item + " to your cart");
}

function addToCart2() {
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  const item = "Archetype Petrucci";

  cart.push(item);

  OUTPUT.innerHTML += "<div class='positionText24'>You have just added " + item + " to your cart</div><br><br>";
  console.log("You have just added " + item + " to your cart");
}

function addToCart3() {
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  const item = "Archetype Abasi";

  cart.push(item);

  OUTPUT.innerHTML += "<div class='positionText25'>You have just added " + item + " to your cart</div><br><br>";
  console.log("You have just added " + item + " to your cart");
}
 
   
    
  function showForm2() {
       document.getElementById("pocketMoneyForm2").style.display = "block";
    console.log("Displaying 2nd form")  
}

function getPocketMoneyInput2() {
    console.log("getPocketMoneyInput2 works");
    const POCKETMONEY_FIELD = document.getElementById("pocketMoneyInput2");
    const userPocketMoney = Number(POCKETMONEY_FIELD.value);
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const archetypePetrucciPrice = 296;
    OUTPUT.innerHTML += "<div class='positionText17'><p>Your amount is $" + userPocketMoney + "</div></p>";
         
    if (userPocketMoney >= archetypePetrucciPrice) {
        var change = calculateChange(userPocketMoney, archetypePetrucciPrice);

        OUTPUT.innerHTML += "<p><div class='positionText18'>You will get $" + change + " change</p></div>";

    } else {
        OUTPUT.innerHTML += "<p><div class='positionText18'>You can't afford Archetype Petrucci</p></div>";
    }
}

function calculateChange(_money, _price) {

    var change = _money - _price;

    return change;
    var change = calculateChange(userPocketMoney, 296);

    OUTPUT.innerHTML += "<div class='positionText7'><p>You will get $" + change + " change</p></div>";

}
function CountDownDays2() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 14);
countDownDate = countDownDate.getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
OUTPUT.innerHTML = "<div class='positionText16'> <p>" +days + "d " + hours + "h " + minutes + "m " + seconds + "s <p></div>";

  if (distance < 0) {
    clearInterval(x);
    OUTPUT.innerHTML = "Buy Archetype Petrucci";
  }
}, 1000);
}

function showForm3() {
document.getElementById("pocketMoneyForm3").style.display = "block";
console.log("Displaying 3nd form")      
}

function getPocketMoneyInput3() {
    console.log("getPocketMoneyInput3 works");
    const POCKETMONEY_FIELD = document.getElementById("pocketMoneyInput3");
    const userPocketMoney = Number(POCKETMONEY_FIELD.value);
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const archetypeAbasiPrice = 236;
    OUTPUT.innerHTML += "<div class='positionText19'><p>Your amount is $" + userPocketMoney + "</div></p>";
         
    if (userPocketMoney >= archetypeAbasiPrice) {
        var change = calculateChange(userPocketMoney, archetypeAbasiPrice);

        OUTPUT.innerHTML += "<p><div class='positionText20'>You will get $" + change + " change</p></div>";

    } else {
        OUTPUT.innerHTML += "<p><div class='positionText22'>You can't afford Archetype Abasi</p></div>";
    }
}

function calculateChange(_money, _price) {

    var change = _money - _price;

    return change;
    var change = calculateChange(userPocketMoney, 236);

    OUTPUT.innerHTML += "<div class='positionText7'><p>You will get $" + change + " change</p></div>";

}

function CountDownDays3() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 14);
countDownDate = countDownDate.getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
OUTPUT.innerHTML = "<div class='positionText21'> <p>" +days + "d " + hours + "h " + minutes + "m " + seconds + "s <p></div>";

  if (distance < 0) {
    clearInterval(x);
    OUTPUT.innerHTML = "Buy Archetype Abasi";
  }
}, 1000);
}

function checkOut(){
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

}
