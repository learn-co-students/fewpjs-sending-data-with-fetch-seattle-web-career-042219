// Add your code here
const URL = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', () => {
  main();
})

function main() {
  attachListeners();
}

function attachListeners() {
  let form = document.getElementById("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    submitData(event.target.name.value, event.target.email.value);
  })
}

function submitData(name, email) {



  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  })
  .then(res => res.json())
  .then(json => displayUser(json))
  .catch(function(error) {
    alert("Unauthorized Access");
    displayError(error);
  });
}

function displayError(error) {
  let errorMessage = document.createElement("p");
  errorMessage.textContent = error.message;
  document.body.appendChild(errorMessage);
}

function displayUser(user) {
  let userName = document.createElement("p");
  userName.textContent = user.name;
  let userEmail = document.createElement("p");
  userEmail.textContent = user.email;
  let display = document.createElement("div");
  display.id = user.id;
  display.appendChild(userName);
  display.appendChild(userEmail);
  document.body.appendChild(display);
}
