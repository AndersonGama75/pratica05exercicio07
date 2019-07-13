function somar () {

		var limInf = document.getElementById("primeiroNumero").value;
		var limSup = document.getElementById("segundoNumero").value;
		limInf = parseInt(limInf);
		limSup = parseInt(limSup);
		var x = limInf;
		var y = limInf;

	if (limInf < limSup) {
		
		for (i = limInf; limInf < limSup; limInf++) {
			x += 1;
			y += x;
		}
		document.getElementById("soma").innerHTML = y;
	
	}	else if (isNaN(limInf) || isNaN(limSup)) {
		alert('Você deve digitar somente números.');
		
		} 	else {
			alert('O limite inferior deve ser menor que o superior.');

			} 
}







/* function somar () {
	var limiteInf = document.getElementById("primeiroNumero").value;
	var limiteSup = document.getElementById("segundoNumero").value;
	limiteInf = parseFloat(limiteInf);
	limiteSup = parseFloat(limiteSup);
	limiteInf = Math.floor(limiteInf);
	limiteSup = Math.ceil(limiteSup);
	var adicao = limiteInf + limiteSup;
	document.getElementById("soma").innerHTML = adicao;
} */



/* function somar () {
	
	var n1 = document.getElementById ("primeiroNumero").value;
	var n2 = document.getElementById("segundoNumero").value;
	//n1 = parseInt(n1);
	//n2 = parseInt(n2);
	var vet = [];
	
	if (n1 % 2 != 0 || n1 <= 0 || n2 % 2 != 0 || n2 <= 0)	{
		
		alert('Digite valores pares maiores que 0');
		
	}

		function getBaseLog(n1, n2) {
			return Math.log(n1) / Math.log(n2);
		}
		document.getElementById("soma").innerHTML = getBaseLog(n1, n2);
} */