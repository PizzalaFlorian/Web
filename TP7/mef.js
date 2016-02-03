function setBgColor(){
	var select = document.getElementById("couleurFond");
	var target= select.selectedIndex;
	var color = select.options[target].value; 
	document.getElementById("contenu").style.backgroundColor = color;
} 

function setTextType(){
	var select = document.getElementById("texte");
	var target= select.selectedIndex;
	var style = select.options[target].value; 
	if(style=="Normal"){
		document.getElementById("contenu").style.fontWeight = "normal";
		document.getElementById("contenu").style.textDecoration = "none";
		document.getElementById("contenu").style.fontStyle = "normal";
	}
	if(style=="Gras"){
		document.getElementById("contenu").style.fontStyle = "normal";
		document.getElementById("contenu").style.textDecoration = "none";
		document.getElementById("contenu").style.fontWeight = "bold";
	}
	if(style=="Italique"){
		document.getElementById("contenu").style.fontWeight = "normal";
		document.getElementById("contenu").style.textDecoration = "none";
		document.getElementById("contenu").style.fontStyle = "italic";
	}
	if(style=="Souligne"){
		document.getElementById("contenu").style.fontStyle = "normal";
		document.getElementById("contenu").style.fontWeight = "normal";
		document.getElementById("contenu").style.textDecoration = "underline";
	}
} 

function setTextFont(){
	var select = document.getElementById("texte");
	var target= select.selectedIndex;
	var font = select.options[target].value; 
	var value = "";
	value.concat('"',font,'"');
	document.getElementById("contenu").style.fontFamily = value;
}
