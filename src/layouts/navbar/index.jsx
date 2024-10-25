import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#030209] border border-[#2F3336]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">LOGO</span>
                </Link>

                <div className="flex items-center justify-between flex-1 md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="flex justify-center flex-1">
                        <input
                            type="text"
                            className="p-2 bg-[#2D2B30] rounded-3xl outline-none text-[#fff] opacity-50 md:w-[25.313rem] h-[2.5rem] "
                            placeholder="Search..."
                        />
                    </div>

                    <div className="hidden md:flex justify-center items-center space-x-4 gap-3">
                        <div className="h-11 w-11 rounded-full hover:bg-[#ffffff1a] cursor-pointer flex items-center justify-center transition-colors">
                            <img src="/images/moon.png" alt="" />
                        </div>

                        <div className="w-16 h-9 rounded-2xl text-[#fff] cursor-pointer flex items-center justify-center hover:bg-[#ffffff1a] transition-colors font-medium">
                            <Link>Giriş</Link>
                        </div>
                    </div>
                </div>

                <div className="flex md:order-2 md:ml-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 w-16 h-16 justify-center text-sm text-gray-500 rounded-lg md:hidden outline-none hover:bg-[#ffffff1a]"
                        aria-controls="navbar-search"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={classNames("md:hidden bg-[#2D2B30]", { 'block': isOpen, 'hidden': !isOpen })}>
                <div className="flex flex-col p-4 items-center justify-center gap-3">
                    <div className="h-11 w-11 rounded-full hover:bg-[#ffffff1a] cursor-pointer flex items-center justify-center">
                        <img src="/images/moon.png" alt="" />
                    </div>

                    <div className="w-16 h-9 rounded-2xl text-[#fff] cursor-pointer flex items-center justify-center hover:bg-[#ffffff1a] font-medium">
                        <Link to="/login">Giriş</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
