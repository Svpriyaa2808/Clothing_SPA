import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react"

const SearchField = ({userInput}) => {
    const [inputValue,setInputValue] = useState("")
    const handleClick = (e) => {
        userInput(e)
        console.log(e.target.value)
    }
    return (
        <>
        <input type="text" placeholder="What do you look for?" value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
        <label htmlFor="search"><MagnifyingGlass size={24} onClick={()=>console.log(inputValue)}/></label>
        </>
    )
}

export default SearchField