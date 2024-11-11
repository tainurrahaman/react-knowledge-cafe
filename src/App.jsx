
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmark,setBookmark] = useState([])

  const handleBookmark = () => {
    console.log('added bookmark')
  }

  return (
    <div className='max-w-6xl mx-auto my-5'>
      <Header></Header>
      <div className='md:flex justify-between mt-5'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
