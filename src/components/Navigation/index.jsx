import styles from './navigation.module.css'
import { uniqueCategories } from '../../data/data'
import NavMenu from '../NavMenu'
import Hamburger from 'hamburger-react'
import Search from '../SearchIcons'

const Navigation = ({selectedPage,selectedProduct,navMenuClose,navMenuOpen,selectedColourProduct,selectPrice,selectHighPrice,userInput,selectColour}) => {
    
    // const [isOpen, setIsOpen] = useState(false)

    const handleClick = (item) => {
        selectedPage(item)
        selectedProduct(null)
        selectedColourProduct(null)
        selectPrice(null)
        selectHighPrice(null)
        userInput("")
        selectColour(null)
        navMenuClose(false)
    }

    const handleHome = () => {
        selectedPage(null)
        selectedProduct(null)
        selectedColourProduct(null)
        selectPrice(null)
        selectHighPrice(null)
        userInput("")
        selectColour(null)
        navMenuClose(false)
    }

    const handleHamburgerMenu = () => {
        userInput("")
        selectColour(null)
        selectPrice(null)
        selectHighPrice(null)
    }
    
    return (
        <div className={styles.nav}>
            <div className={styles.hamburger}>
            <Hamburger toggled={navMenuOpen} toggle={navMenuClose} onToggle={handleHamburgerMenu}/>
        </div>

        {navMenuOpen && 
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
        <Search clickedProduct = {selectedProduct} searchValue={userInput} coloursToDisplay={selectColour} toggle={navMenuClose}/>
        </div>
        </div>  
        </div>
    )
}

export default Navigation;