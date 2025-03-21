import styles from './filterproducts.module.css'
import { getImageUrl } from '../../utils/function'
import { size } from '../../data/data'

const FilterProducts = ({displayFilterProducts,clickedProduct}) => {
    console.log(displayFilterProducts)
    return (
        <>
            {displayFilterProducts && displayFilterProducts.length > 0 ?
            <>
                <div className={styles.filter_details}>
                    <h4>Filter : {displayFilterProducts[0].colour}</h4>
                    <h4>Category : {displayFilterProducts[0].category}</h4>
                    <h4>Total Products: {displayFilterProducts.length}</h4>
                </div>
                <div className={styles.filter_products_container}>
                    {displayFilterProducts.map((item,index)=> 
                    <div key={index} className={styles .filter_products} onClick={()=>clickedProduct(item)}>
                        <img src={getImageUrl(item.image)} alt={item.name}></img>
                        <p>{item.name}</p>
                        <p>{item.price} SEK</p>
                        <p>Category: {item.category}</p>
                        <p>Available Size : {size}</p>
                    </div>)}
                </div>
            </> 
            : 
            <>
                <div className={styles.no_products_container}>
                    <p>No Products Available</p>
                </div>
            </>
            }
        </>
    )
}

export default FilterProducts