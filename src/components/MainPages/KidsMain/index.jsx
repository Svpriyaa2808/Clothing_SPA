import styles from '../mainPage.module.css'
import { kidsCategories } from '../../../data/data'
import { getImageUrl } from '../../../utils/function'
import ColourFilter from '../../ColorFilter'
import LowToHigh from '../../PriceFilter/LowToHigh'
import HighToLow from '../../PriceFilter/HighToLow'

const KidsMain = ({clickedProduct,selectedPage,selectColour,selectPrice}) => { 
    return (
        <>
        <div className={styles.filter_buttons}>
            <LowToHigh lowPriceFilter={selectPrice}/>
            <HighToLow lowPriceFilter={selectPrice} />
            <ColourFilter  chooseColour={selectColour} choosePage={selectedPage}/>
        </div>
        <div className={styles.product_container}>
            {kidsCategories.map((item,index)=> 
                <div className={styles.display_container}key={index} onClick={()=>clickedProduct(item)}>
                    <img src={getImageUrl(item.image)} alt={item.image}></img>
                    <p>{item.name}</p>
                    <p>{item.price} SEK</p>
            </div>)}
        </div>
        
    
        </>
    )
}

export default KidsMain


