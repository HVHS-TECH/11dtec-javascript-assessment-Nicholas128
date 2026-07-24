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
    document.getElementById("enterNameForm").style.display = "block";
}


function getPocketMoneyInput() {
    console.log("getPocketMoneyInput works");
    const POCKETMONEY_FIELD = document.getElementById("pocketMoneyInput");
    const userPocketMoney = Number(POCKETMONEY_FIELD.value);
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const archetypeGojiraPrice = 256;


    OUTPUT.innerHTML += "<div class='positionText7'><p>You paid $" + userPocketMoney + "</div></p>";
         
    if (userPocketMoney >= archetypeGojiraPrice) {
        var change = calculateChange(userPocketMoney, archetypeGojiraPrice);

        OUTPUT.innerHTML += "<p><div class='positionText13'>You will get $" + change + " change</p></div>";
        OUTPUT.innerHTML +="<p><div class='positionText35'>Your 'imagainary' Archetype Gojira should start downloading soon</div></p>"

    } else {
        OUTPUT.innerHTML += "<p><div class='positionText13'>You can't afford Archetype Gojira. Please refresh the page when you have enough</p></div>";
    }
}

function getNameInput() {
    console.log("getNameInput works");

    const NAME_FIELD = document.getElementById("enterNameInput");
    const userName = NAME_FIELD.value;

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


    if (userName === "") {
        OUTPUT.innerHTML += "<p><div class='positionText43'>Please enter your name</div></p>";
        console.log("Please enter your name");
    } else {
        OUTPUT.innerHTML += "<p><div class='positionText30'>Receipt:</div></p>";
        OUTPUT.innerHTML += "<p><div class='positionText34'>Order Name: " + userName + "</div></p>";
    }


}

function getNameInput2() {
    console.log("getNameInput2 works");

    const NAME_FIELD = document.getElementById("enterNameInput2");
    const userName = NAME_FIELD.value;

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


        if (userName === "") {
        OUTPUT.innerHTML += "<p><div class='positionText44'>Please enter your name</div></p>";
        console.log("Please enter your name");
    } else {
        OUTPUT.innerHTML += "<p><div class='positionText36'>Receipt:</div></p>";
        OUTPUT.innerHTML += "<p><div class='positionText31'>Order Name: " + userName + "</div></p>";
    }
}

function getNameInput3() {
    console.log("getNameInput3 works");

    const NAME_FIELD = document.getElementById("enterNameInput3");
    const userName = NAME_FIELD.value;

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


    if (userName === "") {
        OUTPUT.innerHTML += "<p><div class='positionText45'>Please enter your name</div></p>";
        console.log("Please enter your name");
    } else {
        OUTPUT.innerHTML += "<p><div class='positionText38'>Receipt:</div></p>";
        OUTPUT.innerHTML += "<p><div class='positionText32'>Order Name: " + userName + "</div></p>";
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
    
OUTPUT.innerHTML = "<div class='positionText15'> <p>" +days + "d " + hours + "h " + minutes + "m " + seconds + "s <p></div>";

  if (distance < 0) {
    clearInterval(x);
    OUTPUT.innerHTML += "Please Click the Buy Now button for Archetype Gojira";
  }
}, 1000);

}
    
    
function addToCart() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    document.getElementById("undoButton").style.display = "block";
    const item = "Archetype Gojira";

   
if (cart.some(product => product.name === item)) {
    OUTPUT.innerHTML += "<div class='positionText27'>Error: You can't add " + item + " again because it is already in your cart.</div>";
    return;
}

    
    cart.push({
    name: "Archetype Gojira",
    price: 256
    });

    document.getElementById("checkoutButton").style.display = "block";

    OUTPUT.innerHTML += "<div class='positionText23'>You have just added " + item + " to your cart</div>";
    console.log("You have just added " + item + " to your cart");
}
      
           

function addToCart2() {
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  document.getElementById("undoButton2").style.display = "block";
  const item = "Archetype Petrucci";

if (cart.some(product => product.name === item)) {
    OUTPUT.innerHTML += "<div class='positionText28'>Error: You can't add " + item + " again because it is already in your cart.</div>";
    return;
}

      cart.push({
        name: "Archetype Petrucci",
        price: 296
    });

  document.getElementById("checkoutButton").style.display = "block";

  OUTPUT.innerHTML += "<div class='positionText24'>You have just added " + item + " to your cart</div><br><br>";
  console.log("You have just added " + item + " to your cart");

}

