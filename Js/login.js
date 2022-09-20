const loginFormEl = document.querySelector(".login-form")

const usernameInput = document.querySelector("#usuario")
const passwordInput = document.querySelector("#senha")
const cadastFormEl = document.querySelector(".cadastro-form")

loginFormEl.addEventListener("submit", (e) => {
    e.preventDefault()

    if (usernameInput.value === localStorage.getItem("usuario") &&
        (passwordInput.value === localStorage.getItem("senha"))){
        window.location = "dadoscadastro.html"
    }else if (usernameInput.value ===("0000") &&
        (passwordInput.value === ("0000"))){
        window.location = "funcionario.html"
    }else{
        alert("Informe uma conta ja cadastrada! Caso ainda não tenha uma conta, clique no botão Cadastrar!")}
})

cadastFormEl.addEventListener("submit", (e) => {
    e.preventDefault()
    window.location = "cadastro.html"
})