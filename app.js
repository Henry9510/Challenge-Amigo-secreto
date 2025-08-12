let amigos = [];

//Implementa una función para agregar amigos 
function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    if (nuevoAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if(amigos.includes(nuevoAmigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }


    amigos.push(nuevoAmigo);
    document.getElementById("amigo").value = "";

    mostrarAmigos();
}



function mostrarAmigos() {
const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

}



function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

const amigoAleatoreo = Math.floor(Math.random() * amigos.length);

const amigoSeleccionado = amigos[amigoAleatoreo];

const resultado = document.getElementById("resultado");
resultado.textContent = `¡${amigoSeleccionado} ha sido seleccionado como tu amigo secreto!`;    

}