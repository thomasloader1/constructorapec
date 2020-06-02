const iconsContainer = document.querySelector("#iconContainer");

console.log(iconsContainer.childNodes)

const iconWsp = document.querySelector("#iconWsp");
const iconFace = document.querySelector("#iconFace");
const iconContact = document.querySelector("#iconContact");
const inputContainerWsp = document.querySelector("#inputContainerWsp");

//

const homeContent = document.querySelector("#homeContent");
const formContainer = document.querySelector("#formContainer");
const homeBotton = document.querySelector("#homeButton");
const iconPhone = document.querySelector("#iconPhone");

iconContact.addEventListener('click', () => {
    homeContent.classList.add('d-none', 'fadeOutLeft');
    formContainer.classList.toggle('d-none');
});

homeBotton.addEventListener('click', () => {
    formContainer.classList.toggle('d-none', 'fadeOutLeft');
    homeContent.classList.remove('d-none');
});

const formContact = document.getElementById('formContact');

const phoneData = document.querySelector("#phoneData");
// iconPhone.addEventListener('click', () => {
//     iconPhone.classList.toggle('active-icon');
//     phoneData.classList.toggle('d-none');
// });

let templateSuccess = `<div class="alert alert-success" role="alert">
<h4 class="alert-heading font-weight-bold">Muchas Gracias!</h4>
<p>Tu mensaje se a enviado correctamente y a la brevedad nos pondremos en contacto contigo</p>
<hr>
<p class="mb-0 mt-3">Cualquier consulta que necesites realizar de forma inmediata podes enviarnos un correo electronico a <strong>info@solucionespec.com</strong> o enviarnos un <a href="https://wa.me/5491152491995?text=Hola%2C%20que%20tal%3F%2C%20vengo%20desde%20tu%20web%20y%20necesito%20que%20me%20asesores.." target="_blank" class="font-weight-bold text-success">Whatsapp</a></p>
</div>`;

$('#formContact').submit(function(e) {
    e.preventDefault();
    const postValue = {
        name: $('#name').val(),
        email: $('#emailInput').val(),
        phone: $('#phone').val(),
        message: $('#message').val(),
    };
    //console.log(postValue)
    $.post('php/addMessage.php', postValue, function(res) {
        console.log(res)
        if (res === '200') {
            $('#successMessage').html(templateSuccess)
            $('#formContact').addClass('d-none')
            $('#formContainer').addClass('d-none')
            $('#successMessageContainer').removeClass('d-none').addClass('fadeInLeft');
        }

        $("formContact").trigger('reset');
    });
});