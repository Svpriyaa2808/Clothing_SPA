import styles from './header.module.css'
import Navigation from '../Navigation'
const Header = () => {
    return (
        <>
        <header className={styles.header}>
            <h1 className={styles.title}>L's Apparels</h1>
        </header>
        </>
    )
}

export default Header