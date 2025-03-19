import { useState } from 'react'
import Header from './components/Header'
import HomeMain from './components/HomeMain'
import Navigation from './components/Navigation'
import KidsMain from './components/KidsMain'
import MenMain from './components/MenMain'
import WomenMain from './components/WomenMain'
import ProductDisplay from './components/ProductDisplay'

function App() {
  const [showPage, setShowPage] = useState(null)
  const [productDetails, setProductDetails] = useState(null)
  return (
    <>
      <Navigation selectedPage={setShowPage} selectedProduct={setProductDetails}/>
      <Header />
      {!productDetails && <>
      {!showPage && <HomeMain />}
      {showPage === "Kids" && <KidsMain />}
      {showPage === "Men" && <MenMain clickedProduct = {setProductDetails}/>}
      {showPage === "Women" && <WomenMain clickedProduct={setProductDetails}/>}
      </>
}
      {productDetails &&  <ProductDisplay displayProduct={productDetails}/>}
     
    </>
  )
}

export default App
