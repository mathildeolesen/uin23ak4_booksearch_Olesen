import BookSearch from "./BookSearch";
import Header from "./Header";
import SearchResults from "./SearchResults";


export default function Layout({children}) {
    return(
        <>
        <Header/>
        <main>
            {children}
        </main>
        
        </>
    )
    
}