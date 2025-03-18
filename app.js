/*
Alura | Practicando Lógica de Programación
Challenge Amigo secreto
Funcionalidad 1 | Crear un array para almacenar los nombres
Funcionalidad 2 | Implementa una función para agregar amigos
Funcionalidad 3 | Implementa una función para actualizar la lista de amigos
Funcionalidad 4 | Implementa una función para sortear un amigo secreto
Funcionalidad 5 | Implementa un botón para sortear un amigo secreto
*/

const inputAmigo = document.getElementById('amigo');
const listaAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML = '';
    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });    
    };
function sortearAmigo() {
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    alert(`Amigo secreto: ${amigoSorteado}`);
    };
