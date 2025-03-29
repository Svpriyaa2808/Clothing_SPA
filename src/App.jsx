import { useState } from 'react'
import Header from './components/Header'
import HomeMain from './components/HomeMain'
import Navigation from './components/Navigation'
import ProductDisplay from './components/ProductDisplay'
import FilterProducts from './components/FilterProducts'
import { colourFilterProductsArray,sortProductsByLowPrice,SearchQuery,categoryArray,sortProductsByHighPrice} from './data/data'
import SortInOrder from './components/SortInOrder'
import ShowSearch from './components/ShowSearchNames'
import Footer from './components/Footer'
import MainPage from './components/MainPages'

function App() {
  const [showPage, setShowPage] = useState(null)
  const [productDetails, setProductDetails] = useState(null)
  const [showFilterProduct,setShowFilterProduct] = useState(null) 
  const [inputValue,setInputValue] = useState("")
  const [sortByLowPrice,setSortByLowPrice] = useState(null)
  const [sortByHighPrice,setSortByHighPrice] = useState(null)
  const [sortedProducts, setSortedProducts] = useState(null);
  const [sortedHighPriceProducts,setSortedHighPriceProducts] = useState(null)
  
  const price = (item) => {
    const sortedArray = sortProductsByLowPrice(showPage,item); // Get sorted array
    setSortedProducts(sortedArray); 
    setSortByHighPrice(null)
    setSortByLowPrice(item) 
    setInputValue(null)
    console.log(sortedArray)
  } 

  const HighPrice = (item) => {
    const sortedHighPriceArray = sortProductsByHighPrice(showPage,item)
    setSortedHighPriceProducts(sortedHighPriceArray)
    setSortByHighPrice(item)
    setSortByLowPrice(null)
    setInputValue(null)
    console.log(sortedHighPriceArray)
  }

  return (
    <>
      <Navigation selectedPage={setShowPage} 
                  selectedProduct={setProductDetails} 
                  selectColour={setShowFilterProduct} 
                  selectPrice={price} 
                  selectHighPrice={HighPrice}
                  userInput={setInputValue}/>
      {inputValue && <ShowSearch query={SearchQuery(inputValue.toLowerCase())} selectValue={setInputValue} displayProduct={setProductDetails}/>}
                  
      <Header />
      <div className='main'>
      
        {!productDetails && 
        <>
          {!showPage && <HomeMain />}

          {showPage && !showFilterProduct && !sortByLowPrice && !sortByHighPrice &&
            <MainPage clickedProduct={setProductDetails}
            selectedPage= {setShowPage} 
            selectColour = {setShowFilterProduct}
            selectPrice = {price} 
            selectHighPrice={HighPrice}
            userInput={setInputValue}
            selectedCategory={categoryArray(showPage)}/> }
        </>
        }
        {productDetails &&   <ProductDisplay displayProduct={productDetails}/>}

        {showFilterProduct  && !productDetails && 
          <FilterProducts clickedProduct={setProductDetails} displayFilterProducts={colourFilterProductsArray(showFilterProduct,showPage)} />
        }
        
        {sortByLowPrice && !showFilterProduct && !productDetails && !sortByHighPrice &&
          <MainPage selectedCategory={sortedProducts} selectHighPrice={HighPrice} clickedProduct={setProductDetails} selectColour={setShowFilterProduct}/> } 
        
        {sortByHighPrice && !showFilterProduct && !productDetails && !sortByLowPrice &&
          <MainPage selectedCategory={sortedHighPriceProducts} selectPrice={price} clickedProduct={setProductDetails} selectColour={setShowFilterProduct}/> } 
      </div>
      
      <Footer />

    </>
    
  )
}

export default App
