import {Link } from 'react-router'

function Books({booklist}){
    return(
        <>
            <div className="Cards relative mt-20 mb-20 w-full flex justify-center">
                <div className='Card-container w-[85%] grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4'>
                {booklist.map(book =>(
                    <div className='
                    Card w-full md:w-full flex flex-wrap rounded-lg overflow-hidden backdrop-blur-md shadow-2xl bg-black/50
                    '>
                    <img className='w-full' src = {book.cover}/>
                    <div className="w-full content text-center mt-4 mb-4">
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <Link to={`/products/id/${book.ID}`}><button>See More...</button></Link>
                    </div>  
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default Books;