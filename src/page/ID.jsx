import "tailwindcss"
import books from '../../json/books_reviews.json'
import { useParams, Link } from "react-router"
import { useState } from "react"

import Title from '../component/Title'
import Footer from '../component/Footer'
import AddToBasket from "../component/AddToBasket"
import Cart from "../component/Cart"

function ID() {
  const {bookID} = useParams();
  const book = books.find(
    (x) => x.id == bookID
  );
  const [qty, setQty] = useState(book.stock > 0 ? 1: 0);

  return (
    <>
      <div className="header relative mb-10">
        <Title/>
        <Cart/>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="book-container w-[85%] grid gap-4 bg-black/50 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden  md:grid-col-5 lg:grid-cols-5">
          <div className="left lg:col-span-2">
            <img className='w-full h-120 object-cover object-center ' src = {book.cover}/>
          </div>
          <div className="right p-7 grid text-left lg:col-span-3">
            <div className="book-content">
              <h1>{book.title}</h1>
              <h4 className="sub-title mb-6">{book.author}</h4>
              <p className="mb-6">{book.summary}</p>
            </div>

            <div className="flex w-full flex-wrap justify-between items-end">
              <div className="left">
                <div className="sp-container">
                  <h2 className="price">US${book.price}</h2>
                  <p className="stock">Stock: {book.stock}</p>
                </div>
                
                <div className="qty-container flex gap-4 items-center mt-4 mb-4">
                  <h3>Qty:</h3>
                  <select
                    className="select select-bordered w-30 h-8 rounded-md p-2 bg-white/50 text-black"
                    defaultValue={book.stock > 0 ? 1:0}
                    onChange={ event => setQty(event.target.value)}
                  >
                    {Array(book.stock).keys().map((x) => (
                      <option key={x+1} value = {x+1}>
                        {x+1}
                      </option>
                    ))}
                  </select>
                </div>
                
                <h4>Total Price:{book.price*qty}</h4>
              </div>
              <AddToBasket
                product={book}
                qty={qty}
              />
            </div>
          </div> 
        </div>
      
        <div className="review-container w-[85%] mt-10 mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {(book.reviews).map(review =>(
            <>
            <div className="review h-40 w-full rounded-3xl bg-white/95 text-black p-5 pl-8 pr-8 text-left grid backdrop-blur-md shadow-2xl">
              <div className="review-content">
                <h2>{review.reviewer}</h2>
                <p>{review.comment}</p>
              </div>
              <div className="rating items-end">
                {Array(5).keys().map((x) => (
                  x === review.rating ? (
                    <div className="h-5 w-5 mask mask-star"></div>
                  ) : (
                    <div className="h-5 w-5 mask mask-star" aria-current="true"></div>
                  )    
                ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ID