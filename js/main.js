function clicou(){
    document.getElementById("agradecimento").innerHTML = "VAALEU, MEU CHAPA!!!!";
    //console.log(document.getElementById("agradecimento");)
    //alert("Aê, meu chapa! Valeu!!!!")
}

function redirecionar(){
    window.open("https://globo.com") //abre em uma nova aba
    //window.location.href = "http://globo.com" abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado, lindo!!!"
    elemento.innerHTML="Obrigado, lindo!!!"
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML="Passe o mouse aqui"
}

function load(){
    alert("Pagina parregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}





////////////// FUNÇÕES

/*

function soma(n1, n2){
     return n1 + n2
}


function validaIdade(idade){
    
    var validar = true;
    if(idade >= 18){
        return true;
    }
    else{
        return  false;
    }

    
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));

*/




//////// FUNÇÃO DATA

/*
var d = new Date()
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getSeconds());
alert(d.getDay());
*/


//// LAÇOS DE REPETIÇÃO


/*

var count = 0; // count = CONTADOR
var cont
while(count<5){
    console.log(count+1);
    count++
}

for(cont=0; cont<5; cont++){
    console.log(cont+1)
}


*/////////////


/*
var idade 
idade =  parseInt(prompt("Qual a sua idade?"));
if(idade>=18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade")
}
*/



//// Dicionario

//var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"banana", cor:"amarela"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas[0].nome)
//console.log(frutas[2].nome , frutas[2].cor)


/// Array

//var lista = ["maça", "pera", "laranja"]
//lista.push("uva");
//lista.pop()
//console.log(lista[1]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.toString()[2]);
//console.log(lista.join(" | "))


/*

var nome = "Guilherme Costa";
var n1 = 5;
var n2 = 3;
var frase = "Japão é a melhor seleção do mundo";
alert("nome"+" tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japao", "Brasil"))

*/