import {Funnel} from "@phosphor-icons/react"
import styles from './colorfilter.module.css'
import { useState } from 'react'
import ShowFilter from '../ShowFilter'
const ColourFilter = ({chooseColour,choosePage}) => {
    const[showColourFilter,setShowColourFilter] = useState(null)

    const handleFilter = () => {
        setShowColourFilter(showColourFilter === null ? "colour" : null)
    }

    return (
        <>
        <div className={styles.filter}>
            <button className={styles.button} onClick={handleFilter}>
                <p>Filter</p>
                <Funnel size={32} />
            </button>
            
        </div>
        <div>
        {showColourFilter && <ShowFilter filteredColour={chooseColour} hidePage={choosePage}/>}
        </div>
        </>
    )
}

export default ColourFilter