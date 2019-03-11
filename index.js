// Write your code here!

let main = document.querySelector("#main")
let body = document.querySelector("body")
body.removeChild(main)

let newHeader = document.createElement("h1")
newHeader.id = "victory"

body.appendChild(newHeader)

newHeader.innerText = "is the champion"