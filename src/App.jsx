import { use, useState } from 'react'
import Header from './components/Header'
import HomeMain from './components/HomeMain'
import Navigation from './components/Navigation'
import KidsMain from './components/MainPages/KidsMain'
import MenMain from './components/MainPages/MenMain'
import WomenMain from './components/MainPages/WomenMain'
import ProductDisplay from './components/ProductDisplay'
import FilterProducts from './components/FilterProducts'
import { colourFilterProductsArray,sortProductsByLowPrice} from './data/data'
import SortInOrder from './components/SortInOrder'
import Footer from './components/Footer'

function App() {
  const [showPage, setShowPage] = useState(null)
  const [productDetails, setProductDetails] = useState(null)
  const [showFilterProduct,setShowFilterProduct] = useState(null)
  
  const [sortByLowPrice,setSortByLowPrice] = useState(null)
  const [sortedProducts, setSortedProducts] = useState([]);
    
  const price = (item) => {
    const sortedArray = sortProductsByLowPrice(showPage,item); // Get sorted array
    setSortedProducts(sortedArray); 
    setSortByLowPrice(item) 
    console.log(sortedArray)
  }

  return (
    <>
      <Navigation selectedPage={setShowPage} selectedProduct={setProductDetails} selectColour={setShowFilterProduct} selectPrice={price}/>
      <Header />
      <div className='main'>
      
        {!productDetails && 
        <>
          {!showPage && <HomeMain />}

          {showPage === "Kids" && !showFilterProduct && !sortByLowPrice && 
            <KidsMain clickedProduct={setProductDetails}
                      selectedPage= {setShowPage} 
                      selectColour = {setShowFilterProduct}
                      selectPrice = {price}
                    />}

          {showPage === "Men" && !showFilterProduct && !sortByLowPrice && 
            <MenMain clickedProduct = {setProductDetails}
                      selectedPage= {setShowPage} 
                      selectColour = {setShowFilterProduct}
                      selectPrice = {price}/>}

          {showPage === "Women" && !showFilterProduct && !sortByLowPrice && 
            <WomenMain clickedProduct={setProductDetails} 
                        selectedPage= {setShowPage} 
                        selectColour = {setShowFilterProduct}
                        selectPrice = {price}/>}
        </>
        }
        {productDetails &&   <ProductDisplay displayProduct={productDetails}/>}

        {!productDetails && showFilterProduct  &&(
          <>
            <FilterProducts clickedProduct={setProductDetails} displayFilterProducts={colourFilterProductsArray(showFilterProduct,showPage)} />
          </>
        )}
        
        {sortByLowPrice && !showFilterProduct && !productDetails && 
        <SortInOrder newArray={sortedProducts} clickedProduct={setProductDetails} selectColour={setShowFilterProduct}/> } 

      </div>
      
      <Footer />

    </>
    
  )
}

export default App
