import {ShoppingBagOpen,UserCircle } from "@phosphor-icons/react"
import styles from './searchicon.module.css'
import SearchField from "../SearchField"

const Search = ({type}) => {
    return(
        <div className={styles.icons}>
            <SearchField userInput={type}/>
            <UserCircle size={24} />
            <ShoppingBagOpen size={24} />
        </div>
    )
}

export default Search