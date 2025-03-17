import { getImageUrl } from "../../utils/function"
import { size } from "../../data/data"
const ProductDisplay = ({displayProduct}) => {
    console.log(displayProduct)
    return (
        <div>
            <p>{displayProduct.name}</p>
            <img src={getImageUrl(displayProduct.image)} alt={displayProduct.image}  ></img>
            <p>{displayProduct.description}</p>
            <p>Gender : {displayProduct.category}</p>
            <p>Fabric: {displayProduct.fabric}</p>
            <p>Colour: {displayProduct.colour}</p>
            <p>Available Sizes : {size}</p>
        </div>
    )    
}

export default ProductDisplay