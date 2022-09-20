const userInfos = document.querySelectorAll(".user-info")

console.log(userInfos)


window.addEventListener("DOMContentLoaded", () => {

    userInfos.forEach((buttonTag) => {
        buttonTag.value = localStorage.getItem(buttonTag.id)
    })

})