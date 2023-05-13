import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../Data/Context/CartContext";
import { Link } from "react-router-dom";
import styles from "./CartWidget.module.css"

const CartWidget = ()=> {
    const { totalQuantity } = useContext (CartContext)

    return (
        <Link to='/cart' className={styles.cartWidget} style={{
            display: totalQuantity > 0 ? 'block' : 'none'
        }}>
            
            <AiOutlineShoppingCart />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;