import styles from './Item.module.css'
import { Link } from "react-router-dom"



const Item =({id, nombre, talle, precio, imagen, stock}) =>{
    return(
        <article className={styles.articleProducts}>
            <div>
                <h2>{nombre} </h2>
            </div>
            <picture>
                <img src={imagen} alt={nombre} />
            </picture>
            <section>
                <p>Precio: ${precio}</p>
                <p>Talle: {talle}</p>
                <p>Stock: {stock} unid</p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className={styles.buttonDetalle}>Ver detalle</Link>
            </footer>
          
        </article>
    )
}

export default Item;