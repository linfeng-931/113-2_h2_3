import { Link } from "react-router";

function Title(){
    return(
        <>
            <Link to="/">
                <h1 className="ltitle">Book Store</h1>
            </Link>
            <p>Hope you find your book in this store.</p>
            <div className="line-container grid place-content-center mt-7 mb-7">
                <div className="line w-13 h-0.5 bg-white rounded-2xl"></div>
            </div>
        </>
    )
}
export default Title;