import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/* 
* Var problemer med å få cover-bilder og f.eks "release-year" fra bøkene via /works/.
* Det er ikke brukt helt samme "key" for samme info.. (f.eks first_publish_date heter ikke det for alle bøkene)
* Burde kanskje ha brukt data fra hoved-apiet (søk-apiet).
 */


export default function BookPage() {
    const { slug } = useParams();
    const [book, setBook] = useState(null);

    const [author, setAuthor] = useState(null);
    const [rating, setRating] = useState(null);


    // Henter bok fra bok-API
    const getBook = async() => {
      await fetch(`https://openlibrary.org/works/${slug}.json`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error(error))
    }
    
    // Henter forfatter fra forfatter-API
    const getAuthor = async() => {
        if (book) {
        await fetch(`https://openlibrary.org${book?.authors[0].author.key}.json`)
        .then(response => response.json())
        .then(data => setAuthor(data))
        .catch(error => console.error(error))
    }
    };
    
    // Henter rating fra rating-API
    const getRating = async() => {
      if (book) {
        await fetch(`https://openlibrary.org/works/${slug}/ratings.json`)
        .then(response => response.json())
        .then(data => setRating(data))
        .catch(error => console.error(error))
      }
    };

    // Henter bok ved start, når slug forandrer seg
    useEffect(() => {
      getBook();
    }, [slug]);

    // Henter forfatter og rating når bok forandrer seg 
    // (derfor author og rating loader inn senere og ikke sammen med bok tror jeg... kan kanskje fikses)
    useEffect(() => {
      getAuthor();
      getRating();
    }, [book]);
      
    return (
      <section className='bookpage-section'>
        <h1>{book?.title}</h1>
        <div className='bookContent'>
          {book?.covers
            ? <img src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`} alt={book.title} />
            : <div className="noCover"><span>No cover available</span></div>
            }
          <div>
            <span className='bookContent-inline'>
              <h3>Author:</h3> 
              <p>{author ? author.name : "loading"}</p>
            </span>
            <span className='bookContent-inline'><h3>First published year:</h3> <p>{book?.first_publish_date ? book.first_publish_date : "unknown"}</p></span>
            <span className='bookContent-inline'><h3>Average Rating:</h3> <p>{rating?.summary.average ? rating.summary.average.toFixed(1) : "No rating"}</p></span>
            {book?.isbn 
              ? <a href={`https://www.amazon.com/s?k=${book?.isbn}`} target="_blank">Search on Amazon</a> 
              : <a href={`https://www.amazon.com/s?k=${book?.title}`} target="_blank">Search on Amazon</a>}
          </div>
        </div>
      </section>
    );
}