
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmark] = useState([])

  const handleBookmark = blog => {
    const totalBookmarks = [...bookmarks,blog]
    setBookmark(totalBookmarks)
  }

  return (
    <div className='max-w-6xl mx-auto my-5'>
      <Header></Header>
      <div className='md:flex justify-between mt-5'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
