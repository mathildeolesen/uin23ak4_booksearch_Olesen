import BookCard from './BookCard';



export default function SearchResults({content}) {

    return (
        <>
        <section>
        {content?.map(item =>
        <BookCard key= {item.key} id={item.key} 
        title={item.title}
        cover_edition_key={item.cover_edition_key} 
        author={
            Array.isArray(item.author_name) 
            ? item.author_name.map(author => author).join(", ") 
            : item.author_name}
        ratings_average={item.ratings_average} 
        year={item.first_publish_year}
        isbn={
            item.isbn 
            ? item.isbn[0] 
            : null}
        />)}
        </section>
        </>
    )
}