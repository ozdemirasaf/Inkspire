export default function RightSidebar() {
    return (
        <aside className="h-full shadow-md fixed right-0 top-0 pr-3 flex flex-col ">



            <div className="p-4 mt-[5.438rem]">
                <div className="w-[21.25rem]  bg-[#2d2b30] rounded-2xl p-3">
                    <div className="border-b border-[#ffffff27] p-1">
                        <h2 className="text-white text-[20px] font-bold">Arkadaş Ekle</h2>
                    </div>
                    <ul className="mt-3">

                        <li className="m-1 hover:bg-[#252327] rounded-md">
                        
                            <div className="p-2 flex justify-between">
                        
                                <div className="text-white flex gap-3">
                                    <img src="/images/boy.png" className="w-16 h-16 border border-[#ffffff27] p-1.5 rounded-full" alt="" />
                                    <div className="flex items-center">
                                        <h3>User123</h3>
                                    </div>
                        
                                </div>
                        
                                <div className="flex items-center">
                                    <button className="bg-[#f3c432] hover:bg-[#ddb230] transition-colors text-[#ffffff] w-24 rounded-2xl">Ekle</button>
                                </div>
                        
                            </div>
                        
                        </li>
                        
                        <div className="border border-[#ffffff27]" />







                    </ul>
                </div>
            </div>

        </aside>
    );
}
