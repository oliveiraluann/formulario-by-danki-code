var email = document.getElementById('email')
var senha = document.getElementById('senha')

email.addEventListener('focus', () => {
    email.style.borderColor = "#4a5f6a"
})
email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc"
})

senha.addEventListener('focus', () => {
    senha.style.borderColor = "#4a5f6a"
})
senha.addEventListener('blur', () => {
    senha.style.borderColor = "#ccc"
})

