import styles from './navMenu.module.css'

const NavMenu = ({menu,onClick}) => {
    return (
        <a className={styles.menu} onClick={onClick}>{menu}</a>
    )
}

export default NavMenu