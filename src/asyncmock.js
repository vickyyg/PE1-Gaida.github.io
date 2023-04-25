const productos = [
    {nombre: "Tierra", precio: 700, id: "1", img: "./img/tierra.webp", idCat: "2"},
    {nombre: "Paneles", precio: 20000, id: "2", img: "./img/paneles.jpg", idCat: "2"},
    {nombre: "Fertilizantes", precio: 1000, id: "3", img: "./img/fertilizante.jpg", idCat: "3"},
    {nombre: "Carpas", precio: 10000, id: "4", img: "./img/", idCat: "3"},
    {nombre: "Aceites", precio: 1500, id: "5", img: "./img/", idCat: "3"},
    {nombre: "Semillas", precio: 500, id: "6", img: "", idCat: "4"},

]

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 2000)
    })
}

export const obtenerUnProducto = () => {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(productos);
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getCategorias = () => {
    return new Promise( resolve =>{
        setTimeout( () =>{
            const productosCategorias = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategorias);
        }, 100)
    } )
}