console.log("Running project Neural DSP site")


/*****************
 Main code
 ****************/


 /****************
  Functions
  ****************/    
function showForm() {
    document.getElementById("buyArchetypeGojiraField").style.display = "block";
    console.log("Displaying form")  
}


function getFormInput() {
    const money = document.getElementById("moneyField").value;
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");    

    if (money == "256") {
        OUTPUT.innerHTML = "<div class='positionText7'><p>You have sucessfully purched Archetype Gojira for $" + money + "</p></div>";
        console.log("Correct amount of money has been entered");
    } else {
        OUTPUT.innerHTML = "<div class='positionText7'><div class='textStyle'><p>Incorrect amount of money entered </p></div></div>";
        console.log("Incorrect amount of money has been entered");
    }
}

    

    
    function CountDownDays() {
    const item = document.getElementById("countDownDays").style.display = "block";
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    var now = new Date().getTime();
    const endDate = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);
    }

    function addToCart() {
    OUTPUT.innerHTML = "<p>Incorrect amount of money entered</p>";  
    console.log("Item sucessfully added to cart");
    }
 

 
    
