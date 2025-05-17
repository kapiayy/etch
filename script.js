
const container = document.querySelector(".container")
const body = document.querySelector("body")


const buttonPrompt = document.createElement("button")
buttonPrompt.textContent = 'Square Count'
buttonPrompt.classList.add("count")

const main = document.querySelector(".main")
const sidebar = document.querySelector(".sidebar")
const buttonColor = document.createElement("input")

buttonColor.textContent = 'Select Color'
buttonColor.setAttribute("type", "color")
buttonColor.classList.add("color")

sidebar.appendChild(buttonPrompt)
sidebar.appendChild(buttonColor)

const squarediv = document.createElement("div")







buttonPrompt.addEventListener("click", () => {
    container.innerHTML = ''
    
    
    
    let count = prompt("Square Count")
    if(count >= 101){
        count = 100
    }
    
  
    
    const totalSquares = count * count
    const squareSize = 400 / count

  

   

    for(let i = 0; i < totalSquares; i++){
    const squarediv = document.createElement("div")
    squarediv.classList.add("squarediv")
    squarediv.style.height = `${squareSize}px`
    squarediv.style.width = `${squareSize}px`
    container.appendChild(squarediv)
    
    
    squarediv.addEventListener("mouseover", () => {
    squarediv.style.backgroundColor = buttonColor.value
    {}
})
    }
})