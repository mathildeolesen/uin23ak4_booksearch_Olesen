import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import BookSearch from './components/BookSearch'
import { Route, Routes } from 'react-router-dom'
import SearchResults from './components/SearchResults'
import Home from './Home'

function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState("James Bond")

  const getContent = async() => {
    await fetch(`https://openlibrary.org/search.json?title=${query}`)
    .then(response => response.json())
    .then(data => setContent(data.docs)) // .docs er fra API-et, hvor innholdet vi er interessert i ligger i "docs" arrayen
    .catch(error => console.error(error))
  }

  useEffect(() => {
    getContent();
  }, [query]);

  console.log(content)



  return (
    <>
     <Layout>
      <Routes>
      <Route index element={<Home content={content} setQuery={setQuery}/>}/>
      <Route path="/search" element={<SearchResults content={content}/>} />
      </Routes>
     </Layout>
    </>
  )
}

export default App
