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


      function buyArchetypeGojira() {
    const item = document.getElementById("buyArchetypeGojiraField").value;
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    
    if (item == "256") {
    OUTPUT.innerHTML = "You have entered the correct amount of money";
    console.log("Correct amount of money has been entered")  
    }

    else {
    OUTPUT.innerHTML = "Incorrect amount of money entered";
    console.log("inncorrect amount of money has been entered")
    }

    }

    
    function CountDownDays() {
    const item = document.getElementById("countDownDays").style.display = "block";
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    var now = new Date().getTime();
    const endDate = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);
    }
 

 
    
