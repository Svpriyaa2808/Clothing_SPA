import { useState } from 'react'
import styles from './navigation.module.css'
import { uniqueCategories } from '../../data/data'
import NavMenu from '../NavMenu'
import Hamburger from 'hamburger-react'
import Search from '../SearchIcons'

const Navigation = ({selectedPage,selectedProduct,selectColour,selectPrice,input}) => {
    const handleClick = (item) => {
        selectedPage(item)
        selectedProduct(null)
        selectColour(null)
        selectPrice(null)
    }

    const handleHome = () => {
        selectedPage(null)
        selectedProduct(null)
        selectColour(null)
        selectPrice(null)
    }

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className={styles.nav}>
            <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        {isOpen && 
            <>
             <div className={styles.hamburger_links}>
            <NavMenu menu = "Home" onClick={handleHome} />
            {uniqueCategories.map((item, index) => (
            <NavMenu key={index} menu = {item} onClick={()=>handleClick(item)} />
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
        <Search type={input}/>
        </div>
        </div>  
        </div>
    )
}

export default Navigation;