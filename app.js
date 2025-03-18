// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const inputLAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    if (inputLAmigo.value == ""){
        alert("debes ingresar el nombre de un amigo ")
        return;
    }
    listaAmigos.push(inputLAmigo.value);
    ulListaAmigos.innerHTML += `<h1>${inputLAmigo.value}</h1>`;

    inputLAmigo.value = "";
    inputLAmigo.focus();
}

function sortearAmigo() {
    if (listaAmigos.length === 0){
        alert("No hay amigos para sortear. Agrega algunos amigos.")
        return;
    }
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li> Tu amigo secreto es: ${amigoSecreto}</li>`;
}




