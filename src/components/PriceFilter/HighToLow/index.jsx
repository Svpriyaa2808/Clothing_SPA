import LowToHigh from '../LowToHigh'
import styles from '../pricefilter.module.css'
import { SortDescending} from '@phosphor-icons/react'

const HighToLow = ({highPriceFilter,coloursToDisplay}) => {
   
    const handleHighPrice = () => {
        highPriceFilter("desc")
        coloursToDisplay(null)
    }

    return (
        <>
        <button className={styles.price_filter_button} onClick={handleHighPrice}>
                <p>High to Low</p>
                <SortDescending size={24} />
            </button>
        </>
    )
}

export default HighToLow