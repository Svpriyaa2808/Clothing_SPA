import styles from './homemain.module.css'
import { womenCategories  } from '../../data/data'
import { getImageUrl } from '../../utils/function'
import HomeImage from '../../assets/home.jpeg'
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
                        <div className={styles.spring_collection_details}>
                            <div className={styles.spring_collection_image}></div>
                            <div className={styles.spring_collection_info}></div>
                        </div>
                    
                    
     </>
    )
}

export default HomeMain