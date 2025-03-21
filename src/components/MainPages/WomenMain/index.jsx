import styles from '../mainPage.module.css'
import { womenCategories } from '../../../data/data'
import { getImageUrl } from '../../../utils/function'
import ColourFilter from '../../ColorFilter'
import PriceFilter from '../../PriceFilter'

const WomenMain = ({clickedProduct,selectColour}) => {
     return (
            <>
            <PriceFilter />
            <ColourFilter chooseColour={selectColour} />
            <div className={styles.product_container}>
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