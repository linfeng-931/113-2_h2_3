import { Link } from "react-router";

function Title(){
    return(
        <>
            <Link className="ltitle text-[3rem] md:text-[4rem] pt-[1.3rem]" to="/">
                Book Store
            </Link>
            <p>Hope you find your book in this store.</p>
            <div className="line-container grid place-content-center mt-7 lg:mb-7">
                <div className="line w-13 h-0.5 bg-white rounded-2xl"></div>
            </div>
        </>
    )
}
export default Title;