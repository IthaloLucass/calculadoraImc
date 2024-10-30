function calcularIMC(){
    const peso = parseFloat (document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura)).toFixed(2);

    let mensagem = ""
    if (imc < 18.5){
        mensagem = "Abaixo do Peso";
        console.log("Oi");
    }else if(imc >=18.5 && imc<= 24.9){
        mensagem = "Peso normal";

    }else{
        mensagem = "Acima do Peso";

    }
    document.getElementById('resultado').innerText = `Seu IMC é ${imc}. ${mensagem}`;

}