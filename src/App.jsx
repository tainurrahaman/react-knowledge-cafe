
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

  const [readingTime,setReadingTime] = useState(0)

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time)
  }

  return (
    <div className='max-w-6xl mx-auto my-5'>
      <Header></Header>
      <div className='md:flex justify-between mt-5'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime = {handleReadingTime}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
