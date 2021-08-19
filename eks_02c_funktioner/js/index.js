// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...


	// funktionen
	function hils (navn){
		return (`Hej med dig ${navn}`);
	}
	
	// Det der skal retuneres
	var hilsenFraBrad = hils("Brad")
	

	// interaction 
	console.log(hilsenFraBrad);

}); // Afslutter: DOMContentLoaded