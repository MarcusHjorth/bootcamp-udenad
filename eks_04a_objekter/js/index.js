// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

let names = ["Brad", "Chad", "Thad"];
let ulElement = document.querySelector("#liste");
	
	
function getName (array){
	array.forEach((navn) => {
		ulElement.innerHTML += `<li> ${navn} </li>`
	});	
};

getName(names)




//function getNaame (array){
//	array.forEach((names) => {
//		let li = document.createElement('li');
//	   ulElement.appendChild(li);
//		li.innerHTML += names;
//	});
//}

//getNaame(names)


}); // Afslutter: DOMContentLoaded