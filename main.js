let parentbutton = document.querySelector(".splash-screen")
let button = document.querySelector(".splash-screen span")
let duration = 1500
button.addEventListener("click" , function (ele) {
    let person = prompt("Enter Your Name")
    let name = document.querySelector(".info-informations .name")
    if (person == null || person == "") {
        name.textContent = `Hello: Unknown`
    }else{
        name.textContent = `Hello: ${person}`
    }
    parentbutton.remove()
})

let blocks = document.querySelector(".container-game-blocks")

let arrBlocks = Array.from(blocks.children)

let orderRange = [...Array(arrBlocks.length).keys()]

shelf(orderRange)

arrBlocks.forEach((Block , index) => { 
    
    Block.style.order = orderRange[index]

    Block.addEventListener("click" , function (ele) {
        flipBlock(Block)
    } )
});

function flipBlock(ele) {
    
    ele.classList.add("active")  
    
    let allFlipped = arrBlocks.filter((flippedBlock) => flippedBlock.classList.contains("active"))
    
    if (allFlipped.length === 2) {

        stopclicking()
        cheacking(allFlipped[0] , allFlipped[1])
    }

    
}


function stopclicking(){
    blocks.classList.add("no-clicking")
    
    setTimeout(() => {
        blocks.classList.remove("no-clicking")
        
    }, duration);
}

function cheacking(firstBlock , secondBlock) {
    let triess = document.querySelector(".tries span")

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        
        firstBlock.classList.remove("active")
        secondBlock.classList.remove("active")
        firstBlock.classList.add("rightBlock")
        secondBlock.classList.add("rightBlock")
        document.getElementById("true").play()
    }else{
        triess.innerHTML = parseInt(triess.innerHTML) + 1 ;
        console.log(parseInt(triess.innerHTML) + 1)
        
        setTimeout(() => {
            firstBlock.classList.remove("active")
            secondBlock.classList.remove("active")
        }, duration);
        document.getElementById("false").play()
    }
}
function shelf(ele) {
let currnt = ele.length,
temp,
    random
    while (currnt > 0) {
        random = Math.floor(Math.random() * currnt)
        
        currnt-- 
        
        temp = ele[currnt]
    
        ele[currnt] = ele[random]

        ele[random] = temp
    }
return ele
}