import styles from '../mainPage.module.css'
import { womenCategories,sortProductsByLowPrice } from '../../../data/data'
import { getImageUrl } from '../../../utils/function'
import ColourFilter from '../../ColorFilter'
import PriceFilter from '../../PriceFilter'
import { useState } from 'react'

const WomenMain = ({clickedProduct,selectColour}) => {
    const [sortByLowPrice,setSortByLowPrice] = useState(null)
    const [sortedProducts, setSortedProducts] = useState([]);
    
    const price = (item) => {

        const sortedArray = sortProductsByLowPrice("Women", setSortByLowPrice(item)); // Get sorted array
        setSortedProducts(sortedArray); 
      }
     
      return (
            <>
            {sortByLowPrice}
            <PriceFilter lowPriceFilter={price}/>
            {!sortByLowPrice && 
            <>
            
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
}
            {sortByLowPrice === "asc" && 
            <div className={styles.product_container}>
            {sortedProducts.map((item,index)=> 
            <div className={styles.display_container}key={index} onClick={()=>clickedProduct(item)}>
                <img src={getImageUrl(item.image)} alt={item.image}></img>
                <p>{item.name}</p>
                <p>{item.price} SEK</p>
        </div>)}
        </div>}
            </>
        )
}

export default WomenMain