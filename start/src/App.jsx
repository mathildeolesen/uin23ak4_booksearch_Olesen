import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import BookSearch from './components/BookSearch'
import { Route, Routes } from 'react-router-dom'
import SearchResult from './components/SearchResult'
import Home from './Home'

function App() {

  const [content, setContent] = useState([])

  const getContent = async() => {
    await fetch(`https://openlibrary.org/search.json?q=james+bond`)
    .then(response => response.json())
    .then(data => setContent(data.docs)) // .docs er fra API-et, hvor innholdet vi er interessert i ligger i "docs" arrayen
    .catch(error => console.error(error))
  }

  useEffect(() => {
    getContent()
  })

  console.log(content)



  return (
    <>
     <Layout>
      <Routes>
      <Route index element={<Home content={content}/>}/>
      <Route path="/search" element={<SearchResult content={content}/>} />
      </Routes>
     </Layout>
    </>
  )
}

export default App
