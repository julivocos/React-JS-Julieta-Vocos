import styles from "./NavBar.module.css";
import CartWidget from "./CartWidget/CartWidget";



function NavBar(props) {
    return <div className={styles.nav}>
        <nav>
            <h1>DETOX DEPORTIVO</h1>
             <ul>
                 <button>INICIO</button>
                 <button>PRODUCTOS</button>
                 <button>CONTACTO</button>
            </ul>
            <div className={styles.cartStyle}>
                <CartWidget/>0
            </div>
        </nav>
            
       
    </div>;
}
export default NavBar;
