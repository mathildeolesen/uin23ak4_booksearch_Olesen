import BookCard from "./BookCard"


export default function SearchResult({content}) {


    const testData = [{title: "Bond", year: 2002}, {title: "James", year: 2003}, {title: "Bond", year: 2004}]

    console.log("hei" + content)

    return (
        <>
        <h2>Search results</h2>
        <section>
        {content?.map(item => <BookCard key={item.key} title={item.title} year={item.first_publish_year}/>)}
        </section>
        </>
    )
}