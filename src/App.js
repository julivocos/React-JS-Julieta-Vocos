import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
import styles from "./App.module.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Data/Context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className={styles.contenedorStyle}>
        <BrowserRouter>
            <CartProvider>
                <NavBar /> 
                <div className={styles.divMain}>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={'Tienda virtual de ropa de mujer'}/>}/>
                    <Route path="/categoria/:categoryId" element={<ItemListContainer />}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout />}/>
                    <Route path="*" element={ <h1>404 NOT FOUND</h1>}/>
                </Routes>
                </div>
                <Footer/>
            </CartProvider>
            
        </BrowserRouter>
    </div>
);
}

export default App;
