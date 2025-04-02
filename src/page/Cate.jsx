import books from '../../json/books_reviews.json'
import { useParams, Link } from "react-router"
import _ from "lodash"
import Books from '../component/Books'
import Footer from '../component/Footer'
import Header from "../component/Header"

function Cate(){
    const {bookCate} = useParams();
    console.log(bookCate);
    const _books = books.filter(
        x => x?.category.toUpperCase() === bookCate.toUpperCase()
    );
    console.log(_books);
    return(
        <>
        <Header/>
        <Books booklist = {_books}/>
        <Footer/>
        </>
    )
}
export default Cate;