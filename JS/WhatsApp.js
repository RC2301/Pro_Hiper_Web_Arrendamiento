var IconWhatsapp = document.querySelector('#icon-whatsapp');
var formulariowtsp = document.getElementById('formulariowtsp');
var closemodal = document.querySelector('.closemodal');
var sendbttn = document.querySelector('#sendbttn');


IconWhatsapp.addEventListener('click', function () {
    formulariowtsp.classList.toggle('entrarysalir')
})

closemodal.addEventListener('click', function () {
    formulariowtsp.classList.remove('entrarysalir')
})

sendbttn.addEventListener('click', EnviarMensaje)

function EnviarMensaje() {


    let name = document.querySelector('#inputname').value;
    let pellido = document.querySelector('#inputpellido').value;
    let correo = document.querySelector('#inputcorreo').value;
    let mensaje = document.querySelector('#inputmensaje').value;

    let url = "https://api.whatsapp.com/send?phone=593985902741&text=Nombre: %0A" + name + "%0A%0AApellido: %0A" + pellido + "%0A%0ACorreo: %0A" + correo + "%0A%0AMensaje: %0A" + mensaje + "%0A";
    window.open(url);

}