import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer =(img) =>{
    const [product, setProduct] = useState (null)

    const {itemId} = useParams()

    useEffect (()=> {
        getProductById (itemId)
        .then(response =>{
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        })
        console.log("itemId", itemId);
    }, [itemId])

    return(
        <div styles={{
            display:"flex",
            justifyContent:"center",
        }}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer