// Add your code here

// document.addEventListener("DOMContentLoaded", () => {



function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(res=> {
    return res.json()
  })
  .then(json=> {
    document.body.innerHTML = json[ "id" ]
  })
  .catch(err => {
     document.body.innerHTML = err.message
  });
}
