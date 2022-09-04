console.log("Let's get this party started!");

let searchTerm = document.querySelector("#search");
let gifDiv = document.querySelector(".gif-div");

function addGif(res){
    console.log(res.data);
    let rand = Math.floor(Math.random() * res.data.length);
    let newGif = document.createElement("img");
    newGif.src = res.data[rand].images.original.url;
    gifDiv.append(newGif);
}

let form = document.querySelector("form");

form.addEventListener("submit", async function(e){
e.preventDefault();

let searchVal = searchTerm.value;
searchTerm = "";

let response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=B6yalZl71PsoJ2lioAgQrNir9x7TYwvR`);

addGif(response.data);
})

document.querySelector("#remove-btn").addEventListener("click", function(e){
    e.preventDefault();
    gifDiv.textContent = "";
});