const form = document.getElementById("form");
const inputGroup = document.querySelector(".form_field");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const submitData = document.querySelector("#submit");
const animation = document.querySelector('.success-animation')
 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(!validateInputs()) {
    console.log('Your letter is not sent.');
    const successAnimation = document.querySelector('.success-animation');
    successAnimation.style.display = 'none';
  }
  else {
    console.log('Your letter is sent successfully!');
    const successAnimation = document.querySelector('.success-animation');
    successAnimation.classList.add('show-animation');
  }
});

document.getElementById("subject-field").setAttribute("placeholder", "subject text");

function validateInputs() {
  const userNameVal = username.value.trim();
  const emailVal = email.value.trim();

  let success = true;
  if(userNameVal === '') {
    success = false;
    setError(username,'Username is required')
  }
  else{
    setSuccess(username)
  }

  if(emailVal === '') {
    success = false;
    setError(email, 'Email is required');
  }
  else if(!validateEmail(emailVal)) {
    success = false;
    setError(email, 'Please enter a valid email');
  }
  else {
    setSuccess(email)
  }
  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement =  inputGroup.querySelector(".error");

  errorElement.innerText = '';
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
  return (email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
