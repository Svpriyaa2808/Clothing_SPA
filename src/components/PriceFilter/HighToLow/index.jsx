import LowToHigh from '../LowToHigh'
import styles from '../pricefilter.module.css'
import { SortDescending} from '@phosphor-icons/react'

const HighToLow = ({highPriceFilter,coloursToDisplay,hamburgerMenu}) => {
   
    const handleHighPrice = () => {
        highPriceFilter("desc")
        coloursToDisplay(null)
        hamburgerMenu(false)
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