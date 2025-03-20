import styles from './pricelist.module.css'
import { ascPrice } from '../../data/data'

const PriceList = () => {
    return (
        <div>
            {ascPrice.map((item,index)=>
            <div key={index}> 
            <p>{item}</p>
            </div>)}
            <p>price</p>
        </div>
    )
}

export default PriceList