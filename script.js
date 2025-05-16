
const container = document.querySelector(".container")
const body = document.querySelector("body")


const buttonPrompt = document.createElement("button")
buttonPrompt.textContent = 'Square Count'

body.appendChild(buttonPrompt)



buttonPrompt.addEventListener("click", () => {
    let count = prompt("Square Count")
    for(let i = 0; i < count; i++){
    const squarediv = document.createElement("div")
    squarediv.classList.add("squarediv")
    container.appendChild(squarediv)
    squarediv.addEventListener("mouseover", () => squarediv.style ="background-color: blue")
}

})





function changeSquareAmount(count){

}

