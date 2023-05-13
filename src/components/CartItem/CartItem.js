import { CartContext } from "../../Data/Context/CartContext"
import { useContext } from "react"
import styles from "./cartItem.module.css"

const CartItem = ({ id, nombre, precio, quantity}) => {

    const {removeItem} = useContext(CartContext);

    return(
        <div className={styles.cartItem}>
            
             <h3>{nombre} </h3>
             <p>Cantidad:{quantity}</p>
             <p>Precio x Unid: ${precio}</p>
             
            <div className={styles.cartItem2}>
                <h4>Subtotal: ${precio * quantity}</h4>
                <button className={styles.buttonRemove} onClick={() => removeItem(id)}>X</button>
            </div>
            
        </div>               
    )
}

export default CartItem