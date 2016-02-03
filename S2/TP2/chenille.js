/**
* crée un Anneau en fixant sa position initiale et son rayon
* @param {integer} xInit abscisse du centre de l'anneau
* @param {integer} yInit ordonnée du centre de l'anneau
* @param {integer} rInit rayon initial de l'anneau
* @returns {Anneau}
*/
function Anneau(xInit, yInit, r){
	this.x = xInit;
	this.y = yInit;
	this.r = r;
}
/**tête**/
function Tete(xInit,yInit,r){
	this.x = xInit;
	this.y = yInit;
	this.r = r;
	this.cap = 0;
}	 

/** 
* positionne le centre de l'anneau en un point donné
* @param {integer} px abscisse du point
* @param {integer} py ordonnée du point
* @returns {undefined}
*/
Anneau.prototype.placerA = function(px,py){
	this.x = px;
	this.y = py;
}
Tete.prototype.placerT = function(px,py){
	this.x = px;
	this.y = py;
}
/**
* affiche l'anneau
* @param {object} ctxt le contexte graphique associé au canvas dans lequel l'anneau
*           se dessine
* @returns {undefined}
*/
Anneau.prototype.dessiner = function(ctx){
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
	ctx.strokeStyle = "black";
	ctx.fillStyle = "bisque";
    ctx.fill();
	ctx.stroke();
}

Tete.prototype.dessiner = function(ctx){
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
	ctx.strokeStyle = "red";
	ctx.fillStyle = "black";
    ctx.fill();
	ctx.stroke();
}
/**
 * Deplacement
 **/
 Tete.prototype.devierCap = function(deltaCap){
	 this.cap += deltaCap;
 }
 
 Tete.prototype.deplacerSelonCap = function (){
	 this.x = this.x + this.r*(Math.cos((Math.PI*this.cap)/180));
	 this.y = this.y + this.r*(Math.sin((Math.PI*this.cap)/180));
}

Tete.prototype.capOK = function(canvas){
	var xPrime = this.x + this.r*(Math.cos((Math.PI*this.cap)/180));
	var yPrime = this.y + this.r*(Math.sin((Math.PI*this.cap)/180));
	if(xPrime > (canvas.width - this.r + 1) || xPrime < this.r)
		return false;
	if(yPrime > (canvas.height - this.r + 1) || yPrime < this.r)
		return false;
	return true;
}

Tete.prototype.deplacer = function(canvas,_event_){
	
	this.devierCap(0);
			if(this.capOK(canvas))
				this.deplacerSelonCap();
			else{
				this.devierCap(90);
			}
}


/**Chenille**/
function Chenille ( canvas,nbrAnneaux,r){
	var x =Math.round(canvas.width/2);
	var y =Math.round(canvas.height/2);
	this.tete = new Tete(x,y,r);
	this.nbrAnneaux = nbrAnneaux;
	this.anneaux = [];
	for(var i=0; i<nbrAnneaux;i++){
		x=x-r;
		this.anneaux[i]=new Anneau(x,y,r);
	}
}

Chenille.prototype.ajoutAnneau = function(){
	this.nbrAnneaux++;
	this.anneaux[this.nbrAnneaux-1]=
	new Anneau(
	this.anneaux[this.nbrAnneaux-2].x 
	-this.anneaux[this.nbrAnneaux-2].r,
	this.anneaux[this.nbrAnneaux-2].y,
	this.anneaux[this.nbrAnneaux-2].r);
}

Chenille.prototype.dessiner = function(ctxt){
	this.tete.dessiner(ctxt);
	for(var i=0; i<this.nbrAnneaux;i++){
		this.anneaux[i].dessiner(ctxt);
	}
}

function whatKey(evt){
	switch (evt.keyCode) {
		case 37:
		chenille.tete.devierCap(-30);
		break;
		case 39:
		chenille.tete.devierCap(30);
		break;
	}
}
	

Chenille.prototype.deplacer = function (canvas,pomme){
	var x = this.tete.x;
	var y = this.tete.y;
	
	this.tete.deplacer(canvas);
	this.manger(pomme);
	
	var xCurr = this.anneaux[0].x;
	var yCurr = this.anneaux[0].y; 
	
	this.anneaux[0].placerA(x,y);
	
	for(var i = 1; i < this.nbrAnneaux; i++){
		var xPrec = this.anneaux[i].x;
		var yPrec = this.anneaux[i].y;
		this.anneaux[i].placerA(xCurr,yCurr);
		xCurr = xPrec;
		yCurr = yPrec;
	}
}


Chenille.prototype.peutmanger = function (pomme){
	if(Math.sqrt(
	   Math.pow((this.tete.x - pomme.x),2) 
	   + Math.pow((this.tete.y - pomme.y),2))
	   <=pomme.r)
		return 1;
	else 
		return 0;
}

Chenille.prototype.manger = function(pomme){
	if(this.peutmanger(pomme)){
		this.ajoutAnneau();
		pomme.placerP();
	}
}
/***Pomme****/

function Pomme(r,canvas){
	this.x = Math.floor((Math.random() * 450-(2*r))) + (2*r)+25;
	this.y = Math.floor((Math.random() * 450-(2*r))) + (2*r)+25;
	this.r = r;
}

Pomme.prototype.placerP = function(){
	this.x = Math.floor((Math.random() * 450-(this.r)) + (this.r))+25;
	this.y = Math.floor((Math.random() * 450-(this.r)) + (this.r))+25;
}

Pomme.prototype.dessiner = function(ctx){
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
	ctx.strokeStyle = "black";
	ctx.fillStyle = "red";
    ctx.fill();
	ctx.stroke();
}



function init() {
    
    var timerId = 0;
    canvas = document.getElementById("myCanvas");
    var ctxt = canvas.getContext("2d");
    var tour = 1;

	var nbrAnneaux = 2;
	chenille = new Chenille(canvas,nbrAnneaux,14);
	chenille.ajoutAnneau();
	chenille.dessiner(ctxt);
	var pomme = new Pomme(20,canvas);
	pomme.dessiner(ctxt);

    document.getElementById("startBtn").onclick = function() {
        document.getElementById("stopBtn").disabled = false;
        document.getElementById("startBtn").disabled = true;
        timerId = setInterval(function() {
            ctxt.clearRect(0, 0, canvas.width, canvas.height);
			
			chenille.deplacer(canvas,pomme);
			chenille.dessiner(ctxt);
			pomme.dessiner(ctxt);
			window.addEventListener('keydown', whatKey, true);
			
        }, 70);
    };
    document.getElementById("stopBtn").onclick = function() {
        document.getElementById("stopBtn").disabled = true;
        document.getElementById("startBtn").disabled = false;
        clearInterval(timerId);
    };

}
