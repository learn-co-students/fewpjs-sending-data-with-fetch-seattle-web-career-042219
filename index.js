// Add your code here


function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(res => {
    return res.json()
  })
  .then(json => {
    document.body.innerHTML = json["id"]
  })
  .catch(error => {
    document.body.innerHTML = error.message
  })
}
  // })
//   // return fetch('http://localhost:3000/users', {
//   //   method: "Post",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     "Accept": "application/json"
//   //   },
//     .then(response => response.json())
//     .then(json => {
//       console.log(json)
//     })
//     // .catch(error => {
//     // console.log(error.message)
//     // })
//   }
// }
