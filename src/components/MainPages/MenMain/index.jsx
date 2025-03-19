import { getImageUrl } from "../../../utils/function"
import {menCategories} from '../../../data/data'
import styles from '../mainPage.module.css'

const MenMain = ({clickedProduct}) => {
    
    return (
        <>
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