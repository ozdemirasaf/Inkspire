import { Link } from "react-router-dom";
import { friendsAdd } from "../../posts";

export default function FriendsAdd() {

    const half = Math.floor(friendsAdd.length / 2);
    const firstHalf = friendsAdd.slice(0, half);
    const secondHalf = friendsAdd.slice(half);

    return (
        <div className="flex flex-wrap items-center justify-center gap-8">

            <div className="h-full flex p-5 flex-col gap-8 w-full sm:w-auto">

                {firstHalf.map(firstItem => (
                    <Link key={firstItem.id}>
                        <div className="bg-[#2d2b30] w-full sm:w-[17.5rem] rounded-2xl p-4 flex flex-col gap-5 shadow-custom transform transition-transform hover:translate-y-[-5px] hover:cursor-pointer">
                            <div className="flex justify-center items-center">
                                <img
                                    src={firstItem.avatar}
                                    className="w-20 h-20 rounded-full border border-[#ffffff27] p-1.5"
                                    alt=""
                                />
                            </div>
                            <div className="flex justify-center items-center flex-col gap-3">
                                <h4 className="text-white text-[20px] font-bold leading-5">{firstItem.userName}</h4>
                                <p className="text-[16px] text-[#ffffffc6] font-semibold">
                                    {firstItem.bio}
                                </p>
                            </div>

                            <div className="flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 mt-4">
                                <Link>
                                    <img src="images/friendsAdd.png" className="w-9 h-9" alt="" />
                                </Link>
                            </div>
                        </div>
                    </Link>
                ))}


            </div>

            <div className="h-full flex p-5 flex-col gap-8 w-full sm:w-auto">

                {
                    secondHalf.map(secondItem => (
                        <Link key={secondItem.id}>
                            <div className="bg-[#2d2b30] w-full sm:w-[17.5rem] rounded-2xl p-4 flex flex-col gap-5 shadow-custom transform transition-transform hover:translate-y-[-5px] hover:cursor-pointer">
                                <div className="flex justify-center items-center">
                                    <img
                                        src={secondItem.avatar}
                                        className="w-20 h-20 rounded-full border border-[#ffffff27] p-1.5"
                                        alt=""
                                    />
                                </div>
                                <div className="flex justify-center items-center flex-col gap-3">
                                    <h4 className="text-white text-[20px] font-bold leading-5">{secondItem.userName}</h4>
                                    <p className="text-[16px] text-[#ffffffc6] font-semibold">
                                        {secondItem.bio}
                                    </p>
                                </div>

                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 mt-4">
                                    <Link>
                                        <img src="images/friendsAdd.png" className="w-9 h-9" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))
                }


            </div>

        </div >
    )
}