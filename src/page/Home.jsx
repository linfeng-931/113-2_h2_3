import "tailwindcss";
import books from '../../json/books_reviews.json'

import Books from '../component/Books'
import Navbar from '../component/Navbar'
import Title from '../component/Title'
import Footer from '../component/Footer'

function Home() {
  return (
    <>
        <Title/> 
        <Navbar/>
      <Books booklist={books}/>
      <Footer/>
    </>
  )
}

export default Home
