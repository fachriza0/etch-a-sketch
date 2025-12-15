const container = document.querySelector(".container")

const maxSize = 960;


function rows(rowNum){
    const size = (maxSize/rowNum)/5
    for(let i = 0; i < rowNum; i++){
        const rows = document.createElement("div")
        rows.classList.add("rows")
        container.appendChild(rows)
        for(let j = 0; j < rowNum; j++){
            const cols = document.createElement("div")
            cols.classList.add("columns")
            cols.setAttribute('style', `padding: ${size}px`)
            rows.appendChild(cols)
            cols.addEventListener('mouseenter', function(){
                cols.classList.add('cols2')
                cols.setAttribute()
            })
        }
    }
}

rows(20);

const btn = document.querySelector(".btn")
btn.textContent = "Change Grid"
btn.addEventListener("click", function(){
    const ask = prompt("How much do you want to change the grid?")
    if(ask <= 0){
        alert("Wrong Number")
    }
    if(ask > 100){
        alert("Max number is 100")
    } else {
        container.innerHTML = ""
        rows(ask)
    }
})

