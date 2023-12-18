const email = document.getElementById("email");
const emailError = document.getElementById("error");
const MainBtn = document.querySelector(".nextMain");

function OnlyNumbers(input) {
  // Regular expression to match only numbers
  var regex = /^[0-9]+$/;
  // Test the input against the regular expression
  return regex.test(input);
}

MainBtn.addEventListener("click", (e) => {
  let m = email.value
  e.preventDefault();
  if(m.includes("@") && m.includes(".com")){
    localStorage.setItem("email", email.value);
    window.location = "./EmailVerification1st.html";
  }
  else if(OnlyNumbers(m)){
    if(m.length === 11){
      localStorage.setItem("email", email.value);
      window.location = "./NumValidationPage.html";
    }
    else{
      emailError.style.display='block';
      emailError.textContent = 'Invalid number'
    }
  }
  else{
    emailError.style.display = "block";
  }
});