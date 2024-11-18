import { Link } from "react-router-dom";
import { Notifications } from "../../posts";
import { useState } from "react";
import { Box, Modal } from "@mui/material";

export default function Sidebar() {
    const notificationLength = Notifications.length;

    const [open, setOpen] = useState(false); // Modal için
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="relative">

            {/* Sidebar açma butonu */}

            {/* <button
                onClick={}
                className="lg:hidden fixed top-4 left-4 z-30  flex items-center justify-center "
            >
                <img src="/images/hamburgerMenu.png" alt="Menu Icon" className="w-6 h-6" />
            </button> */}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-20 w-64 bg-[rgb(48,48,48)] border-none shadow-layouts flex flex-col h-screen overflow-hidden transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0`}
            >
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

                    <div className="w-full mt-auto p-4">

                        <button
                            onClick={handleOpen}
                            className="bg-[#c88720] w-full h-12 rounded-3xl text-[#fff] font-semibold hover:bg-[#ba7f21] transition-all"
                        >
                            Paylaşım
                        </button>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box
                                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#303030] shadow-lg rounded-lg p-6 w-full max-w-[750px] mx-auto"
                            >

                                <div className="flex w-full justify-between items-center">
                                    <div className="p-2 mb-1 border-b-2 rounded-md inline-block text-[18px] text-center w-auto text-[#fff] font-semibold leading-5">
                                        <h4>Post Paylaş</h4>
                                    </div>

                                    <div>
                                        <img
                                            src="/images/modalClose.png"
                                            className="w-5 h-5 cursor-pointer"
                                            alt="Close Modal"
                                            onClick={handleClose}
                                        />
                                    </div>
                                </div>

                                {/* İçerik */}
                                <div className="mt-5 flex flex-col gap-6 w-full">
                                    {/* Başlık */}
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full h-[50px] border border-[#ffffff27] shadow-custom p-2 rounded-lg outline-none bg-[#2d2b30] text-[#d0cccc] text-[15px] font-medium focus:border-b-2 transition-all"
                                            placeholder="Başlık"
                                        />
                                    </div>

                                    {/* Açıklama */}
                                    <div>
                                        <textarea
                                            maxLength="260"
                                            className="w-full h-[100px] border border-[#ffffff27] resize-none shadow-custom p-2 rounded-lg outline-none bg-[#2d2b30] text-[#d0cccc] text-[15px] font-medium focus:border-b-2 transition-all"
                                            placeholder="Açıklama"
                                        ></textarea>
                                    </div>

                                    {/* Kategori */}
                                    <div>
                                        <select
                                            className="w-full h-[50px] border border-[#ffffff27] shadow-custom p-2 rounded-lg outline-none bg-[#2d2b30] text-[#d0cccc] text-[15px] font-medium focus:border-b-2 transition-all"
                                        >
                                            <option value="" disabled selected>
                                                Kategori Seç
                                            </option>
                                            <option>Bilim Kurgu</option>
                                            <option>Aksiyon</option>
                                            <option>Komedi</option>
                                        </select>
                                    </div>

                                    {/* Dosya Yükleme */}
                                    <div>
                                        <label htmlFor="fileInput">
                                            <img
                                                src="/images/dowlandImg.png"
                                                className="w-11 h-11 cursor-pointer"
                                                alt="Resim Yükle"
                                            />
                                        </label>

                                        <input
                                            type="file"
                                            id="fileInput"
                                            className="hidden"
                                            onChange={(e) => console.log(e.target.files[0])}
                                        />
                                    </div>

                                    <div className="border-b-2 border-[#ffffff27] rounded-sm" />

                                    {/* Paylaşım Butonu */}
                                    <div className="w-full text-center">
                                        <button className="bg-[#c88720] hover:bg-[#ba7f21] transition-all w-full sm:w-[200px] h-12 rounded-3xl text-[#fff] font-semibold">
                                            Paylaş
                                        </button>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </div>

                </nav>
            </aside>
        </div>
    );
}
