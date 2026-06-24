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
    document.getElementById("buyArchetypeGojiraField").style.display = "block";
    console.log("Displaying form")  
}


function getFormInputGojira() {
   const money = document.getElementById("moneyFieldPetrucci").value;
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");    

    if (money == "256") {
        OUTPUT.innerHTML += "<div class='positionText7'><p>You have sucessfully purched Archetype Gojira for $" + money + "</p></div>";
        console.log("Correct amount of money has been entered");
    } else {
        OUTPUT.innerHTML += "<div class='positionText7'><div class='textStyle'><p>Incorrect amount of money entered </p></div></div>";
        console.log("Incorrect amount of money has been entered");
    }
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

    if (money == "256") {
        OUTPUT.innerHTML += "<div class='positionText7'><p>You have sucessfully purched Archetype Petrucci for $" + money + "</p></div>";
        console.log("Correct amount of money has been entered");
    } else {
        OUTPUT.innerHTML += "<div class='positionText7'><div class='textStyle'><p>Incorrect amount of money entered </p></div></div>";
        console.log("Incorrect amount of money has been entered");
    }
}

  }



    
