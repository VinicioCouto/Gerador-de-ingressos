const formulario = document.getElementById('formulario')
const emailInput = document.getElementById('email')
const errpEmail = document.getElementById('emailinput')

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

formulario.addEventListener('submit', function(event) {
    const emailValor = emailInput.value

    if (!validarEmail(emailValor)) {
        errpEmail.textContent = "Email inválido"
    }
})