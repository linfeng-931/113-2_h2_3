import books from '../../json/books_reviews.json'

import Books from '../component/Books'
import Footer from '../component/Footer'
import Header from "../component/Header";

function Home() {
  return (
    <>
      <Header/>
      <Books booklist={books}/>
      <Footer/>
    </>
  )
}

export default Home
