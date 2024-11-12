import { Link } from "react-router-dom";

export default function Friends() {
    return (
        <div className="h-full flex p-5">
            <Link>
                <div className="bg-[#2d2b30] w-[17.5rem] rounded-2xl p-4 flex flex-col gap-5 shadow-custom transform transition-transform hover:translate-y-[-5px] hover:cursor-pointer">
                    <div className="flex justify-center items-center">
                        <img
                            src="/images/boy.png"
                            className="w-20 h-20 rounded-full border border-[#ffffff27] p-1.5"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-center items-center flex-col gap-3">
                        <h4 className="text-white text-[20px] font-bold leading-5">Asaf</h4>
                        <p className="text-[16px] text-[#ffffffc6] font-semibold">
                            En çok sevdiğim film yüzükler efendisi
                        </p>
                    </div>

                    <div className="flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 mt-4">
                        <Link>
                            <img src="images/friendsAdd.png" className="w-9 h-9" alt="" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
}
