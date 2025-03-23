import styles from '../MainPages/mainPage.module.css'
import { getImageUrl } from '../../utils/function'
import ColourFilter from '../ColorFilter'


const SortInOrder = ({newArray,clickedProduct,selectColour}) => {
    return (
        <>
        <ColourFilter chooseColour={selectColour}/>
        <div className={styles.product_container}>
                    {newArray.map((item,index)=> 
                        <div className={styles.display_container}key={index} onClick={()=>clickedProduct(item)}>
                            <img src={getImageUrl(item.image)} alt={item.image}></img>
                            <p>{item.name}</p>
                            <p>{item.price} SEK</p>
                    </div>)}
                </div>
        </>
    )
}

export default SortInOrder