// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	
	function hils (navn){
	console.log(`Hej med dig ${navn}`);
	}


	hils("Brad")
	hils("Chad")
	hils("Thad")

}); // Afslutter: DOMContentLoaded