//Criação do JSON

var  json1 = `{
    "album": "Take Me Home",
    "ano": "2012",
    "genero": "Pop",
    "fabricante": "One Direction",
    "preco": "R$123,28",
    "imagem": "<img src='img/take me home.jpg' width='200px'>"
}`;

var  json2 = `{
    "album": "Up All Night",
    "ano": "2011",
    "genero": "Pop",
    "fabricante": "One Direction",
    "preco": "R$152,47",
    "imagem": "<img src='img/Up All Night.jpg' width='200px'>"
}`;

var  json3 = `{
    "album": "Four",
    "ano": "2014",
    "genero": "Pop",
    "fabricante": "One Direction",
    "preco": "R$258,10",
    "imagem": "<img src='img/four.jpg' width='200px'>"
}`;

var  json4 = `{
    "album": "Perfect",
    "ano": "2015",
    "genero": "Pop",
    "fabricante": "One Direction",
    "preco": "R$470,00",
    "imagem": "<img src='img/perfect.png' width='200px'>"
}`;

var  json5 = `{
    "album": "Made in the A.M.",
    "ano": "2012",
    "genero": "Pop",
    "fabricante": "One Direction",
    "preco": "R$209,91",
    "imagem": "<img src='img/made in the am.jpg' width='200px'>"
}`;

var  json6 = `{
    "album": "Midnight Memories",
    "ano": "2013",
    "genero": "Pop",
    "fabricante": "One Direction",
    "preco": "R$132,07",
    "imagem": "<img src='img/midnight memories.jpg' width='200px'>"
}`;

//Converter o texto STRING para JSON
var data1 = JSON.parse(json1);
var data2 = JSON.parse(json2);
var data3 = JSON.parse(json3);
var data4 = JSON.parse(json4);
var data5 = JSON.parse(json5);
var data6 = JSON.parse(json6);



function apertar1() {
    document.getElementById('album').innerHTML = data1.album;
    document.getElementById('ano').innerHTML = data1.ano;
    document.getElementById('genero').innerHTML = data1.genero;
    document.getElementById('fabricante').innerHTML = data1.fabricante;
    document.getElementById('preco').innerHTML = data1.preco;
    document.getElementById('imagem').innerHTML = data1.imagem;
    
}

function apertar2() {
    document.getElementById('album').innerHTML = data2.album;
    document.getElementById('ano').innerHTML = data2.ano;
    document.getElementById('genero').innerHTML = data2.genero;
    document.getElementById('fabricante').innerHTML = data2.fabricante;
    document.getElementById('preco').innerHTML = data2.preco;
    document.getElementById('imagem').innerHTML = data2.imagem;
}

function apertar3() {
    document.getElementById('album').innerHTML = data3.album;
    document.getElementById('ano').innerHTML = data3.ano;
    document.getElementById('genero').innerHTML = data3.genero;
    document.getElementById('fabricante').innerHTML = data3.fabricante;
    document.getElementById('preco').innerHTML = data3.preco;
    document.getElementById('imagem').innerHTML = data3.imagem;
}

function apertar4() {
    document.getElementById('album').innerHTML = data4.album;
    document.getElementById('ano').innerHTML = data4.ano;
    document.getElementById('genero').innerHTML = data4.genero;
    document.getElementById('fabricante').innerHTML = data4.fabricante;
    document.getElementById('preco').innerHTML = data4.preco;
    document.getElementById('imagem').innerHTML = data4.imagem;
}

function apertar5() {
    document.getElementById('album').innerHTML = data5.album;
    document.getElementById('ano').innerHTML = data5.ano;
    document.getElementById('genero').innerHTML = data5.genero;
    document.getElementById('fabricante').innerHTML = data5.fabricante;
    document.getElementById('preco').innerHTML = data5.preco;
    document.getElementById('imagem').innerHTML = data5.imagem;
}

function apertar6() {
    document.getElementById('album').innerHTML = data6.album;
    document.getElementById('ano').innerHTML = data6.ano;
    document.getElementById('genero').innerHTML = data6.genero;
    document.getElementById('fabricante').innerHTML = data6.fabricante;
    document.getElementById('preco').innerHTML = data6.preco;
    document.getElementById('imagem').innerHTML = data6.imagem;
}

console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)
console.log(data5)
console.log(data6)
