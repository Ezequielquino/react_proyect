import { useNavigate } from "react-router-dom";
import { AppRoutesNamed } from "../../../../routes/app_routes_named";
import { useEffect } from "react";
import DashboardRouter from "./Dashboard_router";
import './dashboard.css'
import SidebarDashboard from "./components/Sidebar_dashboard";
import HeaderDashboard from "./components/Header_dashboard";

export default function DashboardRootView() {

    const navigate = useNavigate();

    const onStorageChange = (e: StorageEvent) => {
        console.log(e);
        if (e.key === 'authState' && e.newValue === null) {
            navigate(AppRoutesNamed.AUTH, { replace: true });
        }
    };
    useEffect(() => {
        window.addEventListener('storage', onStorageChange);
        return () => {
            window.removeEventListener('storage', onStorageChange);
        };
    }, []);

    return (
        <div className="main">
            <div className="sidebar ">
                <SidebarDashboard />
            </div>
            <div className="header ">
                <HeaderDashboard />
            </div>
            <div className="content bg-background_secondary">
                <DashboardRouter />
            </div>
        </div>
    )
}