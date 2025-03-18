import { getImageUrl } from "../../utils/function"
import {menCategories,colorFilter} from '../../data/data'
import styles from './menmain.module.css'

const MenMain = ({clickedProduct}) => {
    
    return (
        <>
        <div className={styles.men_product_container}>
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