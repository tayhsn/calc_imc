document.getElementById("btnSubmit").addEventListener('click', (event) => {
    event.preventDefault();

    var altura = parseFloat(document.getElementById("inputAltura").value);
    var peso = parseFloat(document.getElementById("inputPeso").value);
    
    var calculo = peso / (altura * altura) ;
    var classif;
    
    if (calculo < 18.5) {
        classif = "abaixo do peso";
    } else if (calculo > 18.5 && calculo < 24.9) {
        classif = "peso normal" ;
    } else if (calculo > 25.0 && calculo < 29.9) {
        classif = "sobrepeso" ;
    } else if (calculo > 30.0 && calculo < 34.9) {
        classif = "obesidade I" ;
    } else if (calculo > 35.0 && calculo < 39.9) {
        classif = "obesidade II" ;
    } else if (calculo > 40.0) {
        classif = "obesidade mórbida III";
    }
    
    document.getElementById("result").innerHTML = "Seu resultado é "+calculo.toFixed(1)+" e sua classificação é "+classif;
});

