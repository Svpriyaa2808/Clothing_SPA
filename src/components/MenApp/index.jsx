
import MenMain from "../MenMain";
import styles from './menapp.module.css'

const MenApp = ({selectedProduct}) =>  {
    // const [productDetails, setProductDetails] = useState(null)
    return (
        <>
            <div className={styles.main}>
                
                    <MenMain clickedProduct = {selectedProduct}/>
                      
           
            </div>
            
        </>
    )
}

export default MenApp