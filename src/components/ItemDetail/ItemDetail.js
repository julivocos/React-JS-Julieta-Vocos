import ItemCount from "../ItemCount/ItemCount";

const ItemDetail =({id, nombre, talle, precio, stock, img, categoria}) =>{
    return(
        <article style={{
            backgroundColor:"rgb(236, 183, 219)",
            borderRadius:"15px",
            marginBottom:"15px",
            marginTop:"25px",
            width : "40%",
            height:"70%",
            marginLeft:"30%",
            marginRight:"30%",
            color: "black",
            fontSize:"20px",
            paddingTop:"20px",

            
        }} >
            <div>
                <h2>{nombre} </h2>
            </div>
            <picture>
                <img style={{width:"250px", height:"300px",borderRadius:"20px",}} src={img} alt={nombre} />
            </picture>
            <section>
                <p>Categoria: {categoria}</p>
                <p>Precio: ${precio}</p>
                <p>Stock disponible: {stock}</p>
                <p>Talles: {talle}</p>
                
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;
