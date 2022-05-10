const API_KEY = "v3TqB2ChKPQUPBjLf2A6-46ZVLI";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = "${API_URL}?API_KEY=${API_KEY}";
    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok) {
        console.log(data);
    }
}