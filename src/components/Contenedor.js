import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Footer from "./Footer";
import styles from "./Contenedor.module.css";
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Contenedor(props) {

    const handle = (e) =>{
        console.log(e.target.innerText);
    };

    return (
        <div className={styles.contenedorStyle}>
            <BrowserRouter>
                <NavBar handleClick={handle}/>
                <div className={styles.divMain}>
                     <Routes>
                        <Route path="/" element={<ItemListContainer greeting={'Tienda virtual de ropa de mujer'}/>}/>
                        <Route path="/page2" element={<ItemDetailContainer />}/>

                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>



        // <div className={styles.contenedorStyle}>
        //     <NavBar/>
        //      <div className={styles.divMain}>
        //         <ItemListContainer />
        //         <ItemDetailContainer />
        //     </div>
        //      <Footer/>
       
        // </div>

    );
}

export default Contenedor;


    
