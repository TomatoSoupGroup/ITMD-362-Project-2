function validateForm() {
var x = document.forms["myForm"]["fname"].value;
  if (x === "") {
    alert("Name must be filled out");
    return false;
  }
  else{
  alert("Success! Thanks for your interest.");
  }
} 