import { useState } from 'react'
import styles from './navigation.module.css'
import { uniqueCategories } from '../../data/data'
import NavMenu from '../NavMenu'
import Hamburger from 'hamburger-react'
import Search from '../SearchIcons'

const Navigation = ({selectedPage,selectedProduct,selectedColourProduct,selectPrice,selectHighPrice,userInput,selectColour}) => {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (item) => {
        selectedPage(item)
        selectedProduct(null)
        selectedColourProduct(null)
        selectPrice(null)
        selectHighPrice(null)
        userInput("")
        selectColour(null)
        setIsOpen(false)
    }

    const handleHome = () => {
        selectedPage(null)
        selectedProduct(null)
        selectedColourProduct(null)
        selectPrice(null)
        selectHighPrice(null)
        userInput("")
        selectColour(null)
        setIsOpen(false)
    }

    const handleHamburgerMenu = () => {
        userInput("")
        selectColour(null)
    }
    
    return (
        <div className={styles.nav}>
            <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} onToggle={handleHamburgerMenu}/>
        </div>

        {isOpen && 
            <>
             <div className={styles.hamburger_links}>
            <NavMenu menu = "Home" onClick={handleHome} />
            {uniqueCategories.map((item, index) => (
            <NavMenu key={index} menu = {item}  onClick={()=>handleClick(item)} />
            ))}
            </div>
            </>
        }
        <div className={styles.navbar}>
        <div className={styles.links}>
            <NavMenu menu= "Home" onClick={handleHome} />
            {uniqueCategories.map((item,index)=> <NavMenu key={index} menu={item} onClick={()=>handleClick(item)}/>)}
        </div>
        <div className={styles.search_icons}>
        <Search clickedProduct = {selectedProduct} searchValue={userInput} coloursToDisplay={selectColour} toggle={setIsOpen}/>
        </div>
        </div>  
        </div>
    )
}

export default Navigation;