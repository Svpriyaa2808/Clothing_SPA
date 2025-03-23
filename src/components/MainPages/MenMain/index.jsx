import { getImageUrl } from "../../../utils/function"
import {menCategories} from '../../../data/data'
import styles from '../mainPage.module.css'
import ColourFilter from '../../ColorFilter'
import PriceFilter from "../../PriceFilter"
const MenMain = ({clickedProduct,selectedPage,selectColour,selectPrice}) => {
    
    return (
        <>
         <div className={styles.filter_buttons}>
            <PriceFilter lowPriceFilter={selectPrice}/>
            <ColourFilter chooseColour={selectColour} choosePage={selectedPage}/>
        </div>
        <div className={styles.product_container}>
            {menCategories.map((item,index)=> 
            <div className={styles.display_container}key={index} onClick={()=>clickedProduct(item)}>
                <img src={getImageUrl(item.image)} alt={item.image}></img>
                <p>{item.name}</p>
                <p>{item.price} SEK</p>
        </div>)}
        </div>
        </>
    )
}

export default MenMain