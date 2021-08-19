// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

let names = ["Brad", "Chad", "Thad"];
let ulElement = document.querySelector("#liste");
	
	
function getName (array){
	array.forEach((navn) => {
		ulElement.innerHTML += `<li> ${navn} </li>`
	});
	
}

getName(names)

}); // Afslutter: DOMContentLoaded