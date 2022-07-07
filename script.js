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
    } else if (playa.checked){
        imagenes.style.transform="translate(-200%)"
    } else{
        imagenes.style.transform="translate(0)"
    }

    // switch(lugar){
    //     case montana.checked:
    //         imagenes.style.transform="translate(-100%)";
    //     case playa.checked:
    //         imagenes.style.transform="translate(-200%)";
    //     defalut:
    //     imagenes.style.transform="translate(0)";
    // }
}



const calculoPrecio = ()=>{
    const cantidadParejas = document.getElementById('cantidad').value;
    let playa = 120;
    let montana = 150;
    let ciudad = 100;
    if(playa){
        let respuesta = playa * cantidadParejas;
        const resultado = document.getElementById('resultado');
        resultado.innerText = `€` + respuesta;
    }else if(montana){
        let respuesta = montana * cantidadParejas;
        const resultado = document.getElementById('resultado');
        resultado.innerText =  `€` +respuesta;
    }else{
        let respuesta = ciudad * cantidadParejas;
        const resultado = document.getElementById('resultado');
        resultado.innerText = `€` + respuesta;
    }
}

hamburgerMenu.addEventListener(`click`, menuIsActive);
btnCalcular.addEventListener('click',calculoPrecio);
montana.addEventListener('change',cambioImagen);
ciudad.addEventListener('change',cambioImagen);
playa.addEventListener('change',cambioImagen);
