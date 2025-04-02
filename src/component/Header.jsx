import Menu from "../component/Menu";
import Title from '../component/Title'
import Cart from '../component/Cart'

function Header(){
    return(
        <>
            <header className="relative">
                <Title/>
                <Menu/>
                <Cart/>
            </header>
        </>
    )
}
export default Header;