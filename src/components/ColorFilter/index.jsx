import { useState } from 'react'
import {Funnel} from "@phosphor-icons/react"
import styles from './colorfilter.module.css'

const ColourFilter = ({coloursToDisplay,selectInput,handleOpen,handleClose}) => {

    console.log(handleOpen)
    
    const [isFilterActive, setIsFilterActive] = useState(false);

   
    const handleFilter = () => {
        if (isFilterActive) {
            coloursToDisplay(null);  
               
        } else {
            coloursToDisplay("colours");
            selectInput("")
            if(handleOpen === true){
                handleClose(false)
            }   
        }
        
        setIsFilterActive(!isFilterActive); 
       
    };

    return (
        <>
            <button className={`${styles.colour_filter} ${styles.button} `} onClick={handleFilter}>
            <p>Filter</p>
                <Funnel size={24} />   
        </button>  
        </>
    )
}

export default ColourFilter