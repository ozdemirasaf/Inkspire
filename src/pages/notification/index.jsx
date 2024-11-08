import { Link } from "react-router-dom";
import { Notifications } from "../../posts";
import { useHover } from '@uidotdev/usehooks';
import classNames from 'classnames';

export default function Notification() {



    return (
        <ul className="p-5 flex flex-col gap-5">
            {Notifications.map(notification => {
                const [ref, hovering] = useHover();

                return (
                    <li key={notification.id}>

                        <div className="h-full flex justify-center">
                            <Link ref={ref} className="hover:shadow-custom transition-shadow">
                                <div className="bg-[#2d2b30] md:w-[48.813rem] h-[8.125rem] hover:shadow-layouts transition-shadow rounded-2xl flex p-2 items-center gap-4">
                                    <div className="flex justify-center items-center text-white border border-[#3c3d3e] rounded-2xl p-1.5">
                                        <img src={notification.userAvatar} className="rounded-2xl w-16 h-16" alt="" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[18px] font-bold text-[#ffffffe3] leading-5">{notification.userName}</h3>
                                        <p className="text-[16px] font-medium text-[#e5e7eb] leading-5">{notification.notificationDescription}</p>
                                    </div>


                                    <div
                                        className={classNames(`flex justify-end flex-1 mr-5 transition-opacity duration-300`, {
                                            'opacity-100': hovering, 'opacity-0': !hovering
                                        })}
                                    >
                                        <img src="/images/x.png" className="w-4" alt="close icon" />
                                    </div>

                                </div>
                            </Link>
                        </div>
                    </li >
                )
            })}

        </ul >
    )
}