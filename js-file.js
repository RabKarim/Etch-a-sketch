const container = document.querySelector("#container")
const grid_button = document.createElement("button")
grid_button.setAttribute("id", "grid_button")
grid_button.textContent = "Grid number"



let num_of_pixels = 6




function range(from, to) {
    let number_range = []
    for (let i = from; i <= to; i++){
        number_range.push(i)
    }
    return number_range

}



function create_grid() {
    let grid = document.createElement("div")
    grid.setAttribute("id", "grid")
    let dimensions = Math.ceil(600 / num_of_pixels)
    let array = range(1,(num_of_pixels**2))
    for (let b = 0; b < array.length; b++) {
        let pixel = document.createElement("div")
        pixel.setAttribute("class", "pixel")
        pixel.style.width = dimensions + "px"
        pixel.style.height = dimensions + "px"
        pixel.style.backgroundColor = "black"
        container.appendChild(grid)
        grid.appendChild(pixel)
        pixel.addEventListener("mouseover", function(e){
            pixel.style.backgroundColor = "white"
        })

    }


}
grid_button.addEventListener("click", function(e){
    grid.remove()
    let response = prompt("Enter a number between 2-100")
    num_of_pixels = Number(response)
    create_grid()
    

})


container.appendChild(grid_button)
create_grid()



