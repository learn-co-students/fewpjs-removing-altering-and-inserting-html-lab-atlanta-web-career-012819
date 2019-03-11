// Write your code here!

const element = document.querySelector('#main')
element.remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerText = "Flatiron School is the champion!";
newHeader.className = "victory";