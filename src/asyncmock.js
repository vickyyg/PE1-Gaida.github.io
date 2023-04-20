const productos = [
    {nombre: "Tierra", precio: 700, id: 1, img: "./img/tierra.webp"},

]

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 2000)
    })
}