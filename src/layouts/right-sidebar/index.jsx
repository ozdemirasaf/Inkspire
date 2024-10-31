import { TrendPosts } from "../../posts";


export default function RightSidebar() {
    return (
        <aside className="h-full fixed right-0 top-0 pr-8  flex-col hidden lg:flex">
            <div className="p-4 mt-[10rem] rounded-xl w-[21.75rem] shadow-layouts bg-[#2d2b30]">
                <div className="text-white text-[18px] font-bold border-b border-[#2F3336]">
                    <h2>Trend Postlar</h2>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        {TrendPosts.map((post) => (

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
                                <button className="bg-[#f3c432] w-32 h-8 rounded-3xl text-white text-[16px] font-semibold">Daha Fazla</button>
                            </div>
                        )}


                    </ul >
                </div>
            </div>
        </aside>
    );
}
