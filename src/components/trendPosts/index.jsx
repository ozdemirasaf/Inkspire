import { useState } from "react";
import { Box, Modal } from "@mui/material";
import { TrendPosts } from "../../posts";

export default function TrendPost() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <aside className="h-full fixed right-0 top-0 pr-8  flex-col hidden lg:flex">
            <div className="p-4 mt-[10rem] rounded-xl w-[21.75rem] shadow-layouts bg-[#2d2b30]">



                <div className="hidden lg:block">
                    <div className="text-white text-[18px] font-bold border-b border-[#2F3336]">
                        <h2>Trend Postlar</h2>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-2">
                            {TrendPosts.slice(0, 4).map((post) => (

                                <li key={post.id} className="p-3 flex gap-3 border-b border-[#2F3336]">
                                    <div>
                                        <img src={post.userAvatar} className="w-[65px] rounded-full" alt="" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-white text-[16px] font-bold">{post.description}</h4>
                                        <p className="text-[#e5e7eb]">{post.like} <span>Beğeni</span></p>
                                    </div>
                                </li>

                            ))}


                            {TrendPosts.length > 3 && (
                                <div className="w-full p-4">
                                    <button onClick={handleOpen} className="bg-[#c88720] hover:bg-[#ba7f21] w-32 h-8 rounded-3xl text-white text-[16px] font-semibold">Daha Fazla</button>
                                </div>
                            )}



                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >
                                <Box
                                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#303030] shadow-lg rounded-lg p-6 w-full max-w-[900px] mx-auto"
                                >
                                    <div className="flex w-full justify-between items-center">
                                        <div className="p-2 mb-1 border-b-2 rounded-md inline-block text-[18px] text-center w-auto text-[#fff] font-semibold leading-5">
                                            <h4>Trent Postlar</h4>
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

                                    <div className="mt-5 grid grid-cols-3 gap-6 w-full">
                                        {TrendPosts.slice(4, 10).map((trends) => (
                                            <div
                                                key={trends.id}
                                                className="bg-[#2d2b30] p-4 w-full rounded-xl flex flex-col gap-5 hover:bg-[#c4bebe2e] hover:opacity-95 transition-all"
                                            >
                                                <div className="flex items-center justify-center">
                                                    <img
                                                        src={trends.userAvatar}
                                                        className="w-20 h-20 rounded-full border border-[#ffffff27] p-1"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className="text-[18px] font-semibold text-[#e8e7e7] leading-5">
                                                    <h4>{trends.userName}</h4>
                                                </div>

                                                <div className="border-b-2 border-[#ffffff27]" />

                                                <div className="text-[15px] text-[#ffffffc6] font-medium">
                                                    <p>{trends.description}</p>
                                                </div>

                                                <div className="flex gap-1">
                                                    <img src="/images/modalHeart.png" className="w-8 h-8" alt="" />
                                                    <span className="text-[15px] text-[#fff] font-medium">{trends.like}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Box>
                            </Modal>


                        </ul >
                    </div>
                </div>

            </div>
        </aside>
    )
}