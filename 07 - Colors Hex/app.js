const boton = document.querySelector('button');
const color = document.getElementById('color');

function changeColor() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

for (let i = 0; i < 6; i++) {
    let indiceRamdon = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceRamdon];
}

return colorHex;
}

boton.addEventListener('click', function() {
    let indiceRamdon = changeColor();
    color.textContent = indiceRamdon;
    document.body.style.backgroundColor = indiceRamdon;
})