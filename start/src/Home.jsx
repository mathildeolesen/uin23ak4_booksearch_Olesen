import { Link } from "react-router-dom";
import BookSearch from "./components/BookSearch";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult";

export default function Home({content}) {
    
    
    return (
        <>
        <h1>Hei</h1>
        <Link to="/search"><h2>Click meg</h2></Link>
        <SearchResult content={content}/>
        </>
    )
}