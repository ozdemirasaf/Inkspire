import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import RightSidebar from "./right-sidebar";
import { useState, useEffect } from "react";

export default function Main() {
    const location = useLocation();
    const [myLocation, setMyLocation] = useState(false);

    // Sayfa yolu kontrolü (Profile ve Home için)
    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/profile') {
            setMyLocation(true);
        } else {
            setMyLocation(false);
        }
    }, [location.pathname]);

    return (
        <div className="flex h-screen overflow-auto">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <div className="w-full">
                    <Navbar />
                </div>

                <main className="flex-1 p-4 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
                    <Outlet />
                </main>
            </div>

            {myLocation && (
                <RightSidebar contentType={location.pathname} />
            )}
        </div>
    );
}
