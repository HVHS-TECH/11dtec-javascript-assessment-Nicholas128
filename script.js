console.log("Running project Neural DSP site")


/*****************
 Main code
 ****************/
var now = new Date().getTime();


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
        OUTPUT.innerHTML = "You have entered the correct amount of Money";
            console.log("Correct amount of money has been entered")  
    }

    }
    
 

 

