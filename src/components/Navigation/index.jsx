import { useState } from 'react'
import styles from './navigation.module.css'
import { uniqueCategories } from '../../data/data'
import NavMenu from '../NavMenu'
import Hamburger from 'hamburger-react'

const Navigation = ({selectedPage,selectedProduct,selectColour,selectPrice}) => {
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

        <div className={styles.links}>
            <NavMenu menu= "Home" onClick={handleHome} />
            {uniqueCategories.map((item,index)=> <NavMenu key={index} menu={item} onClick={()=>handleClick(item)}/>)}
        </div>
        </div>
    )
}

export default Navigation;