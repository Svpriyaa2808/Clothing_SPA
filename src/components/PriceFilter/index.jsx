
import {useState} from 'react'
import PriceList from '../PriceList'

const PriceFilter = () => {
    const[filterByPrice,setFilterByPrice] = useState(null)
    
    const handlePrice = () => {
        setFilterByPrice(filterByPrice === null ? "asc" : null)
    }
    
    return (
        <>
        <div>
            <button onClick={handlePrice}>Sort by price</button>
        </div>
        <div>
        {filterByPrice && <PriceList />}
        </div>
        </>
    )
}

export default PriceFilter