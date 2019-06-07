// Add your code here
const URL = "http://localhost:3000/users"

function main() {
	submitData();
}
main();

function submitData(name, email) {
	return fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({name, email})
	})
	.then(resp => resp.json())
	.then(json => document.body.innerHTML = json["id"]) 
	.catch(error => {
		document.body.innerHTML = error.message
	});
}