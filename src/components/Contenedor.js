import NavBar from "./NavBar";
import Section from "./Section";
import Footer from "./Footer";
import styles from "./Contenedor.module.css";

function Contenedor(props) {
    return (
     <div className={styles.contenedorStyle}>
        <NavBar/>
        <Section greeting={'Bienvenid@ a la tienda virtual de ropa deportiva'}/>
        <Footer/>
    </div>

    );
}

export default Contenedor;


    
