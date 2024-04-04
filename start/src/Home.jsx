import { Link } from "react-router-dom";
import BookSearch from "./components/BookSearch";
import { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults";

export default function Home({content, setQuery}) {
    
    
    return (
        <>
        <BookSearch setQuery={setQuery}/>
        <SearchResults content={content}/>
        </>
    )
}