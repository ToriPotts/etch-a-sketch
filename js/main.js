
const containerDiv = document.querySelector('#container');
// const gridDiv = document.createElement('div');
const resetButton = document.querySelector('#btn');
resetButton.addEventListener('click', () => {
   const input = prompt("how many squares do you want your grid to be?" )
   console.log(input)
   containerDiv.innerHTML = ""
   if(input){grid (containerDiv, input, input)}
   addColorOptions()
});

let row
let amountBoxs
let amountRows

function grid (containerDiv, amountRows, amountBoxs) {
    var container = containerDiv.appendChild(document.createElement("div"));
    container.id = "main";
    container.className = "container";

    for (var i = 0;i < amountRows;++i) {
        row = container.appendChild(document.createElement("div"));
        row.className = "row";
        row.id = "row" + i;
        for (var k = 0;k < amountBoxs;++k) {
            var box = row.appendChild(document.createElement("div"));
            box.className = "box";
                   }
    }
}

grid(containerDiv, 16, 16)

function addColorOptions() {const boxClass = document.getElementsByClassName("box");
Array.from(boxClass, c => c.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "black"
} ));

};
addColorOptions()

