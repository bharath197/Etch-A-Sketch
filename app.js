const body = document.querySelector('body')
const containerDiv = document.createElement('div')
containerDiv.classList.add('container')
body.appendChild(containerDiv)

for(let i = 0; i<256; i++){
    const div = document.createElement('div')
    let className = `innerBox`
    div.classList.add(className)
    let numberOfSquares = Math.sqrt(256);
    let width = 960/numberOfSquares
    console.log(width)
    div.style.width = `${width}px`
    containerDiv.appendChild(div)
}
const divs = document.querySelectorAll('.innerBox')

divs.forEach(div=>div.addEventListener('mouseover',()=>{
    let color = `rgb(${randomnumber(256)},${randomnumber(256)},${randomnumber(256)})`
    div.style.backgroundColor= color
}))
function randomnumber(n){
    return Math.floor(Math.random()*n)+1
}
