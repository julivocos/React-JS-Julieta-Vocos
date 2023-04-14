import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = ()=> {
    return (
        <div style= {{

            fontSize: "25px",
            backgroundColor:" rgb(229, 138, 173)",
            width: "7vh",
            borderRadius:"8px",
            textAlign:"center",
            paddingLeft:"15px",
            paddingRight:"15px"

            
        }}>
           <AiOutlineShoppingCart />
            0
        </div>
    )
}

export default CartWidget;