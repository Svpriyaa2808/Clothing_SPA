import {Funnel} from "@phosphor-icons/react"
import styles from './colorfilter.module.css'
import { useState } from 'react'
import ShowFilter from '../ShowFilter'

const ColourFilter = ({coloursToDisplay,chooseColour}) => {
    // const[showColourFilter,setShowColourFilter] = useState(null)

    const handleFilter = () => {
        coloursToDisplay("colours")
        chooseColour(null)
        console.log(typeof coloursToDisplay)
    }

    return (
        <>
        
            <button className={`${styles.colour_filter} ${styles.button} `} onClick={handleFilter}>
                <p>Filter</p>
                <Funnel size={24} />
            {/* {showColourFilter && <ShowFilter filteredColour={chooseColour}  />}  */}
       
        </button>  
        </>
    )
}

export default ColourFilter