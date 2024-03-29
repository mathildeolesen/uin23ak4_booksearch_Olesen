import { useState } from "react"

export default function BookSearch({setQuery}) {

    const [search, setSearch] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for book:</label>
            <input type="text" id="search" placeholder="James Bond" onChange={handleChange}></input>
            <input type="submit" value="Search"></input>
        </form>
    )
}