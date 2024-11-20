import { useState, useEffect, useRef } from "react";
import { sidebarGetStatus } from "../../reducers/actions";
import { useSetSidebar } from "../../reducers/hooks";

export default function Navbar() {
    const [altMenu, setAltMenu] = useState(false);
    const inputRef = useRef(null);


    const handleSidebarToggle = () => {
        sidebarGetStatus();
    };

    const handleAltMenu = () => {
        setAltMenu((prevState) => !prevState);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setAltMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // Enter Click 

    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         setAltMenu(false); 
    //     }
    // };

    console.log("altMenu : ", altMenu);

    return (
        <nav className="bg-[#303030] border border-[#2F3336] shadow-layouts transition-shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">

                <div className="flex items-center justify-between flex-1 md:flex md:w-auto md:order-1" id="navbar-search">

                    <div className="lg:hidden">
                        <button
                            onClick={handleSidebarToggle}
                            className="absolute top-4 left-4 z-10 flex items-center justify-center p-2 rounded-full hover:bg-[#3c3d3e] transition-all"
                        >
                            <img src="/images/hamburgerMenu.png" alt="Menu Icon" className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col justify-center flex-1">
                        <div className="flex justify-center flex-1 ">
                            <input
                                ref={inputRef}
                                onClick={handleAltMenu}
                                type="text"
                                className="p-2 bg-[#2d2b30] rounded-3xl outline-none border border-[#3c3d3e] focus:border-2 text-[#bfbfbf] md:w-[25.313rem] h-[2.5rem]"
                                placeholder="Arayın..."
                            />
                        </div>


                        {altMenu && (
                            <div className="flex justify-center mt-1">
                                <div className="bg-[#2d2b30] rounded-lg p-2 md:w-[25.313rem] md:h-16 border-2 border-[#3c3d3e] text-[15px] text-[#bfbfbf] font-semibold ">
                                    Aradığınız Şeyi Yazınız.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
