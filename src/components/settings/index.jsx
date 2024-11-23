import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useRightbar } from "../../reducers/hooks";
import { rightbarGetStatus } from "../../reducers/actions";

export default function Settings() {
    const useBar = useRightbar();


    const handleRightbarToggle = () => {
        rightbarGetStatus();
    }

    return (
        <aside
            className={classNames(
                'h-full fixed right-0 top-0 pr-8 flex-col transition-transform duration-300 transform',
                {

                    'lg:translate-x-0': true,
                    'lg:hidden': false,

                    'translate-x-full': !useBar,
                    'translate-x-0': useBar,
                }
            )}
        >
            <div className="p-4 mt-[10rem] rounded-xl w-[21.75rem] shadow-layouts bg-[#2d2b30]">
                <div className="flex flex-col gap-3 md:flex">
                    <div className="text-white flex justify-between text-[18px] font-bold border-b border-[#2F3336] p-1">
                        <h2>Ayarlar</h2>
                        <div className='w-full flex lg:hidden justify-end'>

                            <button
                                type='button'
                                onClick={handleRightbarToggle}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 6l16 0" />
                                    <path d="M4 12l16 0" />
                                    <path d="M4 18l16 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4">
                            <NavLink to='profile'>
                                <li className="flex gap-4 items-center p-2 hover:bg-[#ffffff1a] transition-colors rounded-lg ">
                                    <img src="images/profile.png" className="w-7 h-7" />
                                    <span className="text-white text-[16px] font-medium">Profilim</span>
                                </li>
                            </NavLink>

                            <NavLink to='profile/security'>
                                <li className="flex gap-4 items-center p-2 hover:bg-[#ffffff1a] transition-colors rounded-lg ">
                                    <img src="images/security.png" className="w-7 h-7" />
                                    <span className="text-white text-[16px] font-medium">Güvenlik</span>
                                </li>
                            </NavLink>

                            <NavLink>
                                <li className="flex gap-4 items-center p-2 rounded-lg transition-colors overflow-hidden relative">
                                    <img src="images/exit.png" className="w-7 h-7" />
                                    <span className="text-white text-[16px] font-medium relative z-10">Çıkış</span>

                                    <span className="absolute inset-0 bg-[#a11313] transition-all duration-300 opacity-0 group-hover:opacity-90 group-hover:blur-2xl"></span>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
}
