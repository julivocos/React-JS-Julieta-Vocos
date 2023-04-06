import { useState } from "react";
import styles from './ItemCount.module.css';


const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = ()=>{
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = ()=>{
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div >
            <div className={styles.divAgregarCarrito}>
                <button className={styles.buttonCarrito} onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button  className={styles.buttonCarrito} onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() =>onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )





}

export default ItemCount;