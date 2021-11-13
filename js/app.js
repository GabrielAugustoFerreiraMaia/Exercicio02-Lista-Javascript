function calcular(){
    var peso = document.querySelector(".peso").value;
    var altura = document.querySelector(".altura").value;
    var imcEl = document.querySelector(".imc").value;


    var imc = peso/(altura*altura);
    imc = imc.toFixed(2);
    alert("Seu IMC é de: "+imc+"kg/m2")
    if(imc <17){
        alert("Você está muito abaixo do seu peso");
    }else if(imc >= 17 || imc <18.49){
        alert("Você está abaixo do peso");
    }else if(imc >= 18.50|| imc <24.99){
        alert("Você está com peso normal");
    }else if(imc >=25||imc <29.99){
        alert("Você está acima do peso")
    }else if(imc >= 30||imc <34.99){
        alert("Você está com obesidade 1")
    }else if(imc >=35||imc <39.99){
        alert("Você está com obesidade 2(severa)")
    }else if(imc>=40){
        alert("Você está com obesidade 3(mórbida)")
    }

    
}