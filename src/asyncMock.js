const products =[
    {
        id: '1', nombre:'Blazer', talle:'1' , precio: 10000, stock: 5, img: './public/img/blazer.jpg'
    },
    {
        id: '1', nombre:'Blazer', talle:'2' , precio: 10000, stock: 8, img: './public/img/blazer.jpg'
    },
    {
        id: '1', nombre:'Blazer', talle:'3' , precio: 10000, stock: 10, img: './public/img/blazer.jpg'
    },
    {
        id: '2', nombre:'Jean', talle:'40' , precio: 8000, stock: 10, img: './public/img/jean.jpg'
    },
    {
        id: '2', nombre:'Jean', talle:'42' , precio: 8000, stock: 4, img: './public/img/jean.jpg'
    },
    {
        id: '2', nombre:'Jean', talle:'44' , precio: 8000, stock: 5, img: './public/img/jean.jpg'
    },
    {
        id: '2', nombre:'Jean', talle:'46' , precio: 8000, stock: 4, img: './public/img/jean.jpg'
    },
    {
        id: '2', nombre:'Sweater', talle:'2' , precio: 15000, stock: 3, img: './public/img/sweater.jpeg'
    },
    {
        id: '2', nombre:'Sweater', talle:'3' , precio: 15000, stock: 5, img: './public/img/sweater.jpeg'
    },
    {
        id: '2', nombre:'Sweater', talle:'4' , precio: 15000, stock: 3, img: './public/img/sweater.jpeg'
    }

]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 400)
    })

}