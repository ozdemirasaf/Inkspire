import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Settings() {

    const [isOpen, setItOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div className="flex flex-col gap-3">

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

            <div className="text-white text-[18px] font-bold border-b border-[#2F3336] p-1">
                <h2>Ayarlar</h2>
            </div>
            <div>
                <ul className="flex flex-col gap-4">
                    <NavLink
                        className={({ isActive }) => isActive ? "active-link" : ""}
                        to='profile'
                    >
                        <li className="flex gap-4 items-center p-2  hover:bg-[#ffffff1a] transition-colors rounded-lg ">
                            <img src="images/profile.png" className="w-7 h-7" />
                            <span className="text-white text-[16px] font-medium">Profilim</span>
                        </li>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? "active-link" : ""}
                        to='profile/security'
                    >
                        <li className="flex gap-4 items-center p-2  hover:bg-[#ffffff1a] transition-colors rounded-lg ">
                            <img src="images/security.png" className="w-7 h-7" />
                            <span className="text-white text-[16px] font-medium">Güvenlik</span>
                        </li>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active-link group relative" : "group relative"
                        }
                    >
                        <li className="flex gap-4 items-center p-2 rounded-lg transition-colors overflow-hidden relative">
                            <img src="images/exit.png" className="w-7 h-7" />
                            <span className="text-white text-[16px] font-medium relative z-10">Çıkış</span>

                            <span className="absolute inset-0 bg-[#a11313] transition-all duration-300 opacity-0 group-hover:opacity-90 group-hover:blur-2xl"></span>
                        </li>
                    </NavLink>


                </ul>
            </div>
        </div>
    )
}