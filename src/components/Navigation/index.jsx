import styles from './navigation.module.css'
import { uniqueCategories } from '../../data/data'
import NavMenu from '../NavMenu'

const Navigation = ({selectedPage,selectedProduct}) => {
    const handleClick = (item) => {
        selectedPage(item)
        selectedProduct(null)
    }

    const handleHome = () => {
        selectedPage(null)
        selectedProduct(null)
    }

    return (

        <div className={styles.nav}>
            <NavMenu menu= "Home" onClick={handleHome} />
            {uniqueCategories.map((item,index)=> <NavMenu key={index} menu={item} onClick={()=>handleClick(item)}/>)}
        </div>
    )
}

export default Navigation;