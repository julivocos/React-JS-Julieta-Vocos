import { AiOutlineWhatsApp , AiFillFacebook , AiOutlineInstagram} from "react-icons/ai";
import styles from "./Footer.module.css"

function Footer(props) {
    return (
        <div className={styles.footerContain}>
          
         <AiOutlineWhatsApp/>  
         <AiFillFacebook/> 
         <AiOutlineInstagram/>
            
        </div>
        
    );
    
}

export default Footer;