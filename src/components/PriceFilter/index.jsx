import styles from './pricefilter.module.css'
import { SortAscending,SortDescending } from '@phosphor-icons/react'

const PriceFilter = ({lowPriceFilter}) => {
    const handleLowPrice = () => {
        lowPriceFilter("asc")
    }

    const handleHighPrice = () => {
        lowPriceFilter("des")
    }

    return (
        <>
        <div className={styles.price_filter}>
            <button className={styles.price_filter_button} onClick={handleLowPrice}>
                <p>Low to High</p>
                <SortAscending size={24} />
            </button>

            <button className={styles.price_filter_button} onClick={handleHighPrice}>
                <p>High to Low</p>
                <SortDescending size={24} />
            </button>
        </div>
        
        </>
    )
}

export default PriceFilter