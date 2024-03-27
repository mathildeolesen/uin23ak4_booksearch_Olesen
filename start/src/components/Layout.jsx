import BookSearch from "./BookSearch";
import Header from "./Header";
import SearchResult from "./SearchResults";


export default function Layout() {
    return(
        <>
        <Header/>
        <BookSearch/>
        <SearchResult/>
        </>
    )
}