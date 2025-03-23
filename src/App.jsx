import { useState } from 'react'
import Header from './components/Header'
import HomeMain from './components/HomeMain'
import Navigation from './components/Navigation'
import KidsMain from './components/MainPages/KidsMain'
import MenMain from './components/MainPages/MenMain'
import WomenMain from './components/MainPages/WomenMain'
import ProductDisplay from './components/ProductDisplay'
import FilterProducts from './components/FilterProducts'
import { colourFilterProductsArray,sortProductsByLowPrice} from './data/data'

function App() {
  const [showPage, setShowPage] = useState(null)
  const [productDetails, setProductDetails] = useState(null)
  const [showFilterProduct,setShowFilterProduct] = useState(null)
  
  const [sortByLowPrice,setSortByLowPrice] = useState(null)
  const [sortedProducts, setSortedProducts] = useState([]);
    
  const price = (item) => {
    const sortedArray = sortProductsByLowPrice(showPage, setSortByLowPrice(item)); // Get sorted array
    setSortedProducts(sortedArray); 
  }

  
  return (
    <>
      <Navigation selectedPage={setShowPage} selectedProduct={setProductDetails} selectColour={setShowFilterProduct}/>
      <Header />
      <div className='main'>
      {showPage}
      {sortByLowPrice}
      {!productDetails && 

      <>
        {!showPage && <HomeMain />}

        {showPage === "Kids" && !showFilterProduct && 
          <KidsMain clickedProduct={setProductDetails}
                    selectedPage= {setShowPage} 
                    selectColour = {setShowFilterProduct}
                    selectPrice = {price}
                    newArray = {sortedProducts}/>}

        {showPage === "Men" && !showFilterProduct &&
          <MenMain clickedProduct = {setProductDetails}
                    selectedPage= {setShowPage} 
                    selectColour = {setShowFilterProduct}/>}

        {showPage === "Women" && !showFilterProduct && 
          <WomenMain clickedProduct={setProductDetails} 
                      selectedPage= {setShowPage} 
                      selectColour = {setShowFilterProduct}
                      />}
      </>
      }
      {productDetails &&  <ProductDisplay displayProduct={productDetails}/>}

      {!productDetails && showFilterProduct  &&(
        <>
          <FilterProducts clickedProduct={setProductDetails} displayFilterProducts={colourFilterProductsArray(showFilterProduct,showPage)} />
        </>
      )}
</div>

    </>
    
  )
}

export default App
