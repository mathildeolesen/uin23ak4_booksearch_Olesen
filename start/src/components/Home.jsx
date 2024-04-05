import BookSearch from "./BookSearch";
import SearchResults from "./SearchResults";

export default function Home({content, setQuery}) {
    
    
    return (
        <>
        <BookSearch setQuery={setQuery}/>
        <SearchResults content={content}/>
        </>
    )
}