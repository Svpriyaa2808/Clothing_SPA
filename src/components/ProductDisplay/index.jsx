import { getImageUrl } from "../../utils/function"
import { size } from "../../data/data"
import styles from './productDisplay.module.css'

const ProductDisplay = ({displayProduct}) => {
    console.log(displayProduct)
    return (
        <div className={styles.product_display}>
            <div className={styles.image_container}>
                <img src={getImageUrl(displayProduct.image)} alt={displayProduct.image}  ></img>
            </div>
            <div className={styles.product_details}>
                <div className={styles.name}>
                    <p>{displayProduct.name}</p>
                    <p>{displayProduct.price} SEK</p>
                </div>
                <div className={styles.description}>
                    <h2>DESCRIPTION</h2>
                    <p>{displayProduct.description}</p>
                    <p>Category : <span>{displayProduct.category}</span></p>
                    <p>Fabric: <span>{displayProduct.fabric}</span></p>
                    <p>Colour: <span>{displayProduct.colour}</span></p>
                    <p>Available Sizes :<span>{size}</span></p>
                </div>
                <div className={styles.add_button}>
                    <button className={styles.button}>ADD</button>
                </div>
            </div>
        </div>
    )    
}

export default ProductDisplay