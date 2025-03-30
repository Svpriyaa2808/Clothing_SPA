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
  const [productDetails, setProductDetails] = useState(null) //if the particular pdt is clicked
  const [showFilterProduct,setShowFilterProduct] = useState(null) //displaying pdts based on colorfilter
  const[showColourFilter,setShowColourFilter] = useState(null) //if filter is clicked the list of colors to be displayed
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



  return (
    <>
      <Navigation selectedPage={setShowPage} 
                  selectedProduct={setProductDetails} 
                  selectedColourProduct={setShowFilterProduct} 
                  selectPrice={price} 
                  selectHighPrice={HighPrice}
                  userInput={setInputValue}
                  selectColour={setShowColourFilter}/>
      {inputValue && <ShowSearch query={SearchQuery(inputValue.toLowerCase())} selectValue={setInputValue} displayProduct={setProductDetails}/>}
      <Header />
      <div className='main'>
      
        {!productDetails && 
        <>
          {!showPage && <HomeMain />}

          {showPage && !showFilterProduct && !sortByLowPrice && !sortByHighPrice &&
            <MainPage clickedProduct={setProductDetails}
            selectedColourProduct = {setShowFilterProduct}
            selectPrice = {price} 
            selectHighPrice={HighPrice}
            userInput={setInputValue}
            selectColour={setShowColourFilter}
            selectedCategory={categoryArray(showPage)}/> }
        </>
        }

        {productDetails && <ProductDisplay displayProduct={productDetails}/>}


        {showFilterProduct  && !productDetails && 
          <FilterProducts clickedProduct={setProductDetails} 
            userInput={setInputValue} 
            displayFilterProducts={colourFilterProductsArray(showFilterProduct,showPage)}/>
        }
        {showColourFilter && <ShowFilter selectColour={setShowColourFilter} filteredColour={setShowFilterProduct}/>} 
        
        {sortByLowPrice && !showFilterProduct && !productDetails && !sortByHighPrice && 
          <MainPage selectedCategory={sortedLowPriceProducts} selectHighPrice={HighPrice} clickedProduct={setProductDetails} /> } 
        
        {sortByHighPrice && !showFilterProduct && !productDetails && !sortByLowPrice  &&
          <MainPage selectedCategory={sortedHighPriceProducts} selectPrice={price} clickedProduct={setProductDetails} /> } 
      </div>
      
      <Footer />

    </>
    
  )
}

export default App
