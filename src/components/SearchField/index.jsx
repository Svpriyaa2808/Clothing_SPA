import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react"

const SearchField = () => {
    const [inputValue,setInputValue] = useState("")
   const handleClick = (item) => {
    setInputValue(item)
   }    
   
   return (
        <>
        <input type="text" placeholder="What do you look for?" value={inputValue} 
                onInput={(e) => setInputValue(e.target.value)}
            ></input>
        <label htmlFor="search"><MagnifyingGlass size={24} onClick={handleClick}/></label>
        </>
    )
}

export default SearchField