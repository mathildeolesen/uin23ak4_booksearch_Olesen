export default function BookSearch() {
    return (
        <form>
            <label htmlFor="search">Search for book:</label>
            <input type="text" id="search" placeholder="James Bond"></input>
            <input type="submit" value="Search"></input>
        </form>
    )
}