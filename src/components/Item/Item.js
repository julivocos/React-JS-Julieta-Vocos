import styles from './Item.module.css'
import { Link } from "react-router-dom"



const Item =({id, nombre, talle, precio, stock, img}) =>{
    return(
        <article className={styles.articleProducts}>
            <div>
                <h2>{nombre} </h2>
            </div>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>Precio: ${precio}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className={styles.buttonDetalle}>Ver detalle</Link>
            </footer>
          
        </article>
    )
}

export default Item;