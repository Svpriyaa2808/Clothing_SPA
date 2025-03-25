import styles from '../pricefilter.module.css'
import { SortAscending} from '@phosphor-icons/react'

const LowToHigh = ({lowPriceFilter}) => {
    
    const handleLowPrice = () => {
        lowPriceFilter("asc")
    }

    return (
        <>
            <button className={styles.price_filter_button} onClick={handleLowPrice}>
                <p>Low to High</p>
                <SortAscending size={24} />
            </button>
        
        </>
    )
}

export default LowToHigh