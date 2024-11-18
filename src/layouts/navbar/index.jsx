export default function Navbar() {
    return (
        <nav className="bg-[#303030] border border-[#2F3336] shadow-layouts transition-shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">

                <div className="flex items-center justify-between flex-1 md:flex md:w-auto md:order-1" id="navbar-search">


                    <div className="lg:hidden">
                        <button
                            className="absolute top-4 left-4 z-10 flex items-center justify-center p-2 rounded-full hover:bg-[#3c3d3e] transition-all"
                        >
                            <img src="/images/hamburgerMenu.png" alt="Menu Icon" className="w-6 h-6" />
                        </button>
                    </div>


                    <div className="flex justify-center flex-1">
                        <input
                            type="text"
                            className="p-2 bg-[#2d2b30] rounded-3xl outline-none border border-[#3c3d3e] focus:border-2 text-[#fff] opacity-50 md:w-[25.313rem] h-[2.5rem]"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
