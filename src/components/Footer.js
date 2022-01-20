
import styles from "./footer.module.css"
import {AiOutlineMail} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"


function footer() {
    return ( 
        
        <div className={styles.footer}>
        <div className={styles.row}>
            <div className={styles.col}>
                <h1> OPEN BOOK </h1>
                <p> Behind every book is an idea, and </p>
                <p>behind every idea is a step forward </p>
                <p>Books are the treasured wealth of</p> 
                <p> the world, and the best legacy for</p> 
                <p> generations and nations.</p>
            </div>
            <div className={styles.col2}>
                <h5>Contact Information</h5>
                <div className={styles.contact} >
                    <p> <AiOutlineMail/>    BOOKSTORE@gmail.com</p>
                </div>
                <div> <p> <FiTwitter/> @BOOKSTORE</p> </div>
                <div> <p> <FiInstagram />  BOOKSTORE2021</p> </div>
            
            </div>
        </div>                  
        </div>
     );
}

export default footer;