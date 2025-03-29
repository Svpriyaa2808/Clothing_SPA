import { useState } from "react"
import {ShoppingBagOpen,UserCircle } from "@phosphor-icons/react"
import styles from './searchicon.module.css'
import { SearchQuery } from "../../data/data"
import ShowSearch from "../ShowSearchNames"

const Search = ({searchValue}) => {

    
    const handleClick = (e) => {
        searchValue(e.target.value);
    }

    return(
        <div className={styles.icons}>
            <input className={styles.search_container} type="text" placeholder="What do you look for?"  
                onInput={(e) => handleClick(e)}></input> 
            <UserCircle size={24} />
            <ShoppingBagOpen size={24} />
        </div>
    )
}

export default Search