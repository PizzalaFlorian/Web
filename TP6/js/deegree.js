function CtoF() {
    var operande1 = document.getElementById("op1").value;
    var F=((9/5)*(Number(operande1)))+32;

    document.getElementById("op2").value = F;
}

function FtoC() {
    var operande2 = document.getElementById("op2").value;
    var C=(5/9)*(Number(operande2)-32);

    document.getElementById("op1").value = C;
}


