import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Footer from "./Footer";
import styles from "./Contenedor.module.css";
import ItemCount from './ItemCount/ItemCount';

function Contenedor(props) {
    return (
     <div className={styles.contenedorStyle}>
        <NavBar/>
        <div className={styles.divMain}>
            <ItemListContainer greeting={'Bienvenid@ a la tienda virtual de ropa deportiva'}/>
            <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
        </div>
       
        <Footer/>
    </div>

    );
}

export default Contenedor;


    
