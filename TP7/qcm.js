
function hideAllAnswer(){
	var reponses = document.getElementsByClassName("reponse");
	
	for(i=0;i<reponses.length;i++){
		reponses[i].style.display="none";
	}
}

function testAnwser(){
	//recuperation des q1
	var q1 = document.getElementsByName("q1");
	var q2 = document.getElementsByName("q2");
	var q3 = document.getElementsByName("q3");
	
	//verif res q1
	if(q1[0].checked==true){
		document.getElementById("reponse1").style.display="initial";
		document.getElementById("reponse1").style.color="green";
		document.getElementById("img1").setAttribute("src","bon.png");
	}
	else{
		document.getElementById("img1").setAttribute("src","mauvais.png");
		document.getElementById("reponse1").style.display="initial";
		document.getElementById("reponse1").style.color="red";
	}
	
	if(q2[0].checked==true){
		document.getElementById("reponse2").style.display="initial";
		document.getElementById("reponse2").style.color="green";
		document.getElementById("img2").setAttribute("src","bon.png");
	}
	else{
		document.getElementById("img2").setAttribute("src","mauvais.png");
		document.getElementById("reponse2").style.display="initial";
		document.getElementById("reponse2").style.color="red";
	}
	
	if(q3[2].checked==true){
		document.getElementById("reponse3").style.display="initial";
		document.getElementById("reponse3").style.color="green";
		document.getElementById("img3").setAttribute("src","bon.png");
	}
	else{
		document.getElementById("img3").setAttribute("src","mauvais.png");
		document.getElementById("reponse3").style.display="initial";
		document.getElementById("reponse3").style.color="red";
	}
	
}

function reset(){
	hideAllAnswer();
	document.getElementById("img1").setAttribute("src","question.png");
	document.getElementById("img2").setAttribute("src","question.png");
	document.getElementById("img3").setAttribute("src","question.png");
}
