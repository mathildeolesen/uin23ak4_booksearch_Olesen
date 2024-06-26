import { Link } from "react-router-dom";

export default function BookCard({id, title, cover_edition_key, year, author, ratings_average, isbn}) {
    return (
    <article>
        <h3>{title}</h3>
        {cover_edition_key 
            ? <img src={`https://covers.openlibrary.org/b/olid/${cover_edition_key}-L.jpg`} alt={title} />
            : <div className="noCover"><span>No cover available</span></div>
        }
        <div className="bookinfo">
            <p className="author"><span>Author:</span> {author}</p>
            <p><span>First published year:</span> {year}</p>
            <p><span>Average Rating:</span> {ratings_average ? ratings_average.toFixed(1) : "No rating"}</p>
        
            <Link to ={`book/${id.split("/").pop()}`}>Read more here</Link>
            {isbn 
            ? <a href={`https://www.amazon.com/s?k=${isbn}`} target="_blank">Search on Amazon</a> 
            : <a href={`https://www.amazon.com/s?k=${title}`} target="_blank">Search on Amazon</a>}
        </div> 
    </article>
    )
}