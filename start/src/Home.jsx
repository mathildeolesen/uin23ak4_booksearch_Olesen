import { Link } from "react-router-dom";
import BookSearch from "./components/BookSearch";
import { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults";

export default function Home({content, setQuery}) {
    
    
    return (
        <>
        <h1>FindABook</h1>
        {/*<Link to="/search"><h2>Click meg</h2></Link>*/}
        <BookSearch setQuery={setQuery}/>
        <SearchResults content={content}/>
        </>
    )
}