import { getDocs, collection, query, where, doc, getDoc, documentId } from "firebase/firestore"
import  db  from "./firebase/firebaseConfig";
import { productAdapter } from "../../adapter/productAdapter";

export const getProductsByCategory = async (categoryId) => {
    try {
        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('categoria', '==', categoryId))
            : collection(db, 'productos');
        const response = await getDocs(collectionRef);
        const productsAdapted = response.docs.map(doc => productAdapter (doc));
        return productsAdapted;
    } catch (error) {
        console.error(error);
    }
};

export const getProductById = async (itemId) => {
    try {
        const docRef = doc(db, 'productos', itemId);
        const response = await getDoc(docRef);
        const productAdapted = productAdapter(response);
        return productAdapted;
    } catch (error) {
        console.error(error);
    }
};

export const getProductsInCart = async (cart) => {
    const ids = cart.map(prod => prod.id);
    const productsRef = collection(db, 'productos');
    const productsAddFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
    const { docs } = productsAddFromFirestore;
    return docs;
}