import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink}  from "react-router-dom";



function NavBar(props) {
    return <div className={styles.nav}>
        <nav>
            
            <h1>ECOMMERCE</h1>
            
            
             <ul>
                 <button>PANTALONES</button>
                 <button>VESTIDOS</button>
                 <button>ABRIGOS</button>
                 <button>REMERAS</button>
            </ul>
            <div className={styles.cartStyle}>
                <CartWidget />
            </div>
        </nav>
            
       
    </div>;
}
export default NavBar;
