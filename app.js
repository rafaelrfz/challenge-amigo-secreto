// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
        return null;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    listarAmigos();
}

function listarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        const li = document.createElement("li");
        li.textContent = amigos[index];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length < 1){
        alert("Primero agrega los nombres de tus amigos")
        return;
    }
    let nombreRandom = Math.floor( Math.random() * amigos.length);
    nombreRandom = amigos[nombreRandom];
    document.getElementById("resultado").innerHTML = `el amigo secreto sorteado es: ${nombreRandom}`;
    amigos = [];
    listarAmigos();
}