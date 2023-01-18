/*
// get the JSON data from http://localhost:5500/tech.json
const response = await fetch("/tech.json");
// parse out the json into a variable - "tech"
const tech = await response.json();

// print to console
console.log(tech);
*/

/*
const response = await fetch("/tech.json");
const watches = await response.json();

const grid = document.querySelector('.product-cards-grid');

for (let tech of techs) {
    grid.innerHTML += `
        <div class="product-card">
            <img
            src="${tech.image}"
            alt="A ${tech.brand} ${tech.model} watch"
            />
            <div class="product-info">
            <div>
                <h2>${tech.brand}</h2>
                <p>${tech.model}</p>
            </div>
            <div>
                <a href="/product.html" class="bold">View</a>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            </div>
        </div>
    `
}
*/
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .grid-item').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.X').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});