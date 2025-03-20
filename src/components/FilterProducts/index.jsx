import styles from './filterproducts.module.css'
import { getImageUrl } from '../../utils/function'

const FilterProducts = ({displayFilterProducts,clickedProduct}) => {
    console.log(displayFilterProducts)
    return (
        <>
        <div className={styles.filter_details}>
            {/* <h4>Filter : {displayFilterProducts[0].colour}</h4> */}
            <h4>Total Products: {displayFilterProducts.length}</h4>
        </div>
        <div className={styles.filter_products_container}>
            {displayFilterProducts.map((item,index)=> 
            <div key={index} className={styles .filter_products} onClick={()=>clickedProduct(item)}>
                <img src={getImageUrl(item.image)} alt={item.name}></img>
                <p>{item.name}</p>
                <p>{item.price} SEK</p>
                <p>Category: {item.category}</p>
                </div>)}
        </div>
        </>
    )
}

export default FilterProducts