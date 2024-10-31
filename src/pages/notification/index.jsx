import { Link } from "react-router-dom";

export default function Notification() {

    return (
        <ul className="p-5">
            <li>
                <div className="h-full flex justify-center">
                    <Link>
                        <div className="bg-[#2d2b30] md:w-[48.813rem] h-[8.125rem] hover:shadow-layouts transition-shadow rounded-2xl flex p-2 items-center gap-4">
                            <div className="flex justify-center items-center text-white border border-[#3c3d3e] rounded-2xl p-1.5">
                                <img src="/images/boy.png" className="rounded-2xl w-16 h-16" alt="" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-[18px] font-bold text-[#ffffffe3] leading-5">User123</h3>
                                <p className="text-[16px] font-medium text-[#e5e7eb] leading-5">Bu kullanıcı yeni bir paylaşım yaptı.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </li>



        </ul>
    )
}