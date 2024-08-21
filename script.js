//Exibir no terminal
console.log("Hello World");
//Exibir no navegador
document.write("Olá Navegador");
//um aler
alert("Alerta de Confirmação");

// Capturar o nome do Aluno
var nome = window.prompt("Informe o Nome:");
// Guardar a primeira nota
var nota1 = window.prompt("Digite a nota1:");
//converte a nota1 de texto para decimal
nota1 = parseFloat(nota1)
    // Guardar a segunda nota
    var nota2 = window.prompt("Digite a nota2:");
    // Converte a nota2 de texto para decimal
    nota2 = parseFloat(nota2)
//calculo a média das duas notas

var media = (nota1 + nota2)/2;
//Gero a mensagem de exibição do nome e da média do aluno
var mensagem = nome + ", você obteve a média : " + media;

window.alert(mensagem);
