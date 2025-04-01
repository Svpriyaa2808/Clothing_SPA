import styles from '../pricefilter.module.css'
import { SortAscending} from '@phosphor-icons/react'

const LowToHigh = ({lowPriceFilter,coloursToDisplay,handleOpen,handleClose}) => {
    
    const handleLowPrice = () => {
        lowPriceFilter("asc")
        coloursToDisplay(null)
        if(handleOpen === true){
            handleClose(false)
        } 
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