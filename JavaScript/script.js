const fila = document.querySelector('.contenedor-lista');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;


});

//----- ----- lista de peliculas ----- -----
const numeroPaginas = (peliculas.length / 2);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('activo');
    }

    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 180);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


//FORMULARIO
form.addEventListener('submit', function LocalStorage() {

    //captura de datos y almacenamiento en variables
    let inputName = document.querySelector('#inputName').value;
    let email = document.querySelector('#email').value;

    //validación de campos vacíos
    if (inputName == "" || email == "") {
        alert('Ingresar todos los campos');
        return true;
    }
    else if (isNaN(inputName)){
        
            localStorage.setItem("Name", inputName);
            localStorage.setItem("Email", email);
            getLocalStorage();
            
        } else {
            alert("Name most string");
        }return false;
        
    })
    