import { useState, useEffect } from "react";
import { getProductsByCategory } from "../../Data/services/getProducts";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting}) => {
    const {categoryId} = useParams();
    const [products, setProducts] = useState ([]);
    
    useEffect(() => {
    
        const getData = async () => {
            const productsDataAdapted = await getProductsByCategory(categoryId);
            setProducts(productsDataAdapted);
          };
      
          getData();
        }, [categoryId]);
      
    return (
        <div >
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
    
};

export default ItemListContainer;    

