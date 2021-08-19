// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	let number = 5;
	let MaximumNummer = 10;
	let MinimumNummer = 0;
	let ButtonIncrease = document.querySelector('#btn-count-increase')
	let ButtonDecrease = document.querySelector('#btn-count-decrease')
	let TextCountElement = document.querySelector('#text-count');
	
	
	function updateNumber (){
		TextCountElement.textContent = number;
	}
	updateNumber();


	function checkMinMaxValue(direction) {
		if(direction === "inc" && number < MaximumNummer){
			number = number + 1;
			updateNumber();
		} 
		if (direction === "dec" && number > MinimumNummer) {
			number = number - 1;
			updateNumber();
		}
	}
	

	ButtonIncrease.addEventListener("click", () => checkMinMaxValue("inc"));
	ButtonDecrease.addEventListener("click", () => checkMinMaxValue("dec"));



//	function calcNumber(event){
//		if(event.target.attributes.id.nodeValue === "btn-count-increase"){
//			if(number < MaximumNummer){
//				updateNumber();
//			}
//		} else if (event.target.attributes.id.nodeValue === "btn-count-decrease"){
//			if(number > MinimumNummer){
//				number = number - 1;
//				updateNumber
//			}
//		} 
//		TextCountElement.textContent = number;		
//	}

	

//	ButtonIncrease.addEventListener("click", () => {
//		calcNumber(event);
//	});
	
//	ButtonDecrease.addEventListener("click", () => {
//		calcNumber(event);
//	});


}); // Afslutter: DOMContentLoaded