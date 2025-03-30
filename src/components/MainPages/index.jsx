import { getImageUrl } from '../../utils/function'
import styles from './mainPage.module.css'
import ColourFilter from '../ColorFilter'
import LowToHigh from '../PriceFilter/LowToHigh'
import HighToLow from '../PriceFilter/HighToLow'

const MainPage = ({clickedProduct,selectedPage,selectColour,selectPrice,selectedCategory,userInput,selectHighPrice}) => {
    
    const handleClick = (item) => {
        clickedProduct(item)
        userInput("")
    }
       console.log(selectedCategory)
    
       return (
        <>
         <div className={styles.filter_buttons}>
            <LowToHigh lowPriceFilter={selectPrice} highPriceFilter={selectHighPrice}  selectInput={userInput}/>
            <HighToLow highPriceFilter={selectHighPrice} lowPriceFilter={selectPrice} selectInput={userInput}/>
            <ColourFilter chooseColour={selectColour} />
        </div>
        <div className={styles.product_container}>
            {selectedCategory.map((item,index)=> 
            <div className={styles.display_container}key={index} onClick={()=>handleClick(item)}>
                <img src={getImageUrl(item.image)} alt={item.image}></img>
                <p>{item.name}</p>
                <p>{item.price} SEK</p>
        </div>)}
        </div>
        </>
    )
}

export default MainPage