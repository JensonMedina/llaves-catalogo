const contenedor = document.querySelector(".flex-container");

function crearLlaves(nombre, modelo, precio)
{
    img = "<img class='llave-img' src='https://assets.stickpng.com/images/580b585b2edbce24c47b2851.png'>"
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}
const changeHidden = (number)=>
{
    document.querySelector(".key-data").value = number;
}

let fragmento = document.createDocumentFragment();
for(let x = 0; x < 20; x++)
{
    const modeloRandom = Math.round(Math.random() * 10000);
    const precioRandom = Math.round(Math.random() * 1000);
    let llave = crearLlaves(`Llave ${x + 1}`,`modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)})
    div.tabIndex = x;
    div.classList.add(`item-${x + 1}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmento.appendChild(div);
}

contenedor.appendChild(fragmento);

