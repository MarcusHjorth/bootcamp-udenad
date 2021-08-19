// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

let names = ["Brad", "Chad", "Thad"];
let ulElement = document.querySelector("#liste");


names.forEach((navn) => {
	ulElement.innerHTML += `<li> ${navn} </li>`
});


//names.forEach((names) => {
//    let li = document.createElement('li');
//   ulElement.appendChild(li);
//    li.innerHTML += names;
//});


}); // Afslutter: DOMContentLoaded