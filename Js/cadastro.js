const formEl = document.querySelector(".signup-form")

const inputs = document.querySelectorAll(".user-input")

console.log(inputs)

formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    inputs.forEach((input) => {
        localStorage.setItem(input.id, input.value)
    })

    window.location = "login.html"
})