
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Notifications } from "../../posts";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    };

    const notificationLength = Notifications.length

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
                "fixed inset-y-0 left-0 z-20 w-64 bg-[rgb(48,48,48)] border-none shadow-layouts transition-transform duration-300 transform",
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

                <nav className="flex flex-col justify-between flex-1 p-4 space-y-2 overflow-y-auto mt-4">
                    <ul className="flex flex-col gap-10 w-full">
                        <Link to="/" className="hover:bg-[#ffffff1a] transition-colors p-2 rounded-lg h-12 flex items-center">
                            <li className="flex items-center text-white gap-3 w-full h-full">
                                <img src="images/menuHome.png" alt="Ana Sayfa" className="h-6" />
                                <span>Anasayfa</span>
                            </li>
                        </Link>

                        <Link to="bildirimler" className="hover:bg-[#ffffff1a] relative transition-colors p-2 rounded-lg h-12 flex items-center">
                            <li className="flex items-center text-white gap-3 w-full h-full">

                                <div className="absolute top-0.5 left-2.5 ">
                                    {notificationLength > 0 ? (
                                        <div className="w-5 h-5 rounded-full bg-[#c88720] flex items-center justify-center text-white text-[10px]">
                                            {notificationLength}
                                        </div>
                                    ) : null}

                                </div>

                                <img src="images/menuNotification.png" alt="Bildirimler" className="h-6" />
                                <span>Bildirimler</span>
                            </li>
                        </Link>

                        <Link to="kesfet" className="hover:bg-[#ffffff1a] transition-colors p-2 rounded-lg h-12 flex items-center">
                            <li className="flex items-center text-white gap-3 w-full h-full">
                                <img src="images/search.png" alt="Keşfet" className="h-6" />
                                <span>Keşfet</span>
                            </li>
                        </Link>

                        <Link to="arkadaslar" className="hover:bg-[#ffffff1a] transition-colors p-2 rounded-lg h-12 flex items-center">
                            <li className="flex items-center text-white gap-3 w-full h-full">
                                <img src="images/add-user.png" alt="Arkadaşlar" className="h-6" />
                                <span>Arkadaşlar</span>
                            </li>
                        </Link>

                        <Link to="profile" className="hover:bg-[#ffffff1a] transition-colors p-2 rounded-lg h-12 flex items-center">
                            <li className="flex items-center text-white gap-3 w-full h-full">
                                <img src="images/profile.png" alt="Profil" className="h-6" />
                                <span>Profilim</span>
                            </li>
                        </Link>

                    </ul>

                    <div className="w-full mt-auto md:relative fixed bottom-0 left-0 p-4">
                        <button className="bg-[#c88720] w-full h-12 rounded-3xl text-[#fff] font-semibold">
                            Paylaşım
                        </button>
                    </div>
                </nav>


            </aside>

            {
                isOpen && (
                    <div
                        onClick={toggleSidebar}
                        className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    ></div>
                )
            }
        </div >
    );
}
