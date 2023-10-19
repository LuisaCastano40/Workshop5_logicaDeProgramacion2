// 1. Creamos un arreglo para almacenar nuestras palabras
// Pondremos un mismo tipo - todas son animales


// 2. Traemos elementos del html


// 3. Se elige una palabra al azar


// 4. Mostramos los guiones para la palabra a adivinar


// 5. Evento click


// 6. Función verificar letras



//Función que dibuja el hombrecito 
function dibujarMuñequito(){
    if (intentos === 1) {
        dibujito.textContent = '  O  ';
    } else if (intentos === 2) {
        dibujito.innerHTML = '  O  <br>  |  ';
    } else if (intentos === 3) {
        dibujito.innerHTML = '  O  <br> /|  ';
    } else if (intentos === 4) {
        dibujito.innerHTML = '  O  <br> /|\\ ';
    } else if (intentos === 5) {
        dibujito.innerHTML = '  O  <br> /|\\ <br> /   ';
    } else if (intentos === 6) {
        dibujito.innerHTML = '  O  <br> /|\\ <br> / \\ ';
        alert('¡Has perdido! La palabra era ' + palabraRandom);
    }
}