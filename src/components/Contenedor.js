import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Footer from "./Footer";
import styles from "./Contenedor.module.css";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Contenedor(props) {

    return (
        <div className={styles.contenedorStyle}>
            <BrowserRouter>
                <NavBar /> 
                <div className={styles.divMain}>
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={'Tienda virtual de ropa de mujer'}/>}/>
                        <Route path="/categoria/:categoryId" element={<ItemListContainer />}/>
                        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
                        <Route path="*" element={ <h1>NOT FOUND</h1>}/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default Contenedor;


    
