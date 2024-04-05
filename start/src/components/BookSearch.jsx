import { useState } from "react"

export default function BookSearch({setQuery}) {

    const [search, setSearch] = useState("")
    
    // Hvis enter - hvis man søker med to karakterer (f.eks: if), så kan man søke med enter. 
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)

        if (event.target.value.length >= 3) {
            setQuery(event.target.value);
          }
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for book:</label>
            <input type="text" id="search" placeholder="James Bond" onChange={handleChange}></input>  
        </form>
    )
}