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
                <p>Talle: {talle}</p>
                <p>Precio: {precio}</p>
                <p>stock: {stock}</p>
            </section>
          
        </article>
    )
}

export default Item