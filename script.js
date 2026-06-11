console.log("Running project Neural DSP site")


/*****************
 Main code
 ****************/



 /****************
  Functions
  ****************/ 
function showForm() {
    document.getElementById("buyArchetypeGojiraField").style.display = "block";
}


    function buyArchetypeGojira() {
    const item = document.getElementById("buyArchetypeGojiraField").value;
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    
    if (item == "256") {
        OUTPUT.innerHTML = "You have entered the correct amount of Money";
    }

    }
    
 

 

