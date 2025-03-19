import { useState } from 'react'
import Header from './components/Header'
import HomeMain from './components/HomeMain'
import Navigation from './components/Navigation'
import KidsMain from './components/MainPages/KidsMain'
import MenMain from './components/MainPages/MenMain'
import WomenMain from './components/MainPages/WomenMain'
import ProductDisplay from './components/ProductDisplay'
import FilterProducts from './components/FilterProducts'
import { colourFilterProductsArray } from './data/data'
function App() {
  const [showPage, setShowPage] = useState(null)
  const [productDetails, setProductDetails] = useState(null)
  const [showFilterProduct,setShowFilterProduct] = useState(null)
  return (
    <>
      <Navigation selectedPage={setShowPage} selectedProduct={setProductDetails} selectColour={setShowFilterProduct}/>
      <Header />
      {!productDetails && 

      <>
        {!showPage && <HomeMain />}

        {showPage === "Kids" && 
          <KidsMain clickedProduct={setProductDetails}
                    selectedPage= {setShowPage} 
                    selectColour = {setShowFilterProduct}/>}

        {showPage === "Men" && 
          <MenMain clickedProduct = {setProductDetails}
                    selectedPage= {setShowPage} 
                    selectColour = {setShowFilterProduct}/>}

        {showPage === "Women" && 
          <WomenMain clickedProduct={setProductDetails} 
                      selectedPage= {setShowPage} 
                      selectColour = {setShowFilterProduct}/>}
      </>
      }
      {productDetails &&  <ProductDisplay displayProduct={productDetails}/>}

      {!productDetails && showFilterProduct && showPage &&(
        <>
          <FilterProducts displayFilterProducts={colourFilterProductsArray(showFilterProduct)} />
          {showFilterProduct}
        </>
      )}

    </>
  )
}

export default App
