import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Data/Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import styles from "./cart.module.css"

const Cart = () =>{
    const { cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)
    
    if( totalQuantity === 0) {
        return (
            <div className={styles.productsCart}>
                <h1>No hay items en el carrito</h1>
                <Link to= '/' className={styles.linkCart}>
                Productos
                </Link>
            </div>
        )
    }

    return(
        <div className={styles.cart}>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
           
            <div className={styles.cartButtons}>
                <span>Total $ {totalPrice}</span>
                <button className={styles.buttonCart} onClick={() => clearCart()}>Limpiar carrito</button>
                <Link to='/checkout' className={styles.buttonCheckout}>Terminar compra</Link>
            </div>
        </div>
    )
}

export default Cart