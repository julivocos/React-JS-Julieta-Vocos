import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./itemDetail.module.css"
import { CartContext } from "../../Data/Context/CartContext";

const ItemDetail =({id, nombre, talle, precio, stock, imagen,Descripción}) =>{
    const [quantityAdded, SetquantityAdded] = useState(0)

    const { addItem } = useContext (CartContext)
    

    const handleOnAdd = (quantity) => {
        SetquantityAdded(quantity)

        const item = {
            id, nombre, precio
        }
        addItem (item , quantity)
    }
    
    
    return(
        <article className={styles.linkCarrito}>
            <div>
                <h2>{nombre} </h2>
                <h3>Precio ${precio}</h3>
            </div>
            <picture>
                <img style={{width:"200px", height:"250px",borderRadius:"20px",}} src={imagen} alt={nombre} />
            </picture>
            <section>
                <p>{Descripción}</p>
                <p>Talle: {talle}</p>
                <p>Stock disponible: {stock}</p>
                
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className={styles.linkTerminar}>Terminar compra</Link> 
                    ) : (    
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>

                    )
                }
               
            </footer>
        </article>
    )
}

export default ItemDetail;
