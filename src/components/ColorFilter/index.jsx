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
            <button className={`${styles.colour_filter} ${styles.button} `} onClick={handleFilter}>
                <p>Filter</p>
                <Funnel size={24} />
           
        {showColourFilter && <ShowFilter filteredColour={chooseColour}  clickedPage={choosePage}/>} 
        </button>  
        </>
    )
}

export default ColourFilter