function calculer() {
    var operande1 = document.getElementById("op1").value;
    var operande2 = document.getElementById("op2").value;
    var operateur = document.getElementById("operateur").value;
    var res;

    switch (operateur) {
        case "+" :
            res = Number(operande1) + Number(operande2);
            break;
        case "-" :
            res = Number(operande1) - Number(operande2);
            break;
        case "*" :
            res = Number(operande1) * Number(operande2);
            break;
        case "/" :
            res = Number(operande1) / Number(operande2);
            break;
    }
    document.getElementById("resultat").innerHTML = res;
}


