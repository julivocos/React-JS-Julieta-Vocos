import ItemCount from "../ItemCount/ItemCount";

const ItemDetail =({id, nombre, talle, precio, stock, img, category}) =>{
    return(
        <article >
            <div>
                <h2>{nombre} </h2>
            </div>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Precio: ${precio}</p>
                <p>Stock disponible: {stock}</p>
                <p>Talles: {talle}</p>
                <button >Ver detalle</button>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;
