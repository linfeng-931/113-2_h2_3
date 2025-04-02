import {Link, NavLink } from 'react-router'

function Navbar(){
    const navBarContent = [
        {to: "/products/category/Social Fiction", label: "Social Fiction"},
        {to: "/products/category/Bildungsroman", label: "Bildungsroman"},
        {to: "/products/category/Romantic Fiction", label: "Romantic Fiction"},
        {to: "/products/category/Adventure", label: "Adventure"}
    ]

    return(
        <>
            <div className="flex flex-wrap lg:justify-center">
                
                {navBarContent.map(({to, label}) => (
                    <NavLink
                        key={to}
                        to = {to}
                        className={({isActive}) =>
                            `mx-6 mb-3 lg:mb-0 text-base transition-all duration-500 ease-in-out ${
                                isActive ? "opacity-100 font-normal" : "opacity-60"
                            } hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
                    }
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default Navbar;