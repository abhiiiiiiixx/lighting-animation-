

let boxes = document.getElementsByClassName("box")






function abhii() {
    let colo1 = Math.floor(Math.random() * 256)
    let colo2 = Math.floor(Math.random() * 256)
    let colo3 = Math.floor(Math.random() * 256)
    return ` rgb( ${colo1} , ${colo2} , ${colo3})`
}


setInterval(() => {
    
    Array.from(boxes).forEach(function(e)  {
        e.style.backgroundColor = abhii()
       e.style.color = abhii()
   })

}, 700);   
