function findSquare (formId){
    // Get the input value
    var inputNum = formId.textin.value;
     // If valid, compute its square
     var result;
     if (inputNum >= 1 && inputNum <= 1000000){
        result = inputNum *inputNum;
        //Otherwise, sore an error message
     } else {
        result ="Invalid number!";

     }
    
     
    //  Display the result 
     document.getElementById("textout") .innerHTML = result;
}

// Function to reset the form and output field
function resetForm() {
   // Clear the input field
   document.getElementById("textin").value = '';
   
   // Clear the output field (result)
   document.getElementById("textout").innerHTML = '';
}
