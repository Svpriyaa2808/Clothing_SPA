import styles from '../mainPage.module.css'
import { kidsCategories } from '../../../data/data'
import { getImageUrl } from '../../../utils/function'
import ColourFilter from '../../ColorFilter'

const KidsMain = ({clickedProduct,selectedPage,selectColour}) => {
    return (
        <>
        <ColourFilter chooseColour={selectColour} choosePage={selectedPage}/>
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