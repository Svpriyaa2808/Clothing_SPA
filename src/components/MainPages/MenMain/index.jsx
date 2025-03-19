import { getImageUrl } from "../../../utils/function"
import {menCategories} from '../../../data/data'
import styles from '../mainPage.module.css'
import Filter from '../../ColorFilter'

const MenMain = ({clickedProduct,selectColour,selectedPage}) => {
    
    return (
        <>
        <Filter chooseColour={selectColour} choosePage={selectedPage}/>
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