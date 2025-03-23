import styles from './PriceFilter.module.css'
import { sortProductsByLowPrice } from '../../data/data'

const PriceFilter = ({lowPriceFilter}) => {
    const handleLowPrice = () => {
        lowPriceFilter("asc");
    }
    return (
        <>
        <div>
            <button onClick={handleLowPrice}>Sort by price</button>
        </div>
        
        </>
    )
}

export default PriceFilter