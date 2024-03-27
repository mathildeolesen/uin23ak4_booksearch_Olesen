export default function BookCard({title, year}) {
    return (
    <article>
        <h3>{title}</h3>
        <p>First published year: {year}</p>
        <p>Author: name namenesen</p>
        <p>Average Rating: 5*</p>
        <a href="#" target="_blank" rel="noopener noreferrer">Search on Amazon</a>
    </article>
    )
}