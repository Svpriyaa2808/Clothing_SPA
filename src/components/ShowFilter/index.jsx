import styles from './showfilter.module.css'
import { colorFilter } from '../../data/data'


const ShowFilter = ({filteredColour,selectColour}) => {

    const handleColourFilter = (item) => {
        filteredColour(item)
        selectColour(null)
    }
    
    return(
        <div className={styles.colours}>
            {colorFilter.map((item,index)=>
            <div className={styles.colour_names} key={index}>
            <p onClick={() => handleColourFilter(item)}>{item}</p>
            </div>)}
        </div>
    )
}
export default ShowFilter