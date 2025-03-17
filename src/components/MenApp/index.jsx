import { useState } from "react";
import MenMain from "../MenMain";
import styles from './menapp.module.css'
import ProductDisplay from "../ProductDisplay";

const MenApp = ({selectedProduct}) =>  {
    // const [productDetails, setProductDetails] = useState(null)
    return (
        <>
            <div className={styles.main}>
                
            
                <div className={styles.product_display}>
                    <MenMain clickedProduct = {selectedProduct}/>
                      
                </div> 
                
      
                
               
            </div>
            
        </>
    )
}

export default MenApp