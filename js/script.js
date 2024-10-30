const inserirButton = document.querySelector('#buttonitem')
const container = document.querySelector('#lista')
const iteminput = document.querySelector('#txtitem')


inserirButton.addEventListener('click', () => {
    const item = document.querySelector('#txtitem').value
    if (item) {
        const novoitem = document.createElement('li')
        novoitem.textContent = item
        container.appendChild(novoitem)
        iteminput.value = ""; }
    // const novoitem = document.createElement('li')
    // novoitem.textContent = item
    // container.appendChild(novoitem)
})

document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        const item = document.querySelector('#txtitem').value
    if (item) {
        const novoitem = document.createElement('li')
        novoitem.textContent = item
        container.appendChild(novoitem)
        iteminput.value = "";
    }
    } 
    
})