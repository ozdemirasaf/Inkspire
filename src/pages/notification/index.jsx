export default function Notification() {

    return (
        <div className="bg-white h-full px-11 py-4 flex justify-between ">
            <div className="bg-black md:w-[35rem] h-[8.125rem] rounded-2xl flex p-2 items-center gap-4">
                <div className="rounded-2xl bg-[#111827] w-16 h-16 flex justify-center items-center text-white">
                    sea
                </div>

                <div className="text-white flex flex-col gap-0.5">
                    <h3>User123</h3>
                    <p>Bu kullanıcı yeni bir paylaşım yaptı.</p>
                </div>
            </div>

        </div>
    )
}