import { useState, useEffect } from "react"
import { getProductById } from "../../Data/services/getProducts"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer =() =>{
    const {itemId} = useParams()
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
          const productDataAdapted = await getProductById(itemId);
          setProduct(productDataAdapted);
       };
        getData();
      }, [itemId]);
    
    return(
        <div styles={{
            display:"flex",
            justifyContent:"center",
            
        }}>
            
        <ItemDetail {...product} />    
        </div>
    );
};

export default ItemDetailContainer