
import styles from './showSearch.module.css'

const ShowSearch = ({query,displayProduct,selectValue}) => {
   
    
    const handleClick = (item) => {
        displayProduct(item)
        selectValue("")
    }
    
    return (
        
        <div className={styles.search_result_container}> 
        {query.map((item,index)=> 
            
        <p key={index} onClick={() => handleClick(item)}>{item.name} </p>
        
        
        )}
        
        </div>
    )
}

export default ShowSearch