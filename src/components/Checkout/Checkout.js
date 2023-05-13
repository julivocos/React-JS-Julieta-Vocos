import { useContext, useState } from "react";
import { CartContext } from "../../Data/Context/CartContext";
import { getDocs, collection, query, where, addDoc, documentId, Timestamp, writeBatch } from "firebase/firestore"
import db from "../../Data/services/firebase/firebaseConfig";
import CheckoutForm from "./CheckoutForms";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css"


const Checkout = () =>{
    const [loading, setLoading] = useState (false)
    const [orderId, setOrderId ] = useState ('')

    const { cart, totalPrice, clearCart } = useContext (CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalPrice,
                date: Timestamp.fromDate(new Date())
            }
            console.log("objeto creado", objOrder)
                const batch = writeBatch(db)
                const outOfStock = []

            const ids = cart.map(prod => prod.id)
        
            const productsRef = collection(db, 'productos')

            const productsAddedFromFirestore = await getDocs( query (productsRef, where(documentId(), 'in', ids)))
           
            const { docs }= productsAddedFromFirestore

            docs.forEach(doc =>{
                const dataDoc= doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart =cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity 
               
                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("hay productos sin stock")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if(loading) {
        return <h1>Se está generando su orden...</h1>
    }

    if(orderId){
        return (
        
            <div className={styles.idContainer}> 
                <h1>El id de su orden es: {orderId}</h1>
                <h2 style={{color:"rgb(54, 54, 173)"}}>¡Muchas gracias por su compra!</h2>
                <Link to= '/' className={styles.linkCart}>Volver a pagina principal</Link>  
           </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )

}

export default Checkout