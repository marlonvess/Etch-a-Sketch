let sliderInput = document.getElementById('numberSlide');
let sliderOutput = document.getElementById('output');
let container = document.getElementById('container');

function createGrid(size) {
  // Clear existing divs in the container
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = 'divGrid';
    container.appendChild(newDiv);
  }


  let color=document.getElementById('colorPicker');

  color.addEventListener("input", () => {colorPicked=color.value;});

  
  // Update the clickDivs variable after creating new divs
  var clickDivs = document.querySelectorAll('.divGrid');

  // Add a click event to change each div color to black
  clickDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      div.style.backgroundColor = colorPicked;
    });

    // Adjust the size of the grid items based on the new size
    div.style.cssText = `flex: 1 1 calc(450px/${size});`;
  });
}

let gridValue = sliderInput.value;
sliderOutput.textContent = `Grid Size: ${gridValue}x${gridValue}`;

sliderInput.addEventListener('input', function () {
  // Update the variable with the slider value
  gridValue = sliderInput.value;

  // Update the output text
  sliderOutput.textContent = `Grid size: ${gridValue}x${gridValue}`;

  // Create or update the grid based on the new size
  createGrid(gridValue);
});

// Initial grid creation
createGrid(gridValue);
