import { getImageUrl } from '../../utils/function'
import styles from './mainPage.module.css'
import ColourFilter from '../ColorFilter'
import LowToHigh from '../PriceFilter/LowToHigh'
import HighToLow from '../PriceFilter/HighToLow'

const MainPage = ({clickedProduct,selectedColourProduct,selectPrice,selectedCategory,userInput,selectHighPrice,selectColour}) => {
    
    const handleClick = (item) => {
        clickedProduct(item)
        userInput("")
    }
       console.log(selectedCategory)
    
       return (
        <>
         <div className={styles.filter_buttons}>
            <LowToHigh lowPriceFilter={selectPrice} highPriceFilter={selectHighPrice}  selectInput={userInput} chooseColour={selectedColourProduct} coloursToDisplay={selectColour}/>
            <HighToLow highPriceFilter={selectHighPrice} lowPriceFilter={selectPrice} selectInput={userInput}  chooseColour={selectedColourProduct} coloursToDisplay={selectColour}/>
            <ColourFilter chooseColour={selectedColourProduct} coloursToDisplay={selectColour}/>
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