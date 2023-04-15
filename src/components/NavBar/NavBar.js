import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink}  from "react-router-dom";



function NavBar(props) {
    return (
        <div className={styles.nav}>
            <nav>
                <Link to={`/`}>
                    <h1>ECOMMERCE</h1>
                </Link>
            
                <ul>
                     <NavLink to={`/categoria/Pantalones`} className={styles.NavLink}>PANTALONES</NavLink>
                     <NavLink to={`/categoria/Vestidos`} className={styles.NavLink}>VESTIDOS</NavLink>
                     <NavLink to={`/categoria/Abrigos`} className={styles.NavLink}>ABRIGOS</NavLink>
                     <NavLink to={`/categoria/Remeras`} className={styles.NavLink}>REMERAS</NavLink>
                </ul>
                <div className={styles.cartStyle}>
                <CartWidget />
                </div>
            </nav>
         </div>
    );
    
}
export default NavBar;
