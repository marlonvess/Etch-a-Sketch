//Multiply all divs to make a 16x16 grid, which is formated on CSS
for (let i = 0; i < 15*15; i++) {
    let newDiv=document.createElement('div');
    newDiv.className='divGrid';
    document.getElementById("container").appendChild(newDiv);
}

var hoverDivs = document.querySelectorAll('.divGrid');

    // Add a mouseover event listener to each div with the class "hoverDiv"
    hoverDivs.forEach(function(div) {
      div.addEventListener('click', function() {
            div.style.backgroundColor = "#393737";
      });
    });

