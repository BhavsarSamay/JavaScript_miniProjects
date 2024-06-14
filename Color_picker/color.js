let background = document.getElementById("bg_container")
let hexCode=document.getElementById("selectedColorHexCode")
function color1() {
    let color = document.getElementById("button1").textContent
    background.style.backgroundColor = "#e0e0e0"
    hexCode.textContent=color
}

function color2() {
    let color = document.getElementById("button2").textContent
    background.style.backgroundColor = color
    hexCode.textContent=color
}

function color3() {
    let color = document.getElementById("button3").textContent
    background.style.backgroundColor = color
    hexCode.textContent=color
}

function color4() {
    let color = document.getElementById("button4").textContent
    background.style.backgroundColor = color
    hexCode.textContent=color
}
