import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="relative">

            <button
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-30 text-white flex mt-3 bg-[#030209] rounded-full p-2"
            >
                <img
                    src="images/arrowLeft.png"
                    alt="Menü"
                    className={classNames("h-6 w-6 transition-transform duration-300", {
                        "rotate-180": isOpen
                    })}
                />
            </button>

            <aside className={classNames(
                "fixed inset-y-0 left-0 z-20 w-64 bg-[#303030] border-none shadow-layouts transition-transform duration-300 transform",
                {
                    "translate-x-0": isOpen,
                    "-translate-x-full": !isOpen
                },
                "md:translate-x-0 md:relative md:flex flex-col h-screen overflow-hidden"
            )}>
                <div className="m-5 flex items-center justify-center">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">LOGO</span>
                    </Link>
                </div>

                <nav className="flex flex-col justify-between flex-1 p-4 space-y-2 overflow-y-auto">
                    <ul className="flex flex-col items-center gap-4">
                        <li className="hover:bg-[#ffffff1a] transition-colors p-2 rounded-lg w-full">
                            <Link to="/" className="flex items-center text-white gap-3 w-full">
                                <img src="images/menuHome.png" alt="Ana Sayfa" />
                                <span>Anasayfa</span>
                            </Link>
                        </li>
                        <li className="hover:bg-[#ffffff1a] transition-colors p-2 rounded-lg w-full">
                            <Link to="bildirimler" className="flex items-center text-white gap-3 w-full">
                                <img src="images/menuNotification.png" className="h-8" alt="Bildirimler" />
                                <span>Bildirimler</span>
                            </Link>
                        </li>
                        <li className="hover:bg-[#ffffff1a] transition-colors p-2 rounded-lg w-full">
                            <Link to="kesfet" className="flex items-center text-white gap-3 w-full">
                                <img src="images/search.png" className="h-8" alt="Keşfet" />
                                <span>Keşfet</span>
                            </Link>
                        </li>
                        <li className="hover:bg-[#ffffff1a] transition-colors p-2 rounded-lg w-full">
                            <Link to="arkadaslar" className="flex items-center text-white gap-3 w-full">
                                <img src="images/add-user.png" className="h-8" alt="Arkadaşlar" />
                                <span>Arkadaşlar</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="w-full mt-auto md:relative fixed bottom-0 left-0 p-4">
                        <button className="bg-[#F3C432] w-full h-12 rounded-3xl text-[#fff] font-semibold">
                            Paylaşım
                        </button>
                    </div>

                </nav>
            </aside>

            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                ></div>
            )}
        </div>
    );
}
