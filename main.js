//Seleccionamos el input del email del DOM
let inputEmail = document.getElementById('email');
//Seleccionamos el boton de enviar  del DOM
let button = document.getElementById('button');

//le agregamos el evento de click al boton, con un evento
button.addEventListener('click', (event) => {
    //quitamos el evento con preventdefault
    event.preventDefault();
    //llamamos a la funcion validateEmail con el valor del input que seleccionamos al principio
    validateEmail(inputEmail.value);
});

//funcion validateEmail
function validateEmail(email){
    //Expresion regular /para validar un correo en la pagina regexr.com/
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(expReg.test(email)==true){
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
    }else{
        inputEmail.style.border = '1px solid hsl(354, 100%, 66%)';
        error.style.visibility = 'visible';
    }
}