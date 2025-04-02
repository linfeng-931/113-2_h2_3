import Navbar from "./Navbar";
import HamMenu from "./HamMenu";
import { useState } from "react";

function Menu(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className="invisible lg:visible justify-around">
                <Navbar/>
            </div> 
            <div className="drawer lg:hidden">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen}/>
                <HamMenu
                    id="drawer-toggle"
                    className="absolute transform -translate-y-44 md:-translate-y-40 md:translate-x-1 drawer-toggle"
                    onClick={()=>setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="drawer-side z-9999">
                    <label htmlFor="drawer-toggle" className="drawer-overlay" onClick=
                    {() => setIsOpen(false)}></label>
                    <div className="menu p-7 w-64 min-h-full bg-black gap-5 text-left">
                        <h2>CATEGORY</h2>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu;