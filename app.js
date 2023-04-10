const body = document.querySelector('body')
const btn = document.createElement('button')
btn.textContent = 'click me'
const containerDiv = document.createElement('div')
containerDiv.classList.add('container')
body.appendChild(btn)
body.appendChild(containerDiv)


btn.addEventListener('click', ()=>{
    const value = prompt('Enter a number')
    totalBox = value*value
    if(value>100){
        alert('Number too high')
        return
    }
    removeBox(containerDiv)
    for(let i = 0; i<totalBox; i++){
        const div = document.createElement('div')
        let className = `innerBox`
        div.classList.add(className)
        
        let width = 960/value
        div.style.width = `${width}px`

        containerDiv.appendChild(div)
    }
    etchASketch();
})

function removeBox(div){
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
}
function etchASketch(){
    const divs = document.querySelectorAll('div.innerBox')
    console.log(divs)
    
    divs.forEach(div=>div.addEventListener('mouseover',()=>{
        let color = `rgb(${randomnumber(256)},${randomnumber(256)},${randomnumber(256)})`
        div.style.backgroundColor= color
    }))
}

function randomnumber(n){
    return Math.floor(Math.random()*n)+1
}
