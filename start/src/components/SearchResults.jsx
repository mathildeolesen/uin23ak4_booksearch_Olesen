import BookCard from "./BookCard"


export default function SearchResults({content}) {

    return (
        <>
        <h2>Search results</h2>
        <section>
        {content?.map(item => <BookCard key={item.key} title={item.title} year={item.first_publish_year}/>)}
        </section>
        </>
    )
}