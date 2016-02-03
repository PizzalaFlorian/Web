nbr;
nbrEssai;

function randNbr(){
	nbr = Math.floor((Math.random() * 100));
	nbrEssai=10;
}

function essai(){
	var operande = document.getElementById("op").value;
	
	if(Number(operande)==Number(nbr)){
		document.getElementById("resultat").innerHTML = operande+" est le bon nombre,bravo !!!";
		document.getElementById("prop").remove();
	}
	
	nbrEssai--;
	
	if(Number(nbrEssai)<=0){
		document.getElementById("prop").remove();
		document.getElementById("resultat").innerHTML = "Perdu !!! le nombre était "+nbr;
	}
	
	if(Number(operande)< Number(nbr))
		document.getElementById("resultat").innerHTML = operande+" est trop petit. il vous reste "+nbrEssai+" essai(s). Rejouez !";
	if(Number(operande)> Number(nbr))
		document.getElementById("resultat").innerHTML = operande+" est trop grand. il vous reste "+nbrEssai+" essai(s). Rejouez !";
	if(Number(operande)==Number(nbr)){
		document.getElementById("resultat").innerHTML = operande+" est le bon nombre,bravo !!!";
		document.getElementById("prop").remove();
	}
}

function redir(){
	document.location.href="jeuNombre.html"
}

function abandon(){
	document.getElementById("resultat").innerHTML = "Vous avez abandonné !!! le nombre était "+nbr+". Il vous reste "+nbrEssai+" essai(s).";
	document.getElementById("prop").remove();
}
