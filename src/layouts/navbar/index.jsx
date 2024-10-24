import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="bg-[#030209] border-[#2F3336] ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <Link className="text-white">LOGO</Link>

                {/* Mobil menü butonu */}
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Arama ve diğer öğeler */}
                <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
                    <input type="text" className="w-full md:w-[25.313rem] h-[2.5rem] bg-[#2D2B30] rounded-3xl pl-4 text-[#ffff] text-opacity-50 outline-none" placeholder="Arama.." />
                </div>

                <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-10 mt-2 md:mt-0">
                    <div className="w-11 h-11 rounded-full bg-[#2D2B30]"></div>

                    <div className="w-16 h-9 bg-[#2D2B30] rounded-xl flex items-center justify-center cursor-pointer">
                        <p className="text-[#fff] text-opacity-50">Giriş</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
