import { getImageUrl } from '../../utils/function'

const FilterProducts = ({displayFilterProducts}) => {
    console.log(displayFilterProducts)
    return (
        <div>
            {displayFilterProducts.map((item,index)=> 
            <div key={index}>
                <p>{item.name}</p>
                <img src={getImageUrl(item.image)} alt={item.name}></img>
                </div>)}
            
        </div>
    )
}

export default FilterProducts