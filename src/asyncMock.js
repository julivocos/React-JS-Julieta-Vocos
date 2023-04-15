const products =[
    {id: '1', nombre:'Blazer',talle: "1-2-3" , precio: 10000, categoria: "Abrigos", stock: 5, img: '/img/blazer.jpg'},
    {id: '2', nombre:'Campera',talle: "1-2-3" , precio: 20000, categoria: "Abrigos", stock: 6, img: '/img/campera.jpeg'},
    {id: '3', nombre:'Sweater', talle: "1-2-3" , precio: 15000, categoria: "Abrigos", stock: 3, img: '/img/sweater.jpeg'},

    {id: '4', nombre:'Jean', talle: "40-42-44-46" , precio: 8000, categoria: "Pantalones", stock: 10, img: '/img/jean.jpg'},
    {id: '5', nombre:'Palazo', talle: "1-2-3" , precio: 10000, categoria: "Pantalones", stock: 8, img: '/img/palazo.jpeg'},
    {id: '6', nombre:'Jogging', talle: "1-2-3-4" , precio: 6000, categoria: "Pantalones", stock: 10, img: '/img/jogging.jpeg'},
    
    {id: '7', nombre:'Blusa', talle: "1-2-3-4" , precio: 15000, categoria:"Remeras", stock: 8, img: '/img/blusa.jpg'},
    {id: '8', nombre:'Camisa', talle: "1-2-3-4" ,  precio: 15000, categoria:"Remeras", stock: 10, img: '/img/cam.jpg'},
    {id: '9', nombre:'Top', talle: "1-2-3" ,  precio: 4000, categoria:"Remeras", stock: 15, img: '/img/top.jpeg'},

    {id: '10', nombre:'Vestido Corto', talle: "1-2-3-4" ,  precio: 8000, categoria: "Vestidos", stock: 5, img: '/img/vestidos.jpeg'},
    {id: '11', nombre:'Vestido Largo', talle: "1-2-3-4" ,  precio: 10000, categoria: "Vestidos", stock: 5, img: '/img/vestidoLargo.jpeg'},
    {id: '12', nombre:'Vestido de fiesta', talle: "1-2-3-4" ,  precio: 20000, categoria: "Vestidos", stock: 5, img: '/img/vestidoFiesta.jpeg'}

]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, )
    })

}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod =>prod.id === productId))
            
        }, )
    })

}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
           console.log("categoria por id", categoryId);
        },400)
    })
}