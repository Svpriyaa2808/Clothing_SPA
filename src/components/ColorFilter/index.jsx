
import styles from './colorfilter.module.css'
import { useState } from 'react'
import ShowFilter from '../ShowFilter'
const Filter = ({chooseColour,choosePage}) => {
    const[showColourFilter,setShowColourFilter] = useState(null)

    const handleFilter = () => {
        setShowColourFilter(showColourFilter === null ? "colour" : null)
    }

    return (
        <>
        <div className={styles.filter}>
            <button className={styles.button} onClick={handleFilter}>Filter</button>
        </div>
        <div>
        {showColourFilter && <ShowFilter filteredColour={chooseColour} hidePage={choosePage}/>}
        </div>
        </>
    )
}

export default Filter