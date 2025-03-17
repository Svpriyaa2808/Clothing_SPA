import { getImageUrl } from "../../utils/function"
import {products} from '../../data/data'
import styles from './menmain.module.css'

const MenMain = ({clickedProduct}) => {
    
    return (
        <>
        <div className={styles.men_product_container}>
            {products.map((item,index)=> 
            <div className={styles.div}key={index} onClick={()=>clickedProduct(item)}>
        <p>{item.name}</p>
        <img src={getImageUrl(item.image)} alt={item.image}></img>
        <p>{item.price} SEK</p>
        </div>)}
        </div>
        </>
    )
}

export default MenMain