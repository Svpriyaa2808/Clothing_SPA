import styles from './womenmain.module.css'
import { womenCategories } from '../../data/data'
import { getImageUrl } from '../../utils/function'

const WomenMain = ({clickedProduct}) => {
     return (
            <>
            <div className={styles.women_product_container}>
                {womenCategories.map((item,index)=> 
                <div className={styles.display_container}key={index} onClick={()=>clickedProduct(item)}>
                    <img src={getImageUrl(item.image)} alt={item.image}></img>
                    <p>{item.name}</p>
                    <p>{item.price} SEK</p>
            </div>)}
            </div>
            </>
        )
}

export default WomenMain