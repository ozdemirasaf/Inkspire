import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import RightSidebar from "./right-sidebar";

export default function Main() {

    const location = useLocation();
    const hideRightSidebar = location.pathname === '/';

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1 overflow-auto p-4">
                    <Outlet />
                </main>
            </div>
            {hideRightSidebar && (
                <RightSidebar />
            )}
        </div>
    );
}
