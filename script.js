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
    const POCKETMONEY_FIELD = document.getElementById("pocketMoneyInput");
    const userPocketMoney = Number(POCKETMONEY_FIELD.value);
     
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    OUTPUT.innerHTML += "<p>Your amount is $" + userPocketMoney + "</p>";
}

function calculateChange(_money, _price) {

    var change = _money - _price;

    return change;
    var change = calculateChange(userPocketMoney, 256);

    OUTPUT.innerHTML += "<p>You will get $" + change + " change</p>";

}


    

    
    function CountDownDays() {
    const item = document.getElementById("countDownDays")
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    var now = new Date().getTime();
    const endDate = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);
    }

 
 
   
    function addToCart() {
    
  const item = document.getElementById("addToCartField").value;
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");




    cart.push(item);

    OUTPUT.innerHTML += "<div class='positionText9'>You have just added " + item + " to your cart</div><br><br>";
    console.log ("You have just added " + item + " to your cart")
    OUTPUT.innerHTML += "<div class='positionText10'>These are the items in your cart: "+ item + "</div><br>";
    console.log("Message 'These are the items in your cart' is displaying");
    }
  for (var i = 0; i < cart.length; i++) {
    OUTPUT.innerHTML += cart[i] + "<br>";

  }
  function showForm2() {
    document.getElementById("buyArchetypePetrucciField").style.display = "block";
    console.log("Displaying form")  
}

function getFormInputPetrucci() {
    const money = document.getElementById("moneyFieldPetrucci").value;
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    if (money == "296") {
        OUTPUT.innerHTML += "<div class='positionText11'><p>You have successfully purchased Archetype Petrucci for $" + money + "</p></div>";
    } else {
        OUTPUT.innerHTML += "<div class='positionText11'><div class='textStyle'><p>Incorrect amount of money entered</p></div></div>";
    }
}

function CountDownDays2() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
}

function showForm3() {
    document.getElementById("buyArchetypeAbasiField").style.display = "block";
}

function getFormInputAbasi() {
    const money = document.getElementById("moneyFieldAbasi").value;
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    if (money == "236") {
        OUTPUT.innerHTML += "<div class='positionText12'><p>You have successfully purchased Archetype Abasi for $" + money + "</p></div>";
    } else {
        OUTPUT.innerHTML += "<div class='positionText12'><div class='textStyle'><p>Incorrect amount of money entered</p></div></div>";
    }
}