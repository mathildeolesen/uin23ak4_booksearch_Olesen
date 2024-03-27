import BookCard from "./BookCard"


export default function SearchResult() {


    const testData = [{title: "Bond", year: 2002}, {title: "James", year: 2003}, {title: "Bond", year: 2004}]

    return (
        <>
        <h2>Search results</h2>
        <section>
        {testData.map(item => <BookCard title={item.title} year={item.year}/>)}
        </section>
        </>
    )
}