function addToCart3() {
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  document.getElementById("undoButton3").style.display = "block";

  const item = "Archetype Abasi";

if (cart.some(product => product.name === item)) {
    OUTPUT.innerHTML += "<div class='positionText29'>Error: You can't add " + item + " again because it is already in your cart.</div>";
    return;
}

      cart.push({
        name: "Archetype Abasi",
        price: 236
    });

  document.getElementById("checkoutButton").style.display = "block";

  OUTPUT.innerHTML += "<div class='positionText25'>You have just added " + item + " to your cart</div><br><br>";
  console.log("You have just added " + item + " to your cart");

}

function city() {

    console.log("city is running");

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    document.getElementById("buyItemsInCartForm").style.display = "block";

    OUTPUT.innerHTML += "<div class='city'><div class='text'><h1>These are the items in your cart</h1></div></div>";



    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        OUTPUT.innerHTML += "<div style='position:absolute; top:" + (860 + i * 35) +"px; left:740px;'><div class='text2'><h3>" +cart[i].name + " - $" + cart[i].price +"</h3></div></div>";
         total += cart[i].price;
    }

    OUTPUT.innerHTML +="<div class='positionText26'><div class='text3'><h2>Total cost $" + total + "</h2></div></div>";


}


function buyItemsInCart(){

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    console.log("buyItemsInCart works");

    const BUYITEMSINCART_FIELD = document.getElementById("buyItemsInCartInput");
    const userMoney = Number(BUYITEMSINCART_FIELD.value);


    
    var totalPrice = 0;
    var itemsBought = "";

    for (var i = 0; i < cart.length; i++) {

        totalPrice += cart[i].price;

        itemsBought += cart[i].name + " - $" + cart[i].price + "<br>";
    }


    OUTPUT.innerHTML +=  "<div class='positionText46'><p>You paid $" + userMoney + "</p></div>";


    OUTPUT.innerHTML += "<div class='positionText48'><p>Items purchased:<br>" + itemsBought + "</p></div>";



    if (userMoney >= totalPrice) {

        var change = calculateChange(userMoney, totalPrice);


        OUTPUT.innerHTML += "<div class='positionText47'><p>Total cost: $" + totalPrice + "</p></div>";


        OUTPUT.innerHTML += "<div class='positionText47'><p>You will get $"  + change + " change</p></div>";


        OUTPUT.innerHTML += "<div class='positionText48'><p>Your 'imaginary' plugins should start downloading soon</p></div>";

    } 
    
    else {
     OUTPUT.innerHTML += "<div class='positionText47'><p>You can't afford these items.</p></div>";
    }

}

 
   
    
  function showForm2() {
       document.getElementById("pocketMoneyForm2").style.display = "block";
       document.getElementById("enterNameForm2").style.display = "block";
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

        OUTPUT.innerHTML +="<p><div class='positionText37'>Your 'imagainary' Archetype Petrucci should start downloading soon</div></p>"

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
    OUTPUT.innerHTML += "Please Click the Buy Now button for Archetype Petrucci";
  }
}, 1000);
}

function showForm3() {
document.getElementById("pocketMoneyForm3").style.display = "block";
 document.getElementById("enterNameForm3").style.display = "block";
console.log("Displaying 3rd form")      
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

        OUTPUT.innerHTML +="<p><div class='positionText39'>Your 'imagainary' Archetype Abasi should start downloading soon</div></p>"

    } else {
        OUTPUT.innerHTML += "<p><div class='positionText20'>You can't afford Archetype Abasi</p></div>";
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
    OUTPUT.innerHTML += "Please Click the Buy Now button for Archetype Abasi";
  }
}, 1000);


}

function undoButton(){
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
document.getElementById("undoButton").style.display = "block";

 cart = cart.filter(product => product.name !== "Archetype Gojira");

OUTPUT.innerHTML += "<div class='positionText40'><p>Archetype Gojira has been removed from your cart</p>"
console.log("Archetype Gojira has been removed from your cart")
}

function undoButton2(){
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
document.getElementById("undoButton2").style.display = "block";

 cart = cart.filter(product => product.name !== "Archetype Petrucci");

OUTPUT.innerHTML += "<div class='positionText41'><p>Archetype Petrucci has been removed from your cart</p>"
console.log("Archetype Petrucci has been removed from your cart")
}

function undoButton3(){
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
document.getElementById("undoButton3").style.display = "block";

 cart = cart.filter(product => product.name !== "Archetype Abasi");

OUTPUT.innerHTML += "<div class='positionText42'><p>Archetype Abasi has been removed from your cart</p>"
console.log("Archetype Abasi has been removed from your cart")
}
