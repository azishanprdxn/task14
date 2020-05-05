// Getting Helper for Errors
var helperLength = document.getElementsByClassName('helper').length;
var helperArray = [];
for (var i = 0; i < helperLength; i++) {
  helperArray.push(document.getElementsByClassName('helper')[i]);
}
var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// On Form Reset
function onFormReset() {
  // This will reset all the content inside the form
  document.querySelector('form').reset();
  // This will hide all the helper text from the form
  for (var i = 0; i < helperLength; i++) {
    document.getElementsByClassName('helper')[i].style.display = "none";
  }
}

// On Submit Function
function onFormSubmit() {
  // Store value from the input given by the user
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var getGender = document.getElementsByName('gender');
  for (var i = 0; i < getGender.length; i++) {
    if (getGender[i].checked) {
      var gender = getGender[i].value;
    }
  }
  var address = document.getElementById('address').value;

  // For name
  if (!name) {
    helperArray[0].style.display = "inline-block";
  } else {
    helperArray[0].style.display = "none";
  }

  // For email
  if (email.match(emailPattern)) {
    helperArray[1].style.display = "none";
  } else {
    helperArray[1].style.display = "inline-block";
  }

  // For Gender
  if (gender == undefined) {
    helperArray[2].style.display = "inline-block";
  } else {
    helperArray[2].style.display = "none";
  }

  // For Address
  if (!address) {
    helperArray[3].style.display = "inline-block";
  } else {
    helperArray[3].style.display = "none";
  }

  // Validate if all the data is filled
  if (!name || !email.match(emailPattern) || gender == undefined || !address) {
    return;
  } else { // Run this if all the data is filled
    alert("Thank You!");
    // Reset the current form data
    document.querySelector('form').reset();
  }
}