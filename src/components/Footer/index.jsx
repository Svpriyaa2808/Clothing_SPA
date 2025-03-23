import styles from './footer.module.css'
import { SocialLogo } from 'social-logos'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_info}>
            <div className={styles.information}>
                <h4>Company Information</h4>
                <p>Career</p>
                <p>About Us</p>
                <p>Press</p>
                <p>Investor Relations</p>
                <p>Corporate governance</p>
            </div>
            <div className={styles.information}>
                <h4>Help</h4>
                <p>customer service</p>
                <p>My Account</p>
                <p>Our Stores</p>
                <p>Terms & Privacy</p>
                <p>Contact Us</p>
                <p>Gift card</p>
                <p>cookie settings</p>
            </div>
            <div className={styles.information}>
                <h4>Join Now!</h4>
                <p>Become a member and take advantage of fantastic offers!</p>
            </div>
            </div>
            <div className={styles.social_icons}>
            <SocialLogo icon="facebook" size={ 36 } />
            <SocialLogo icon="mail" size={ 36 } />
            <SocialLogo icon="linkedin" size={ 36 } />
            <SocialLogo icon="instagram" size={ 36 } />
            <SocialLogo icon="youtube" size={ 36 } />
            <SocialLogo icon="pinterest" size={ 36 } />
            </div>
        </footer>
    )
}

export default Footer