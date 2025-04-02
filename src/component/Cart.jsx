import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { selectCartItems } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import BasketModal from "./BasketModal";

function Cart(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0)?cartItems.reduce((sum, item) => (parseInt(sum) + parseInt(item.qty)), 0): 0;

    return(
        <>
            <nav
                onClick={toggleOpen}
                className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer"
            >
                <div className="indicater flex justify-center">
                    <ShoppingCart size={32} color="white"/>
                    <span className="indicater-item absolute bg-black rounded-xl pr-2 pl-2 mt-[-.6rem] mr-[-2rem]">
                        {count}
                    </span>
                </div>
                <p className="text-xs invisible md:visible">Shopping Basket</p>
            </nav>
            <BasketModal
                isOpen={isOpen}
                toggleModal={toggleOpen}
            />
        </>
    )
}
export default Cart;