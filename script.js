const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector('.navigation');
const ciudad = document.getElementById('ciudad');
const montana = document.getElementById('montaña');
const playa = document.getElementById('playa');
const btnCalcular = document.querySelector('.calcular');
const imagenes = document.querySelector('.imagenes');




const menuIsActive = () => {
    hamburgerMenu.classList.toggle(`active`);
    if (hamburgerMenu.classList.contains('active')) {
        navMenu.classList.add('active')
    } else {
        navMenu.classList.remove('active')
    }
};

const cambioImagen = ()=>{
    if(montana.checked){
        imagenes.style.transform="translate(-100%)";
    } else if (ciudad.checked){
        imagenes.style.transform="translate(-200%)"
    } else if(playa.checked){
        imagenes.style.transform="translate(0)"
    }

}

let playaValue = 120;
let montanaValue = 150;
let ciudadValue = 100;
let respuesta = 0



const calculoPrecio = ()=>{
    let cantidadParejas = document.getElementById('cantidad').value;

    if(playa.checked){
         respuesta = playaValue * cantidadParejas;  
    }else if(montana.checked){
         respuesta = montanaValue * cantidadParejas;
    }else if(ciudad.checked){
         respuesta = ciudadValue * cantidadParejas;  
    }
    let resultado = document.getElementById('resultado');
    resultado.innerText = `€` + respuesta;

}


hamburgerMenu.addEventListener(`click`, menuIsActive);
btnCalcular.addEventListener('click',calculoPrecio);
montana.addEventListener('change',cambioImagen);
ciudad.addEventListener('change',cambioImagen);
playa.addEventListener('change',cambioImagen);
