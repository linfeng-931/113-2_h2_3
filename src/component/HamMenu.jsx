function HamMenu({onClick, isOpen, className}){
    return(
        <>
            <span
                onClick={onClick}
                className={`absolute  inline-block z-10 pl-6 w-10 h-10 rounded-full opacity-70 
                    hover:opacity-100 flex items-center justify-center ${className}`}
            >
                <span className="w-8 h-6 flex flex-col justify-between hover:cursor-pointer">
                    <span className={`bg-white h-[3px] transition-all duration-400 w-full origin-center
                        ${isOpen ? "opacity-0" : "translate-y-[6px] rotate-[-4deg]"}`}
                    ></span>
                    <span className={`bg-white h-[3px] transition-all duration-400 w-full origin-center
                        ${isOpen ? "rotate-45 w-7 translate-y-[5px] mt-2" : "translate-y-[3px] rotate-[2deg]"}`}
                    ></span>
                    <span className={`bg-white h-[3px] transition-all duration-400 w-full origin-center
                        ${isOpen ? "rotate-[-45deg] w-7 translate-y-[6px] mb-2" : "rotate-[-2deg]"}`}
                    ></span>
                </span>
            </span>
        </>
    )
}
export default HamMenu;