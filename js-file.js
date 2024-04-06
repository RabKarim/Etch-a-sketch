const container = document.querySelector("#container")
const grid_button = document.createElement("button")
grid_button.setAttribute("id", "grid_button")
grid_button.textContent = "Grid number"

let grid = document.createElement("div")
grid.setAttribute("id", "grid")
let num_of_pixels = 6




function range(from, to) {
    let number_range = []
    for (let i = from; i <= to; i++){
        number_range.push(i)
    }
    return number_range
    
}



function create_grid() {
    let dimensions = Math.ceil(600 / num_of_pixels)
    let array = range(1,(num_of_pixels**2))
    for (let b = 0; b < array.length; b++) {
        let pixel = document.createElement("div")
        pixel.setAttribute("class", "pixel")
        pixel.style.width = dimensions + "px"
        pixel.style.height = dimensions + "px"
        pixel.style.backgroundColor = "black"
        console.log(String(dimensions))
        grid.appendChild(pixel)
        pixel.addEventListener("mouseover", function(e){
            pixel.style.backgroundColor = "white"
        })

    }


}



container.appendChild(grid_button)
container.appendChild(grid)
create_grid()

