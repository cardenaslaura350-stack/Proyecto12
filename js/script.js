const areaTexto = document.getElementById('miAreaTexto');
const conteoActual = document.getElementById('conteoActual');
const longitudMaxima = 250;

areaTexto.addEventListener('input', () => {
    const longitudTexto = areaTexto.value.length;

    // Actualiza el número en tiempo real
    conteoActual.textContent = longitudTexto;

    // Valida si se alcanzó o superó el límite máximo
    if (longitudTexto >= longitudMaxima) {
        // Limita el texto a 250 caracteres (ideal por si pegan texto largo)
        areaTexto.value = areaTexto.value.substring(0, longitudMaxima);
        conteoActual.textContent = longitudMaxima;
        
        // Agrega la clase que pone el borde de color rojo
        areaTexto.classList.add('limite-alcanzado');
    } else {
        // Quita la clase roja si el usuario borra texto y vuelve a estar por debajo del límite
        areaTexto.classList.remove('limite-alcanzado');
    }
});