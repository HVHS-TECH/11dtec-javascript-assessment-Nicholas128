console.log("Running Checkout JS")

/*****************
 * Main code
 *****************/
var classArray = ["Archetype Gojira", "Archetype Petrucci", "Archetype Abasi"];


 /*****************
  * Functions
 ******************/
function checkOut() {
  const item = document.getElementById("checkOutField").value;
  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

  for (var i = 0; i < classArray.length; i++) {
    OUTPUT.innerHTML += "<p>list " + i + ": " + classArray[i] + "</p><br>";
  }
}