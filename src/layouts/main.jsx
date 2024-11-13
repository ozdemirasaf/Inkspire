import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import RightSidebar from "./right-sidebar";
import { useState, useEffect } from "react";

export default function Main() {
    const location = useLocation();
    const [myLocation, setMyLocation] = useState(false);

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/profile') {
            setMyLocation(true);
        } else {
            setMyLocation(false);
        }
    }, [location.pathname]);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1 overflow-auto p-4">
                    <Outlet />
                </main>
            </div>

            {myLocation && (
                <RightSidebar contentType={location.pathname} />
            )}
        </div>
    );
}
