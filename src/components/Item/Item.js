import styles from './Item.module.css'

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
                <button className={styles.buttonDetalle} >Ver detalle</button>
            </footer>
          
        </article>
    )
}

export default Item;