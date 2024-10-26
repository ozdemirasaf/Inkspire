export default function Home() {

    return (
        <div className="bg-white p-4 flex justify-center">

            <div className="w-[25rem] bg-[#2D2B30] mb-4 rounded-md">

                <div className="border border-[#2F3336] flex justify-center">
                    <img src="/movies-books-img/besOrdu.jpg" className="w-full p-1   h-[18.75rem]" alt="Hobbit: Beş Ordunun Savaşı" />
                </div>

                <div className="p-4 text-white">
                    <div className="flex items-center justify-center font-sm font-semibold">
                        <h2>Hobbit</h2>
                    </div>
                    <div className="mt-1 text-[#bfbfbf]">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat possimus dolores. Dolorem cum quasi minus sunt!
                        </p>
                    </div>

                    <div className="mt-5 flex gap-4 justify-center items-center">
                        <div className="bg-black h-[3.438rem] w-[3.438rem] rounded-full">
                            <img src="" alt="Profile User" />
                        </div>
                        <span>User1231</span>
                    </div>
                </div>


            </div>


        </div>

    )
}