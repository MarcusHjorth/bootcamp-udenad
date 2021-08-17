// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	let number = 5;
	let MaximumNummer = 10;
	let MinimumNummer = 0;
	let TextCountElement = document.querySelector('#text-count');
	let ButtonIncrease = document.querySelector('#btn-count-increase')
	let ButtonDecrease = document.querySelector('#btn-count-decrease')
	
	updateNumber ();
	function updateNumber (){
		TextCountElement.textContent = number;
	}
	
	
	ButtonIncrease.addEventListener("click", () => {
		if(number < MaximumNummer){
			number = number + 1;
			updateNumber();
		}
	});
	
	ButtonDecrease.addEventListener("click", () => {
		if(number > MinimumNummer){
		number = number - 1;
		updateNumber();
		}
	});

}); // Afslutter: DOMContentLoaded