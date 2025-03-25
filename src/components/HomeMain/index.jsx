import styles from './homemain.module.css'
import HomeImage from '../../assets/home.jpeg'
import KidsImage from '../../assets/kids_collection.jpeg'
import WomensImage from '../../assets/women_collection.jpeg'
import MenImage from '../../assets/men_collection.jpeg'
const HomeMain = () => {
    return (
        <>
        <div className={styles.home_image_container}>
            <img src={HomeImage} alt='spring_coolection'></img>
        </div>
        <div className={styles.limited_collection_info}>
            <h2>Limited Edition</h2>
            <p>A truly unique party collection. Catch them before they float away! In this limited edition collection,
            fluffy dresses and powdery pastels meet in sheer materials that dance with every movement, carefully crafted for both big and small dreams. Psst... There are only a few available, so don't miss out on these treasures!</p>
        </div>
        <div className={styles.collection_details}>
            <div className={styles.image_container}>
                <img src={KidsImage} alt='Kids_collection'></img>
            </div>
            <div className={styles.details_info}>
                <div className={styles.details}>
                    <h2>Spring-Ready Styles</h2>
                    <p>Refresh your children wardrobe with comfortable and colourful
                        key pieces that suits the season
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.collection_details}>
            <div className={styles.image_container}>
                <img src={WomensImage} alt='women_collection'></img>
            </div>
            <div className={styles.details_info}>
                <div className={styles.details}>
                    <h2>Yacht-worthy looks</h2>
                    <p>Classic.Stylish.With an obvious preppy look</p>
                </div>
            </div>
        </div>
        <div className={styles.collection_details}>
            <div className={styles.image_container}>
                <img src={MenImage} alt='men_collection'></img>
            </div>
            <div className={styles.details_info}>
                <div className={styles.details}>
                    <h2>Effortless Elegance</h2>
                    <p>Sophisticated. Timeless. A refined touch for the modern gentleman.
                    </p>
                </div>
            </div>
        </div>             
     </>
    )
}

export default HomeMain