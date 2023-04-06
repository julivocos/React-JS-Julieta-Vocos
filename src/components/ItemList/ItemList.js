import Item from "../Item/Item"
import styles from "./ItemList.module.css"


   const ItemList = ({products})=>{

    return(
        <div className={styles.divProducts}>
            {products.map(prod => <Item Key={prod.id} {...prod} />)}
        </div>
    )
       
} 



export default ItemList