import { useState } from "react";
import styles from "./Checkout.module.css"

const CheckoutForm = ({ onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState ('')

    
    const isDisabled = () => {
        return name.trim() === '' || phone.trim() === '' || email.trim() === '' ;
    };

    const handleConfirm = (event) =>{
        event.preventDefault ()

        const userData ={
            name, phone, email
        }

        onConfirm(userData)

    }

    return (
        <div>
            <form onSubmit={handleConfirm} >
                <label>
                    Nombre
                   <input type='text' value={name} onChange={({ target}) => setName(target.value)}/>
                </label>
                <label>
                    Telefono
                   <input type='number' value={phone} onChange={({ target}) => setPhone(target.value)}/>
                </label>
                <label>
                    email
                   <input type='email' value={email} onChange={({ target}) => setEmail(target.value)}/>
                </label> 
                <button className={styles.buttonCrearOrden} type='submit' disabled={isDisabled()}>
                    Crear orden
                </button>
            </form>
        </div>
    )

}

export default CheckoutForm