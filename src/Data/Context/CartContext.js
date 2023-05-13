import react, { useEffect } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = react.createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); 

    const addItem = (item , quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.log("El producto ya fue agregado");
        }
    }

    const removeItem = (itemId)=>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([]);   
    
    }
    
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0)
    const totalPrice= cart.reduce((total, prod) => total + prod.quantity * prod.precio, 0)
    
    return (
        <CartContext.Provider value= {{ cart, totalPrice, totalQuantity, addItem, removeItem, clearCart}}>
            { children}
        </CartContext.Provider>
    );
};


