import { useState } from 'react'
import Header from './components/Header'
import HomeMain from './components/HomeMain'
import Navigation from './components/Navigation'
import ProductDisplay from './components/ProductDisplay'
import FilterProducts from './components/FilterProducts'
import { colourFilterProductsArray,sortProductsByLowPrice,SearchQuery,categoryArray,sortProductsByHighPrice} from './data/data'
import ShowSearch from './components/ShowSearchNames'
import Footer from './components/Footer'
import MainPage from './components/MainPages'
import ShowFilter from './components/ShowFilter'

function App() {
  const [showPage, setShowPage] = useState(null)    //for choosing page
  const [isOpen, setIsOpen] = useState(false) //for hamburger
  const [productDetails, setProductDetails] = useState(null) //if the particular pdt is clicked
  const [showFilterProduct,setShowFilterProduct] = useState(null) //displaying pdts based on colorfilter
  const [showColourFilter,setShowColourFilter] = useState(null) //if filter is clicked the list of colors to be displayed
  const [inputValue,setInputValue] = useState("") //searchquery
  const [sortByLowPrice,setSortByLowPrice] = useState(null) //lowprice
  const [sortByHighPrice,setSortByHighPrice] = useState(null) //highprice
  const [sortedLowPriceProducts, setSortedLowPriceProducts] = useState(null); //arrays to store the lowprice
  const [sortedHighPriceProducts,setSortedHighPriceProducts] = useState(null) //arrays to store high price

  const price = (item) => {
    const sortedLowPriceArray = sortProductsByLowPrice(showPage,item); // Get sorted array
    setSortedLowPriceProducts(sortedLowPriceArray); 
    setSortByHighPrice(null)
    setSortByLowPrice(item) 
    setInputValue(null)
    console.log(sortedLowPriceArray)
  } 

  const HighPrice = (item) => {
    const sortedHighPriceArray = sortProductsByHighPrice(showPage,item)
    setSortedHighPriceProducts(sortedHighPriceArray)
    setSortByHighPrice(item)
    setSortByLowPrice(null)
    setInputValue(null)
    console.log(sortedHighPriceArray)
  }
  console.log(isOpen)

  // const handleMenu = () => {
  //   setIsOpen(false)
  // }

  return (
    <>
      <Navigation selectedPage={setShowPage} 
                  selectedProduct={setProductDetails} 
                  selectedColourProduct={setShowFilterProduct} 
                  selectPrice={price} 
                  selectHighPrice={HighPrice}
                  userInput={setInputValue}
                  selectColour={setShowColourFilter}
                  navMenuClose={setIsOpen}
                  navMenuOpen={isOpen}/>
      
      {inputValue && <ShowSearch  query={SearchQuery(inputValue.toLowerCase())} 
                                  selectValue={setInputValue} 
                                  displayProduct={setProductDetails}
                                  selectColour={setShowColourFilter}/>}
      
      <Header />
      
      <div className='main'>
    
        {!productDetails && !showPage && <HomeMain />}

        {showPage && !showFilterProduct && !sortByLowPrice && !sortByHighPrice && !productDetails &&
           <MainPage  clickedProduct={setProductDetails}
                      navMenuOpen={isOpen}
                      navMenuClose={setIsOpen}
                      selectPrice = {price} 
                      selectHighPrice={HighPrice}
                      userInput={setInputValue}
                      selectColour={setShowColourFilter}
                      selectedCategory={categoryArray(showPage)}/> }
        
        {productDetails && 
          <ProductDisplay displayProduct={productDetails}  
                          selectColour={setShowColourFilter}
                          navMenuClose={setIsOpen}/>}


        {showFilterProduct  && !productDetails && 
          <FilterProducts clickedProduct={setProductDetails} 
                          userInput={setInputValue} 
                          displayFilterProducts={colourFilterProductsArray(showFilterProduct,showPage)}/>}
        
        {showColourFilter && <ShowFilter 
                              selectColour={setShowColourFilter} 
                              filteredColour={setShowFilterProduct} />} 
        
        {(sortByLowPrice || sortByHighPrice) && !showFilterProduct && !productDetails && (
          <MainPage
            selectedCategory={sortByLowPrice ? sortedLowPriceProducts : sortedHighPriceProducts}
            selectPrice={sortByHighPrice ? price : undefined}
            selectHighPrice={sortByLowPrice ? HighPrice : undefined}
            clickedProduct={setProductDetails}
            selectColour={setShowColourFilter}
            userInput={setInputValue}
          />
        )}

      </div>
      
      <Footer />

    </>
    
  )
}

export default App
